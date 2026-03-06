// JavaScript DOM - External Script

// 1. Select Elements
function selectElements() {
    // Select by ID
    let paragraph = document.getElementById('paragraph-demo');
    console.log('By ID:', paragraph);

    // Select by class
    let demoBoxes = document.querySelectorAll('.demo-section');
    console.log('All sections:', demoBoxes);

    // querySelector (similar to CSS)
    let firstBtn = document.querySelector('button');
    console.log('First button:', firstBtn);

    document.getElementById('result-select').innerHTML = 
        '✅ Verifica la consola (F12) para ver los elementos seleccionados';
}

// 2. Change Content
function changeContent() {
    document.getElementById('content-text').textContent = 
        '✨ Contenido modificado con textContent';
}

function changeHTML() {
    document.getElementById('content-text').innerHTML = 
        '🎨 Contenido con <strong>HTML</strong> incluido';
}

function resetContent() {
    document.getElementById('content-text').textContent = 'Texto original';
}

// 3. Change Styles
function changeColor() {
    document.getElementById('style-demo').style.color = '#3498db';
}

function changeFontSize() {
    document.getElementById('style-demo').style.fontSize = '24px';
}

function changeBackground() {
    document.getElementById('style-demo').style.backgroundColor = '#fff9e6';
    document.getElementById('style-demo').style.padding = '15px';
}

function resetStyles() {
    let p = document.getElementById('style-demo');
    p.style.color = 'black';
    p.style.fontSize = '16px';
    p.style.backgroundColor = 'transparent';
}

// 4. Add/Remove Classes
function addClass() {
    document.getElementById('class-demo').classList.add('highlighted');
}

function removeClass() {
    document.getElementById('class-demo').classList.remove('highlighted');
}

function toggleClass() {
    document.getElementById('class-demo').classList.toggle('highlighted');
}

// 5. Create New Elements
function createParagraph() {
    let paragraph = document.createElement('p');
    paragraph.textContent = '📝 Párrafo creado dinámicamente';
    paragraph.style.color = '#27ae60';
    document.getElementById('dynamic-container').appendChild(paragraph);
}

function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Botón dinámico';
    button.onclick = function() { alert('¡Hice clic!'); };
    document.getElementById('dynamic-container').appendChild(button);
}

function clearContainer() {
    document.getElementById('dynamic-container').innerHTML = '';
}

// 6. Modify Attributes
function changeImage() {
    let img = document.getElementById('myImage');
    img.src = 'https://via.placeholder.com/150/3498db';
    img.alt = 'Nueva imagen';
}

function changeTitle() {
    document.getElementById('myImage').title = 'Imagen modificada dinámicamente';
    document.getElementById('myImage').setAttribute('data-info', 'Atributo personalizado');
    alert('Atributos modificados. Pasa el mouse sobre la imagen.');
}

// 7. Add/Remove List Items
let itemCounter = 4;

function addItem() {
    let li = document.createElement('li');
    li.textContent = 'Elemento ' + itemCounter;
    document.getElementById('dynamicList').appendChild(li);
    itemCounter++;
}

function removeLastItem() {
    let list = document.getElementById('dynamicList');
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
    }
}

function clearList() {
    document.getElementById('dynamicList').innerHTML = '';
    itemCounter = 1;
}

// 8. Read Input Values
function readValue() {
    let value = document.getElementById('myInput').value;
    let result = document.getElementById('result-input');
    result.innerHTML = '✅ Valor ingresado: <strong>' + value + '</strong>';
    result.style.display = 'block';
}

// 9. Iterate Over Elements
function iterateList() {
    let items = document.querySelectorAll('#iterate-list li');
    console.log("Total de items:", items.length);
    
    items.forEach((item, index) => {
        console.log((index + 1) + ".", item.textContent);
    });
}

// 10. Find Parent Element
function findParent() {
    let p = document.getElementById('special-paragraph');
    let parent = p.parentElement;
    console.log('Elemento:', p.textContent);
    console.log('Padre:', parent);
    console.log('Abuelo:', parent.parentElement);
    
    parent.style.backgroundColor = '#d4edda';
    alert('Padre encontrado y coloreado. Mira la consola.');
}
