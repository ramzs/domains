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

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

$(document).ready(function() {
	$('.sidebar-nav > li a').click(function(e) {
		$(this).toggleClass('active');
		$(this).next().slideToggle().toggleClass('open');
		e.preventDefault();
	});

	//Слайдер на главной
	$('.slider-home').slick({
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
				arrows: false
				}
			},
		]
	});

	$('.compare-cl').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
				arrows: false,
				slidesToShow: 3
				}
			},
		]
	});

	//развернуть сео текст
	$('.link-more').click(function() {
		$(this).toggleClass('active');
		$('.s-block__text').toggleClass('open');
		return false;
	});

	//моб. меню
	$('.btn-menu').click(function() {
		$(this).toggleClass('active');
		$('.header-menu').toggleClass('open');
		return false;
	});

	// каталог меню на моб.
	$(window).on('resize load', function(){
	    var size = $(window).width();
	    if (size > 992) {
	    	$('.sidebar-title').unbind('click');
	    	$('.sidebar-menu').show();
		} else {
			$('.sidebar-menu').hide();
			$('.sidebar-title').bind('click', function() {
				$(this).toggleClass('active');
				$('.sidebar-menu').toggleClass('open').stop(true,true).fadeToggle();
			});
		}
	});


	//Услуги
	$('.service-box').hover(function() {
		$(this).children('.service-box__link').toggleClass('active');
		$(this).children('.service-box__body').toggleClass('open').stop().slideToggle();
	});

});