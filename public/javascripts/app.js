$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("scroll");
    }else{
      $("body").removeClass("scroll");
    }
  });

  $('body').on('mouseover', '.li-level-1', function() {
    $(this).addClass('hover');
  });
  
  $('body').on('mouseleave', '.li-level-1', function() {
    $(this).removeClass('hover');
  });

  $('.carousel').carousel({
    interval: 2000
  });

});