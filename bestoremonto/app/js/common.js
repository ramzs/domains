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

	$('input, select').styler();

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(function() {

	$( "#slider-range" ).slider({
		range: "min",
		min: 0,
		max: 300,
		step: 1,
		value: 37,
		slide: function( event, ui ) {
		$( "#slider-total" ).val( ui.value);
		}
	});
		$( "#slider-total" ).val( $( "#slider-range" ).slider( "value" ) );
		$('#slider-total').on('change', function(e) {
			var val = $(this).val();
			$('#slider-range').slider("value", val);
		});
});

$(document).ready(function() {

	$('.slider__work').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1390,
		  settings: {
		    slidesToShow: 4
		  }
		},
		{
		  breakpoint: 1200,
		  settings: {
		    slidesToShow: 4
		  }
		}
		]
	});

	$('.slider__news').slick({
		arrows: true,
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1390,
		  settings: {
		    slidesToShow: 3
		  }
		},
		{
		  breakpoint: 1200,
		  settings: {
		    slidesToShow: 3
		  }
		}
		]
	});

	$('#work-mob').slick({
		vertical: true,
		verticalSwiping: true,
		arrows: false,
		dots: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1
	});

	$('#news-mob').slick({
		vertical: true,
		verticalSwiping: true,
		arrows: false,
		dots: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1
	});
});

$(document).ready(function() {
	$('#btn__menu').on('click', function(e) {
		e.preventDefault();
		$('.menu__mob').toggleClass('open').fadeToggle();
		$('body').on('click', function(e) {
			if ($(e.target).closest(".menu__mob.open, #btn__menu").length) return;
			$('.menu__mob.open').removeClass('open').fadeOut();
		});
	});

	$('.drop__link').on('click', function(e) {
		$(this).toggleClass('active');
		$('.mob__list.mob__list-dropmenu').slideToggle();
		e.preventDefault();
	});

	$(window).on('resize load', function(){
	var size = $(window).width();
			menu = $('.menu__mob');
	    if (size > 992 ) {
			menu.removeClass('open').hide();
	    }
	});
});