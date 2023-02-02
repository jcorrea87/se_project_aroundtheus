const formElement = document.querySelector(".form")

function checkInputValidity(input){
  if (input.validity.valid) {
    removeErrorStyles(input);
  }else{
    addErrorStyles(input);
  }
}

function removeErrorStyles(input){
  input.classList.remove(".input-name-error");
  input.classList.remove(".input-type-error");
}

function addErrorStyles(input){
  input.classList.add(".input-name-error");
  input.classList.add(".input-type-error");
}

checkInputValidity(formElement);