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
        margin: 10,
        responsive:{
            0: {
                items: 2,
                stagePadding: 0,
            },

            425: {
                items: 2,
                stagePadding: 50,
            },

            466: {
                items: 2,
                stagePadding: 70,
            },

            554: {
                items: 2,
                stagePadding: 100,
            },

            622: {
                items: 3,
                stagePadding: 70,
            },

            730: {
                items: 4,
                stagePadding: 50,
            },

            769: {
                items: 2,
                stagePadding: 50,
            },

            845: {
                items: 2,
                stagePadding: 100,
            },

            923: {
                items: 3,
                stagePadding: 70,
            },

            1025: {
                items: 2,
                stagePadding: 100,
            },

            1120: {
                items: 3,
                stagePadding: 70,
            },
            1237: {
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
        infobar: true,
        toolbar: false,
        animationEffect: "fade",
        animationDuration: 600,
        // imageScale: false,
        btnTpl: {
            smallBtn: '<button data-fancybox-close class="popup-photo__btn-close"></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right popup-photo__btn-right"></button>',
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left popup-photo__btn-left"></button>'
        },

    });
});