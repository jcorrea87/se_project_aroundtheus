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
}
btnEdit.addEventListener("click", openModal);

const button = document.querySelector("#btn-close");
const modal = document.querySelector(".modal");

function closeModal () {
  modal.classList.add("modal_closed");
}
button.addEventListener("click", closeModal);