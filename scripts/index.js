const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__container');
let closeButton = document.querySelector('.popup__save-button');

let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input_name');
let jobInput = popup.querySelector('.popup__input_job')

const popupToggle = function () {
    popup.classList.toggle('popup_opened');
    let profileTitle = document.querySelector('.profile__title').textContent;
    document.querySelector('.popup__input_name').value = profileTitle;
    let profileSubtitle = document.querySelector('.profile__subtitle').textContent;
    document.querySelector('.popup__input_job').value = profileSubtitle;
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

popupOpenButton.addEventListener("click", popupToggle);

popupCloseButton.addEventListener("click", popupToggle);