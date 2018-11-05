$(function() {

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

$(document).ready(function(){
	$('.bxslider').bxSlider({
		responsive: true,
		pager: true,
		pagerType: 'short',
		pagerCustom: '.bxpagers',
		prevSelector: '.prevmove',
		nextSelector: '.nextmove',
		prevText: '',
		nextText: '',
		mode: 'fade',
		captions: false,
		auto: false,
		pause: 7000,
		speed:1000
	});
});

$(document).ready(function(){
	$('.search__icon').on('click', function() {
		$('.header__search input').fadeToggle();
		return false;
	});
});

$(document).ready(function(){
	$('.info__link').on('click', function(e) {
		var thisBody = $($(this).attr("data-target")),
			panelBody = $('.info__body');

			panelBody.not(thisBody).slideUp('slow').removeClass('active');
			thisBody.slideToggle('slow').toggleClass('active');

			if (panelBody.find('active')) {
				$('.info__link').not(this).removeClass('open');
			}

			$(this).toggleClass('open');

			e.preventDefault();
	});
});