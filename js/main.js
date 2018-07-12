$(function (){
  "use strict";
  // Adjust Header height
  var myHeader = $(".header");
  // Resize Header Height
  myHeader.height($(window).height());
  $(window).resize(function (){
    myHeader.height($(window).height());
    // Slider Text Resize
    $(".slider").each(function (){
      $(this).css("paddingTop", ($(window).height() - $(".slider").height()  / 2));
    });
  });

  // Links Add Active class
  $(".links a").on("click", function (){
    $(".links a.active").removeClass("active");
    $(this).addClass('active');
  });

  // Trigger the Slider Plugin
  $('.slider').bxSlider({
    pager: false
  });

  // Adjust Text Slider center
  $(".slider").each(function (){
    $(this).css("paddingTop", ($(window).height() - $(".slider").height()  / 2));
  });

  // Smooth Scroll to div
  $(".links li a").on("click", function(){
    $("html, body").animate({
      scrollTop: $("#" + $(this).data("value")).offset().top
    }, 1000);
  });

  // Our Own slider Testimonials
  (function autoSlider(){
    $(".slider1 .active").each(function () {
      if(!$(this).is(":last-child")) {
        $(this).delay(3000).fadeOut(1500, function(){
          $(this).removeClass("active").next().addClass("active").fadeIn();
          autoSlider();
        });
      }
      else{
        $(this).delay(3000).fadeOut(1500, function() {
          $(this).removeClass("active");
          $(".slider1 div").eq(0).addClass("active").fadeIn();
          autoSlider();
        });
      }
    });
  }());

  // Nice Scroll Code
  $("html").niceScroll({
    cursorcolor: "#B08DD9",
    cursorwidth: "15px",
    cursorborder: "none",
    cursorborderradius: "0px"
  });
});
