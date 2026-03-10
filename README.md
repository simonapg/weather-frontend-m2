# ClimaMundo Chile

App web para practicar JavaScript moderno con enfoque en POO, modulos ES6+ y consumo asincrono de API de clima (Open-Meteo).

## Que hace

- Muestra 12 lugares en Home con clima actual obtenido desde Open-Meteo.
- Permite entrar al detalle de cada lugar.
- En detalle muestra pronostico semanal (dia, min, max, estado) a partir de datos de la API.
- Calcula estadisticas semanales:
  - minima, maxima y promedio semanal,
  - cantidad de dias por tipo de clima,
  - resumen textual de la semana.
- Muestra alertas climaticas simples, por ejemplo calor o semana lluviosa.
- Muestra estados de Cargando y Error durante la carga asincrona de datos.

## Arquitectura (POO + ES6+)

Clase principal:

- `WeatherApp` (`js/modules/weather.app.js`)
  - `cargarLugares()`
  - `cargarDetalleLugar(id)`
  - `calcularEstadisticas(pronosticoSemanal)`
  - `generarAlertas(estadisticas, pronosticoSemanal)`

Clase de acceso a API:

- `OpenMeteoApiClient` (`js/modules/openmeteo.api.js`)
  - Consume `https://api.open-meteo.com/v1/forecast` con `fetch` y `async/await`.

Modulo de utilidades:

- `js/modules/weather.utils.js`
  - Mapea codigo WMO -> estado (Despejado, Nublado, Lluvioso, etc.)
  - Mapea estado -> icono
  - Formatea dias de la semana

## Como esta organizado

- `js/data.js`: catalogo de lugares (solo metadatos, sin clima estatico).
- `js/modules/lugares.service.js`: busqueda y acceso a lugares base.
- `js/modules/clima.estadisticas.js`: calculos semanales.
- `js/modules/openmeteo.api.js`: cliente de Open-Meteo.
- `js/modules/weather.app.js`: logica principal POO.
- `js/modules/weather.app.instance.js`: instancia compartida de la app.
- `js/modules/home.page.js`: render Home (asincrono).
- `js/modules/detalle.page.js`: render detalle (asincrono, estadisticas y alertas).
- `js/modules/site.layout.js`: layout compartido para header y footer.
- `js/script.js`: punto de entrada.

## Como correrlo

1. Abrir `index.html`.
2. Elegir un lugar.
3. Ver el detalle y las estadisticas semanales.

## SCSS

- Compilar una vez: `sass scss/main.scss css/main.css`
- Modo watch: `sass --watch scss/main.scss:css/main.css`

Si falla el comando `sass`, usar:

- `npm install -g sass`
- o `npx sass --watch scss/main.scss:css/main.css`

## Stack

HTML5, SCSS, JavaScript ES6+ (ES Modules), Bootstrap 5 y Open-Meteo Forecast API.
