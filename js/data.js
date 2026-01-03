// Datos estáticos de ciudades de Chile con información climática
const ciudades = [
  {
    id: 1,
    nombre: "Santiago",
    pais: "Chile",
    temperatura: 28,
    estado: "Despejado",
    humedad: 45,
    viento: 8,
    icono: "☀️",
    coordenadas: "33.4489° S, 70.6693° W",
    pronóstico: [
      { dia: "Lunes", temp: 28, estado: "Despejado", icono: "☀️" },
      { dia: "Martes", temp: 29, estado: "Despejado", icono: "☀️" },
      { dia: "Miércoles", temp: 27, estado: "Nublado", icono: "☁️" },
      { dia: "Jueves", temp: 26, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Viernes", temp: 28, estado: "Nublado", icono: "☁️" },
      { dia: "Sábado", temp: 30, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 29, estado: "Despejado", icono: "☀️" }
    ]
  },
  {
    id: 2,
    nombre: "Valparaíso",
    pais: "Chile",
    temperatura: 24,
    estado: "Despejado",
    humedad: 65,
    viento: 12,
    icono: "☀️",
    coordenadas: "33.0472° S, 71.6127° W",
    pronóstico: [
      { dia: "Lunes", temp: 24, estado: "Despejado", icono: "☀️" },
      { dia: "Martes", temp: 25, estado: "Despejado", icono: "☀️" },
      { dia: "Miércoles", temp: 23, estado: "Nublado", icono: "☁️" },
      { dia: "Jueves", temp: 22, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Viernes", temp: 24, estado: "Nublado", icono: "☁️" },
      { dia: "Sábado", temp: 26, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 25, estado: "Despejado", icono: "☀️" }
    ]
  },
  {
    id: 3,
    nombre: "La Serena",
    pais: "Chile",
    temperatura: 25,
    estado: "Despejado",
    humedad: 58,
    viento: 10,
    icono: "☀️",
    coordenadas: "29.9027° S, 71.2519° W",
    pronóstico: [
      { dia: "Lunes", temp: 25, estado: "Despejado", icono: "☀️" },
      { dia: "Martes", temp: 26, estado: "Despejado", icono: "☀️" },
      { dia: "Miércoles", temp: 24, estado: "Nublado", icono: "☁️" },
      { dia: "Jueves", temp: 23, estado: "Nublado", icono: "☁️" },
      { dia: "Viernes", temp: 25, estado: "Despejado", icono: "☀️" },
      { dia: "Sábado", temp: 27, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 26, estado: "Despejado", icono: "☀️" }
    ]
  },
  {
    id: 4,
    nombre: "Antofagasta",
    pais: "Chile",
    temperatura: 22,
    estado: "Despejado",
    humedad: 62,
    viento: 9,
    icono: "☀️",
    coordenadas: "23.6345° S, 70.4003° W",
    pronóstico: [
      { dia: "Lunes", temp: 22, estado: "Despejado", icono: "☀️" },
      { dia: "Martes", temp: 23, estado: "Despejado", icono: "☀️" },
      { dia: "Miércoles", temp: 21, estado: "Nublado", icono: "☁️" },
      { dia: "Jueves", temp: 20, estado: "Nublado", icono: "☁️" },
      { dia: "Viernes", temp: 22, estado: "Despejado", icono: "☀️" },
      { dia: "Sábado", temp: 24, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 23, estado: "Despejado", icono: "☀️" }
    ]
  },
  {
    id: 5,
    nombre: "Iquique",
    pais: "Chile",
    temperatura: 23,
    estado: "Despejado",
    humedad: 55,
    viento: 11,
    icono: "☀️",
    coordenadas: "20.2136° S, 70.1532° W",
    pronóstico: [
      { dia: "Lunes", temp: 23, estado: "Despejado", icono: "☀️" },
      { dia: "Martes", temp: 24, estado: "Despejado", icono: "☀️" },
      { dia: "Miércoles", temp: 22, estado: "Despejado", icono: "☀️" },
      { dia: "Jueves", temp: 21, estado: "Nublado", icono: "☁️" },
      { dia: "Viernes", temp: 23, estado: "Despejado", icono: "☀️" },
      { dia: "Sábado", temp: 25, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 24, estado: "Despejado", icono: "☀️" }
    ]
  },
  {
    id: 6,
    nombre: "Temuco",
    pais: "Chile",
    temperatura: 20,
    estado: "Nublado",
    humedad: 72,
    viento: 14,
    icono: "☁️",
    coordenadas: "38.7362° S, 72.5938° W",
    pronóstico: [
      { dia: "Lunes", temp: 20, estado: "Nublado", icono: "☁️" },
      { dia: "Martes", temp: 21, estado: "Nublado", icono: "☁️" },
      { dia: "Miércoles", temp: 22, estado: "Despejado", icono: "☀️" },
      { dia: "Jueves", temp: 19, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Viernes", temp: 20, estado: "Nublado", icono: "☁️" },
      { dia: "Sábado", temp: 22, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 21, estado: "Nublado", icono: "☁️" }
    ]
  },
  {
    id: 7,
    nombre: "Puerto Montt",
    pais: "Chile",
    temperatura: 18,
    estado: "Lluvioso",
    humedad: 78,
    viento: 15,
    icono: "🌧️",
    coordenadas: "41.3143° S, 72.9425° W",
    pronóstico: [
      { dia: "Lunes", temp: 18, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Martes", temp: 17, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Miércoles", temp: 19, estado: "Nublado", icono: "☁️" },
      { dia: "Jueves", temp: 20, estado: "Despejado", icono: "☀️" },
      { dia: "Viernes", temp: 18, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Sábado", temp: 19, estado: "Nublado", icono: "☁️" },
      { dia: "Domingo", temp: 18, estado: "Lluvioso", icono: "🌧️" }
    ]
  },
  {
    id: 8,
    nombre: "Puerto Varas",
    pais: "Chile",
    temperatura: 19,
    estado: "Nublado",
    humedad: 75,
    viento: 13,
    icono: "☁️",
    coordenadas: "41.3204° S, 72.3794° W",
    pronóstico: [
      { dia: "Lunes", temp: 19, estado: "Nublado", icono: "☁️" },
      { dia: "Martes", temp: 20, estado: "Nublado", icono: "☁️" },
      { dia: "Miércoles", temp: 18, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Jueves", temp: 17, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Viernes", temp: 19, estado: "Nublado", icono: "☁️" },
      { dia: "Sábado", temp: 20, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 19, estado: "Nublado", icono: "☁️" }
    ]
  },
  {
    id: 9,
    nombre: "Valdivia",
    pais: "Chile",
    temperatura: 19,
    estado: "Lluvioso",
    humedad: 80,
    viento: 12,
    icono: "🌧️",
    coordenadas: "39.8141° S, 73.2460° W",
    pronóstico: [
      { dia: "Lunes", temp: 19, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Martes", temp: 18, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Miércoles", temp: 20, estado: "Nublado", icono: "☁️" },
      { dia: "Jueves", temp: 21, estado: "Despejado", icono: "☀️" },
      { dia: "Viernes", temp: 19, estado: "Nublado", icono: "☁️" },
      { dia: "Sábado", temp: 20, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 19, estado: "Lluvioso", icono: "🌧️" }
    ]
  },
  {
    id: 10,
    nombre: "Concepción",
    pais: "Chile",
    temperatura: 22,
    estado: "Nublado",
    humedad: 68,
    viento: 11,
    icono: "☁️",
    coordenadas: "36.8267° S, 73.0379° W",
    pronóstico: [
      { dia: "Lunes", temp: 22, estado: "Nublado", icono: "☁️" },
      { dia: "Martes", temp: 23, estado: "Nublado", icono: "☁️" },
      { dia: "Miércoles", temp: 24, estado: "Despejado", icono: "☀️" },
      { dia: "Jueves", temp: 21, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Viernes", temp: 22, estado: "Nublado", icono: "☁️" },
      { dia: "Sábado", temp: 24, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 23, estado: "Despejado", icono: "☀️" }
    ]
  },
  {
    id: 11,
    nombre: "Osorno",
    pais: "Chile",
    temperatura: 17,
    estado: "Nublado",
    humedad: 76,
    viento: 10,
    icono: "☁️",
    coordenadas: "40.5765° S, 72.4965° W",
    pronóstico: [
      { dia: "Lunes", temp: 17, estado: "Nublado", icono: "☁️" },
      { dia: "Martes", temp: 18, estado: "Nublado", icono: "☁️" },
      { dia: "Miércoles", temp: 16, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Jueves", temp: 15, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Viernes", temp: 17, estado: "Nublado", icono: "☁️" },
      { dia: "Sábado", temp: 18, estado: "Despejado", icono: "☀️" },
      { dia: "Domingo", temp: 17, estado: "Nublado", icono: "☁️" }
    ]
  },
  {
    id: 12,
    nombre: "Punta Arenas",
    pais: "Chile",
    temperatura: 14,
    estado: "Ventoso",
    humedad: 68,
    viento: 25,
    icono: "💨",
    coordenadas: "53.1638° S, 70.9181° W",
    pronóstico: [
      { dia: "Lunes", temp: 14, estado: "Ventoso", icono: "💨" },
      { dia: "Martes", temp: 13, estado: "Ventoso", icono: "💨" },
      { dia: "Miércoles", temp: 15, estado: "Nublado", icono: "☁️" },
      { dia: "Jueves", temp: 12, estado: "Lluvioso", icono: "🌧️" },
      { dia: "Viernes", temp: 14, estado: "Ventoso", icono: "💨" },
      { dia: "Sábado", temp: 15, estado: "Nublado", icono: "☁️" },
      { dia: "Domingo", temp: 14, estado: "Ventoso", icono: "💨" }
    ]
  }
];
