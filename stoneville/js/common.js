$(function() {

	$(".popup_form").magnificPopup();

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

$(function () {
  $('[data-toggle="popover"]').popover().click(function() {
  	return false;
  });

});

$(document).ready(function() {
	$('.mob-link').click(function() {
        $('.mob-drop').slideToggle();
        $(this).toggleClass('open');
    });
    $('.drop-link').hover(function() {
        $('.drop-menu').stop( true, true ).fadeIn("fast");
        },
		function() {
        $('.drop-menu').stop( true, true ).fadeOut("fast");
    });
});
$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 991) {
    		$('.drop-link').addClass('mob-link').removeClass('drop-link');
    		$('.drop-menu').addClass('mob-drop').removeClass('drop-menu');
    		$('.header-main__menu').hide();
    } else {
    	$('.mob-link').addClass('drop-link').removeClass('mob-link');
    	$('.mob-drop').addClass('drop-menu').removeClass('mob-drop');
    	$('.header-main .container').removeClass('main');
    	$('.header-menu__btn').removeClass('active');
    	$('.header-main__menu').css('display', 'inline-block');
    }
});

$(document).ready(function() {
	$('.header-menu__btn').on('click', function(e){
	    e.preventDefault();
	    var button = $(this),
	      nav = $('.header-main__menu'),
	      wrap = $('.header-main > .container');
	    if(!button.hasClass('active')){
	      button.addClass('active');
	      nav.stop(true, true).fadeIn();
	      wrap.addClass('main');
	    }
	    else{
	      button.removeClass('active');
	      nav.stop(true, true).fadeOut();
	      wrap.removeClass('main');
	    }
	});
});

$(document).ready(function() {
	$('.change-color__base a').click(function() {
		$('.change-color__base a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('.change-color__filling a').click(function() {
		$('.change-color__filling a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
});

$(document).ready(function() {
	$('.change-fence__element a').click(function() {
		if ($(this).hasClass('base')) {
			$('.change-fence .jcarousel-wrapper').removeClass().addClass('jcarousel-wrapper base');
		}
		if ($(this).hasClass('pillar')) {
			$('.change-fence .jcarousel-wrapper').removeClass().addClass('jcarousel-wrapper pillar');
		}
		if ($(this).hasClass('filling')) {
			$('.change-fence .jcarousel-wrapper').removeClass().addClass('jcarousel-wrapper filling');
		}
		return false;
	});
});

$(document).ready(function(){
    $(".fancybox").fancybox();
});

$('.carousel').carousel({
  interval: 2000000
});

$(document).ready(function() {
	$('#color-base a').click(function() {
		$('#color-base a').removeClass('active');
		$(this).addClass('active');
		$(".base-img").removeClass('c1 c2 c3 c4');
		$(".base-img").addClass($(this).attr("id"));
		return false;
	});
	$('#color-filling a').click(function() {
		$('#color-filling a').removeClass('active');
		$(this).addClass('active');
		$(".filling-img").removeClass('c5 c6 c7 c8');
		$(".filling-img").addClass($(this).attr("id"));
		return false;
	});
});