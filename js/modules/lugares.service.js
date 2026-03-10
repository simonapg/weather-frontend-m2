import { lugares } from '../data.js';

function normalizarTexto(valor) {
  return String(valor).trim().toLowerCase();
}

export function obtenerLugar(criterio) {
  for (let i = 0; i < lugares.length; i += 1) {
    const lugar = lugares[i];

    if (typeof criterio === 'number' && lugar.id === criterio) {
      return lugar;
    }

    if (typeof criterio === 'string' && normalizarTexto(lugar.nombre) === normalizarTexto(criterio)) {
      return lugar;
    }
  }

  return null;
}

export function obtenerTodosLosLugares() {
  return lugares;
}
