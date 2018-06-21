$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.nav-wrap').addClass("fixed");
    } else {
      $('.nav-wrap').removeClass("fixed");
    }
  });

  $('.navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.nav-wrap').toggleClass('open');
    $('.navbar-toggle').toggleClass('open');
  });
  $(window).resize(function() {
    var screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      $(".nav-wrap, .navbar-toggle").removeClass('open');
    }
  });

  $('.slider-1').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  $('.slider-2').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider-3').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // scroll to element
  $(".nav a, .arrow").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

});
