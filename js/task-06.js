const inputElement = document.querySelector("#validation-input");

//Event Listener
inputElement.addEventListener("blur", onInput);

//Function
function onInput() {
  const inputValue = inputElement.value.length;
  const requiredLength = inputElement.dataset.length;

  if (inputValue === parseInt(requiredLength)) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
}
