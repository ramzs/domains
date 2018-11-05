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

	$("#play-video").click(function() {
		var main        = $(this).parents('.js-video');
		var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
		main.children().fadeOut('slow', function() {
		main.html('<iframe src="https://www.youtube.com/embed/'+dataYoutube+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
		});
		return false;
	});

	$('body').click(function(e) {
	    if ($(e.target).closest(".navbar-collapse, .navbar-toggle").length) return;
	    $('.navbar-collapse').removeClass('in');
	    $('.navbar-toggle').addClass('collapsed');
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
	var activeClass   = 'slick-active',
    	ariaAttribute = 'aria-hidden';
	$( '.h-slider' ).on( 'init', function() {
    	$('.slick-dots li:first-of-type').addClass(activeClass).attr(ariaAttribute, false);
		}).on('afterChange', function( event, slick, currentSlide) {

	    var $dots = $('.slick-dots');
	    $('li', $dots).removeClass( activeClass ).attr( ariaAttribute, true );
	    $dots.each( function() {
	        $( 'li', $( this )).eq( currentSlide ).addClass( activeClass ).attr( ariaAttribute, false );
	    });
	});
	$('.h-slider').slick({
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false,
		dots: true,
		appendDots:$('.slider-dots', this)
	});
	// $('.slick-dots li').click(function() {
	// 	var dot = $(this).attr('aria-controls');
	// 	$('.slider-block').attr('data-target', dot);
	// });

	$('.h-carousel').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1040,
				settings: {
					slidesToShow: 3
				}
			},
			{
			breakpoint: 850,
				settings: {
					slidesToShow: 3
				}
			},
			{
			breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
	    ]
	});

	//Основное меню
	$('.nav li a').click(function(e) {
        $(this).parent().toggleClass('active');
        $(this).closest('li').children('ul').stop(true, true).slideToggle();
        e.preventDefault();
	});

	$(window).on('load', function(){
		var size = $(window).width();
		if (size > 767) {
			$('.nav > li').bind('mouseenter mouseleave');
			$('.nav li a').unbind('click');
		    $('.nav li').mouseenter(function() {
		        $(this).addClass('active').children('ul').stop(true, true).fadeIn('fast');
		    });
		    $('.nav li').mouseleave(function() {
		        $(this).removeClass('active').children('ul').stop(true, true).fadeOut('fast');
		    });

		} else {
			$('.nav li').unbind('mouseenter mouseleave');
			$('.nav li a').bind('click');
		}
	});
	//конец основного меню

	//Боковое меню
	$('.sidebar-menu li').mouseenter(function(e) {
        $(this).addClass('active').children('ul').fadeIn('fast');
        e.preventDefault();
    });
    $('.sidebar-menu li').mouseleave(function(e) {
        $(this).removeClass('active').children('ul').fadeOut('fast');
        e.preventDefault();
    });
    //конец юокового меню

});

$('.scroll-top').click(function() {
	$("html, body").animate({
	  scrollTop: "0px"
		}, {
		  duration: 500
	});
	return false;
});


$(window).on('load resize scroll', function() {
  	var nav    = $('.navbar');
  		header = $('.header');
		pos    = $(window).scrollTop();
		size   = $(window).width();

	if (size < 768) {
			nav.removeClass('nav--fixed');
			header.removeClass('header--fixed');
	} else {
		if (pos > 88) {
			nav.addClass('nav--fixed');
			header.addClass('header--fixed');
		}
		else {
			nav.removeClass('nav--fixed');
			header.removeClass('header--fixed');
		}
	}
});

$(window).on('load resize', function() {
	var height = $(window).height();
	$('.thank-page').height(height);
});

$(document).ready(function() {
	// $('.price-in__read').click(function(e) {
	// 	$(this).closest('.price-in').addClass('open');
	// 	$(this).closest('.price-item').addClass('active');
	// 	e.preventDefault();
	// });
	// $('body').click(function(e) {
	//     if ($(e.target).closest(".price-in").length) return;
	//     $('.price-in.open').removeClass('open');
	//     $('.price-item.active').removeClass('active');
	// });
	$('.price-in').on('click', function(e) {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).closest('.price-item').removeClass('active');
		} else {
			$(this).addClass('open');
			$(this).closest('.price-item').addClass('active');
		}
		e.preventDefault();
	});

	$('.main-card__read').click(function(e) {
		$('.main-card__text').addClass('open');
		$(this).hide();
		e.preventDefault();
	});
});