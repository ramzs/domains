$(function() {

	$('.popup').magnificPopup({
		type: 'iframe'
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function(){
	$('.change__lang a').on('click', function(e) {
		$('.change__lang a').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
});

//Menu mobile
$('#menu-btn').click(function(){
	$('#menu-mobile').addClass('mobile-open');
	$('.menu-mobile__overlay').fadeIn('slow');
	$('body').addClass('open');
	return false;
});
$('#menu-mobile__close, .menu-mobile__overlay').click(function(e){
	$('#menu-mobile').removeClass('mobile-open');
	$('.menu-mobile__overlay').fadeOut('slow');
	$('body').removeClass('open');
	e.stopPropagation();
});

$(document).ready(function(){
	$('audio').mediaelementplayer({

	});
});