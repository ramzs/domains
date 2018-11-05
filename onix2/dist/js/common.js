$(function() {

	//FormStyler

	  $('input, select').styler({
		selectSmartPositioning: false
	  });


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

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function() {
	$('.main-slider').slick({
	  autoplay: true,
	  autoplaySpeed: 5000,
	  dots: true,
	  arrows: false,
	  infinite: true
	});

	$('.cl-tovar').slick({
	  dots: false,
	  arrows: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1230,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 1230,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 479,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.order-item').click(function() {
		$('.order-item').removeClass('active');
		$(this).toggleClass('active');

		if ($('#del-1').hasClass('active')) {
			$('.order-delivery-form').fadeIn();
		} else {
			$('.order-delivery-form').fadeOut();
		}
	});

});