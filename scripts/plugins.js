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