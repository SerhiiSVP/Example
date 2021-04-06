$(document).ready(function() {
    $('.question__title').click(function(event) {
        $('.question__wrapper').toggleClass('active');
    });

    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".question__wrapper").length === 0) {
            $(".question__wrapper").removeClass("active");
        }
    });

});   
