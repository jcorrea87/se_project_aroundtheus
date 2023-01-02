const initialCards = [
  { name: "Yosemite Valley", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg" },
  { name: "Lake Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg" },
  { name: "Bald Mountains", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg" },
  { name: "Vanoise National Park", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg" },
];

const btnEdit = document.querySelector("#btn-edit");
const profileModal = document.querySelector(".modal");

function openModal() {
  profileModal.classList.remove("modal_closed");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
btnEdit.addEventListener("click", openModal);

const profileModalCloseButton = profileModal.querySelector("#btn-close");

function closeModal() {
  profileModal.classList.add("modal_closed");
}
profileModalCloseButton.addEventListener("click", closeModal);

const profileFormElement = document.querySelector(".form");

const nameInput = document.querySelector(".form__input-name");
const jobInput = document.querySelector(".form__input-description");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameEntry = nameInput.value;
  const jobEntry = jobInput.value;

  profileName.textContent = nameEntry;
  profileJob.textContent = jobEntry;

  closeModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function getCardElement(data) {
  const cardTemplate = document.querySelector("#card__template").content;
  const cardsContainer = document.querySelector(".cards");

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__picture");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  const cardTitle = cardElement.querySelector(".card__heading");
  cardTitle.textContent = data.name;

  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const card = getCardElement(initialCards[i]);

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.append(card);
}