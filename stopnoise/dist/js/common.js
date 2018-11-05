$(function() {

	$('.popup').magnificPopup({
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true
	});

	$('.image-popup').magnificPopup({
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

$(window).on('resize load',function(){
    var windowWidth = $(window).width();
    if(windowWidth <= 480) {
    	$(".nav__page-left").html("<i></i>Назад");
    	$(".nav__page-right").html("Вперед<i></i>");
	} else {
	   $(".nav__page-left").html("<i></i>Предыдущая страница");
	   $(".nav__page-right").html("Следующая страница<i></i>");
	}
});

$(document).ready(function() {

	$('.menu__item-drop').hover(function(e) {
		$(this).toggleClass('active');
		$('.menu__drop', this).slideToggle('fast');
		e.preventDefault();
	});

	$('.menu__item-mob').click(function(e) {
		$(this).toggleClass('active');
		$('.menu__drop-mob', this).slideToggle('fast');
		e.preventDefault();
	});

	$('.search__link').click(function(e) {
		$(this).toggleClass('active');
		$('.search__in').fadeToggle('fast');
		e.preventDefault();
	});

	$('body').click(function(e) {
	    if ($(e.target).closest(".search__in, .search__link").length) return;
	    $('.search__in').fadeOut('fast');
	    $('.search__link').removeClass('active');
  });

	$('.header__slider').slick({
		arrows: false,
		dots: true,
		dotsClass: 'slider__dots'
	});

	$('.carousel__block').slick({
		autoplay: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1366,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 1200,
		  settings: {
		  	autoplay: false,
		    slidesToShow: 4,
		    slidesToScroll: 1
		  }
		}
		]
	});

	$('.sidebar__slider').slick({
		fade: true,
		autoplay: true
	});

   $('.btn__top').bind("click", function(e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      return false;
   });

   /*Menu mobile*/
	$('.menu__btn').click(function(e){
		if ($('.header__nav-mob').hasClass('open')) {
			$('.menu__btn').removeClass('active');
			$('.header__nav-mob').removeClass('open');
			$('.menu__overlay').fadeOut('slow');
		} else {
			$('.menu__btn').addClass('active');
			$('.header__nav-mob').addClass('open');
			$('.menu__overlay').fadeIn('slow');
			return false;
		}
	});

	$('.menu__overlay').click(function(e){
		$('.menu__btn').removeClass('active');
		$('.header__nav-mob').removeClass('open');
		$('.menu__overlay').fadeOut('slow');
		e.stopPropagation();
	});

	$('.thumb__pict > img').click(function(e){
		var thumb = $(this).attr('src');
			main = $('.main__pict');

			main.attr('src', thumb);
			e.stopPropagation();
	});

	$('.link__form').click(function(e) {
		$(this).toggleClass('active');
		$('.form__box').fadeToggle('fast');
		return false;
	});

	$(".contact__city a").click(function() {
	    $(".contact__city").removeClass("active");
	    $(this).parent().addClass("active");
	    $(".contact__body").removeClass('open');
	    $(".contact__body").hide();
	    var activeTab = $(this).attr("href");
	    $(activeTab).addClass('open').fadeIn(700);
	    return false;
	});
});