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
- **06b-css-variables**: Variables CSS (custom properties) para theming y reutilizacion

### JavaScript
- **07-javascript-good-parts**: Loose typing, objetos dinamicos, funciones de orden superior y herencia prototipica
- **08-javascript-bad-parts-truthy-falsy**: Tabla de truthy/falsy y coercion implicita
- **09-javascript-funciones-anonimas-lambda**: Funciones anonimas y arrow functions
- **10-javascript-closures**: Alcance lexico y estado privado
- **11-javascript-promesas**: Programacion asincrona con Promise
- **12-javascript-async-await**: Sintaxis moderna para asincronia
- **13-javascript-json**: JSON como formato de intercambio de datos
- **14-javascript-set-map**: Estructuras de datos Set y Map
- **15-javascript-dom**: Manipulación del Document Object Model
- **16-javascript-eventos**: Event listeners y manejo de eventos
- **17-javascript-fetch-api**: solicitudes HTTP asíncronas con Fetch API

### Frameworks (React)
- **18-react-basico-get**: Componente simple que GET datos de un API
- **19-react-crud-todolist**: Aplicación TODO con GET y POST

---

## Cómo usar estos ejemplos

### Archivos HTML/CSS/JS puros
1. Abre directamente en navegador: `Archivo > Abrir` o double-click
2. Abre Developer Tools (F12) para ver console.logs y Networks tab

### Ejemplos de React
Requieren ejecutar un servidor HTTP (no funciona `file://` por CORS):

**Opción 1: Con Python**
```bash
cd ejemplos-hypertexto/18-react-basico-get
python -m http.server 8000
# Abre http://localhost:8000
```

**Opción 2: Con Node.js (http-server)**
```bash
npm install -g http-server
cd ejemplos-hypertexto/18-react-basico-get
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

## Notas

- Todos los ejemplos son **intencionales variaciones simples** para entender conceptos
- Los ejemplos de React usan CDN (Babel + React library) para evitar builds
- JSONPlaceholder es un servicio público; no requiere autenticación pero tiene límites
- Los ejemplos de React no usan Create React App ni bundlers (para mantener simplicidad pedagógica)
