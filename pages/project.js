//меню
$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $(".header__menu-item-link").addClass("header__menu-item-link_scroll");
        $(".navbar").addClass("navbar_scroll");
        $(".header__phone").addClass("header__phone_scroll");
    } else {
        $(".header__menu-item-link").removeClass("header__menu-item-link_scroll");
        $(".navbar").removeClass("navbar_scroll");
        $(".header__phone").removeClass("header__phone_scroll");
    }
});

const articleElement = document.querySelector('.project-container__text');
const titleElement = document.querySelector('.project-container__title');
const toggleMenuButton = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

//выгрузка данных
articleElement.textContent = localStorage.getItem('articleProject');
titleElement.textContent = localStorage.getItem('titleProject');

//стили открытого меню
toggleMenuButton.addEventListener('click', () => {
    navbar.classList.toggle('navbar_type_open-menu');
    navbar.classList.toggle('navbar_page_project');
    toggleMenuButton.classList.toggle('navbar-toggler_type_open-menu');
});
