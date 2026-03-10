const OPEN_METEO_URL = 'https://api.open-meteo.com/v1/forecast';
const RETRYABLE_STATUS = new Set([429, 503]);

export class OpenMeteoApiClient {
  constructor(baseUrl = OPEN_METEO_URL) {
    this.baseUrl = baseUrl;
  }

  async obtenerClimaMultiplesUbicaciones(ubicaciones, dias = 7) {
    if (!Array.isArray(ubicaciones) || ubicaciones.length === 0) {
      return [];
    }

    const params = this.crearParametrosBase(dias);
    params.set('latitude', ubicaciones.map((item) => item.latitud).join(','));
    params.set('longitude', ubicaciones.map((item) => item.longitud).join(','));

    const data = await this.ejecutarConsulta(params);

    if (Array.isArray(data)) {
      return data;
    }

    return [data];
  }

  crearParametrosBase(dias = 7) {
    const params = new URLSearchParams({
      current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min',
      forecast_days: dias,
      timezone: 'auto'
    });

    return params;
  }

  async ejecutarConsulta(params) {
    const url = `${this.baseUrl}?${params.toString()}`;
    const respuesta = await this.fetchConReintento(url);

    if (!respuesta.ok) {
      throw new Error(`Open-Meteo respondio con estado ${respuesta.status}`);
    }

    const data = await respuesta.json();

    if (data.error) {
      throw new Error(data.reason || 'Error desconocido al consultar Open-Meteo');
    }

    return data;
  }

  async fetchConReintento(url, intento = 0) {
    const respuesta = await fetch(url);

    if (!RETRYABLE_STATUS.has(respuesta.status) || intento >= 2) {
      return respuesta;
    }

    const esperaMs = this.calcularEspera(respuesta, intento);
    await this.esperar(esperaMs);
    return this.fetchConReintento(url, intento + 1);
  }

  calcularEspera(respuesta, intento = 0) {
    const retryAfter = respuesta.headers.get('Retry-After');

    if (retryAfter) {
      const segundos = Number(retryAfter);
      if (!Number.isNaN(segundos)) {
        return Math.max(1000, segundos * 1000);
      }
    }

    return 1000 * (intento + 1);
  }

  async esperar(ms = 1000) {
    await new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
