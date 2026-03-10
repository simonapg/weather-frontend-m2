import { obtenerTodosLosLugares } from './lugares.service.js';

export function inicializarHome() {
  const container = document.getElementById('ciudadesContainer');

  if (!container) {
    return;
  }

  const lugares = obtenerTodosLosLugares();
  container.innerHTML = '';

  for (let i = 0; i < lugares.length; i += 1) {
    const lugar = lugares[i];
    const card = document.createElement('div');

    card.className = 'col-12 col-md-6 col-lg-4';
    card.innerHTML = `
      <article class="card location-card h-100 shadow-sm" data-lugar-id="${lugar.id}">
        <div class="card-body d-flex flex-column">
          <div class="location-card__icon text-center mb-3">${lugar.icono}</div>
          <h3 class="location-card__name text-center">${lugar.nombre}</h3>
          <p class="location-card__country text-center">Chile</p>
          <p class="location-card__temp text-center mb-1">${lugar.tempActual}°C</p>
          <p class="location-card__state text-center">${lugar.estadoActual}</p>
          <div class="mt-auto">
            <button class="btn btn-outline-primary btn-sm w-100" data-lugar-id="${lugar.id}">
              Ver detalle
            </button>
          </div>
        </div>
      </article>
    `;

    container.appendChild(card);
  }

  container.addEventListener('click', (event) => {
    const elementoConId = event.target.closest('[data-lugar-id]');

    if (!elementoConId) {
      return;
    }

    const id = Number(elementoConId.getAttribute('data-lugar-id'));
    irADetalle(id);
  });
}

function irADetalle(id) {
  window.location.href = `detalle.html?id=${id}`;
}
