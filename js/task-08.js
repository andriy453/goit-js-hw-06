const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formElement = e.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  e.currentTarget.reset();
}
