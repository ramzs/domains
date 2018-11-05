$(function() {

	$('.popup').magnificPopup();

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

(function($) {
		$(function() {
			$('input, select').styler({
				selectSmartPositioning: false
			});
		});
})(jQuery);

jQuery(function($){
   $("#phone").mask("+7 (999) 999-99-99");
});

$(window).load(function() {
  $("#date").datePicker();
});

// $(document).ready(function() {
// /* Mobile Navigation */
// 	$('#menu-btn').click(function(){
// 		$('#header-menu').addClass('mobile-open');
// 		$('body').css('overflow', 'hidden');
// 		return false;
// 	});
// 	$('#menu-close').click(function(){
// 		$('#header-menu').removeClass('mobile-open');
// 		$('body').css('overflow', 'auto');
// 		return false;
// 	});
// });

$(document).ready(function() {
	$('#menu-btn').on('click', function(e){
	    e.preventDefault();
	    var button = $(this),
	      nav = $('#header-menu'),
	      overlay = $('#menu-overlay, .menu__btn-close');
	    if (!button.hasClass('active')){
	      button.addClass('active');
	      nav.addClass('open').slideDown();
	      overlay.show();
	    }
	    else {
	      button.removeClass('active');
	      nav.removeClass('open').slideUp();
	      overlay.hide();
	    }
		overlay.click(function() {
			button.removeClass('active');
			nav.slideUp();
			overlay.hide();
		});
	});
	$('#phone-btn').on('click', function(e){
		e.preventDefault();
			var btn = $(this),
	      phone = $('#phone-menu'),
	      overlay = $('#menu-overlay, #close');
	    if (!btn.hasClass('active')){
	      btn.addClass('active');
	      phone.addClass('open').slideDown();
	      overlay.show();
	    }
	    else {
	      btn.removeClass('active');
	      phone.removeClass('open').slideUp();
	      overlay.hide();
	    }
		overlay.click(function() {
			btn.removeClass('active');
			phone.slideUp();
			overlay.hide();
		});
	});
});

$(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth >= 840) {
    	$('.header__menu').css('display', ('inline-block'));
    	$('#menu-btn').removeClass('active');
    } else {
    	$('.header__menu').css('display', ('none'));
    }
});

$(document).ready(function() {
	$('#arrow-btn').on('click', function(e){
		e.preventDefault();
		var arrow = $(this),
			slider = $('#rate-slider'),
			wrap = $('.rate');

		if (!arrow.hasClass('change')) {
				arrow.addClass('change');
				slider.addClass('active');
				wrap.addClass('fluid');
			} else {
				arrow.removeClass('change');
				slider.removeClass('active');
				wrap.removeClass('fluid');
			}
	});
});

$('.bxslider').bxSlider({
  pagerCustom: '#bx-pager'
});