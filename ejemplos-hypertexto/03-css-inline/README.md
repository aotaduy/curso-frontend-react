# CSS Inline

**Concepto:** Aplicar estilos CSS directamente en el atributo `style` de elementos HTML

## Archivo
- `index.html` - Estilos inline con atributo `style`

## Conceptos Demostrados
- Aplicar CSS directamente: `<p style="color: blue; font-size: 16px;">`
- Propiedades comunes: `color`, `background-color`, `padding`, `margin`, `border-radius`
- Problemas de mantenibilidad
- No es reutilizable

## Ventajas
- ✓ Rápido para prototipos
- ✓ Útil para casos puntuales
- ✓ Útil en emails HTML

## Desventajas
- ✗ No reutilizable
- ✗ HTML muy largo y difícil de leer
- ✗ Difícil de mantener
- ✗ Prioridad muy alta (difícil de sobrescribir)
- ✗ No se cachea por el navegador

## Comparación con Concepto 04
| Inline (03) | Externo (04) |
|---|---|
| Estilos en cada elemento | Un archivo CSS reutilizable |
| No reutilizable | Reutilizable |
| HTML largo | HTML limpio |
| Mantenimiento difícil | Mantenimiento fácil |

## Resultado Esperado
Una página con botones, cajas y layouts usando solo estilos inline.
