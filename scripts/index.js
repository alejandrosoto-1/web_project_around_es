const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach(function (card) {
  console.log(card.name);
});

const openModalInfo = document.querySelector("#edit-popup");
const editBtn = document.querySelector(".profile__edit-button");
const closeBtn = openModalInfo.querySelector(".popup__close"); 

function openModal(modal) {
  modal.classList.add('popup_is-opened');
}

function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
}

editBtn.addEventListener("click", () => {
  openModal(openModalInfo);
});

closeBtn.addEventListener("click", () => {
  closeModal(openModalInfo);
});

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function fillProfileForm() {
  const currentName = profileTitle.textContent;
  const currentJob = profileDescription.textContent;
  nameInput.value = currentName;
  jobInput.value = currentJob;
}

function handleOpenEditModal() {
  fillProfileForm(); 
  openModal(openModalInfo);
}

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(openModalInfo);
};

openModalInfo.addEventListener("submit", handleProfileFormSubmit);