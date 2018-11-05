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

	$("#play-video").click(function() {
		var main        = $(this).parents('.js-video');
		var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
		main.children().fadeOut('slow', function() {
		main.html('<iframe src="https://www.youtube.com/embed/'+dataYoutube+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
		});
		return false;
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

$(function() {
	var hf = function() {
		var h_header = $('.header').height();
		var h_footer = $('.footer').height();
		$('.wrapper').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		})
	}
	$(window).bind('load resize', hf)
});

$(document).ready(function() {
	$('.work-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev">Предыдущий шаг</button>',
		nextArrow: '<button type="button" class="slick-next">Следующий шаг</button>',
		appendArrows: $('.work-arrows'),
		asNavFor: '.work-nav',
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        arrows: false
		      }
		    }
		]
	});
	$('.work-nav').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.work-slider',
		arrows: false,
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});

	$('.news-carousel').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		      	slidesToShow: 1,
		        arrows: false
		      }
		    }
		]
	});
});