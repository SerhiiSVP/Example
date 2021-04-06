$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu__wrapper').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });
    $('.menu-list__item, .menu-links__item').on('click', function(){
      $('.header__burger').click();
      $('body').removeClass('no-scroll');
  });

  $(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".menu-list__item, .menu-links__item, .header__burger").length === 0) {
        $(".header__burger,.menu__wrapper").removeClass("active");
        $('body').removeClass('no-scroll');
    }
});


$('a[href^="#"]').on('click', function(event) {
    var hash = '#' + $(this).attr('href').split('#')[1]
    var element = $(hash)
    if (element.length) {
      event.preventDefault();
      $('html, body').animate({scrollTop: element.offset().top}, 500)
    }
  });  

});