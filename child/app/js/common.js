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

	$('.zoom').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('input, select').styler({
		selectSmartPositioning: false
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
	$('.main-slider').slick();


	$('.tovar-slider').slick({
	 	responsive: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.tovar-nav'
	});
	$('.tovar-nav').slick({
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.tovar-slider',
		arrows: true,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 1370,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		     {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    }
	    ]
	});


	$('.catalog-list > li > a').click(function(e) {
		$('.catalog-list > li a').removeClass('active');
		$('.catalog-list__dropdown').removeClass('open');

		if (!$(this).next().hasClass('open')) {
			$(this).next().addClass('open');
			$(this).addClass('active');
		}
		e.preventDefault();
	});

	$('.sort__link').click(function(e) {
		$('.sort__link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('.tovar-height__list a').click(function(e) {
		$('.tovar-height__list li').removeClass('active');
		$(this).parent().addClass('active');
		e.preventDefault();
	});

	$(".tovar-descr__link").click(function() {
		var tab       = $(this).closest('.tovar-descr').find('.tovar-descr__link');
			main      = $(this).closest('.tovar-descr').find('.tovar-descr__body');
			activeTab = $(this).attr("data-target");
	    tab.removeClass("active");
		main.removeClass('open').hide();
	    $(this).addClass("active");
	    $(activeTab).addClass('open').stop(true, true).fadeIn(700);
	    return false;
	});


	$('.btn-menu').click( function() {
		$(this).toggleClass('active');
		$('.nav').toggleClass('open').slideToggle('fast');
		$('.header-top').toggleClass('mob');
	});
	$(window).on('resize load', function(){
    	var size = $(window).width();
			menu = $('.nav');
	    if (size > 767 ) {
	      menu.show();
	      $('.btn-menu').removeClass('active');
	      $('.nav').removeClass('open');
	      $('.header-top').removeClass('mob');
	    } else {
	    	menu.hide();
	      $('.btn-menu').removeClass('active');
	      $('.nav').removeClass('open');
	      $('.header-top').removeClass('mob');
	    }
	});
	$('body').click(function(e) {
	    if ($(e.target).closest(".btn-menu.active, .nav.open, .header-top.mob").length) return;
	    $('.nav.open').removeClass('open').slideUp();
	    $('.btn-menu.active').removeClass('active');
	    $('.header-top.mob').removeClass('active');
  });

});

$(function() {
	$( "#slider-price" ).slider({
		range: true,
		min: 0,
		max: 100000,
		step: 100,
		values: [ 20000, 75000 ],
		create: function (event, ui) {
	        $('.ui-slider-handle:first').append('<span id="price-min" class="price-in price-in--min"</span>');
	        $('.ui-slider-handle:last').append('<span id="price-max" class="price-in price-in--max"</span>');
	    },
	    slide: function (event, ui) {
	        $( "#price-min" ).html(ui.values[0]);
	        $("#price-max").html(ui.values[1]);
	    }
	});
	//Записываем значения ползунков в момент загрузки страницы
	//То есть значения по умолчанию
	$( "#price-min" ).html($( "#slider-price" ).slider( "values", 0 ));
	$("#price-max").html($("#slider-price").slider( "values", 1 ));
});