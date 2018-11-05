$(function() {

	//FormStyler
	/*
	  $('input, select').styler();
	*/

	// for link:
	// 	data-effect="mfp-zoom-in"
	// for modal window:
	// class="mfp-with-anim"

	// $('.popup').magnificPopup({
	// 	removalDelay: 500,
	// 	callbacks: {
	// 	    beforeOpen: function() {
	// 	       this.st.mainClass = this.st.el.attr('data-effect');
	// 	    }
	// 	  },
	// 	  midClick: true
	// });

	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile mfp-no-margins',
		image: {
			verticalFit: true,
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

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

$(document).ready(function() {
	$('.slider-home').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><span>Previous</span></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><span>Next</span></button>',
		asNavFor: '.slider-nav',
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        dots: false
		      }
		    }
	    ]
	});
	$('.slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.slider-home'
	});

	$('.tovar-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		      	arrows: false,
		        vertical: true,
		        verticalSwiping: true
		      }
		    }
	    ]
	});
});

$(document).ready(function() {
	$('.menu-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.nav').toggleClass('open').slideToggle();
		$('body').on('click', function(e) {
			if ($(e.target).closest(".nav.open, .menu-btn").length) return;
			$('.menu-btn.active').removeClass('active');
			$('.nav.open').removeClass('open').slideUp();
		});
	});

	$(window).on('resize load', function(){
	var size = $(window).width();
			menu = $('.nav');
			btn  = $('.menu-btn');
	    if (size > 1200 ) {
			menu.removeClass('open').show();
			btn.removeClass('active');
	    } else {
			menu.removeClass('open').hide();
			btn.removeClass('active');
	    }
	});
});

$(document).ready(function() {

	$('.cosm-content__title--link').click(function() {
		$(this).closest('.list-wrap').find('.cosm-content__list').slideToggle();
		return false;
	});

	$('.qst-item__btn').click(function() {
		$(this).closest('.qst-item').find('.qst-item__main').slideToggle();
		return false;
	});

	$(".info-menu li").hover(
		function(){
			$(this).find('ul').stop().fadeToggle(300);
		}
	);


	$(".info-dropmenu__link").click(function() {
		var tab  = $(this).closest('.info-dropmenu').find('.info-dropmenu__link');
			main = $('.info-main');
			activeTab = $(this).attr("href");
	    tab.removeClass("active");
		main.removeClass('open').hide();
	    $(this).addClass("active");
	    $(activeTab).addClass('open').stop(true, true).fadeIn(700);
	    return false;
	});


	$(".info-article__link").click(function() {
		$(this).toggleClass('active');
		$(this).closest('.info-article').find('.info-article__text').toggleClass('open');
		return false;
	});


});