const NOMBRES_DIAS = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const ICONOS_ESTADO = {
  Despejado: '☀️',
  Nublado: '☁️',
  Lluvioso: '🌧️',
  Niebla: '🌫️',
  Nevado: '❄️',
  Tormenta: '⛈️'
};

export function mapearCodigoWmoAEstado(codigoWmo = 0) {
  if (codigoWmo === 0 || codigoWmo === 1) {
    return 'Despejado';
  }

  if (codigoWmo === 2 || codigoWmo === 3 || codigoWmo === 45 || codigoWmo === 48) {
    return 'Nublado';
  }

  if ((codigoWmo >= 51 && codigoWmo <= 67) || (codigoWmo >= 80 && codigoWmo <= 82)) {
    return 'Lluvioso';
  }

  if ((codigoWmo >= 71 && codigoWmo <= 77) || (codigoWmo >= 85 && codigoWmo <= 86)) {
    return 'Nevado';
  }

  if (codigoWmo >= 95) {
    return 'Tormenta';
  }

  return 'Nublado';
}

export function obtenerIconoPorEstado(estado = 'Nublado') {
  return ICONOS_ESTADO[estado] || '🌤️';
}

export function formatearDiaDesdeFecha(fechaIso) {
  const fecha = new Date(`${fechaIso}T00:00:00`);
  const indiceDia = fecha.getDay();
  return NOMBRES_DIAS[indiceDia] || fechaIso;
}

export function formatearFechaLarga(fechaIso) {
  const fecha = new Date(`${fechaIso}T00:00:00`);

  if (Number.isNaN(fecha.getTime())) {
    return fechaIso;
  }

  const texto = fecha.toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function formatearEtiquetaFecha(fechaIso) {
  const dia = formatearDiaDesdeFecha(fechaIso);
  const fechaLarga = formatearFechaLarga(fechaIso);

  return `${dia}, ${fechaLarga}`;
}

export function formatearCoordenadas(latitud, longitud) {
  if (typeof latitud !== 'number' || typeof longitud !== 'number') {
    return 'No disponible';
  }

  const latitudAbs = Math.abs(latitud).toFixed(4);
  const longitudAbs = Math.abs(longitud).toFixed(4);
  const hemisferioLatitud = latitud < 0 ? 'S' : 'N';
  const hemisferioLongitud = longitud < 0 ? 'W' : 'E';

  return `${latitudAbs}° ${hemisferioLatitud}, ${longitudAbs}° ${hemisferioLongitud}`;
}

export function redondear(valor, decimales = 1) {
  const factor = 10 ** decimales;
  return Math.round(valor * factor) / factor;
}
