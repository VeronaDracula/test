$(document).ready(function(){
    $('.header').height($(window).height());
})

//карусель
$(function() {
    var owl=$(".projects-carousel");
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

});

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
});