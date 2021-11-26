//import {Card} from '../components/Card.js'
//import {Section} from '../components/Section.js'

const initialCards = [
    {
        name: 'Архыз',
        text: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },

    {
        name: 'Челябинская область',
        text: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },

    {
        name: 'Иваново',
        text: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },

    {
        name: 'Камчатка',
        text: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
];

class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.append(element);
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }
}


class Card {

    constructor(data, cardSelector, handleCardClick) {

        this._name = data.name;
        this._text = data.text;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.projects-carousel__item')
            .cloneNode(true);
        return cardElement;
    }

    //создание карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const cardTitleElement = this._element.querySelector('.projects-carousel__item-title');
        const cardArticleElement = this._element.querySelector('.projects-carousel__item-article');

        cardTitleElement.textContent = this._name;
        cardArticleElement.textContent = this._text;
        return this._element
    }

    //обработчик для кнопок внутри карточки

    _setEventListeners() {

        const cardLinkElement = this._element.querySelector('.projects-carousel__link');


        cardLinkElement.addEventListener('click', (event) => {
            this._handleCardClick(this._name, this._text);
        });
    }
}





//устанавливаем данные для страницы project

function handleCardClick(name, text) {
    localStorage.setItem('articleProject', text);
    localStorage.setItem('titleProject', name);
}


//создание карточки

function createCard (data, template, handleCardClick) {
    const card = new Card(data, template, handleCardClick);
    return card.generateCard();
}



//создание секции

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item, '.projects-carousel-template', handleCardClick));
    }

}, '.projects-carousel');

cardList.renderItems();










// const carouselText = document.querySelector('.projects-carousel__item-text');
// const carouselItem = document.querySelector('.owl-item');
//
// console.log(carouselItem);

// window.addEventListener('load',function()  {
//     const carouselItem = document.querySelectorAll('.owl-item');
//
//     carouselItem.forEach((item) => {
//         if(item.classList.contains('active')) {
//             carouselText.classList.remove('display-none');
//             console.log(item)
//         }
//
//
//
//
//     })


    /*if(!carouselItem.classList.contains('active')) {
        carouselText.classList.add('display-none');
        console.log(carouselItem)
    }
    else {
        carouselText.classList.remove('display-none')
    }*/
//})

