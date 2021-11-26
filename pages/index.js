import {Card} from '../components/Card.js'


import {Section} from '../components/Section.js'

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

