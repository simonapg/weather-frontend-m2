// Script principal de la aplicación de clima
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar la página de inicio si existe
  if (document.getElementById('ciudadesContainer')) {
    cargarCiudades();
  }
  
  // Inicializar la página de detalle si existe
  if (document.getElementById('detalleContainer')) {
    cargarDetalle();
  }
});

// Función para cargar y mostrar ciudades en la página de inicio
function cargarCiudades() {
  const container = document.getElementById('ciudadesContainer');
  container.innerHTML = '';
  
  ciudades.forEach(ciudad => {
    const card = document.createElement('div');
    card.className = 'col-12 col-md-6 col-lg-4';
    card.innerHTML = `
      <article class="card location-card h-100 shadow-sm" onclick="verDetalle(${ciudad.id})">
        <div class="card-body d-flex flex-column">
          <div class="location-card__icon text-center mb-3">${ciudad.icono}</div>
          <h3 class="location-card__name text-center">${ciudad.nombre}</h3>
          <p class="location-card__country text-center">${ciudad.pais}</p>
          <p class="location-card__temp text-center mb-1">${ciudad.temperatura}°C</p>
          <p class="location-card__state text-center">${ciudad.estado}</p>
          <div class="mt-auto">
            <button class="btn btn-outline-primary btn-sm w-100" onclick="event.stopPropagation(); verDetalle(${ciudad.id})">
              Ver detalle
            </button>
          </div>
        </div>
      </article>
    `;
    container.appendChild(card);
  });
}

// Función para navegar a la página de detalle
function verDetalle(id) {
  localStorage.setItem('ciudadSeleccionada', id);
  window.location.href = 'detalle.html';
}

// Función para cargar y mostrar detalles en la página de detalle
function cargarDetalle() {
  const ciudadId = parseInt(localStorage.getItem('ciudadSeleccionada')) || 1;
  const ciudad = ciudades.find(c => c.id === ciudadId);
  
  if (!ciudad) {
    window.location.href = 'index.html';
    return;
  }
  
  // Actualizar título y encabezado
  document.title = `${ciudad.nombre} - Clima`;
  const detalleHeader = document.getElementById('detalleHeader');
  detalleHeader.innerHTML = `
    <div class="text-center mb-4">
      <p class="detail-header__eyebrow">Clima actual</p>
      <h1 class="detail-header__title">${ciudad.nombre}</h1>
      <p class="detail-header__subtitle">${ciudad.pais}</p>
    </div>
  `;
  
  // Mostrar información actual
  const detalleActual = document.getElementById('detalleActual');
  detalleActual.innerHTML = `
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card detail-card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="detail-card__title">Clima actual</h2>
              <span class="detail-card__chip">En vivo</span>
            </div>
            <div class="text-center my-4">
              <p class="detail-card__icon">${ciudad.icono}</p>
              <p class="detail-card__temp">${ciudad.temperatura}°C</p>
              <p class="detail-card__state">${ciudad.estado}</p>
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
                <span>${ciudad.temperatura}°C</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Humedad</strong>
                <span>${ciudad.humedad}%</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Viento</strong>
                <span>${ciudad.viento} km/h</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Coordenadas</strong>
                <span class="small">${ciudad.coordenadas}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Mostrar pronóstico semanal
  const pronósticoContainer = document.getElementById('pronósticoContainer');
  pronósticoContainer.innerHTML = '<h3 class="forecast__title mb-4">Pronóstico de la semana</h3>';
  
  const pronósticoRow = document.createElement('div');
  pronósticoRow.className = 'row';
  
  ciudad.pronóstico.forEach((dia, index) => {
    const diaCard = document.createElement('div');
    diaCard.className = 'col-6 col-md-4 col-lg-2 mb-3';
    diaCard.innerHTML = `
      <div class="card forecast-card text-center h-100">
        <div class="card-body">
          <h6 class="forecast-card__day">${dia.dia}</h6>
          <p class="forecast-card__icon">${dia.icono}</p>
          <p class="forecast-card__temp">${dia.temp}°C</p>
          <p class="forecast-card__state">${dia.estado}</p>
        </div>
      </div>
    `;
    pronósticoRow.appendChild(diaCard);
  });
  
  pronósticoContainer.appendChild(pronósticoRow);
}

// Función para volver a inicio
function volverAInicio() {
  localStorage.removeItem('ciudadSeleccionada');
  window.location.href = 'index.html';
}
