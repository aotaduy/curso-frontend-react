# JavaScript Promesas

**Concepto:** representacion de operaciones asincronas con `Promise`.

## Archivo
- `index.html` - Simulacion de promesa resuelta, rechazada y encadenamiento de promesas

## Conceptos demostrados
- `new Promise((resolve, reject) => {})`
- Estados: `pending`, `fulfilled`, `rejected`
- Encadenamiento con `.then()` y `.catch()`
- Cadena de multiples `.then()` con transformaciones intermedias
- Un unico `.catch()` para capturar errores de cualquier paso de la cadena
- `.finally()` para cierre comun del flujo

## Como probar
1. Abre `index.html`
2. Haz click en "Simular exito", "Simular error" y "Encadenar promesas"
3. Revisa salida y consola

## Version Node.js
- Archivo equivalente: `node-example.js`
- Descargar archivo JS: [node-example.js](./node-example.js)

### Como correr en Node.js
1. Abre una terminal en esta carpeta.
2. Ejecuta `node node-example.js`.

