//выпадающий список
const historyImg = document.querySelector('.history__title-img');
const history = document.querySelector('.history__title');
//лайк
const likeButton = document.querySelector('.offer__like');
const offerButtonCheck = document.querySelector('.offer__menu-icon');
//закрытие и открытие попапов
const popupNotes = document.querySelector('.popup_type_notes');
const popupNotesOpenButton = document.querySelector('.actions-list__item-link');
const popupNotesCloseButton = document.querySelector('.form__button_type_cancel');


//выпадающий список
history.addEventListener('click', () => {
    if(historyImg.getAttribute('src') === './images/arr-close.svg') {
        historyImg.setAttribute('src', './images/arr-open.svg');
        history.classList.add('history__title_open');
    }

    else {
        historyImg.setAttribute('src', './images/arr-close.svg');
        history.classList.remove('history__title_open');
    }
});


//лайк
likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('offer__like_active');
    offerButtonCheck.classList.toggle('offer__menu-icon_active');
});


//функция закрытия popup
function closePopup (popup){
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEsc);
}

// закрытие popup по Esc
function closeByEsc (evt) {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape') {
        closePopup(popupIsOpened);
    }
}

//закрытие по overlay
function closePopupByClickOverlay (evt) {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    if (evt.target === evt.currentTarget){
        closePopup(popupIsOpened);
    }
}

//функция открытия popup
function openPopup (popup){
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeByEsc);
}

popupNotesOpenButton.addEventListener('click', () => openPopup(popupNotes));
popupNotesCloseButton.addEventListener('click', () => closePopup(popupNotes));
popupNotes.addEventListener('click', closePopupByClickOverlay);
