let initialCards = [
  { name: "Yosemite Valley", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg" },
  { name: "Lake Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg" },
  { name: "Bald Mountains", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg" },
  { name: "Vanoise National Park", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg" },
];


const btnEdit = document.querySelector("#btn-edit");
const modalOpen = document.querySelector(".modal");

function openModal () {
  modalOpen.classList.remove("modal_closed");
  nameInput.placeholder=profileName.textContent;
  jobInput.placeholder=profileJob.textContent;
}
btnEdit.addEventListener("click", openModal);

const button = document.querySelector("#btn-close");
const modal = document.querySelector(".modal");

function closeModal () {
  modal.classList.add("modal_closed");
}
button.addEventListener("click", closeModal);

const profileFormElement = document.querySelector(".form");

const nameInput = document.querySelector(".form__input-name");
const jobInput = document.querySelector(".form__input-description");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

 const nameEntry= nameInput.value;
 const jobEntry= jobInput.value;

 profileName.textContent=nameEntry;
 profileJob.textContent=jobEntry;

 closeModal();
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

function getCardElement(data){


  let userTemplate = document.querySelector("#card__template").content;
  let cardDivider = document.querySelector(".card__divider");

  let userElement = userTemplate.querySelector(".card__divider").cloneNode(true);

  userElement.querySelector(".card__picture").src = initialCards.link[0];
  userElement.querySelector(".card__heading").textContent = initialCards.name[0];

  cardDivider.append(userElement);
}

