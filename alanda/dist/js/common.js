$(function() {

	$('.popup').magnificPopup({
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true
	});

	$('.popup-alert').magnificPopup({
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('class');
		    }
		  },
		  items: [
		      {
		        src: '.form-call--alert',
		        type: 'inline'
		      }
		    ],
		  midClick: true
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true,
		}
	});
	$("body").swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            $(".mfp-arrow-left").magnificPopup("prev");
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {
            $(".mfp-arrow-right").magnificPopup("next");
        },
        threshold: 50
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
	$('.nav-menu__item--drop').hover(function(e) {
		$(this).toggleClass('active');
		$('.nav-submenu', this).addClass('open').fadeToggle('fast');
		e.preventDefault();
	});
});

$(document).ready(function() {
	$('.home-slider').bxSlider({
		controls: false,
		mode: 'fade'
	});

	$('.sale-slider').bxSlider({
		controls: false,
		mode: 'fade',
		captions: true
	});
});