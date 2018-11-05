$(function() {

	// $('.img__popup').magnificPopup({
	// 	mainClass: 'mfp-fade',
	// 	type: 'image',
	// 	image: {
	// 		verticalFit: true,
	// 	}
	// });

	// $('.popup-gallery').magnificPopup({
	// 	delegate: 'a.img__link',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-fade',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		verticalFit: true,
	// 	}
	// });
	// $("body").swipe({
 //        swipeLeft: function(event, direction, distance, duration, fingerCount) {
 //            $(".mfp-arrow-left").magnificPopup("prev");
 //        },
 //        swipeRight: function(event, direction, distance, duration, fingerCount) {
 //            $(".mfp-arrow-right").magnificPopup("next");
 //        },
 //        threshold: 50
 //    });

	$('.link__up').click(function() {
		$("html, body").animate({
		  scrollTop: "0px"
		}, {
		  duration: 500
	});
	return false;
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

$(document).ready(function() {
	$('#btn-mob').on('click', function() {
		$('.header__menu').toggleClass('open').fadeToggle();
		$('body').on('click', function(e) {
			if ($(e.target).closest(".header__menu.open, #btn-mob").length) return;
			$('.header__menu.open').removeClass('open').fadeOut();
		});
	});
	$(window).on('resize load', function(){
    	var size = $(window).width();
			menu = $('.header__menu');
	    if (size > 767 ) {
			menu.removeClass('open').show();
	    } else {
	    	menu.hide();
	    }
	});
});

$(window).on('load resize', function(){
	var windowWidth = $(window).width();


    if (windowWidth <= 767) {
    	$('.grid').masonry ({
    	columnWidth: '.grid__item',
		itemSelector: '.grid__item',
		percentPosition: true
		// gutter: 8,
		// fitWidth: true
		});
    } else {
    	$('.grid').masonry ({
		columnWidth: '.grid__item',
		itemSelector: '.grid__item',
		percentPosition: true
		// gutter: 14,
		// fitWidth: true
		});
    }
});