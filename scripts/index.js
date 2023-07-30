const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__info')
let cardName = document.querySelector('.profile__title');
let cardJob = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input_info_name');
let jobInput = popup.querySelector('.popup__input_info_job');

const closePopup = function () {
    popup.classList.remove('popup_opened');
}

const popupAdd = function () {
    popup.classList.add('popup_opened');
    nameInput.value = cardName.textContent;
    jobInput.value = cardJob.textContent;
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let jobValue = jobInput.value;
    cardName.textContent = nameValue;
    cardJob.textContent = jobValue;
    closePopup();
}


formElement.addEventListener('submit', handleFormSubmit);

popupOpenButton.addEventListener('click', popupAdd);

popupCloseButton.addEventListener('click', closePopup);