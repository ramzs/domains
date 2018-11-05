$(function() {

	$(".menu-fix").hide();
	if ($(window).scrollTop()>="250") $(".menu-fix").fadeIn("slow");
	$(window).scroll(function(){
		if ($(window).scrollTop()<="250") $(".menu-fix").fadeOut("slow");
		else $(".menu-fix").fadeIn("slow");
	});

	//FormStyler

	$('input, select').styler({
	selectSmartPositioning: false
	});


	$( "#slider-price" ).slider({
			range: true,
			min: 0,
			max: 120000,
			step: 1,
			values: [ 0, 120000 ],
		    slide: function (event, ui) {
		        $( "#price-min" ).val(ui.values[0]);
		        $( "#price-max" ).val(ui.values[1]);
		    }
		});
		//Записываем значения ползунков в момент загрузки страницы
		//То есть значения по умолчанию
		$( "#price-min" ).val($( "#slider-price" ).slider( "values", 0 ));
		$("#price-max").val($("#slider-price").slider( "values", 1 ));
		$('#price-min').change(function() {
			var val = $(this).val();
			$('#slider-price').slider("values",0,val);
		});
		$('#price-max').change(function() {
			var val1 = $(this).val();
			$('#slider-price').slider("values",1,val1);
		});


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
	//search
	$('.search-link').click(function() {
		$(this).parent().toggleClass('active');
	});
	$('body').on('click', function(e) {
		if ($(e.target).closest(".search-block.open, .search-link, .search-in").length) return;
		$('.search-block').removeClass('active');
	});

	//menu mobile
	$('.menu-btn').click(function() {
		$(this).toggleClass('active');
		$('.menu-mobile').toggleClass('open');
	});
	$('.menu-close').click(function() {
		$('.menu-btn').removeClass('active');
		$('.menu-mobile').removeClass('open');
	});
	$('.drop-toggle').click(function() {
		$(this).parent().toggleClass('open');
		$(this).next('ul').slideToggle();
	});
	$('body').on('click', function(e) {
		if ($(e.target).closest(".menu-mobile, .menu-btn").length) return;
		$('.menu-mobile').removeClass('open');
		$('.menu-btn').removeClass('active');
	});

	//фильтры
	$('.filter-btn').click(function() {
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('open');
	});

	//производитель
	$('.more-link').click(function() {
		var option = $(this).attr('href');
		$(this).toggleClass('active');
		$(option).toggleClass('open');
		return false;
	});

	//login form
	$('.login').click(function() {
		$(this).toggleClass('active');
		$('.login-form').toggleClass('open').fadeToggle();
		return false;
	});
	$('body').on('click', function(e) {
		if ($(e.target).closest(".login-form, .login").length) return;
		$('.login-form').removeClass('open').fadeOut();
		$('.login').removeClass('active');
	});
});

$(document).ready(function() {
	$('.slider-home').slick({
	  autoplay: false,
	  autoplaySpeed: 5000,
	  dots: false,
	  arrows: true,
	  infinite: true,
	  slidesToShow: 1,
      slidesToScroll: 1,
	  appendArrows: $('.arrows-wrap'),
	  asNavFor: '.cl-day'
	});

	$('.cl-day').slick({
		arrows: false,
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.slider-home',
		responsive: [
				{
				  breakpoint: 992,
				  settings: {
				  	arrows: true,
				    slidesToShow: 4
				  }
				}
			]
		});

	$('.cl-category').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	      	arrows: true,
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 3
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

	$('.cl-news').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	      	arrows: true,
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

	$('.cl-tovar').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	      	arrows: true,
	        slidesToShow: 3
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

	$('.cl-about').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 8,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	      	arrows: true,
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 3
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

	$('.cl-brend').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 12,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	      	arrows: true,
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 3
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

	$('.cl-pay').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	      	arrows: true,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 3
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

	$('.product-slider').slick({
	  dots: false,
	  arrows: true,
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product-slider',
		speed: 300,
		focusOnSelect: true,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 3
	      }
	    }
	  ]
	});

});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 767) {
    	$('.cl-about').slick('init');
    	$('.cl-brend').slick('init');
    	$('.cl-pay').slick('init');
    } else {
    	$('.cl-about').slick('destroy');
    	$('.cl-brend').slick('destroy');
    	$('.cl-pay').slick('destroy');
    }
});

