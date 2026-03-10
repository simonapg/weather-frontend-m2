import { obtenerTodosLosLugares, obtenerLugar } from './lugares.service.js';
import { calcularEstadisticasSemana } from './clima.estadisticas.js';
import {
  formatearCoordenadas,
  mapearCodigoWmoAEstado,
  obtenerIconoPorEstado,
  formatearDiaDesdeFecha,
  formatearEtiquetaFecha,
  formatearFechaLarga,
  redondear
} from './weather.utils.js';

export class WeatherApp {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.lugares = [];
    this.ultimaActualizacionMs = 0;
    this.cacheMs = 10 * 60 * 1000;
  }

  async cargarLugares() {
    if (this.tieneCacheVigente()) {
      return this.lugares;
    }

    const lugaresBase = obtenerTodosLosLugares();
    const entradas = [];

    for (let i = 0; i < lugaresBase.length; i += 1) {
      const lugar = lugaresBase[i];
      if (typeof lugar.latitud !== 'number' || typeof lugar.longitud !== 'number') {
        continue;
      }

      entradas.push(lugar);
    }

    if (entradas.length === 0) {
      throw new Error('No hay ubicaciones configuradas para consultar Open-Meteo.');
    }

    const respuestas = await this.apiClient.obtenerClimaMultiplesUbicaciones(
      entradas,
      7
    );

    if (!Array.isArray(respuestas) || respuestas.length !== entradas.length) {
      throw new Error('La respuesta de Open-Meteo no coincide con las ubicaciones solicitadas.');
    }

    const lugaresConDatosApi = [];

    for (let i = 0; i < entradas.length; i += 1) {
      const lugarBase = entradas[i];
      const respuestaApi = respuestas[i];

      const lugarMapeado = this.mapearLugarConApi(lugarBase, respuestaApi);
      lugaresConDatosApi.push(lugarMapeado);
    }

    if (lugaresConDatosApi.length === 0) {
      throw new Error('No se pudo obtener clima desde Open-Meteo para los lugares configurados.');
    }

    this.lugares = lugaresConDatosApi;
    this.ultimaActualizacionMs = Date.now();
    return lugaresConDatosApi;
  }

  async cargarDetalleLugar(id) {
    const idNumerico = Number(id);

    if (Number.isNaN(idNumerico)) {
      return null;
    }

    if (this.lugares.length === 0 || !this.tieneCacheVigente()) {
      await this.cargarLugares();
    }

    const lugarEnMemoria = this.lugares.find((lugar) => lugar.id === idNumerico);
    const lugarBase = lugarEnMemoria || obtenerLugar(idNumerico);

    if (!lugarBase) {
      return null;
    }

    return lugarBase;
  }

  calcularEstadisticas(pronosticoSemanal) {
    return calcularEstadisticasSemana(pronosticoSemanal);
  }

  generarAlertas(estadisticas, pronosticoSemanal, opciones = {}) {
    const { umbralCalor = 26, minimoDiasLluvia = 3 } = opciones;
    const alertas = [];

    const diasLluviosos = pronosticoSemanal.filter(
      (dia) => dia.estado === 'Lluvioso' || dia.estado === 'Tormenta'
    ).length;

    if (estadisticas.promedioSemana !== null && estadisticas.promedioSemana > umbralCalor) {
      alertas.push(`Alerta de calor: promedio semanal sobre ${umbralCalor}°C.`);
    }

    if (diasLluviosos >= minimoDiasLluvia) {
      alertas.push(`Semana lluviosa: ${diasLluviosos} dia(s) con lluvia.`);
    }

    if ((estadisticas.minSemana ?? 100) <= 2) {
      alertas.push('Alerta de bajas temperaturas: posibles heladas en la semana.');
    }

    if (alertas.length === 0) {
      alertas.push('Sin alertas climaticas relevantes para esta semana.');
    }

    return alertas;
  }

  mapearLugarConApi(lugarBase, respuestaApi) {
    const current = respuestaApi.current || {};
    const daily = respuestaApi.daily || {};

    if (
      current.temperature_2m === undefined ||
      current.relative_humidity_2m === undefined ||
      current.wind_speed_10m === undefined ||
      current.weather_code === undefined
    ) {
      throw new Error(`Datos actuales incompletos para ${lugarBase.nombre}`);
    }

    const pronosticoSemanal = this.mapearPronosticoSemanal(daily);
    if (pronosticoSemanal.length === 0) {
      throw new Error(`Pronostico semanal vacio para ${lugarBase.nombre}`);
    }

    const estadoActual = mapearCodigoWmoAEstado(current.weather_code);

    return {
      ...lugarBase,
      coordenadas: formatearCoordenadas(lugarBase.latitud, lugarBase.longitud),
      tempActual: redondear(current.temperature_2m, 1),
      estadoActual,
      humedad: current.relative_humidity_2m,
      viento: redondear(current.wind_speed_10m, 1),
      icono: obtenerIconoPorEstado(estadoActual),
      pronosticoSemanal,
      origenDatos: 'api'
    };
  }

  mapearPronosticoSemanal(daily) {
    const fechas = daily.time || [];
    const minimas = daily.temperature_2m_min || [];
    const maximas = daily.temperature_2m_max || [];
    const codigos = daily.weather_code || [];

    const totalDias = Math.min(fechas.length, minimas.length, maximas.length, codigos.length);
    const pronostico = [];

    for (let i = 0; i < totalDias; i += 1) {
      const estado = mapearCodigoWmoAEstado(codigos[i]);
      const fechaLarga = formatearFechaLarga(fechas[i]);

      pronostico.push({
        dia: formatearDiaDesdeFecha(fechas[i]),
        fechaIso: fechas[i],
        fechaLarga,
        fechaEtiqueta: formatearEtiquetaFecha(fechas[i]),
        min: redondear(minimas[i], 1),
        max: redondear(maximas[i], 1),
        estado
      });
    }

    return pronostico;
  }

  tieneCacheVigente() {
    if (this.lugares.length === 0) {
      return false;
    }

    return Date.now() - this.ultimaActualizacionMs < this.cacheMs;
  }
}
