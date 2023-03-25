// Control element
const controlElement = document.querySelector('#font-size-control');

// Span to change font size
const textSpan = document.querySelector('#text');

// Event Listener
controlElement.addEventListener("input", onChange);

// Function
function onChange(){
        textSpan.style.fontSize = controlElement.value +'px';
}