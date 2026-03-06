# Ejemplos de Código - Hipertexto y Tecnologías Web Frontend

Carpeta con ejemplos funcionales y simples de los conceptos del archivo `Hypertexto.md`. Cada carpeta contiene uno o más archivos demostrando un concepto específico.

## Estructura de Carpetas

### HTML
- **01-html-basico**: Documento HTML mínimo con estructura
- **02-html-estructura-semantica**: HTML semántico con etiquetas significativas

### CSS
- **03-css-inline**: Estilos CSS en línea (atributo `style`)
- **04-css-archivo-externo**: CSS en archivo separado (mejor práctica)
- **05-css-layout-flexbox**: Layout responsive con Flexbox
- **06-css-layout-grid**: Layout 2D con CSS Grid

### JavaScript
- **07-javascript-variables-funciones**: Variables, tipos, operaciones
- **08-javascript-dom**: Manipulación del Document Object Model
- **09-javascript-eventos**: Event listeners y manejo de eventos
- **10-javascript-fetch-api**: Peticiones HTTP asíncronas con Fetch API

### Frameworks (React)
- **11-react-basico-get**: Componente simple que GET datos de un API
- **12-react-crud-todolist**: Aplicación TODO con GET y POST

---

## Cómo usar estos ejemplos

### Archivos HTML/CSS/JS puros
1. Abre directamente en navegador: `Archivo > Abrir` o double-click
2. Abre Developer Tools (F12) para ver console.logs y Networks tab

### Ejemplos de React
Requieren ejecutar un servidor HTTP (no funciona `file://` por CORS):

**Opción 1: Con Python**
```bash
cd ejemplos-hypertexto/11-react-basico-get
python -m http.server 8000
# Abre http://localhost:8000
```

**Opción 2: Con Node.js (http-server)**
```bash
npm install -g http-server
cd ejemplos-hypertexto/11-react-basico-get
http-server
```

**Opción 3: Con VS Code Extension (Live Server)**
- Instala "Live Server" en VS Code
- Click derecho > "Open with Live Server"

---

## APIs Usadas (Mock Data)

### JSONPlaceholder
Servicio gratuito que proporciona datos ficticios para pruebas:

- **GET /posts** - Lista de posts de blog (100 registros)
- **GET /users** - Lista de usuarios (10 registros)
- **GET /todos** - Lista de tareas (200 registros)
- **POST /posts** - Crear un post (dummy, retorna ID 101)
- **PUT /todos/1** - Actualizar una tarea

**Documentación**: https://jsonplaceholder.typicode.com

---

## Progresión Sugerida para la Clase

1. **01 HTML Básico** - Mostrar estructura mínima
2. **02 HTML Semántico** - Explicar `<header>`, `<nav>`, `<article>`, etc.
3. **03-04 CSS** - Mostrar diferencias entre inline y externo
4. **05-06 Layouts CSS** - Demostrar Flexbox y Grid responsivos
5. **07-10 JavaScript** - Probar en la console del navegador
6. **API Demo en vivo** - Mostrar Network tab mientras cargan datos
7. **11 React GET** - Primer componente con useEffect
8. **12 React CRUD** - Aplicación TODO interactiva

---

## Conceptos Clave Demostrados

| Concepto | Ejemplo | Archivo |
|----------|---------|---------|
| Etiquetas HTML | `<h1>`, `<p>`, `<a>` | 01-html-basico |
| Semántica | `<header>`, `<nav>`, `<article>` | 02-html-estructura-semantica |
| CSS Inline | `style="color: blue;"` | 03-css-inline |
| CSS Externo | `<link rel="stylesheet" href="styles.css">` | 04-css-archivo-externo |
| Flexbox | `display: flex;` | 05-css-layout-flexbox |
| Grid | `display: grid;` | 06-css-layout-grid |
| Variables JS | `let`, `const`, tipos dinámicos | 07-javascript-variables-funciones |
| Funciones | Declaración, arrow functions | 07-javascript-variables-funciones |
| DOM Selection | `querySelector()`, `getElementById()` | 08-javascript-dom |
| DOM Modification | `textContent`, `innerHTML`, `classList` | 08-javascript-dom |
| Event Listeners | `addEventListener()` | 09-javascript-eventos |
| Async/Await | `fetch()`, `await response.json()` | 10-javascript-fetch-api |
| React Hooks | `useState()`, `useEffect()` | 11-react-basico-get |
| React Forms | Form submission, controlled inputs | 12-react-crud-todolist |

---

## Notas

- Todos los ejemplos son **intencionales variaciones simples** para entender conceptos
- Los ejemplos de React usan CDN (Babel + React library) para evitar build complexity
- JSONPlaceholder es un servicio público; no requiere autenticación pero tiene límites
- Los ejemplos de React no usan Create React App ni bundlers (para mantener simplicidad pedagógica)
