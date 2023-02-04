const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement);
  }else{
    hideInputError(formElement, inputElement);
  }
}

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.classList.add("popup__error_visible");
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("popup__error_visible");
}

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__form"));
  inputList.forEach((inputElement) => {
    inputElement.addEVentListener("input", () => {
      isValid(formElement, inputElement)
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener ("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListener(formElement);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});
