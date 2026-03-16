# React CRUD TodoList

**Concepto:** Aplicación completa con React que implementa CRUD (GET, POST, PUT, DELETE)

## Archivo
- `index.html` - Aplicación TodoList con Hooks

## Conceptos Demostrados
- **CRUD Completo:**
  - **GET** - Cargar TODOs al montar
  - **POST** - Crear nuevo TODO
  - **PUT** - Marcar como completado
  - **DELETE** - Eliminar TODO

- **React Concepts:**
  - Componentes funcionales
  - useState para estado
  - useEffect para effects
  - Manejo de formularios
  - Renderizado condicional
  - Event handling

## Árquitectura del Componente
```javascript
function TodoApp() {
    // 1. Estado
    const [todos, setTodos] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    
    // 2. GET - Cargar en mount
    useEffect(() => {
        fetch('...api/todos')
            .then(r => r.json())
            .then(data => setTodos(data));
    }, []);
    
    // 3. POST - Crear nuevo
    const crearTodo = (e) => {
        e.preventDefault();
        fetch('...api/todos', {
            method: 'POST',
            body: JSON.stringify({title: newTitle})
        }).then(...);
    };
    
    // 4. PUT - Actualizar
    const toggleTodo = (id) => {
        fetch(\`...api/todos/\${id}\`, {
            method: 'PUT',
            body: JSON.stringify({completed: true})
        }).then(...);
    };
    
    // 5. DELETE - Eliminar
    const eliminarTodo = (id) => {
        fetch(\`...api/todos/\${id}\`, {
            method: 'DELETE'
        }).then(...);
    };
    
    // 6. Renderizar
    return (
        <form onSubmit={crearTodo}>
            <input onChange={(e) => setNewTitle(e.target.value)} />
            <button>Crear</button>
        </form>
    );
}
```

## Métodos HTTP Usados
```javascript
// GET - Obtener lista
fetch('/todos')

// POST - Crear
fetch('/todos', {
    method: 'POST',
    body: JSON.stringify({title, body})
})

// PUT - Actualizar
fetch('/todos/1', {
    method: 'PUT',
    body: JSON.stringify({...todo, completed: true})
})

// DELETE - Eliminar
fetch('/todos/1', {
    method: 'DELETE'
})
```

## Flujo de Interacción
```
1. Página carga
   ↓
2. useEffect hace GET → carga 10 TODOs
   ↓
3. Usuario escribe en input
   ↓
4. onSubmit → POST nuevo TODO
   ↓
5. Actualiza estado local (setTodos)
   ↓
6. React rehace el render → aparece el nuevo
   ↓
7. Usuario clickea checkmark
   ↓
8. PUT request → actualiza en servidor
   ↓
9. setTodos actualiza local
   ↓
10. React rehace render → TODO tachado
```

## Estado Local vs API
```javascript
// El componente mantiene estado local:
const [todos, setTodos] = useState([]);

// Cuando hace POST:
setTodos([...todos, nuevoTodo]);  // Actualiza localmente

// La API también se actualiza pero es mock (JSONPlaceholder)
```

## Features
- ✓ Ver lista de TODOs
- ✓ Crear nuevo TODO
- ✓ Marcar completado/pendiente
- ✓ Eliminar TODO
- ✓ Ver estadísticas (total, completados, pendientes)
- ✓ Formulario limpio después de crear
- ✓ Estilos modernos con gradiente

## Cómo Crear
```bash
# Opción 1: Python
cd 19-react-crud-todolist
python -m http.server 8000
# Abre http://localhost:8000

# Opción 2: VS Code Live Server
Right-click en index.html → Open with Live Server
```

## API Usada
**JSONPlaceholder**
- GET `/todos?_limit=10` - Primeros 10 TODOs
- POST `/todos` - Crear TODO (retorna ID 201, pero usamos local)
- PUT `/todos/:id` - Actualizar TODO
- DELETE `/todos/:id` - Eliminar TODO

## Importante
JSONPlaceholder **no guarda permanentemente**:
- POST crea ID 201 solo en respuesta
- Recarga la página → datos originales
- No hay persistencia, es solo para demostración

## Diferencias vs Concepto 11
| Concepto 11 | Concepto 12 |
|---|---|
| Solo GET | GET, POST, PUT, DELETE |
| Read-only | Full CRUD |
| Lista estática | Interactiva |
| Simple | Compleja |

## Resultado Esperado
- Lista de 10 TODOs cargada
- Formulario funcional
- Crear TODOs nuevos
- Marcar/desmarcar completados
- Eliminar TODOs
- Estadísticas actualizadas

## Aprendizajes Clave
1. **Async/Await en Fetch** - Peticiones HTTP
2. **Form Handling** - Capturar valores de input
3. **Event Handling** - onClick, onSubmit, onChange
4. **State Management** - Actualizar UI automáticamente
5. **Rendering Condicional** - Loading, error, datos

## Para Proyectos Reales
En producción usarías:
- Library como `axios` en lugar de `fetch`
- Context API o Redux para estado global
- Create React App o Vite para build
- Servidor backend real en lugar de JSONPlaceholder
