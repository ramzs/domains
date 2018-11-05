$(function() {

	$('.nav-submenu').autocolumnlist({
        columns: 2,
        classname: 'nav-submenu__col'
    });

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
	}

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function(){

	//Кнопка наверх
	$("#scroll-top").hide().removeAttr("href");
	if ($(window).scrollTop()>="800") $("#scroll-top").fadeIn("slow");
	$(window).scroll(function(){
		if ($(window).scrollTop()<="800") $("#scroll-top").fadeOut("slow");
		else $("#scroll-top").fadeIn("slow");
	});
	$("#scroll-top").click(function(){
		$("html, body").animate({scrollTop:0},"slow");
	});
	// конец кнопки наверх

	$('.login__link').click(function() {
		$(this).toggleClass('active');
		$('.login-form').toggleClass('open').stop(true, true).fadeToggle();
	});
	$('body').click(function(e) {
		if ($(e.target).closest(".login-form, .login__link").length) return;
		$('.login-form').removeClass('open').fadeOut();
		$('.login__link').removeClass('active');
	});


	//menu

    $('.nav > li').click(function(e) {
		$(this).toggleClass('active').find('ul').stop(true, true).slideToggle();
		e.preventDefault();
	});

    $(window).on('load resize', function(){
		var size = $(window).width();
		if (size > 767) {
			$('.nav > li').bind('mouseenter mouseleave');
			$('.nav > li').mouseenter(function() {
		        $(this).addClass('active').find('ul').stop(true, true).slideDown();
		    });
		    $('.nav > li').mouseleave(function() {
		        $(this).removeClass('active').find('ul').stop(true, true).slideUp('fast');
		    });
		} else {
			$('.nav > li').unbind('mouseenter mouseleave');
		}
	});

	var touch 	= $('.btn-menu');
		menu 	= $('.nav');
		overlay = $('.overlay');

	$(touch).on('click', function(e) {
		e.preventDefault();
		touch.addClass('active');
		menu.addClass('open');
		overlay.stop(true, true).fadeIn();
		$('body').addClass('noscroll');
	});
	$('.overlay').on('click', function(e) {
		menu.removeClass('open');
		touch.removeClass('active');
		overlay.stop(true, true).fadeOut();
		$('body').removeClass('noscroll');
	});

	$(window).on('resize load', function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	//end menu

	//Tabs
	$(".tabs-links__item").click(function() {
		var tab  = $(this).closest('.tabs').find('.tabs-links__item');
			main = $(this).closest('.tabs').find('.tabs-body');
			activeTab = $(this).attr("href");
	    tab.removeClass("active");
		main.removeClass('open').hide();
	    $(this).addClass("active");
	    $(activeTab).addClass('open').stop(true, true).fadeIn(700);
	    return false;
	});

	$('.cl-block').slick({
		infinite: true,
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
        slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 568,
		      settings: {
		        slidesToShow: 1,
		        arrows: false
		      }
		    }
		]
	});

	$('.cl-team').slick({
		infinite: true,
		arrows: true,
		dots: true,
		slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        appendArrows: $('.cl-nav'),
		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 568,
		      settings: {
		        slidesToShow: 1,
		        arrows: false
		      }
		    }
		]
	});

	$('.f-slider').slick({
		infinite: true,
		arrows: true,
		dots: false,
		adaptiveHeight: true
	});

	$('.tovar-cl').slick({
		infinite: true,
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        arrows: false
		      }
		    }
		]
	});


	$('.s-text__link').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.s-text__descr_hide').slideToggle('slow');
	});

});

$(document).ready(function(){
	$('.change-block__item input:checked').closest('.change-block__item').addClass('active');
	$('.jq-radio').on('click', function(e) {
		$('.change-block__item').removeClass('active');
		$(this).closest('.change-block__item').addClass('active');
	});
});

$(document).ready(function(){
	$('.jq-selectbox').change(function(){
		$('.change-block__selpict').find('img:first').attr('src', $('.jq-selectbox option:selected').attr('data-path'));
	});
});