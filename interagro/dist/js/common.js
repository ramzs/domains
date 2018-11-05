$(function() {

	//FormStyler

	  $('input, select').styler({
		selectSmartPositioning: false
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

$(document).ready(function() {
	//Slider home
	$('.sl-main').slick({
	  autoplay: false,
	  autoplaySpeed: 5000,
	  dots: true,
	  arrows: false,
	  infinite: true
	});

	$('.sl-service-in').slick({
	  autoplay: false,
	  autoplaySpeed: 5000,
	  dots: true,
	  arrows: false,
	  infinite: true
	});

	//Sidebar menu
	$(".sidebar-menu li:has('.sidebar-dropmenu')").hover(
		function(){
			$(this).find('a').toggleClass('active');
			$(this).find('ul').stop().fadeToggle('fast');
		}
	);
	$(window).on('resize load', function() {
	    var windowWidth = $(window).width();
	    	link        = $(".sidebar-menu li").find('a');
	    if (windowWidth <= 767) {
    		$(".sidebar-menu > li:has('.sidebar-dropmenu')").find('> a').one("click", false);
	    }
	});

	//sidebar menu mobile
	$('.btn-smenu').click(function() {
		$(this).toggleClass('active');
		$('.mob-smenu').toggleClass('open');
		return false;
	});
	$('body').click(function(e) {
	    if ($(e.target).closest(".mob-smenu, .btn-smenu").length) return;
	    $('.mob-smenu').removeClass('open');
	    $('.btn-smenu').removeClass('active');
	});

	$(".scroll-top").click(function(){
		$("html, body").animate({scrollTop:0},"slow");
	})

	//Фиксированное меню
	$(window).on('resize load', function(){
		var size = $(window).width();
	    if (size < 767 ) {         //отключаем на моб.
			$(window).unbind('scroll');
			$('.header, body').removeClass('fixed');
			$('.body').css('padding-top', '0');
	    } else {                  //включем обратно на пк
	    	$(window).bind('scroll', function () {
				var headerHeight  = $('.header').innerHeight();
				if ($(window).scrollTop() > headerHeight) {
					$('.header, body').addClass('fixed');
					$('body').css('padding-top', headerHeight);
				} else {
					$('.header, body').removeClass('fixed');
					$('body').css('padding-top', '0');
				}
			});
	    }
	});
	//конец фикс меню

});