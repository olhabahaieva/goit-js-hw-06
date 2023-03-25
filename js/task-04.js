// counterValue = 0;
let counterValue = 0;
const buttonDecrement = document.querySelector('#counter').firstElementChild;
const buttonIncrement = document.querySelector('#counter').lastElementChild;
let valueElement = document.querySelector('#value');

buttonDecrement.addEventListener("click", onDecrement);
buttonIncrement.addEventListener("click", onIncrement);


function onDecrement(){
    counterValue -= 1;
    valueElement.textContent = counterValue;
}

function onIncrement(){
    counterValue += 1;
    valueElement.textContent = counterValue;
}