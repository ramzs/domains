$(function() {
	//fancybox
	$(".fancybox").fancybox();
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

//FormStyler
$(function() {

  $('input, select').styler({
  		selectSmartPositioning: false
  });

});

	//jCarousel
$(document).ready(function() {
    $('.carousel').jcarousel();
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 749) {
    	$('.carousel').swipe({
	        swipeLeft: function() {
	        $('.carousel').jcarousel('scroll', '+=1');
	        },
	        swipeRight: function() {
	        $('.carousel').jcarousel('scroll', '-=1');
	        }
	});
    } else {
    	$('.carousel').swipe({
	        swipeLeft: function() {
	        $('.carousel').jcarousel('scroll', '');
	        },
	        swipeRight: function() {
	        $('.carousel').jcarousel('scroll', '');
	        }
	});
    }
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 749) {
    	$('.header-search i').off('click');
    } else {
    	$('.header-search i').on('click', function() {
			$('nav').toggleClass('active-search');
		});
    }
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 749) {
    	$('.header-phone').insertAfter('.header-cart');
    	$('#nav-menu').insertAfter('#menu-mobile__close');
    } else {
    	$('.header-phone').insertAfter('.header-logo');
    	$('#nav-menu').prependTo('nav .container');
    }
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth > 991) {
    	$('#cat-menu').show();
    } else {
    	$('#cat-menu').hide();
    }
});
$(document).ready(function() {
	$('.catalog-mobile__btn').click(function() {
			$('#cat-menu').slideToggle();
			return false;
	});
});


/*Menu mobile*/
	$('#menu__btn').click(function(){
		$('#menu-mobile').addClass('mobile-open');
		$('.menu-mobile__overlay').fadeIn('slow');
		return false;
	});
	$('#menu-mobile__close, .menu-mobile__overlay').click(function(e){
		$('#menu-mobile').removeClass('mobile-open');
		$('.menu-mobile__overlay').fadeOut('slow');
		e.stopPropagation();
	});