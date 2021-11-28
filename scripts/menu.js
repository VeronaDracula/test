const toggleMenuButton = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const logoImage = document.querySelector('.header__logo');
const menuLine = document.querySelector('.header__menu-line');

toggleMenuButton.addEventListener('click', () => {
    navbar.classList.toggle('navbar_type_open-menu');
    toggleMenuButton.classList.toggle('navbar-toggler_type_open-menu');

    menuLine.classList.toggle('header__menu-line_type_open-menu');

    if(logoImage.getAttribute('src') === './images/logo.svg') {
        logoImage.setAttribute('src', './images/logo-2.svg');
    }

    else {
        logoImage.setAttribute('src', './images/logo.svg');
    }
});
