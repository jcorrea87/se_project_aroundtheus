const initialCards = [
  { name: "Yosemite Valley", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg" },
  { name: "Lake Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg" },
  { name: "Bald Mountains", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg" },
  { name: "Vanoise National Park", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg" },
];

const btnEdit = document.querySelector("#btn-edit");
const btnAdd = document.querySelector("#add-button");
const profileModal = document.querySelector(".modal");
const profileCardsModal = document.querySelector(".cards-modal");

function openCardsModal() {
  profileCardsModal.classList.remove("cards-modal_closed");
}
btnAdd.addEventListener("click", openCardsModal);

function openModal() {
  profileModal.classList.remove("modal_closed");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
btnEdit.addEventListener("click", openModal);

const profileModalCloseButton = profileModal.querySelector("#btn-close");
const profileCardsModalCloseButton = profileCardsModal.querySelector("#cards-btn-close");

function closeModal() {
  profileModal.classList.add("modal_closed");
}
profileModalCloseButton.addEventListener("click", closeModal);

function closeCardsModal() {
  profileCardsModal.classList.add("cards-modal_closed");
}
profileCardsModalCloseButton.addEventListener("click", closeCardsModal);

/* */

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

/**/

const cardsFormElement = document.querySelector(".cards-form");

const cardsTitleInput = document.querySelector(".cards-form__input-title");
const cardsLinkInput = document.querySelector(".cards-form__input-link");

function handleCardsFormSubmit(evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector("#card__template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const titleEntry = cardsTitleInput.value;
  const linkEntry = cardsLinkInput.value;

  const cardImage = cardElement.querySelector(".card__picture");
  cardImage.src = linkEntry;
  cardImage.alt = titleEntry;
  const cardTitle = cardElement.querySelector(".card__heading");
  cardTitle.textContent = titleEntry;

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.prepend(cardElement);

  closeCardsModal();

}

cardsFormElement.addEventListener("submit", handleCardsFormSubmit);

/* */
function getCardElement(data) {
  const cardTemplate = document.querySelector("#card__template").content;
  const cardsContainer = document.querySelector(".cards");

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
  function deleteCard(){
    cardElement.remove();
  }
  trashButton.addEventListener("click", deleteCard);

  const imageButton = document.querySelector("#image-button");
  const modalClass = document.querySelector(".image-modal");

  function openImageModal() {
    modalClass.classList.remove("image-modal_closed");
  }
  imageButton.addEventListener("click", openImageModal);

  const imageCloseButton = document.querySelector("#image-btn-close");

  function closeImageModal() {
    modalClass.classList.add("image-modal_closed");
  }
  imageCloseButton.addEventListener("click", closeImageModal);

  return cardElement;
}

initialCards.forEach(function(item) {
  const card = getCardElement(item);

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.append(card);
});
/*
const imageButton = document.querySelector("#image-button");
const modalClass = document.querySelector(".image-modal");

function openImageModal() {
  modalClass.classList.remove("image-modal_closed");
}
imageButton.addEventListener("click", openImageModal);

const imageCloseButton = document.querySelector("#image-btn-close");

function closeImageModal() {
  modalClass.classList.add("image-modal_closed");
}
imageCloseButton.addEventListener("click", closeImageModal);
*/
