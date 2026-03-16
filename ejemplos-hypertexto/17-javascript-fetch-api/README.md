# JavaScript Fetch API

**Concepto:** Hacer peticiones HTTP asincrónicas sin recargar la página

## Archivo
- `index.html` - Ejemplos de Fetch API

## API Usada
**JSONPlaceholder** - Servicio gratuito de datos ficticios
- URL base: `https://jsonplaceholder.typicode.com`
- Datos: usuarios, posts, comentarios, todos, etc.
- No requiere autenticación

## Conceptos Demostrados
- **GET:** Obtener datos
- **POST:** Crear datos
- **Peticiones Promises:** `.then().catch()`
- **Async/Await:** Sintaxis moderna (más legible)
- **JSON:** Formato de datos
- **Status codes:** 200, 404, 500, etc.
- **Headers:** Content-Type, Authorization
- **Error handling:** Try/catch
- **Peticiones paralelas:** Promise.all()

## Sintaxis Básica GET
```javascript
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## Sintaxis POST
```javascript
fetch('https://api.example.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Mi post',
        body: 'Contenido'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## Async/Await (Recomendado)
```javascript
async function obtenerUsuarios() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

## HTTP Methods
| Método | Acción | Uso |
|---|---|---|
| GET | Obtener | Leer datos |
| POST | Crear | Crear recurso nuevo |
| PUT | Reemplazar | Actualizar completo |
| DELETE | Eliminar | Borrar recurso |
| PATCH | Actualizar parcial | Cambios específicos |

## Status Codes Importantes
| Código | Significado |
|---|---|
| 200 | OK - Éxito |
| 201 | Created - Recurso creado |
| 404 | Not Found - No existe |
| 500 | Server Error - Error del servidor |

## Debugging
1. Abre DevTools (F12)
2. Ve a Network tab
3. Haz una petición
4. Verás el request y response completos

## Casos de Uso Reales
- Cargar posts al abrir página
- Enviar formulario sin recargar
- Cargar más items al scroll
- Obtener datos de usuarios
- Cualquier comunicación con servidor

## Resultado Esperado
- Datos cargados desde API
- Posts creados dinámicamente
- Error handling visible
- Network requests en DevTools

## Notas
- JSONPlaceholder no guarda permanentemente (es mock)
- Recarga la página para ver datos originales nuevamente
- **Conceptos 11-12** usan Fetch en React (automático con hooks)

## Próximos Conceptos
- **Concepto 11:** React GET - Cargar datos en componentes
- **Concepto 12:** React CRUD - TodoList completo
