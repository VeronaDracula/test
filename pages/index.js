//выпадающий список

const historyImg = document.querySelector('.history__title-img');
const history = document.querySelector('.history__title');

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
const likeButton = document.querySelector('.offer__like');
const offerButtonCheck = document.querySelector('.offer__menu-icon');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('offer__like_active');
    offerButtonCheck.classList.toggle('offer__menu-icon_active');
});

