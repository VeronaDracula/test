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

articleElement.textContent = localStorage.getItem('articleProject');
titleElement.textContent = localStorage.getItem('titleProject');
