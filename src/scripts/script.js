$(document).ready(function(){
    $('.slider-1').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.js-slider-1-prev'),
      nextArrow: $('.js-slider-1-next')
  });
});

$(document).ready(function(){
    $('.slider-2').slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.js-slider-2-prev'),
      nextArrow: $('.js-slider-2-next')
  });
});


$('a.date__item').click(function(e){

  e.preventDefault();

  $('a.date__item').not(this).removeClass('active');
  $(this).addClass('active');
  $('.js-programm').addClass('hidden');
  $('#'+$(this).attr('data-id')).removeClass('hidden');


});


$(document).ready(function(){
	$("#arrow").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 80;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
