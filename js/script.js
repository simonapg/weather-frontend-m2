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
    card.className = 'col-md-6 col-lg-4 mb-4';
    card.innerHTML = `
      <article class="card ciudad-card h-100 shadow-sm cursor-pointer" onclick="verDetalle(${ciudad.id})">
        <div class="card-body d-flex flex-column">
          <div class="text-center mb-3">
            <span class="clima-icono display-3">${ciudad.icono}</span>
          </div>
          <h5 class="card-title text-center">${ciudad.nombre}</h5>
          <p class="card-text text-muted text-center small mb-3">${ciudad.pais}</p>
          <div class="temperatura-container text-center mb-2">
            <p class="temperatura display-4 m-0 text-primary">${ciudad.temperatura}°C</p>
          </div>
          <p class="card-text text-center text-secondary">${ciudad.estado}</p>
          <div class="mt-auto">
            <button class="btn btn-outline-primary btn-sm w-100" onclick="event.stopPropagation(); verDetalle(${ciudad.id})">
              Ver Detalle
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
      <h1>${ciudad.nombre}</h1>
      <p class="lead text-muted">${ciudad.pais}</p>
    </div>
  `;
  
  // Mostrar información actual
  const detalleActual = document.getElementById('detalleActual');
  detalleActual.innerHTML = `
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Clima Actual</h5>
            <div class="text-center my-4">
              <p class="display-1">${ciudad.icono}</p>
              <p class="display-5">${ciudad.temperatura}°C</p>
              <p class="lead">${ciudad.estado}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Detalles</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between">
                <strong>Temperatura:</strong>
                <span>${ciudad.temperatura}°C</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Humedad:</strong>
                <span>${ciudad.humedad}%</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Velocidad del Viento:</strong>
                <span>${ciudad.viento} km/h</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <strong>Coordenadas:</strong>
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
  pronósticoContainer.innerHTML = '<h3 class="mb-4">Pronóstico de la Semana</h3>';
  
  const pronósticoRow = document.createElement('div');
  pronósticoRow.className = 'row';
  
  ciudad.pronóstico.forEach((dia, index) => {
    const diaCard = document.createElement('div');
    diaCard.className = 'col-6 col-md-4 col-lg-2 mb-3';
    diaCard.innerHTML = `
      <div class="card text-center h-100">
        <div class="card-body">
          <h6 class="card-title">${dia.dia}</h6>
          <p class="display-5 my-2">${dia.icono}</p>
          <p class="card-text">${dia.temp}°C</p>
          <small class="text-muted">${dia.estado}</small>
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
