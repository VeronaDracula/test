//выпадающий список
const historyImg = document.querySelector('.history__title-img');
const history = document.querySelector('.history__title');
//лайк
const likeButtonDesktop = document.querySelector('.offer__like_type_desktop');
const likeButtonMobileTop = document.querySelector('.offer__like_type_mobile-top');
const likeButtonMobileFooter = document.querySelector('.offer__like_type_mobile-footer');

const offerButtonCheckDesktop = document.querySelector('.offer__menu-icon_type_desktop');
const offerButtonCheckMobileTop = document.querySelector('.offer__menu-icon_type_mobile-top');
const offerButtonCheckMobileFooter = document.querySelector('.offer__menu-icon_type_mobile-footer');
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
function addLikesAll () {
    likeButtonDesktop.classList.toggle('offer__like_active');
    likeButtonMobileTop.classList.toggle('offer__like_active');
    likeButtonMobileFooter.classList.toggle('offer__like_active');

    offerButtonCheckDesktop.classList.toggle('offer__menu-icon_active');
    offerButtonCheckMobileTop.classList.toggle('offer__menu-icon_active');
    offerButtonCheckMobileFooter.classList.toggle('offer__menu-icon_active');
}

likeButtonDesktop.addEventListener('click', addLikesAll);

likeButtonMobileTop.addEventListener('click', addLikesAll);

likeButtonMobileFooter.addEventListener('click', addLikesAll);


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

//скролл header
$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $(".header__scroll").addClass("header__scroll_active");
    } else {
        $(".header__scroll").removeClass("header__scroll_active");
    }
});

//скролл header
$(window).scroll(function() {
    if ($(document).scrollTop() > 250) {
        $(".footer").addClass("footer_active");
    } else {
        $(".footer").removeClass("footer_active");
    }
});
