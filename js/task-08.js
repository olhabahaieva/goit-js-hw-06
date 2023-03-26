//General form
const form = document.querySelector("form.login-form");

//Event listener
form.addEventListener("submit", onSubmit);

//Function
function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert("All fields must be filled out");
    // Reset the form
    form.reset();
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
}
