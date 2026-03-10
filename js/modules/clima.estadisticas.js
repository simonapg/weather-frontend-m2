function redondear(valor, decimales = 1) {
  const factor = 10 ** decimales;
  return Math.round(valor * factor) / factor;
}

export function calcularEstadisticasSemana(pronosticoSemanal) {
  if (!Array.isArray(pronosticoSemanal) || pronosticoSemanal.length === 0) {
    return {
      minSemana: null,
      maxSemana: null,
      promedioSemana: null,
      conteoPorEstado: {},
      resumen: 'Sin datos semanales disponibles.'
    };
  }

  let minSemana = Number.POSITIVE_INFINITY;
  let maxSemana = Number.NEGATIVE_INFINITY;
  let sumaPromediosDiarios = 0;
  const conteoPorEstado = {};

  for (let i = 0; i < pronosticoSemanal.length; i += 1) {
    const dia = pronosticoSemanal[i];

    if (dia.min < minSemana) {
      minSemana = dia.min;
    }

    if (dia.max > maxSemana) {
      maxSemana = dia.max;
    }

    sumaPromediosDiarios += (dia.min + dia.max) / 2;

    if (!conteoPorEstado[dia.estado]) {
      conteoPorEstado[dia.estado] = 0;
    }

    conteoPorEstado[dia.estado] += 1;
  }

  const promedioSemana = redondear(sumaPromediosDiarios / pronosticoSemanal.length, 1);
  const resumen = generarResumenSemana(conteoPorEstado, promedioSemana);

  return {
    minSemana,
    maxSemana,
    promedioSemana,
    conteoPorEstado,
    resumen
  };
}

function generarResumenSemana(conteoPorEstado, promedioSemana) {
  const diasSoleados = conteoPorEstado.Despejado || 0;
  const diasNublados = conteoPorEstado.Nublado || 0;
  const diasLluviosos = conteoPorEstado.Lluvioso || 0;

  if (diasLluviosos >= 3 && promedioSemana <= 18) {
    return 'Semana fria con varias lluvias.';
  }

  if (diasSoleados > diasNublados && diasSoleados > diasLluviosos) {
    return 'Semana mayormente soleada.';
  }

  if (diasNublados >= 3) {
    return 'Semana con predominio de nubosidad.';
  }

  if (diasLluviosos >= 2) {
    return 'Semana inestable, con jornadas lluviosas.';
  }

  return 'Semana de clima variado.';
}
