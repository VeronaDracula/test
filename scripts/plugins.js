jQuery(document).ready(function() {
    //раскрывающийся список
    $(".history").collapse({
        open: function() {
            this.slideDown(150);
        },
        close: function() {
            this.slideUp(150);
        }
    });
});

//карусель
$(function() {
    var owl=$(".portfolio__carousel");
    owl.owlCarousel({
        loop: true,
        // autoplay: true,
        // center: true,
        margin: 10,
        responsive:{
            0: {
                items: 4,
                stagePadding: 50,
            }
        },

    });

    $(".portfolio__carousel-arr-right").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".portfolio__carousel-arr-left").click(function(){
        owl.trigger("prev.owl.carousel");
    });
});

jQuery(document).ready(function($){
    $('[data-fancybox]').fancybox({
        buttons: false,
        loop: false,
        infobar: false,
        toolbar: false,
        animationEffect: "fade",
        animationDuration: 600,
        btnTpl: {
            smallBtn: '<button data-fancybox-close class="popup-photo__btn-close"></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right popup-photo__btn-right"></button>',
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left popup-photo__btn-left"></button>'
        },


    });

    $(".close_window").click(function () {
        $.fancybox.close();
    });
});