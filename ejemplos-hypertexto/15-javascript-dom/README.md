# JavaScript Manipulación del DOM

**Concepto:** Seleccionar y modificar elementos HTML dinámicamente con JavaScript

## Archivo
- `index.html` - Ejemplos de DOM manipulation

## Conceptos Demostrados
- **Seleccionar elementos:**
  - `document.getElementById('id')`
  - `document.querySelector(selector)`
  - `document.querySelectorAll(selector)`

- **Modificar contenido:**
  - `element.textContent` - Texto plano
  - `element.innerHTML` - Contenido con HTML

- **Modificar estilos:**
  - `element.style.color = 'blue'`
  - `element.style.fontSize = '24px'`

- **Manipular clases:**
  - `element.classList.add('clase')`
  - `element.classList.remove('clase')`
  - `element.classList.toggle('clase')`

- **Crear elementos:**
  - `document.createElement('p')`
  - `parent.appendChild(child)`

- **Modificar atributos:**
  - `element.setAttribute('src', 'url')`
  - `element.removeAttribute('alt')`

- **Navegar el árbol DOM:**
  - `element.parentElement`
  - `element.children`
  - `element.firstChild`

## Casos de Uso
- Leer valores de inputs
- Cambiar estilos dinámicamente
- Crear elementos nuevos
- Modificar listas
- Actualizar la página sin recargar

## DOM vs HTML
- **HTML** es el código fuente
- **DOM** es la representación en memoria (árbol de nodos)
- **JavaScript** puede modificar el DOM

## Ejemplo Visual
```
HTML:     <p id="texto">Hola</p>
DOM:      Document → body → p#texto
JS:       document.getElementById('texto').textContent = 'Adiós'
Browser:  Muestra "Adiós"
```

## Cómo Probar
Haz clic en los botones para ver el DOM cambiar en tiempo real.

## Resultado Esperado
- Párrafos que cambian de color y tamaño
- Elementos que se crean dinámicamente
- Listas que se modifican
- Imágenes con atributos que cambian

## Próximos Conceptos
- **Concepto 09:** Eventos (cómo responder a acciones del usuario)
- **Concepto 10:** Fetch (peticiones HTTP)
