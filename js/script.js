import { inicializarHome } from './modules/home.page.js';
import { inicializarDetalle } from './modules/detalle.page.js';
import { renderizarLayoutBase } from './modules/site.layout.js';
import { weatherApp } from './modules/weather.app.instance.js';

document.addEventListener('DOMContentLoaded', async () => {
  renderizarLayoutBase(document.body.dataset.page || 'home');
  await inicializarHome(weatherApp);
  await inicializarDetalle(weatherApp);
});
