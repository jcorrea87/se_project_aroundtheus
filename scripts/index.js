const initialCards = [
  { name: "Yosemite Valley", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg" },
  { name: "Lake Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg" },
  { name: "Bald Mountains", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg" },
  { name: "Vanoise National Park", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg" },
];

const profileModal = document.querySelector(".modal");
const cardsModal = document.querySelector(".cards-modal");
const imageModal = document.querySelector(".image-modal");
const buttonEdit = document.querySelector("#button-edit");
const buttonAdd = document.querySelector("#add-button");
const imageCloseButton = document.querySelector("#image-button-close");
const profileCloseButton = profileModal.querySelector("#button-close");
const cardsCloseButton = cardsModal.querySelector("#cards-button-close");
/* */
const profileFormElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__input-name");
const jobInput = document.querySelector(".form__input-description");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
/* */
const cardsFormElement = document.querySelector(".cards-form");
const cardsTitleInput = document.querySelector(".cards-form__input-title");
const cardsLinkInput = document.querySelector(".cards-form__input-link");

/* */

function openModalProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameEntry = nameInput.value;
  const jobEntry = jobInput.value;

  profileName.textContent = nameEntry;
  profileJob.textContent = jobEntry;

  closeModal(profileModal);
}
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleCardsFormSubmit(evt) {
  evt.preventDefault();
  const titleEntry = cardsTitleInput.value;
  const linkEntry = cardsLinkInput.value;
  const newCard = getCardElement({ name: titleEntry, link: linkEntry });

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.prepend(newCard);

  document.getElementById("cards-form").reset();

  closeModal(cardsModal);
}
cardsFormElement.addEventListener("submit", handleCardsFormSubmit);

function makeImageModal(data) {
  const modalImage = document.querySelector(".image-modal__image");
  modalImage.src = data.link;
  modalImage.alt = data.name;
  const modalTitle = document.querySelector(".image-modal__caption");
  modalTitle.textContent = data.name;
  openModal(imageModal);
}

function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

function getCardElement(data) {
  const cardTemplate = document.querySelector("#card__template").content;

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__picture");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  const cardTitle = cardElement.querySelector(".card__heading");
  cardTitle.textContent = data.name;

  const likeButton = cardElement.querySelector(".card__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  const trashButton = cardElement.querySelector(".card__delete-button");

  trashButton.addEventListener("click", deleteCard);

  const buttonImage = cardElement.querySelector("#image-button");
  buttonImage.addEventListener("click", () => {
    makeImageModal(data);
  });
  return cardElement;
}

initialCards.forEach(function (item) {
  const card = getCardElement(item);

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.append(card);
});

function openModal(modal) {
  modal.classList.add("modal_opened");
}

buttonEdit.addEventListener("click", () => {
  openModal(profileModal);
});
buttonAdd.addEventListener("click", () => {
  openModal(cardsModal);
});

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

profileCloseButton.addEventListener("click", () => {
  closeModal(profileModal);
});
cardsCloseButton.addEventListener("click", () => {
  closeModal(cardsModal);
});
imageCloseButton.addEventListener("click", () => {
  closeModal(imageModal);
});
