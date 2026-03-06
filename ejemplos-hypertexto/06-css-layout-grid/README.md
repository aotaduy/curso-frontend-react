# CSS Layout Grid

**Concepto:** Crear layouts responsivos en dos dimensiones (filas Y columnas) usando `display: grid`

## Archivo
- `index.html` - Ejemplos de CSS Grid con estilos `<style>`

## Conceptos Demostrados
- `display: grid` - Activa CSS Grid
- `grid-template-columns` - Define columnas
  - `repeat(3, 1fr)` - 3 columnas iguales
  - `repeat(auto-fit, minmax(250px, 1fr))` - Automático responsivo
- `grid-template-rows` - Define filas
- `gap` - Espaciado entre celdas
- `grid-column: span 2` - Elemento ocupa 2 columnas
- `grid-column: 1 / -1` - Elemento ocupa todas las columnas
- Media queries para cambiar layout en móviles

## Ejemplos Incluidos
1. **Grid Básico 3 columnas** - Galería de productos
2. **Grid 4 columnas** - Más items por fila
3. **Grid con Span** - Items de diferentes tamaños
4. **Grid Responsivo** - Se adapta automáticamente
5. **Dashboard Complejo** - Header, sidebar, main, footer

## Casos de Uso Reales
- Dashboards con sidebar
- Galerías de fotos
- Tiendas online
- Layouts complejos
- Interfaces de administración

## Grid vs Flexbox
| Flexbox (1D) | Grid (2D) |
|---|---|
| Una dimensión | Dos dimensiones |
| Simples | Complejos |
| Items en fila O columna | Filas Y columnas simultáneas |

## Responsive
- `repeat(auto-fit, minmax(250px, 1fr))` se adapta automáticamente
- Media queries para cambiar en móviles

## Resultado Esperado
- Galería responsiva
- Dashboard con layout complejo
- Grid automático que se adapta

## Notas
- Grid es más poderoso que Flexbox pero más complejo
- La mayoría de navegadores modernos soportan Grid
