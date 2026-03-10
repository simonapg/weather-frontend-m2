import { inicializarHome } from './modules/home.page.js';
import { inicializarDetalle } from './modules/detalle.page.js';

document.addEventListener('DOMContentLoaded', () => {
  inicializarHome();
  inicializarDetalle();
});
