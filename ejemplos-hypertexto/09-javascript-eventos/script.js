// JavaScript Events - External Script

// 1. Click Event
let clickCount = 0;
document.getElementById('btn-click').addEventListener('click', function() {
    clickCount++;
    let result = document.getElementById('result-click');
    result.innerHTML += `<div class="event-item">✓ Click #${clickCount} detectado</div>`;
});

// 2. Mouse Events (Hover)
let hoverDiv = document.getElementById('hover-demo');

hoverDiv.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#3498db';
    this.style.color = 'white';
    this.textContent = '🎉 ¡Mouse entró!';
    document.getElementById('result-hover').innerHTML += 
        '<div class="event-item">mouseenter: El mouse entró</div>';
});

hoverDiv.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#ecf0f1';
    this.style.color = 'black';
    this.textContent = '👆 Pasa el mouse aquí';
    document.getElementById('result-hover').innerHTML += 
        '<div class="event-item">mouseleave: El mouse salió</div>';
});

// 3. Keyboard Events (Writing)
document.getElementById('input-keyboard').addEventListener('keyup', function(event) {
    let result = document.getElementById('result-keyboard');
    result.innerHTML += `<div class="event-item">
        Escribiste: "<strong>${this.value}</strong>"
    </div>`;
    
    // Limit to last 5 actions
    if (result.children.length > 5) {
        result.removeChild(result.firstChild);
    }
});

// 4. Form Submission
document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents page reload
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    let result = document.getElementById('result-form');
    result.innerHTML = `
        <h3>✅ Formulario Enviado!</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
    result.style.display = 'block';
});

// 5. Change Event
document.getElementById('selector').addEventListener('change', function(event) {
    let value = this.value;
    let result = document.getElementById('result-change');
    
    if (value) {
        result.innerHTML = `<div class="event-item">
            ✓ Seleccionaste: <strong>${value.toUpperCase()}</strong>
        </div>`;
    }
});

// 6. Check/Uncheck (Checkboxes)
let checkboxes = document.querySelectorAll('input[name="languages"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let result = document.getElementById('result-checkbox');
        if (this.checked) {
            result.innerHTML += `<div class="event-item">
                ✓ ${this.value.toUpperCase()} marcado
            </div>`;
        } else {
            result.innerHTML += `<div class="event-item">
                ✗ ${this.value.toUpperCase()} desmarcado
            </div>`;
        }
    });
});

// 7. Event Delegation
let itemCounter = 4;

// Listen on parent container
document.getElementById('dynamic-list-events').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        let result = document.getElementById('result-delegation');
        result.innerHTML += `<div class="event-item">
            ✓ Clickeaste: ${event.target.textContent}
        </div>`;
    }
});

function addEventItem() {
    let li = document.createElement('li');
    li.textContent = 'Item ' + itemCounter;
    document.getElementById('dynamic-list-events').appendChild(li);
    itemCounter++;
}

// 8. Focus and Blur Events
let inputFocus = document.getElementById('input-focus');

inputFocus.addEventListener('focus', function() {
    this.style.borderColor = '#27ae60';
    this.style.borderWidth = '2px';
    document.getElementById('result-focus').innerHTML = 
        '<div class="event-item">✓ Input enfocado</div>';
});

inputFocus.addEventListener('blur', function() {
    this.style.borderColor = '#ddd';
    this.style.borderWidth = '1px';
    document.getElementById('result-focus').innerHTML += 
        '<div class="event-item">✗ Input desenfocado</div>';
});

// 9. Window Events
function showWindowData() {
    let result = document.getElementById('result-window');
    result.innerHTML = `
        <div class="event-item">Width: ${window.innerWidth}px</div>
        <div class="event-item">Height: ${window.innerHeight}px</div>
        <div class="event-item">URL: ${window.location.href}</div>
    `;
    result.style.display = 'block';
}

// Listen for resize in real time
window.addEventListener('resize', function() {
    console.log('Window redimensionado:', this.innerWidth, 'x', this.innerHeight);
});

// 10. Event Bubbling
document.getElementById('parent-bubbling').addEventListener('click', function() {
    document.getElementById('result-bubbling').innerHTML += 
        '<div class="event-item">👨 Click en PADRE</div>';
});

document.getElementById('child-bubbling').addEventListener('click', function(event) {
    // event.stopPropagation();  // Uncomment to stop bubbling
    document.getElementById('result-bubbling').innerHTML += 
        '<div class="event-item">👶 Click en HIJO</div>';
});
