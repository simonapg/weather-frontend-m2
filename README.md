# ClimaMundo Chile

App web simple para practicar JavaScript con datos de clima.
El foco esta en la logica: trabajar arreglos y objetos, usar ciclos y condicionales, calcular estadisticas y pintar todo en el DOM.

## Que hace

- Muestra 12 lugares en Home con su clima actual.
- Permite entrar al detalle de cada lugar.
- En detalle muestra pronostico semanal (dia, min, max, estado).
- Calcula en JavaScript:
  - minima, maxima y promedio semanal,
  - cantidad de dias por tipo de clima,
  - resumen textual de la semana.

## Como esta organizado

- `js/data.js`: datos mock de lugares y pronostico.
- `js/modules/lugares.service.js`: busqueda de lugares.
- `js/modules/clima.estadisticas.js`: calculos semanales.
- `js/modules/home.page.js`: render de Home.
- `js/modules/detalle.page.js`: render de detalle.
- `js/script.js`: punto de entrada (main).

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

HTML5, SCSS, JavaScript (ES Modules) y Bootstrap 5.
