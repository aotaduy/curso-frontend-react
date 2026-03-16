# JavaScript Eventos

**Concepto:** Detectar y responder a acciones del usuario (clicks, escritura, etc.)

## Archivo
- `index.html` - Ejemplos de event listeners

## Conceptos Demostrados
- **Click Event:** `addEventListener('click', callback)`
- **Mouse Events:** `mouseenter`, `mouseleave`, `mousemove`
- **Keyboard Events:** `keyup`, `keydown`, `keypress`
- **Form Events:** `submit`, `change`
- **Input Events:** `focus`, `blur`
- **Window Events:** `resize`, `scroll`, `load`
- **Event Delegation:** Escuchar en elemento padre
- **Event Bubbling:** Propagación de eventos hacia arriba
- **preventDefault():** Evitar comportamiento por defecto

## Sintaxis Básica
```javascript
elemento.addEventListener('click', function() {
    console.log('Clickeado!');
});

// Con arrow function
elemento.addEventListener('click', () => {
    console.log('Clickeado!');
});
```

## Eventos Comunes
| Evento | Cuándo Ocurre |
|---|---|
| `click` | Clic del mouse |
| `mouseenter` | Mouse entra al elemento |
| `mouseleave` | Mouse sale del elemento |
| `keyup` | Se suelta una tecla |
| `submit` | Se envía un formulario |
| `change` | Un select o checkbox cambia |
| `focus` | Un input recibe el foco |
| `blur` | Un input pierde el foco |

## Event Object
El callback recibe un `event` object con información:
```javascript
elemento.addEventListener('click', (event) => {
    console.log(event.target);      // Elemento clickeado
    console.log(event.type);        // 'click'
    event.preventDefault();         // Prev default behavior
    event.stopPropagation();        // Detiene bubbling
});
```

## Caso de Uso: Forma de Contacto
1. Usuario rellena formulario
2. Submit trigger evento `submit`
3. JavaScript previene recarga con `preventDefault()`
4. Valida datos
5. Envía con Fetch (concepto 10)

## Resultado Esperado
- Clics detectados
- Hover effects
- Formularios funcionales
- Checkboxes que marcan/desmarcan
- Listas dinámicas

## Próximos Conceptos
- **Concepto 10:** Fetch API (enviar datos al servidor)
- **Concepto 11:** React (manejar eventos de manera automática)
