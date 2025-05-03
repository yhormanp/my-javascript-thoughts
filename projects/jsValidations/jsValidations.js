const userNameField = document.querySelector("[name=username]");
const passwordField = document.querySelector("[name=password]");
const emailField = document.querySelector("[name=email]");
const fieldField = document.querySelector("[name=file]")

const validateEmptyField = (e) => {
  const field = e.target;
  const fieldValue = e.currentTarget.value;
  if (fieldValue.length <= 0) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerHTML = `${field.name} is requiered`;
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerHTML = "";
  }
};

const validateEmailFormat = (e) => {
  const field = e.target;
  const fieldValue = e.currentTarget.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (fieldValue.trim().length >= 5 && !regex.test(fieldValue)) {
    console.log("val1");
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerHTML = `${field.name} does not have the right format`;
  } else {
    console.log("val2");
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerHTML = "";
  }
};

userNameField.addEventListener("blur", validateEmptyField);
passwordField.addEventListener("blur", validateEmptyField);
emailField.addEventListener("blur", validateEmptyField);

emailField.addEventListener("input", validateEmailFormat);

fieldField.addEventListener("change", (e) => {
    console.log( e.target.files[0] )


    const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
    console.log('file ex', fileExt)
})
