# React SPA con Vite

## Introducción

### ¿Qué es una SPA (Single Page Application)?

Una SPA (Aplicación de Página Única) es una aplicación web que carga un único archivo HTML y actualiza dinámicamente su contenido mediante JavaScript sin recargar la página completa. React es una librería ideal para construir SPAs porque maneja eficientemente los cambios de estado y actualiza solo las partes de la UI que cambiaron.

### ¿Qué es Vite?

Vite es un herramienta de build (construcción) y desarrollo rápida creada por Evan You, autor de Vue.js. Usa ES modules nativos del navegador para desarrollo y Rollup para producción, logrando tiempos de inicio de servidor casi instantáneos y recarga en caliente (hot reload) ultrarrápida.

### Historia

React fue creado por Facebook en 2013. Vite fue lanzado en 2020 como alternativa más rápida a Webpack. En poco tiempo se convirtió en la herramienta preferida para crear proyectos modernos de React porque elimina buena parte de la complejidad de configuración.

### Conceptos Clave

- **SPA**: aplicación web que no recarga la página, cargan recursos dinámicamente
- **Build tool**: herramienta que procesa código, dependencias y assets para producción
- **Hot Module Replacement (HMR)**: recarga automática del navegador cuando cambias código
- **Module bundler**: agrupa módulos JavaScript y sus dependencias en uno o pocos archivos

---

## Stack de herramientas necesarias

### Node.js y npm

**Node.js** es un entorno de ejecución de JavaScript fuera del navegador. **npm** (Node Package Manager) es el gestor de paquetes oficial que viene con Node y permite descargar, instalar y gestionar librerías.

**Conceptos Clave**

- **Node.js**: JavaScript en el servidor y en herramientas de desarrollo
- **npm**: gestor de paquetes para JavaScript
- **yarn** y **pnpm**: alternativas a npm (más rápidos, mejor manejo de dependencias)
- **package.json**: archivo que lista las dependencias del proyecto y scripts disponibles
- **node_modules**: carpeta que contiene todas las dependencias instaladas

### Instalación de herramientas

#### Windows

**1. Instalar Node.js y npm**

