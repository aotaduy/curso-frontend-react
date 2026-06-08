# Box Model Interactivo

**Concepto:** Visualizar y modificar en tiempo real las capas del Box Model (`content`, `padding`, `border`, `margin`).

## Archivos
- `index.html` - Estructura y controles interactivos
- `styles.css` - Estilos de la página y de la demo
- `script.js` - Lógica para aplicar estilos dinámicamente

## Controles incluidos
- Unidad global (`px`, `rem`, `%`, `em`)
- `width` y `height` del contenido
- `padding` y `margin`
- `border-width`, `border-style`, `border-color`
- `background-color` y color de texto

## Qué demuestra
- Cómo cambia el tamaño visible de una caja al modificar cada capa
- Diferencia entre espacio interno (`padding`) y externo (`margin`)
- Impacto de borde (grosor, estilo, color) en la caja final
- Actualización del estilo con JavaScript sin recargar

## Resultado esperado
- La caja de ejemplo se actualiza al mover cualquier control
- Se muestran los valores CSS activos
- Transiciones suaves al cambiar tamaño, colores o borde
