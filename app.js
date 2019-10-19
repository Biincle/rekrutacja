
$(document).ready(function(){
     $(window).scroll(function() {
       if ($(document).scrollTop() > 100) {
         $(".header__nav").addClass("nav-sticky");
       } else {
         $(".header__nav").removeClass("nav-sticky");
         // $(".header__nav").css("background", "transparent");
       }
     });

     $('.icon').click(function(){
  $('.menu-tab-mobile').toggleClass('active');
});

$('.menu-tab-mobile li').click(function (e) {
        $('.menu-tab-mobile').toggleClass('active');
      });

   });
