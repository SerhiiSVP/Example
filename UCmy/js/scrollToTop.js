$(document).ready(function(){
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 900) {
    $('.scroll-top__button').fadeIn();
    } else {
    $('.scroll-top__button').fadeOut();
    }
    });
      
    $('.scroll-top__button').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
     
  });