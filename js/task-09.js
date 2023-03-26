// Button Element
const button = document.querySelector('button.change-color');

// Span Text
const text = document.querySelector('span.color');

//Event Listener
button.addEventListener("click", getRandomHexColor);

//Function
function getRandomHexColor() {
  const color = Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0);
  // return `#${Math.floor(Math.random() * 16777215)
  //   .toString(16)
  //   .padStart(6, 0)}`;
    document.body.style.backgroundColor = '#' + color;
    text.textContent = '#' + color;
}
