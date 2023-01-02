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

  let cardTemplate = document.querySelector("#card__template").content;
  let cardDivider = document.querySelector(".cards");

  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__picture").src = data.link;
  cardElement.querySelector(".card__heading").textContent = data.name;

  return cardElement;
}

for (let i = 0; i < initialCards.length; i++){
  const card = getCardElement(initialCards[i]);
  document.body.append(card);
}

