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
  profileCardsModal.classList.add("cards-modal_opened");
}
btnAdd.addEventListener("click", openCardsModal);

function openModal() {
  profileModal.classList.add("modal_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
btnEdit.addEventListener("click", openModal);

const profileModalCloseButton = profileModal.querySelector("#btn-close");
const profileCardsModalCloseButton = profileCardsModal.querySelector("#cards-btn-close");

function closeModal() {
  profileModal.classList.remove("modal_opened");
}
profileModalCloseButton.addEventListener("click", closeModal);

function closeCardsModal() {
  profileCardsModal.classList.remove("cards-modal_opened");
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
  const titleEntry = cardsTitleInput.value;
  const linkEntry = cardsLinkInput.value;
  const newCard = getCardElement({ name: titleEntry, link: linkEntry });

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.prepend(newCard);

  document.getElementById("cards-form").reset();

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
  function deleteCard() {
    cardElement.remove();
  }
  trashButton.addEventListener("click", deleteCard);

  const imageButton = cardElement.querySelector("#image-button");
  const imageModal = document.querySelector(".image-modal");

  function openImageModal() {
    imageModal.classList.add("image-modal_opened");
    const modalImage = document.querySelector(".image-modal__image");
    modalImage.src = data.link;
    modalImage.alt = data.name;
    const modalTitle = document.querySelector(".image-modal__caption");
    modalTitle.textContent = data.name;
  }
  imageButton.addEventListener("click", openImageModal);

  const imageCloseButton = document.querySelector("#image-btn-close");

  function closeImageModal() {
    imageModal.classList.remove("image-modal_opened");
  }
  imageCloseButton.addEventListener("click", closeImageModal);

  return cardElement;
}

initialCards.forEach(function (item) {
  const card = getCardElement(item);

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.append(card);
});