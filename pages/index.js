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
        this._name = data.title;
        this._text = data.body;
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


class Api {

    headers = {
        'Content-Type': 'application/json',
    }

    constructor(config) {
        this._url = config.url;
    }

    getCards () {
        return fetch(this._url, {
            headers: this.headers
        }).then((response) => response.json())
            .then((json) => {
                return json
            })
            .catch(err => console.log(err))
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

//создание карусели
function initializationCarousel () {
    var owl = $(".projects-carousel");
    owl.owlCarousel({
        responsive:{
            0:{
                items: 1,
                stagePadding: 0,
            },
            993: {
                items: 1,
                stagePadding: 180,
            }
        },

        loop: true
    });

    $(".carousel-arrow_type_right").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".carousel-arrow_type_left").click(function(){
        owl.trigger("prev.owl.carousel");
    });

    $(".carousel-arrow-mobile_type_right").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".carousel-arrow-mobile_type_left").click(function(){
        owl.trigger("prev.owl.carousel");
    });
}



const url = {
    url: 'https://jsonplaceholder.typicode.com/posts'
}

const api = new Api(url);


api
    .getCards()
    .then(data => {
        const cardList = new Section({
            items: data,
            renderer: (item) => {
                cardList.addItem(createCard(item, '.projects-carousel-template', handleCardClick));
            }
        }, '.projects-carousel');

        cardList.renderItems();

    })
    .catch(err => console.log(err))
    .finally(() => {
        initializationCarousel ();
    });



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

