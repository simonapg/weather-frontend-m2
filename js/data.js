// Datos base para la app de clima (sin API): modelado con objetos y arreglos.
export const lugares = [
  {
    id: 1,
    nombre: "Santiago",
    tempActual: 28,
    estadoActual: "Despejado",
    humedad: 45,
    viento: 8,
    icono: "☀️",
    coordenadas: "33.4489° S, 70.6693° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 28, estado: "Despejado" },
      { dia: "Martes", min: 19, max: 29, estado: "Despejado" },
      { dia: "Miercoles", min: 17, max: 27, estado: "Nublado" },
      { dia: "Jueves", min: 16, max: 26, estado: "Lluvioso" },
      { dia: "Viernes", min: 18, max: 28, estado: "Nublado" },
      { dia: "Sabado", min: 20, max: 30, estado: "Despejado" },
      { dia: "Domingo", min: 19, max: 29, estado: "Despejado" }
    ]
  },
  {
    id: 2,
    nombre: "Valparaíso",
    tempActual: 24,
    estadoActual: "Despejado",
    humedad: 65,
    viento: 12,
    icono: "☀️",
    coordenadas: "33.0472° S, 71.6127° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 16, max: 24, estado: "Despejado" },
      { dia: "Martes", min: 17, max: 25, estado: "Despejado" },
      { dia: "Miercoles", min: 15, max: 23, estado: "Nublado" },
      { dia: "Jueves", min: 14, max: 22, estado: "Lluvioso" },
      { dia: "Viernes", min: 16, max: 24, estado: "Nublado" },
      { dia: "Sabado", min: 18, max: 26, estado: "Despejado" },
      { dia: "Domingo", min: 17, max: 25, estado: "Despejado" }
    ]
  },
  {
    id: 3,
    nombre: "La Serena",
    tempActual: 25,
    estadoActual: "Despejado",
    humedad: 58,
    viento: 10,
    icono: "☀️",
    coordenadas: "29.9027° S, 71.2519° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 17, max: 25, estado: "Despejado" },
      { dia: "Martes", min: 18, max: 26, estado: "Despejado" },
      { dia: "Miercoles", min: 16, max: 24, estado: "Nublado" },
      { dia: "Jueves", min: 15, max: 23, estado: "Nublado" },
      { dia: "Viernes", min: 17, max: 25, estado: "Despejado" },
      { dia: "Sabado", min: 19, max: 27, estado: "Despejado" },
      { dia: "Domingo", min: 18, max: 26, estado: "Despejado" }
    ]
  },
  {
    id: 4,
    nombre: "Antofagasta",
    tempActual: 22,
    estadoActual: "Despejado",
    humedad: 62,
    viento: 9,
    icono: "☀️",
    coordenadas: "23.6345° S, 70.4003° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 14, max: 22, estado: "Despejado" },
      { dia: "Martes", min: 15, max: 23, estado: "Despejado" },
      { dia: "Miercoles", min: 13, max: 21, estado: "Nublado" },
      { dia: "Jueves", min: 12, max: 20, estado: "Nublado" },
      { dia: "Viernes", min: 14, max: 22, estado: "Despejado" },
      { dia: "Sabado", min: 16, max: 24, estado: "Despejado" },
      { dia: "Domingo", min: 15, max: 23, estado: "Despejado" }
    ]
  },
  {
    id: 5,
    nombre: "Iquique",
    tempActual: 23,
    estadoActual: "Despejado",
    humedad: 55,
    viento: 11,
    icono: "☀️",
    coordenadas: "20.2136° S, 70.1532° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 15, max: 23, estado: "Despejado" },
      { dia: "Martes", min: 16, max: 24, estado: "Despejado" },
      { dia: "Miercoles", min: 14, max: 22, estado: "Despejado" },
      { dia: "Jueves", min: 13, max: 21, estado: "Nublado" },
      { dia: "Viernes", min: 15, max: 23, estado: "Despejado" },
      { dia: "Sabado", min: 17, max: 25, estado: "Despejado" },
      { dia: "Domingo", min: 16, max: 24, estado: "Despejado" }
    ]
  },
  {
    id: 6,
    nombre: "Temuco",
    tempActual: 20,
    estadoActual: "Nublado",
    humedad: 72,
    viento: 14,
    icono: "☁️",
    coordenadas: "38.7362° S, 72.5938° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 12, max: 20, estado: "Nublado" },
      { dia: "Martes", min: 13, max: 21, estado: "Nublado" },
      { dia: "Miercoles", min: 14, max: 22, estado: "Despejado" },
      { dia: "Jueves", min: 11, max: 19, estado: "Lluvioso" },
      { dia: "Viernes", min: 12, max: 20, estado: "Nublado" },
      { dia: "Sabado", min: 14, max: 22, estado: "Despejado" },
      { dia: "Domingo", min: 13, max: 21, estado: "Nublado" }
    ]
  },
  {
    id: 7,
    nombre: "Puerto Montt",
    tempActual: 18,
    estadoActual: "Lluvioso",
    humedad: 78,
    viento: 15,
    icono: "🌧️",
    coordenadas: "41.3143° S, 72.9425° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 18, estado: "Lluvioso" },
      { dia: "Martes", min: 9, max: 17, estado: "Lluvioso" },
      { dia: "Miercoles", min: 11, max: 19, estado: "Nublado" },
      { dia: "Jueves", min: 12, max: 20, estado: "Despejado" },
      { dia: "Viernes", min: 10, max: 18, estado: "Lluvioso" },
      { dia: "Sabado", min: 11, max: 19, estado: "Nublado" },
      { dia: "Domingo", min: 10, max: 18, estado: "Lluvioso" }
    ]
  },
  {
    id: 8,
    nombre: "Puerto Varas",
    tempActual: 19,
    estadoActual: "Nublado",
    humedad: 75,
    viento: 13,
    icono: "☁️",
    coordenadas: "41.3204° S, 72.3794° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 11, max: 19, estado: "Nublado" },
      { dia: "Martes", min: 12, max: 20, estado: "Nublado" },
      { dia: "Miercoles", min: 10, max: 18, estado: "Lluvioso" },
      { dia: "Jueves", min: 9, max: 17, estado: "Lluvioso" },
      { dia: "Viernes", min: 11, max: 19, estado: "Nublado" },
      { dia: "Sabado", min: 12, max: 20, estado: "Despejado" },
      { dia: "Domingo", min: 11, max: 19, estado: "Nublado" }
    ]
  },
  {
    id: 9,
    nombre: "Valdivia",
    tempActual: 19,
    estadoActual: "Lluvioso",
    humedad: 80,
    viento: 12,
    icono: "🌧️",
    coordenadas: "39.8141° S, 73.2460° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 11, max: 19, estado: "Lluvioso" },
      { dia: "Martes", min: 10, max: 18, estado: "Lluvioso" },
      { dia: "Miercoles", min: 12, max: 20, estado: "Nublado" },
      { dia: "Jueves", min: 13, max: 21, estado: "Despejado" },
      { dia: "Viernes", min: 11, max: 19, estado: "Nublado" },
      { dia: "Sabado", min: 12, max: 20, estado: "Despejado" },
      { dia: "Domingo", min: 11, max: 19, estado: "Lluvioso" }
    ]
  },
  {
    id: 10,
    nombre: "Concepción",
    tempActual: 22,
    estadoActual: "Nublado",
    humedad: 68,
    viento: 11,
    icono: "☁️",
    coordenadas: "36.8267° S, 73.0379° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 14, max: 22, estado: "Nublado" },
      { dia: "Martes", min: 15, max: 23, estado: "Nublado" },
      { dia: "Miercoles", min: 16, max: 24, estado: "Despejado" },
      { dia: "Jueves", min: 13, max: 21, estado: "Lluvioso" },
      { dia: "Viernes", min: 14, max: 22, estado: "Nublado" },
      { dia: "Sabado", min: 16, max: 24, estado: "Despejado" },
      { dia: "Domingo", min: 15, max: 23, estado: "Despejado" }
    ]
  },
  {
    id: 11,
    nombre: "Osorno",
    tempActual: 17,
    estadoActual: "Nublado",
    humedad: 76,
    viento: 10,
    icono: "☁️",
    coordenadas: "40.5765° S, 72.4965° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 9, max: 17, estado: "Nublado" },
      { dia: "Martes", min: 10, max: 18, estado: "Nublado" },
      { dia: "Miercoles", min: 8, max: 16, estado: "Lluvioso" },
      { dia: "Jueves", min: 7, max: 15, estado: "Lluvioso" },
      { dia: "Viernes", min: 9, max: 17, estado: "Nublado" },
      { dia: "Sabado", min: 10, max: 18, estado: "Despejado" },
      { dia: "Domingo", min: 9, max: 17, estado: "Nublado" }
    ]
  },
  {
    id: 12,
    nombre: "Punta Arenas",
    tempActual: 14,
    estadoActual: "Ventoso",
    humedad: 68,
    viento: 25,
    icono: "💨",
    coordenadas: "53.1638° S, 70.9181° W",
    pronosticoSemanal: [
      { dia: "Lunes", min: 6, max: 14, estado: "Ventoso" },
      { dia: "Martes", min: 5, max: 13, estado: "Ventoso" },
      { dia: "Miercoles", min: 7, max: 15, estado: "Nublado" },
      { dia: "Jueves", min: 4, max: 12, estado: "Lluvioso" },
      { dia: "Viernes", min: 6, max: 14, estado: "Ventoso" },
      { dia: "Sabado", min: 7, max: 15, estado: "Nublado" },
      { dia: "Domingo", min: 6, max: 14, estado: "Ventoso" }
    ]
  }
];
