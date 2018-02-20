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


 $(window).resize(function() {
  if ($(window).width() > 330) {
    $('.about_container').css({'height':  '2270px'});
  }else if($(window).width() > 300){
    $('.about_container').css({'height':  '2470px'});
    $('.education_content .uci').css({'height':  '400px'});
    $('.fcc').css({'height':  '400px'});    
  }else{
    $('.about_container').css({'height':  '2670px'});
    $('.education_content .uci').css({'height':  '540px'});
    $('.fcc').css({'height':  '540px'});    
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
