$(function() {

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

$('[data-toggle="tooltip"]').tooltip();

$(document).ready(function(){
	$('.bxslider').bxSlider({
		pager:false,
		mode: 'fade',
		captions: true,
		auto: true,
		pause: 7000,
		speed:1000
	});
});

$(document).ready(function(){
    $(".fancybox").fancybox({
    });
});

$('.carousel').carousel({
  interval: 2000
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 767) {
    		$('.header-menu__right, .header-menu__left').appendTo('#navmenu');
    		$('.total-price').html('На сумму:');
    		$('#navmenu').hide();
    		$('.tovar-card__descr').insertAfter('.tovar-card__img');
    		$('.type-menu li.drop-li').appendTo('#drop-menu');
    } else {
    	$('.header-menu__right').appendTo('.menu-right');
    	$('.header-menu__left').appendTo('.menu-left');
    	$('.total-price').html('на сумму');
    	$('#navmenu').show();
    	$('.tovar-card__descr').insertBefore('.change-milling');
    }
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 991) {
    		$('.type-menu li.drop-li').appendTo('#drop-menu');
    } else {
    	$('.type-menu li.drop-li').appendTo('#category-menu');
    }
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 767) {
    		$('.type-menu li.drop-li').appendTo('#category-menu');
    }
});

$(document).ready(function() {
	$('.navmenu_mob__btn a').on('click', function(e){
	    e.preventDefault();
	    var button = $(this),
	      	nav = $('#navmenu');

	    if(!button.parent().hasClass('active')){
	      button.parent().addClass('active');
	      nav.stop(true, true).fadeIn();
	    }
	    else{
	      button.parent().removeClass('active');
	      nav.stop(true, true).fadeOut();
	    }
	});
});

$(document).ready(function() {
	$('#type-btn').on('click', function(e){
	    e.preventDefault();
	    var button = $(this),
	      	nav = $('#category-menu');

	    if(!button.parent().hasClass('active')){
	      button.parent().addClass('active');
	      nav.stop(true, true).fadeIn();
	    }
	    else{
	      button.parent().removeClass('active');
	      nav.stop(true, true).fadeOut();
	    }
	});
});

$(document).ready(function() {
	$('.link-param__more').click(function(){
		$('.tovar-card__param').slideToggle();
		$(this).toggleClass('open');
		return false;
	});
});