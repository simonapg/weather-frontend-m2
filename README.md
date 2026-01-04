# ClimaMundo Chile

Aplicación web minimalista para consultar el clima de las principales ciudades chilenas. Refactorizada con metodología BEM, SASS modular y diseño en escala de grises.

**[Repositorio en GitHub](https://github.com/simonapg/weather-frontend-m2)**

## Cómo usarla

1. Abrir `index.html` en el navegador
2. Hacer click en cualquier ciudad para ver su detalle y pronóstico semanal
3. Usar el botón "Volver al inicio" para regresar al listado

## Características

- 12 localidades chilenas con datos de clima simulados
- Temperatura, humedad, viento y coordenadas para cada ciudad
- Pronóstico de 7 días con íconos y estados
- Responsive: 1 columna en móvil (≤420px), múltiples columnas en desktop (≥1024px)
- Diseño minimalista monocromático

## Tecnologías

- HTML5 semántico con nomenclatura BEM
- SASS modularizado (variables, mixins, parciales)
- JavaScript vanilla para navegación y renderizado
- Bootstrap 5 grid system (col-12/col-md-6/col-lg-4)

## Estructura

```
index.html          - Página principal con listado de ciudades
detalle.html        - Vista ampliada con pronóstico semanal
css/main.css        - Estilos compilados desde SASS (no editar)
scss/               - Código fuente SASS
  base/
    _variables.scss - Paleta, tipografía, espaciados
    _mixins.scss    - Mixins reutilizables
  layout/
    _layout.scss    - Navbar, hero, secciones, footer
  components/
    _components.scss - Cards, botones, detalle
  main.scss         - Punto de entrada
js/
  data.js           - Mock de 12 ciudades con pronóstico
  script.js         - Lógica de renderizado y navegación
```

## Compilar SASS

```bash
# Build único
sass scss/main.scss css/main.css

# Watch mode
sass --watch scss/main.scss:css/main.css
```

- Humedad
- Velocidad del viento
- Coordenadas geográficas
- Pronóstico para los próximos 7 días

## Notas

Los datos del clima son ficticios pero realistas. Si quisieras datos reales tendrías que conectar una API de verdad.

El código está comentado así que se entiende fácilmente.

---

Hecho con HTML, CSS y JavaScript vanilla. Sin frameworks raros ni dependencias externas.

## Funcionalidades JavaScript

### Evento DOMContentLoaded

- Detecta si es página de inicio o detalle
- Carga contenido apropiado

### Función cargarCiudades()

- Renderiza todas las ciudades como cards
- Añade eventos click a cada card
- Utiliza Bootstrap grid system

### Función verDetalle(id)

- Guarda la ciudad seleccionada en localStorage
- Navega a la página de detalle

### Función cargarDetalle()

- Recupera la ciudad desde localStorage
- Muestra información actual ampliada
- Renderiza pronóstico semanal en cards

### Función volverAInicio()

- Limpia la selección
- Navega a la página de inicio

## Optimizaciones Realizadas

- Código modular y reutilizable
- Eficiencia en la manipulación del DOM
- Carga de Bootstrap por CDN (sin instalar localmente)
- Estilos optimizados con variables CSS
- Animaciones suaves sin afectar rendimiento

## Navegadores Soportados

- Chrome/Chromium (v90+)
- Firefox (v88+)
- Safari (v14+)
- Edge (v90+)

## Autor

Proyecto desarrollado como ejercicio educativo de HTML5, CSS3, JavaScript y Bootstrap.

## Licencia

Libre para uso educativo y personal.

---

**Versión**: 1.0.0  
**Fecha**: Enero 2026  
**Estado**: MVP Completo
