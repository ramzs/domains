$(function() {

	// $('.popup').magnificPopup({
	// 	removalDelay: 500,
	// 		callbacks: {
	// 		    beforeOpen: function() {
	// 		       this.st.mainClass = this.st.el.attr('data-effect');
	// 		    }
	// 	},
	// 	midClick: true
	// });

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
  $('.change__list li').hover(
	  	function() {
	    $(this).addClass('active');
	   },
	   function() {
	    $(this).removeClass('active');
	   }
   );
});

$(document).ready(function() {
	$('#menu-btn').on('click', function(){
		$(this).toggleClass('active');
		$('#menu-mob').toggleClass('show');
		$('#phone-menu').removeClass('show');
	    $('#phone-btn').removeClass('active');
	});

	$('#phone-btn').on('click', function(){
		$(this).toggleClass('active');
		$('#phone-menu').toggleClass('show');
		$('#menu-mob').removeClass('show');
	    $('#menu-btn').removeClass('active');
	});

	$('body').click(function(e) {
	    if ($(e.target).closest("#menu-mob, #menu-btn, #phone-menu, #phone-btn").length) return;
	    $('#menu-mob, #phone-menu').removeClass('show');
	    $('#menu-btn, #phone-btn').removeClass('active');
	});

	$(window).resize(function(){
	    var windowWidth = $(window).width();
	    if (window.matchMedia('(min-width: 992px)').matches) {
			$('#menu-mob, #phone-menu').removeClass('show');
			$('#menu-btn, #phone-btn').removeClass('active');
		}
	});
});

$(document).ready(function() {
	$('.btn__link-history').click(function() {
		$('.history__mob .history__block').removeClass('active');
		$(this).parents('.history__block').addClass('active');
		return false;
	});
	$('.history__mob .history__block').click(function() {
		$(this).removeClass('active');
	});
});

$(function() {
	$('.slider__city').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.history__slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
		{
		  breakpoint: 767,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
	});

	$('.speaker__slider.slider-for').slick({
		slidesToShow: 2,
		infinite: true,
		arrows: false,
		speed: 500,
		focusOnSelect: true,
		asNavFor: '.slider-nav',
		responsive: [
		{
		  breakpoint: 1300,
		  settings: {
		    slidesToShow: 1
		  }
		}
		]
	});
	$('.slider-nav').slick({
		arrows: false,
		slidesToShow: 5,
		infinite: true,
		asNavFor: '.slider-for',
		dots: false,
		focusOnSelect: true,
		responsive: [
		{
		  breakpoint: 1300,
		  settings: {
		    slidesToShow: 4
		  }
		},
		{
		  breakpoint: 1200,
		  settings: {
		    slidesToShow: 3
		  }
		}
		]
	});
});

// $(window).on('resize load', function() {
//    	var windowWidth = $(window).width();
//     if (windowWidth <= 767) {
//     	$('.history__slider').slick('unslick');

//     } else {

//     }
// });


$(".city__list span").webuiPopover({
	placement: "horizontal",
	content: $('#webui').html(),
	arrow: false,
	trigger: "hover",
	delay: {
		show: 50,
		hide: 50
	},
});