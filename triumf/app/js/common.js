$(function() {

	$('.popup').magnificPopup({
		removalDelay: 350,
		mainClass: 'mfp-fade'
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function() {
	$('#btn-mob').on('click', function() {
		$('#menu-mob').fadeToggle();
	});
	$(window).resize(function(){
    	var size = $(window).width();
			menu = $('#menu-mob');
	    if(size > 767 ) {
	      menu.hide();
	    }
	});
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 767) {
    	$('.slick-track').removeClass('animoff');
    	$('.slick-slide').removeClass('animoff');
    } else {
    	$('.slick-track').addClass('animoff');
    	$('.slick-slide').addClass('animoff');
    }
});

 $('.slider-for').slick({
 	adaptiveHeight: true,
 	responsive: true,
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
    ],
	infinite: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: false,
	focusOnSelect: true
});

$('.slider-nav').on('mouseenter', '.slick-slide', function (e) {
	var $currTarget = $(e.currentTarget),
    	index = $currTarget.data('slick-index'),
        slickObj = $('.slider-for').slick('getSlick');

    slickObj.slickGoTo(index);

});