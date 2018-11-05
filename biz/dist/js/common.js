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


	$('.contact-map').click(function() {
		$(this).removeClass('overlay');
	});
	$('body').on('click', function(e) {
		if ($(e.target).closest(".contact-map").length) return;
		$('.contact-map').addClass('overlay');
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
	//Фиксированное меню
	$(window).on('resize load', function(){
		var size = $(window).width();
	    if (size < 767 ) {
			$(window).unbind('scroll');
			$('.header, .nav').removeClass('fixed');
			$('.header').css('padding-bottom', '0');
	    } else {
	    	$(window).bind('scroll', function () {
				var headerHeight  = $('.header-top').innerHeight();
					headerPadding = $('.nav').innerHeight();
				if ($(window).scrollTop() > headerHeight) {
					$('.header, .nav').addClass('fixed');
					$('.header').css('padding-bottom', headerPadding);
				} else {
					$('.header, .nav').removeClass('fixed');
					$('.header').css('padding-bottom', '0');
				}
			});
	    }
	});
	//конец фикс меню

	/*---------Верхнее меню----------*/
	$('.btn-menu').on('click', function() {
		$(this).toggleClass('active');
		$('.header-main').toggleClass('open').stop(true, true).fadeToggle();
		$('body').on('click', function(e) {
			if ($(e.target).closest(".header-main.open, .btn-menu").length) return;
			$('.btn-menu.active').removeClass('active');
			$('.header-main.open').removeClass('open').fadeOut();
		});
	});
	$(window).on('load', function(){
		var size = $(window).width();
			menu = $('.header-main');
			btn  = $('.btn-menu');
	    if (size > 767 ) {
			menu.removeClass('open').show();
			btn.removeClass('active');
	    } else {
	    	menu.removeClass('open').hide();
			btn.removeClass('active');
	    }
	});
	/*--------------end------------------*/

	/*------------Основное меню-----------------*/
	$('.nav-list li a').click(function(e) {
        $(this).parent().toggleClass('active');
        $(this).closest('li').find('ul:first').stop(true, true).slideToggle();
        e.preventDefault();
	});

    $(window).on('load', function(){
		var size = $(window).width();
			btn  = $('.nav-link');
			menu = $('.nav-list');
		menuItem = $(".nav-list li");
		if (size > 767) {
			$('.nav-list > li').bind('mouseenter mouseleave');
		    $('.nav-list li').mouseenter(function() {
		        $(this).addClass('active').children('ul').stop(true, true).slideDown();
		    });
		    $('.nav-list > li').mouseleave(function() {
		        $(this).removeClass('active').children('ul').stop(true, true).slideUp();
		    });
		    $('.nav-list > li > ul > li').mouseleave(function() {
		        $(this).removeClass('active').find('ul').stop(true, true).slideUp();
		    });

		    menu.removeClass('open').show();
			btn.removeClass('active');

		} else {
			$('.nav-list li').unbind('mouseenter mouseleave');

			menu.removeClass('open').hide();
			btn.removeClass('active');
		}
	});

	$('.nav-link').on('click', function() {
		$(this).toggleClass('active');
		$('.nav-list').toggleClass('open').stop(true, true).fadeToggle();
		$('body').on('click', function(e) {
			if ($(e.target).closest(".nav-list.open, .nav-link").length) return;
			$('.nav-link.active').removeClass('active');
			$('.nav-list.open').removeClass('open').fadeOut();
		});
	});
	/*------------------end-------------------*/

	/*-------------Sidebar menu----------------*/
	// $('.second-menu li a').hover(function(e) {
 //        $(this).parent().toggleClass('active');
 //        $(this).closest('li').find('ul:first').stop(true, true).slideToggle();
 //        e.preventDefault();
	// });
	$('.second-menu li').mouseenter(function() {
        $(this).addClass('active').find('ul:first').stop(true, true).slideDown();
    });
    $('.second-menu > li').mouseleave(function() {
        $(this).removeClass('active').find('ul').stop(true, true).slideUp();
    });
	/*----------------end-----------------------*/
});

$(document).ready(function() {
	$('.search-link').click(function(e) {
		$('.search-block').fadeToggle();
		e.preventDefault();
	});
	$('body').on('click', function(e) {
		if ($(e.target).closest(".search-link, .search-block").length) return;
		$('.search-block').fadeOut();
	});

	$('.slider-home').slick({
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><span>Previous</span></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><span>Next</span></button>'
	});

	$('.news-carousel').slick({
		infinite: false,
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><span>Previous</span></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><span>Next</span></button>',
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {

		      breakpoint: 768,
		      settings: "unslick",
		      // settings: {
		      //   arrows: false,
		      //   vertical: true,
		      //   verticalSwiping: true,
		      //   slidesToShow: 3
		      // }
		    }
		]
	});

	// $(window).on('resize load', function(){
	// var size = $(window).width();
	//     if (size < 767 ) {
	// 		$('.news-carousel').slick('unslick');
	//     }
	// });

	$('.slider-blog').slick({
		fade: true,
		infinite: true,
		arrows: false,
		dots: false,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><span>Previous</span></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><span>Next</span></button>',
		asNavFor: '.slider-blog'
	});

});

$(document).ready(function() {
	$(".howto-item__title").click(function() {
		$(this).toggleClass('active');
		$(this).closest('.howto-item').find('.howto-body').toggleClass('active').slideToggle();
	});
});