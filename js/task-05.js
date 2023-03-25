//text from input
const inputElement = document.querySelector('#name-input')

//element where to replace the text
const elementOutput = document.querySelector('#name-output');

// default value for elementOutput
const defaultTextContent = elementOutput.textContent;

//event listener
inputElement.addEventListener("input", onInput);


//function
function onInput(){
    if (inputElement.value.trim().length > 0){
        elementOutput.textContent = inputElement.value.trim();
    } else {
        elementOutput.textContent = defaultTextContent;
    }
    
}