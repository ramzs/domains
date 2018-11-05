$(function() {

	// for link:
	// 	data-effect="mfp-zoom-in"
	// for modal window:
	// class="mfp-with-anim"

	$('.popup').magnificPopup({
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true
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
	new WOW().init();
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("fast");

});

$(document).ready(function() {

	$("#menu-btn").click(function() {
		$(".header-menu").fadeToggle().toggleClass('open');
	});
	$('body').on('click', function(e) {
		if ($(e.target).closest(".header-menu.open, #menu-btn").length) return;
		$('.header-menu.open').removeClass('open').fadeOut();
	});

	$('.pro-carousel').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1570,
				settings: {
					slidesToShow: 3
				}
			},
			{
			breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
			breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			},
	    ]
	});

	$('.gallery-carousel').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2
	});

	$('.feedback-slider').slick({
		arrows: true,
		dots: false,
	});

});

$(window).on('resize load', function() {
	var windowWidth = $(window).width();
    if (windowWidth >= 1770) {
        var carousel = $(".licence-carousel").waterwheelCarousel({
			startingItem: 1,
			separation: 350,
			separationMultiplier: 0.9,
			sizeMultiplier: 0.9,
			opacityMultiplier: 1,
			flankingItems: 2,
			edgeFadeEnabled: false,
			forcedImageWidth: 449,
			forcedImageHeight: 642
	    });
    } else if (windowWidth >= 1570) {
    	var carousel = $(".licence-carousel").waterwheelCarousel({
			startingItem: 1,
			separation: 305,
			separationMultiplier: 0.9,
			sizeMultiplier: 0.9,
			opacityMultiplier: 1,
			flankingItems: 2,
			edgeFadeEnabled: false,
			forcedImageWidth: 449,
			forcedImageHeight: 642
	    });
    } else if (windowWidth >= 1200) {
    	var carousel = $(".licence-carousel").waterwheelCarousel({
			startingItem: 1,
			separation: 212,
			separationMultiplier: 0.9,
			sizeMultiplier: 0.9,
			opacityMultiplier: 1,
			flankingItems: 2,
			edgeFadeEnabled: false,
			forcedImageWidth: 350,
			forcedImageHeight: 443
	    });
    } else if (windowWidth >= 992) {
    	var carousel = $(".licence-carousel").waterwheelCarousel({
			startingItem: 1,
			separation: 275,
			separationMultiplier: 0.9,
			sizeMultiplier: 0.9,
			opacityMultiplier: 1,
			flankingItems: 1,
			edgeFadeEnabled: false,
			forcedImageWidth: 350,
			forcedImageHeight: 440
	    });
    } else if (windowWidth >= 768) {
    	var carousel = $(".licence-carousel").waterwheelCarousel({
			startingItem: 1,
			separation: 200,
			separationMultiplier: 0.9,
			sizeMultiplier: 0.9,
			opacityMultiplier: 1,
			flankingItems: 1,
			edgeFadeEnabled: false,
			forcedImageWidth: 300,
			forcedImageHeight: 390
	    });
    } else if (windowWidth >= 320) {
    	var carousel = $(".licence-carousel").waterwheelCarousel({
			startingItem: 1,
			separation: 200,
			separationMultiplier: 0.9,
			sizeMultiplier: 0.9,
			opacityMultiplier: 1,
			flankingItems: 0,
			edgeFadeEnabled: false,
			forcedImageWidth: 380,
			forcedImageHeight: 470
	    });
    }


	$('.nav-prev').bind('click', function () {
		carousel.prev();
		return false
	});

	$('.nav-next').bind('click', function () {
		carousel.next();
		return false;
	});
});