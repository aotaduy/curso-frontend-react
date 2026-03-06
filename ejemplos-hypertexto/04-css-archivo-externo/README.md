# CSS Archivo Externo

**Concepto:** Aplicar estilos desde un archivo CSS separado (MEJOR PRÁCTICA)

## Archivos
- `index.html` - Enlace a archivo CSS externo
- `styles.css` - Archivo con todos los estilos

## Conceptos Demostrados
- `<link rel="stylesheet" href="styles.css">` en `<head>`
- Separación de contenido (HTML) y presentación (CSS)
- Selectores: por tag, por clase, por ID
- Especificidad CSS
- Reutilización de clases
- Pseudo-clases: `:hover`
- Media queries para responsive design
- Componentes reutilizables (`.btn`, `.card`, `.box-info`)

## Estructura de Carpeta
```
04-css-archivo-externo/
├── index.html
└── styles.css
```

## Ventajas Sobre Inline (03)
- ✓ Código reutilizable
- ✓ HTML limpio y legible
- ✓ Fácil de mantener
- ✓ Se cachea por el navegador (mejor rendimiento)
- ✓ Mejor organización en proyectos grandes
- ✓ Fácil de colaborar en equipo

## Cómo Funciona
1. HTML referencia archivo CSS: `<link href="styles.css">`
2. Navegador descarga `styles.css`
3. CSS se aplica a elementos HTML según selectores

## Resultado Esperado
Una página con botones, tarjetas, tablas y layouts estilizados desde archivo CSS externo.

## Notas
- Este es el patrón estándar en desarrollo web profesional
- Los ejemplos posteriores (05, 06) también usan estilos externos
