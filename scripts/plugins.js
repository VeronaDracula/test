jQuery(document).ready(function() {
    //выпадающее меню
    // jQuery('ul.sf-menu').superfish(
    //     {
    //         cssArrows: false,
    //         delay: 0,
    //         animation: {opacity:'show'},
    //         speed: 100,
    //     }
    // );


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