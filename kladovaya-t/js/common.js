$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	//FormStyler
	  $('input, select').styler();

	  //bxSlider
	$('.bxslider').bxSlider({
		captions: true,
		adaptiveHeight: true
	});

	$(".link__top").mPageScroll2id ({
		scrollSpeed : 500
	});

});

$(window).scroll(function(){
	if ($(window).scrollTop()>500){
	$('.link__top').show();
	} else {
		$('.link__top').hide();
	}
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function(){
  $('.bxcarousel').bxSlider({
    slideWidth: 260,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10
  });

  $('.bxcarousel-2').bxSlider({
    slideWidth: 195,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 10
  });

  $('.bxgallery').bxSlider({
 	mode: 'fade',
	pagerCustom: '#bx-pager',
	slideMargin: 50
	});
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 767) {
    	$('.block__title').attr('data-toggle', 'collapse');
    	$('.list__block ul, .list__block img').removeClass('in');
    } else {
    	$('.block__title').attr('data-toggle', '');
    	$('.list__block ul, .list__block img').addClass('in');
    }
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 767) {
    	$('.panel__title').attr('data-toggle', 'collapse');
    } else {
    	$('.panel__body').addClass('in');
    	$('.panel__title').attr('data-toggle', '');
    	$('.panel__body').css('height', '100%');
    }
});

$(document).ready(function(){
	$('.block__title').click(function() {
		$(this).toggleClass('open');
	});

	$('.panel__title').click(function() {
		$(this).toggleClass('open');
	});

	$('.list__title-gift').on('click', function() {
		$('.catalog__list-gift').toggleClass('active');
		$('.catalog-group').toggleClass('open');
	});
});

$(document).ready(function(){
    $("#filter-change").on('click', function() {
        $('.filter__catalog').fadeToggle("fast");
        $('.catalog__tovar').fadeToggle("fast");
        $(this).toggleClass('opened');
    });
    $(".btn__total").on('click', function() {
        if ($("#filter-change").hasClass('opened')) {
        	$("#filter-change").removeClass('opened');
        	$('.filter__catalog').fadeOut("fast");
	        $('.catalog__tovar').fadeIn("fast");
        }
    });
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 767) {
    	$('.footer .container, .content .container').addClass('container-fluid');
    	$('.footer .container, .content .container').removeClass('container');
    } else {
    	$('.footer .container-fluid, .content .container-fluid').addClass('container');
    	$('.footer .container-fluid, .content .container-fluid').removeClass('container-fluid');
    }
});

$(document).ready(function(){
	$('.overlay__block, .overlay__arrow').on('click', function() {
		$('.main__about').toggleClass('open');
		return false;
	});
});

/*Menu mobile*/
$('#menu-btn').click(function(){
	$('#menu-mobile').addClass('mobile__open');
	$('.menu__overlay').fadeIn('slow');
	$('.menu__header').show();
	$('body').addClass('overflow');
	return false;
});
$('#menu-close, .menu__overlay').click(function(e){
	$('#menu-mobile').removeClass('mobile__open');
	$('.menu__overlay').fadeOut('slow');
	$('.menu__header').hide();
	$('body').removeClass('overflow');
	e.stopPropagation();
});

$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth <= 767) {
    	$('.header__menu').prependTo('.menu__inner');
    } else {
    	$('.header__menu').prependTo('.header__bottom .container');
    }
});

$('.top__icon').on('click', function(){
	var searchIcon = $('.top__icon-search'),
		cartIcon = $('.top__icon-cart'),
		searchBlock = $('#cart-search'),
		cartBlock = $('#cart-mob');

	$('.top__icon').removeClass('active');
	$(this).addClass('active');

	if (searchIcon.hasClass('active')){
		searchBlock.addClass('open');
		cartBlock.removeClass('open');
	} else if (cartIcon.hasClass('active')) {
		cartBlock.addClass('open');
		searchBlock.removeClass('open');
	}
	return false;
});