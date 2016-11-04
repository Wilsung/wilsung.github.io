/* Smooth Scrolling between anchors */
$(function() {
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
});
