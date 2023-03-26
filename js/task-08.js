//General form
const form = document.querySelector("form.login-form");

//Event listener
form.addEventListener("submit", onSubmit);

//Function
function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!form.elements.email.value || !form.elements.password.value) {
    alert("All fields must be filled out");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  } 
  // Reset the form
  form.reset();
}



