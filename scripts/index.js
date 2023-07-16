const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-button');

const popupToggle = function () {
    popup.classList.toggle('popup_opened');
}
popupOpenButton.addEventListener("click", popupToggle);

popupCloseButton.addEventListener("click", popupToggle);

const closePopupByClickingOnOverlay = function (event) {
    if (event.target == event.currentTarget) {
        popupToggle();
    }
};

let formElement = document.querySelector('.popup__container');
let closeButton = document.querySelector('.popup__save-button');

let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input_name');
let jobInput = popup.querySelector('.popup__input_job')


function handleFormSubmit(evt) {
    evt.preventDefault();
    nameInput.value;
    jobInput.value;
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    popupCloseButton.addEventListener('click', function () {
        popup.classList.remove('popup_opened');
    });
}

formElement.addEventListener('submit', handleFormSubmit); 