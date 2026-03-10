import { calcularEstadisticasSemana } from './clima.estadisticas.js';
import { obtenerLugar } from './lugares.service.js';

const ICONOS_ESTADO = {
  Despejado: '☀️',
  Nublado: '☁️',
  Lluvioso: '🌧️',
  Ventoso: '💨'
};

export function inicializarDetalle() {
  const detalleContainer = document.getElementById('detalleContainer');

  if (!detalleContainer) {
    return;
  }

  const idDesdeUrl = obtenerIdDesdeUrl();
  const lugar = obtenerLugar(idDesdeUrl || 1);

  if (!lugar) {
    window.location.href = 'index.html';
    return;
  }

  renderizarCabecera(lugar);
  renderizarDetalleActual(lugar);
  renderizarPronosticoYEstadisticas(lugar);
  prepararBotonVolver();
}

function obtenerIdDesdeUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));

  if (Number.isNaN(id)) {
    return null;
  }

  return id;
}

function renderizarCabecera(lugar) {
  document.title = `${lugar.nombre} - ClimaMundo Chile`;

  const detalleHeader = document.getElementById('detalleHeader');
  detalleHeader.innerHTML = `
    <div class="text-center mb-4">
      <p class="detail-header__eyebrow">Clima actual</p>
      <h1 class="detail-header__title">${lugar.nombre}</h1>
      <p class="detail-header__subtitle">Chile</p>
    </div>
  `;
}

function renderizarDetalleActual(lugar) {
  const detalleActual = document.getElementById('detalleActual');

  detalleActual.innerHTML = `
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card detail-card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="detail-card__title">Clima actual</h2>
              <span class="detail-card__chip">Actualizado</span>
            </div>
            <div class="text-center my-4">
              <p class="detail-card__icon">${lugar.icono}</p>
              <p class="detail-card__temp">${lugar.tempActual}°C</p>
              <p class="detail-card__state">${lugar.estadoActual}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card detail-card">
          <div class="card-body">
            <h2 class="detail-card__title">Detalles</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between">
                <strong>Temperatura</strong>
                <span>${lugar.tempActual}°C</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Humedad</strong>
                <span>${lugar.humedad}%</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Viento</strong>
                <span>${lugar.viento} km/h</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Coordenadas</strong>
                <span class="small">${lugar.coordenadas}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderizarPronosticoYEstadisticas(lugar) {
  const pronosticoContainer = document.getElementById('pronosticoContainer');
  const estadisticas = calcularEstadisticasSemana(lugar.pronosticoSemanal);

  pronosticoContainer.innerHTML = `
    <h3 class="forecast__title mb-4">Pronostico de la semana</h3>
    <div class="row" id="pronosticoRow"></div>

    <section class="mt-4">
      <h3 class="forecast__title mb-3">Estadisticas de la semana</h3>
      <div class="card detail-card">
        <div class="card-body">
          <div class="row g-3 mb-3">
            <div class="col-md-4">
              <div class="p-3 border rounded text-center">
                <p class="mb-1"><strong>Minima semanal</strong></p>
                <p class="mb-0">${estadisticas.minSemana}°C</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3 border rounded text-center">
                <p class="mb-1"><strong>Maxima semanal</strong></p>
                <p class="mb-0">${estadisticas.maxSemana}°C</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3 border rounded text-center">
                <p class="mb-1"><strong>Promedio semanal</strong></p>
                <p class="mb-0">${estadisticas.promedioSemana}°C</p>
              </div>
            </div>
          </div>

          <h4 class="h6">Cantidad de dias por tipo de clima</h4>
          <ul class="list-group list-group-flush mb-3" id="conteoEstados"></ul>

          <div class="alert alert-secondary mb-0" role="status">
            ${estadisticas.resumen}
          </div>
        </div>
      </div>
    </section>
  `;

  const pronosticoRow = document.getElementById('pronosticoRow');
  for (let i = 0; i < lugar.pronosticoSemanal.length; i += 1) {
    const dia = lugar.pronosticoSemanal[i];
    const cardDia = document.createElement('div');

    cardDia.className = 'col-6 col-md-4 col-lg-3 mb-3';
    cardDia.innerHTML = `
      <div class="card forecast-card text-center h-100">
        <div class="card-body">
          <h6 class="forecast-card__day">${dia.dia}</h6>
          <p class="forecast-card__icon">${ICONOS_ESTADO[dia.estado] || '🌤️'}</p>
          <p class="forecast-card__temp mb-1">Min: ${dia.min}°C</p>
          <p class="forecast-card__temp mb-1">Max: ${dia.max}°C</p>
          <p class="forecast-card__state">${dia.estado}</p>
        </div>
      </div>
    `;

    pronosticoRow.appendChild(cardDia);
  }

  const conteoEstados = document.getElementById('conteoEstados');
  const estados = Object.keys(estadisticas.conteoPorEstado);

  for (let i = 0; i < estados.length; i += 1) {
    const estado = estados[i];
    const cantidad = estadisticas.conteoPorEstado[estado];
    const item = document.createElement('li');

    item.className = 'list-group-item d-flex justify-content-between';
    item.innerHTML = `
      <span>${estado}</span>
      <strong>${cantidad} dia(s)</strong>
    `;

    conteoEstados.appendChild(item);
  }
}

function prepararBotonVolver() {
  const boton = document.getElementById('botonVolverInicio');

  if (!boton) {
    return;
  }

  boton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
