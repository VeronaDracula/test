export class Card {

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