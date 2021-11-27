$(document).ready(function(){
    $('.header').height($(window).height());
})


//меню
$(window).scroll(function() {
    if ($(document).scrollTop() > window.innerHeight) {
        $(".header__menu-item-link").addClass("header__menu-item-link_scroll");
        $(".navbar").addClass("navbar_scroll");
        $(".header__phone").addClass("header__phone_scroll");
        $(".header__logo").attr('src', './images/logo.svg');
    } else {
        $(".header__menu-item-link").removeClass("header__menu-item-link_scroll");
        $(".navbar").removeClass("navbar_scroll");
        $(".header__phone").removeClass("header__phone_scroll");
        $(".header__logo").attr('src', './images/logo-2.svg');
    }
})

