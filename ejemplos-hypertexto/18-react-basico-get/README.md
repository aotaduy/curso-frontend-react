# React Básico - GET

**Concepto:** Componente React que obtiene datos de una API REST

## Archivo
- `index.html` - Componente React con Hooks

## Conceptos Demostrados
- **Componentes funcionales:** Funciones que retornan JSX
- **Hooks:**
  - `useState()` - Crear estado
  - `useEffect()` - Efectos secundarios (Fetch)
- **JSX:** Mezcla de JavaScript y HTML
- **GET request:** Fetch dentro de useEffect
- **Renderizado condicional:** Loading, error, datos
- **Maps:** Renderizar listas dinámicamente
- **State management:** Actualizar UI automáticamente

## Estructura del Componente
```javascript
function UsuariosList() {
    // 1. Crear estado
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. GET en componente monta
    useEffect(() => {
        fetch('...api...')
            .then(r => r.json())
            .then(data => {
                setUsuarios(data);
                setLoading(false);
            });
    }, []); // [] = ejecutar solo al montar

    // 3. Renderizar según estado
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <ul>
            {usuarios.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
    );
}
```

## Flujo de Datos
```
1. Componente monta
   ↓
2. useEffect corre (GET request)
   ↓
3. setLoading(true) → muestra "Cargando..."
   ↓
4. Datos llegan
   ↓
5. setUsuarios(data) → actualiza estado
   ↓
6. setLoading(false) → rehace el render
   ↓
7. Muestra lista de usuarios
```

## Hooks Explicados
### useState()
```javascript
const [valor, setValor] = useState(inicial);
// valor = valor actual
// setValor = función para actualizar
// inicial = valor por defecto
```

### useEffect()
```javascript
useEffect(() => {
    // Código que corre cuando componente monta o cuando dependencias cambian
}, [dependencias]);

// [] = solo al montar
// [estado] = cuando estado cambia
// nada = cada render (EVITAR)
```

## Ventajas sobre Vanilla JS
- Actualización automática de UI
- Estado centralizado
- Código más limpio y reutilizable
- Mejor manejo de ciclo de vida

## Cómo Crear
Para abrir en navegador:
```bash
# Opción 1: Python
cd 18-react-basico-get
python -m http.server 3000
# Abre http://localhost:3000

# Opción 2: VS Code Live Server
Right-click → Open with Live Server
```

## API Usada
**JSONPlaceholder**
- GET `/users` - Lista de usuarios
- GET `/users/1` - Usuario específico

## Resultado Esperado
- Lista de usuarios que carga de la API
- Click en usuario muestra detalles
- Loading state mientras carga
- Error handling si falla

## Diferencias con Vanilla JS
| Vanilla JS | React |
|---|---|
| Manual DOM update | Automático |
| setState manualmente | useState hook |
| Unsubscribe listeners | Automático con cleanup |
| Más código | Menos código |

## Próximo Concepto
- **Concepto 12:** React CRUD - Crear, leer, actualizar, eliminar TODOs
