# CSS Layout Flexbox

**Concepto:** Crear layouts responsive en una dimensión (fila o columna) usando `display: flex`

## Archivo
- `index.html` - Ejemplos de Flexbox con estilos `<style>`

## Conceptos Demostrados
- `display: flex` - Activa Flexbox
- `flex-direction: row` - Horizontal (por defecto)
- `flex-direction: column` - Vertical
- `justify-content` - Distribución en eje principal (horizontal)
  - `flex-start` - Inicio
  - `center` - Centro
  - `space-between` - Espacio entre
  - `space-around` - Espacio alrededor
- `align-items` - Alineación en eje cruzado (vertical)
  - `flex-start`, `center`, `flex-end`
- `gap` - Espaciado entre items
- `flex: 1` - Crecer equitativamente
- `flex-grow` - Crecimiento desigual

## Casos de Uso Reales
- Navbar responsivo
- Centrado perfecto
- Cards en fila
- Formularios
- Cualquier layout 1D

## Comparación 1D vs 2D
| Flexbox (1D) | Grid (2D) |
|---|---|
| Fila o columna | Filas Y columnas |
| Simples | Complejos |
| Una dimensión | Dos dimensiones |

## Responsive
Los ejemplos se adaptan a pantallas pequeñas. Redimensiona el navegador para verlo.

## Resultado Esperado
- Cards responsivas en fila
- Navbar bien distribuido
- Items verticales
- Centrado perfecto

## Notas
- Flexbox es más simple que Grid para logos 1D
- Grid es mejor para layouts complejos de 2D (siguiente concepto)
