/*
 * Agency slider
 */

jQuery(function() {
  jQuery('[data-toggle="tooltip"]').tooltip();
});

jQuery(".agency_slider").slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  rows: 2,
  infinite: true,

  responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }
  ]
});

jQuery(".sriyogweb_supporter_slider").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});
