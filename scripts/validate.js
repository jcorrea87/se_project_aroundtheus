enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});

function enableValidation(setting) {
  const forms = document.querySelectorAll(setting.formSelector)
  forms.forEach((form) => {
    setEventListener(form, setting);
  })
}

function setEventListener(form, setting){
  const inputs = form.querySelectorAll(setting.inputSelector);
  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      checkInputValidity(input);
    })
  })
}


function checkInputValidity(input){
  if (input.validity.valid) {
    removeErrorStyles(input);
  }else{
    addErrorStyles(input);
  }
}

function removeErrorStyles(input){
  input.classList.remove("popup__input_type_error");
  input.classList.remove("popup__error_visible");
}

function addErrorStyles(input){
  input.classList.add("popup__input_type_error");
  input.classList.add("popup__error_visible");
  submitButtonSelector.classList.add("popup__button_disabled");
  submitButtonSelector.disabled = true;
}