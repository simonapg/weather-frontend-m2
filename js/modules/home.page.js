export async function inicializarHome(weatherApp) {
  const container = document.getElementById('ciudadesContainer');

  if (!container) {
    return;
  }

  mostrarCargando(container, 'Cargando lugares...');

  let lugares = [];

  try {
    if (!weatherApp) {
      throw new Error('WeatherApp no disponible');
    }

    lugares = await weatherApp.cargarLugares();
  } catch (error) {
    mostrarError(container, 'No se pudieron cargar los datos del clima. Intenta nuevamente.');
    actualizarHeroSinDatos();
    return;
  }

  actualizarHeroDestacado(lugares[0]);

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
          <div class="location-card__date-block text-center">
            <p class="location-card__date-label">Hoy</p>
            <p class="location-card__date">${lugar.pronosticoSemanal?.[0]?.fechaEtiqueta || ''}</p>
          </div>
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

  if (container.dataset.listenerRegistrado === 'true') {
    return;
  }

  container.addEventListener('click', (event) => {
    const elementoConId = event.target.closest('[data-lugar-id]');

    if (!elementoConId) {
      return;
    }

    const id = Number(elementoConId.getAttribute('data-lugar-id'));
    irADetalle(id);
  });

  container.dataset.listenerRegistrado = 'true';
}

function irADetalle(id) {
  window.location.href = `detalle.html?id=${id}`;
}

function mostrarCargando(container, mensaje = 'Cargando...') {
  container.innerHTML = `
    <div class="col-12">
      <div class="alert alert-info mb-0" role="status">${mensaje}</div>
    </div>
  `;
}

function mostrarError(container, mensaje = 'Error al cargar los datos') {
  container.innerHTML = `
    <div class="col-12">
      <div class="alert alert-danger mb-0" role="alert">${mensaje}</div>
    </div>
  `;
}

function actualizarHeroDestacado(lugar) {
  if (!lugar) {
    return;
  }

  const ubicacion = document.getElementById('heroDestacadoUbicacion');
  const temperatura = document.getElementById('heroDestacadoTemp');
  const estado = document.getElementById('heroDestacadoEstado');
  const humedad = document.getElementById('heroDestacadoHumedad');
  const viento = document.getElementById('heroDestacadoViento');
  const fecha = document.getElementById('heroDestacadoFecha');

  if (!ubicacion || !temperatura || !estado || !humedad || !viento || !fecha) {
    return;
  }

  ubicacion.textContent = `${lugar.nombre}, CL`;
  fecha.textContent = lugar.pronosticoSemanal?.[0]?.fechaEtiqueta || 'Fecha no disponible';
  temperatura.textContent = `${lugar.tempActual}°C`;
  estado.textContent = lugar.estadoActual;
  humedad.textContent = `Humedad ${lugar.humedad}%`;
  viento.textContent = `Viento ${lugar.viento} km/h`;
}

function actualizarHeroSinDatos() {
  const ubicacion = document.getElementById('heroDestacadoUbicacion');
  const temperatura = document.getElementById('heroDestacadoTemp');
  const estado = document.getElementById('heroDestacadoEstado');
  const humedad = document.getElementById('heroDestacadoHumedad');
  const viento = document.getElementById('heroDestacadoViento');
  const fecha = document.getElementById('heroDestacadoFecha');

  if (!ubicacion || !temperatura || !estado || !humedad || !viento || !fecha) {
    return;
  }

  ubicacion.textContent = 'Sin datos';
  fecha.textContent = 'Fecha no disponible';
  temperatura.textContent = '--';
  estado.textContent = 'No disponible';
  humedad.textContent = 'Humedad --';
  viento.textContent = 'Viento --';
}