Descargá desde [nodejs.org](https://nodejs.org) la versión LTS (recomendada).

- Abrí el instalador y seguí el asistente.
- Asegurate de marcar: `Add to PATH` para que npm sea accesible desde cmd.
- Verificá la instalación en PowerShell o cmd:

```cmd
node --version
npm --version
```

**2. Instalar Git**

Descargá desde [git-scm.com](https://git-scm.com) el instalador para Windows.

- Seguí el asistente, recomendamos opción por defecto.
- Verificá en PowerShell:

```cmd
git --version
```

#### macOS/Linux

**1. Instalar Node.js y npm**

La forma más simple es con **Homebrew**:

**Linux/macOS (bash)**

```bash
brew install node
```

O descargá desde [nodejs.org](https://nodejs.org).

Verificá:

**Linux/macOS (bash)**

```bash
node --version
npm --version
```

**2. Instalar Git**

**Linux/macOS (bash)**

```bash
brew install git
```

Verificá:

**Linux/macOS (bash)**

```bash
git --version
```

---

## Crear un proyecto React con Vite

### Paso 1: Generar el proyecto

**Windows (cmd)**

```cmd
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto
```

**macOS/Linux (bash)**

```bash
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto
```

Este comando:
- Crea una carpeta `mi-proyecto`
- Instala la estructura básica de React + Vite
- Agrega `package.json` con dependencias

### Paso 2: Instalar dependencias

**Windows (cmd)**

```cmd
npm install
```

**macOS/Linux (bash)**

```bash
npm install
```

Esto descarga todas las librerías listadas en `package.json`.

### Paso 3: Iniciar el servidor de desarrollo

**Windows (cmd)**

```cmd
npm run dev
```

**macOS/Linux (bash)**

```bash
npm run dev
```

Abrí tu navegador en `http://localhost:5173` (o el puerto que indique la terminal). Verás la aplicación React funcionando.

**Cambios en vivo**: si editás cualquier archivo en `src/`, la página se actualiza automáticamente.

---

## Estructura del proyecto

```
mi-proyecto/
├── node_modules/           # Librerías instaladas (no commits a Git)
├── public/                 # Assets estáticos (imágenes, etc.)
├── src/
│   ├── App.jsx            # Componente raíz
│   ├── App.css            # Estilos de App
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite (generalmente no necesita cambios)
└── .gitignore            # Archivos que Git ignora
```

---

## Integración con Git

### Paso 1: Inicializar repositorio local

**Windows (cmd)**

```cmd
git init
git add .
git commit -m "Initial React + Vite project"
```

**macOS/Linux (bash)**

```bash
git init
git add .
git commit -m "Initial React + Vite project"
```

El archivo `.gitignore` (generado automáticamente) ya excluye `node_modules/` y otros archivos innecesarios.

### Paso 2: Crear repositorio en GitHub

1. Creá una cuenta en [github.com](https://github.com) si no la tenés.
2. Clickeá en `+` (arriba a la derecha) → `New repository`.
3. Nombrá el repositorio (ej: `mi-proyecto`).
4. No inicialices con README, .gitignore ni licencia (ya tenés).
5. Clickeá `Create repository`.

GitHub te mostrará comandos. Usá estos (reemplazá `usuario` y `mi-proyecto`):

**Windows (cmd)**

```cmd
git remote add origin https://github.com/usuario/mi-proyecto.git
git branch -M main
git push -u origin main
```

**macOS/Linux (bash)**

```bash
git remote add origin https://github.com/usuario/mi-proyecto.git
git branch -M main
git push -u origin main
```

### Paso 3: Flujo de versionado (diario)

Mientras desarrollás:

**Windows (cmd)**

```cmd
git add .
git commit -m "feat: add login component"
git push origin main
```

**macOS/Linux (bash)**

```bash
git add .
git commit -m "feat: add login component"
git push origin main
```

---

## Desarrollo local

### Scripts disponibles

El archivo `package.json` contiene scripts que podés ejecutar:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Comandos principales

**Desarrollar (servidor local con HMR)**

**Windows (cmd)**

```cmd
npm run dev
```

**macOS/Linux (bash)**

```bash
npm run dev
```

Abrí `http://localhost:5173` en el navegador.

**Construir para producción**

**Windows (cmd)**

```cmd
npm run build
```

**macOS/Linux (bash)**

```bash
npm run build
```

Genera una carpeta `dist/` con código optimizado listo para desplegar.

**Previsualizar build de producción**

**Windows (cmd)**

```cmd
npm run preview
```

**macOS/Linux (bash)**

```bash
npm run preview
```

---

## Flujo recomendado: desarrollo → GitHub

### Checklist diario

1. **Iniciar sesión**

**Windows (cmd)**

```cmd
npm run dev
```

**macOS/Linux (bash)**

```bash
npm run dev
```

2. **Trabajar en features** con ramas (branches):

**Windows (cmd)**

```cmd
git switch -c feature/nueva-funcionalidad
```

**macOS/Linux (bash)**

```bash
git switch -c feature/nueva-funcionalidad
```

3. **Hacer commits frecuentes** con mensajes claros:

**Windows (cmd)**

```cmd
git add src/components/LoginForm.jsx
git commit -m "feat: add login form component"
```

**macOS/Linux (bash)**

```bash
git add src/components/LoginForm.jsx
git commit -m "feat: add login form component"
```

4. **Subir rama a GitHub**:

**Windows (cmd)**

```cmd
git push -u origin feature/nueva-funcionalidad
```

**macOS/Linux (bash)**

```bash
git push -u origin feature/nueva-funcionalidad
```

5. **Abrir pull request en GitHub**, recibir feedback, mergear a `main`.

---

## Conceptos clave de package.json

### Definición

`package.json` es un archivo JSON que describe tu proyecto: nombre, versión, dependencias y scripts ejecutables.

### Conceptos Clave

- **dependencies**: librerías necesarias para ejecutar la app (ej: React)
- **devDependencies**: herramientas solo para desarrollo (ej: Vite, testing)
- **scripts**: comandos que podés ejecutar con `npm run nombre`
- **version**: versión del proyecto (ej: 1.0.0)

### Ejemplo simplificado

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.0"
  }
}
```

---

## Instalar librerías adicionales

Si querés agregar una librería (ej: React Router para navegación):

**Windows (cmd)**

```cmd
npm install react-router-dom
```

**macOS/Linux (bash)**

```bash
npm install react-router-dom
```

Esto:
- Descarga la librería
- Actualiza `package.json`
- Agrega a `node_modules/`

**Nota**: no commiteás `node_modules`. Solo `package.json` y `package-lock.json` van a Git. Otro dev corre `npm install` y obtiene las mismas veriones.

---

## Resumen

- **Node.js y npm**: infraestructura de desarrollo necesaria
- **Vite**: herramienta rápida para crear SPAs modernas
- **React**: librería para componentes UI
- **package.json**: describe dependencias y scripts del proyecto
- **Git + GitHub**: versionado y colaboración
- **npm run dev**: desarrollo local con recarga instantánea
- **npm run build**: optimización para producción

Este apéndice funciona como introducción práctica para armar, versionear y desplegar un proyecto React moderno desde cero.
