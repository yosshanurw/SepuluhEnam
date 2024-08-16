$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function (){
    scroll_pos =$(this).scrolltop();
    if (scroll_pos > 0) {
      $("nav").addclass("putih");
    } else {
      $("nav").removeclass("putih");
    }
    });
  });