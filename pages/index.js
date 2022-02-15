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