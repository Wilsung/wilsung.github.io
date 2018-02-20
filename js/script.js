/* Smooth Scrolling between anchors */
$(function() {
  var moveHeader = 150;
  // Go to section
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');3
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 109
        }, 700);
        return false;
      }
    }
  });
  //End here


  $('.navbar-toggle').click(function() {
    if(!$('.navbar-toggle').hasClass('active')){
      $('.navbar-toggle').addClass('active');
      $('.nav').removeClass('collapsed');
    }else{
      $('.navbar-toggle').removeClass('active'); 
      $('.nav').addClass('collapsed');
    }
  });


  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if (scroll > moveHeader && $(window).width() > 767){
        $('.header').addClass('move');
        $('.nav').addClass('collapsed');
      }else{
        $('.header').removeClass('move');
      }
    function getCurrentScroll(){
      return window.pageYOffSet || document.documentElement.scrollTop;
    }
  });

});
