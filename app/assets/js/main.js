(function($) {
  "use strict";
  jQuery(document).ready(function($) {


    //responsive menu
    var $slickNav = $('#main-menu');
    $slickNav.slicknav({
      prependTo: '.responsive-menu',
      label: ''
    });
    /* counter section activation  */
    var counternumber = $('.counter-text');
    counternumber.counterUp({
      delay: 20,
      time: 3000
    });


    //magnific popup activation 
    $('.video-play-btn').magnificPopup({
      type: 'video'
    });
    //back to top 
    $(document).on('click', '.back-to-top', function() {
      $("html,body").animate({
        scrollTop: 0
      }, 2000);
    });
    //smoth achor effect
    $('#main-menu li a').on('click', function(e) {
      e.preventDefault();
      var anchor = $(this).attr('href');
      var top = $(anchor).offset().top;
      $('html, body').animate({
        scrollTop: $(anchor).offset().top
      }, 1000);
      $(this).parent().addClass('active').siblings().removeClass('active');
    });
    //screenshort carousel
    var $screenshort = $('.screenshort-carousel');
    $screenshort.owlCarousel({
      loop: true,
      autoplay: true,
      autoPlayTimeout: 1000,
      margin: 30,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        960: {
          items: 3
        },
        1200: {
          items: 5
        },
        1920: {
          items: 5
        }
      }
    });
    //reviewer carousel
    var $reviewerCarousel = $('.clients-review-carousel');
    $reviewerCarousel.owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      autoPlayTimeout: 1000,
      margin: 30,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        960: {
          items: 2
        },
        1200: {
          items: 3
        },
        1920: {
          items: 3
        }
      }
    });

  });
  $(window).on('scroll', function() {
    //back to top show/hide
    var ScrollTop = $('.back-to-top');
    if ($(window).scrollTop() > 1000) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }
    /*--sticky menu activation--*/
    var mainMenuTop = $('.navbar-area');
    if ($(window).scrollTop() > 1000) {
      mainMenuTop.addClass('nav-fixed');
    } else {
      mainMenuTop.removeClass('nav-fixed');
    }

  });

  $(window).on('load', function() {
    //preloader
    var preLoder = $("#preloader");
    preLoder.fadeOut(500);
    var backtoTop = $('.back-to-top')
    backtoTop.fadeOut(100);
  });

}(jQuery));
