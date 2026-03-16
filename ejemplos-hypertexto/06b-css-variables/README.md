# CSS Variables (Custom Properties)

**Concepto:** definir tokens de estilo reutilizables con `--mi-variable` y usarlos con `var(--mi-variable)`.

## Archivos
- `index.html` - Estructura del ejemplo
- `styles.css` - Variables globales en `:root` y override local por componente

## Conceptos demostrados
- Variables globales en `:root`
- Uso con `var()` en colores, espaciado, bordes y sombras
- Sobrescritura local de variables (`.card.alt`)
- Mantenimiento y theming sin repetir valores hardcodeados

## Como probar
1. Abre `index.html` en navegador.
2. Cambia un valor en `:root` (por ejemplo `--color-primary`).
3. Guarda y observa como se actualiza toda la interfaz.

## Ejemplo rapido
```css
:root {
  --color-primary: #0ea5e9;
  --space-md: 16px;
}

.button {
  background: var(--color-primary);
  padding: var(--space-md);
}
```
