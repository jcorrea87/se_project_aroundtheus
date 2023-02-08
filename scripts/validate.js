const formElement = document.querySelector(".popup__form");
const inputElement = formElement.querySelector(".popup__input");
const submitButtonSelector = formElement.querySelector(".popup__button");
const inactiveButtonClass = formElement.querySelector(".popup__button_disabled");
const inputErrorClass = formElement.querySelector(".popup__input_type_error");
const errorClass = formElement.querySelector(".popup__error_visible");

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement);
  }else{
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
};

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
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

const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add(".popup__button_disabled");
    document.getElementsByClassName(".popup__button").disabled=true;
  }else{
    buttonElement.class.remove(".popup__button_disabled");
  }
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formInput.querySelectorAll(".popup__input"));
  const buttonElement = formSelector.querySelector(".popup__button");
inputList.forEach((inputElement) => {
  inputElement.addEventListener("input", () => {
    isValid(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  });
});
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_visible"
});
