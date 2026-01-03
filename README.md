# ClimaMundo Chile

Una aplicación simple para ver el clima de las principales ciudades chilenas. Nada del otro mundo, pero funciona.

**[Repositorio en GitHub](https://github.com/TuUsuario/weather-frontend-m2)**

## Cómo usarla

1. Descomprimir el zip
2. Abrir `index.html` en el navegador
3. Hacer click en cualquier ciudad para ver sus detalles y el pronóstico de la semana

## Qué tiene

- 12 ciudades chilenas (Santiago, Valparaíso, La Serena, Antofagasta, Iquique, Temuco, Puerto Montt, Puerto Varas, Valdivia, Concepción, Osorno, Punta Arenas)
- Temperatura, humedad, viento y coordenadas para cada ciudad
- Pronóstico de 7 días
- Se adapta bien a cualquier tamaño de pantalla (computadora, tablet, celular)
- Funciona sin conexión a internet

## Tecnologías usadas

- HTML5 con estructura semántica
- CSS3 con flexbox y variables
- JavaScript vanilla (sin librerías raras)
- Bootstrap 5 para el grid y componentes

## Estructura

```
index.html          - Página principal con listado de ciudades
detalle.html        - Página con detalles de una ciudad
css/styles.css      - Estilos
js/data.js          - Los datos de las ciudades
js/script.js        - La lógica de la app
```

## Responsive

Funciona bien en móviles (desde 420px), tablets y computadoras. El navbar se colapsa automáticamente en pantallas pequeñas.

## Cómo funciona

Basicamente clickeas una ciudad en la home, se guarda en localStorage cual seleccionaste, te lleva a la página de detalle donde ves más info, y hay un botón para volver.

Cada ciudad tiene:

- Ícono del clima (emojis)
- Temperatura actual
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
