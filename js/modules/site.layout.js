const MARCA_SITIO = 'ClimaMundo Chile';

export function renderizarLayoutBase(paginaActual = 'home') {
  const header = document.getElementById('siteHeader');
  const footer = document.getElementById('siteFooter');

  if (header) {
    header.innerHTML = crearHeaderHtml(paginaActual);
  }

  if (footer) {
    footer.innerHTML = crearFooterHtml(paginaActual);
  }
}

function crearHeaderHtml(paginaActual) {
  const esHome = paginaActual === 'home';
  const enlaceCiudades = esHome ? '#ciudades' : 'index.html#ciudades';

  return `
    <nav class="navbar navbar-expand-lg navbar-light weather-navbar">
      <div class="container">
        <a class="navbar-brand weather-navbar__brand" href="index.html">
          <span class="weather-navbar__logo">CL</span>
          <span class="fw-bold">${MARCA_SITIO}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto weather-navbar__links">
            <li class="nav-item">
              <a class="nav-link${esHome ? ' active' : ''}" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${enlaceCiudades}">Ciudades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function crearFooterHtml(paginaActual) {
  const enlaceCiudades = paginaActual === 'home' ? '#ciudades' : 'index.html#ciudades';

  return `
    <div class="container">
      <div class="row gy-4 mb-4">
        <div class="col-md-4">
          <h5 class="weather-footer__title">${MARCA_SITIO}</h5>
          <p class="weather-footer__text">Tu fuente confiable de información climática local.</p>
        </div>
        <div class="col-md-4">
          <h5 class="weather-footer__title">Navegación</h5>
          <ul class="list-unstyled weather-footer__list">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="${enlaceCiudades}">Ciudades</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5 class="weather-footer__title">Créditos</h5>
          <p class="weather-footer__text">Proyecto educativo. Módulo 2 → refactor UI con SASS y Bootstrap.</p>
        </div>
      </div>
      <hr class="my-4">
      <div class="row">
        <div class="col-12 text-center">
          <p class="mb-0 weather-footer__meta">&copy; 2026 ${MARCA_SITIO}. Diseño modular listo para API.</p>
        </div>
      </div>
    </div>
  `;
}