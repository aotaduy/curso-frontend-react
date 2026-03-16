# JavaScript JSON

**Concepto:** JSON como formato de intercambio de datos.

## Archivo
- `index.html` - Ejemplos de parseo y serializacion JSON

## Conceptos demostrados
- `JSON.parse(text)` para convertir texto JSON a objeto
- `JSON.stringify(obj)` para convertir objeto a texto JSON
- Diferencia entre objeto JS y string JSON
- Limitaciones de serializacion en JSON

## Limitaciones JSON mostradas
- `Date` se serializa como string (pierde el tipo `Date`)
- `undefined` y funciones se omiten en objetos
- `undefined`, funciones y `Symbol` pasan a `null` en arrays
- `NaN` e `Infinity` se convierten en `null`
- `BigInt` lanza error al serializar
- Referencias circulares lanzan error
- `Map` y `Set` no conservan su estructura automaticamente

## Como probar
1. Abre `index.html`
2. Ejecuta botones `JSON.parse`, `JSON.stringify` y `Limitaciones JSON`
3. Revisa resultados en pantalla y consola

## Version Node.js
- Archivo equivalente: `node-example.js`
- Descargar archivo JS: [node-example.js](./node-example.js)

### Como correr en Node.js
1. Abre una terminal en esta carpeta.
2. Ejecuta `node node-example.js`.

