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

	$('input, select').styler();

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

$(document).scroll(function() {
	if( $(this).scrollTop() > 70 ) {
		$(".header-top").addClass("header-fixed");
		$(".personal").addClass("personal-fixed");
		$(".phone--header").addClass("phone--fixed");
	} else if( $(this).scrollTop() < 70 ) {
		$(".personal").removeClass("personal-fixed");
		$(".phone--header").removeClass("phone--fixed");
	}
});

$(document).ready(function() {

	$('.header-slider').slick({
		fade: false,
		arrows: true,
		dots: false,
		centerMode: true,
		variableWidth: true,
		appendArrows: $(".slider-nav")
	});


	$('.catalog-carousel').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
			  	arrows: true,
			  	infinite: true,
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			},
		]
	});


	$('.brend-carousel').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1240,
			  settings: {
			    slidesToShow: 5,
			    slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
			  	arrows: false,
			    slidesToShow: 100,
			    slidesToScroll: 1
			  }
			},
		]
	});


	$('.catalog-nav__item > a').click(function(e) {
		var link = $(this).parent();
			$('.catalog-nav__item, .catalog-nav__item a').removeClass('active');
			$('.catalog-dropnav, .catalog-subnav').slideUp('fast');
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown('fast');
			$(this).addClass('active');
			link.addClass('active');
		}
		e.preventDefault();
	});
	$('.catalog-dropnav__item > a').click(function(e) {
		var link = $(this).parent();
			$('.catalog-dropnav__item, .catalog-dropnav__item a').removeClass('active');
			$('.catalog-subnav').slideUp('fast');
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown('fast');
			$(this).addClass('active');
			link.addClass('active');
		}
		e.preventDefault();
	});


	$('#nav-catalog').on('click', function() {
		$('.sidebar').toggleClass('open');
		$('body').on('click', function(e) {
			if ($(e.target).closest(".sidebar.open, #nav-catalog").length) return;
			$('.sidebar.open').removeClass('open');
		});
	});
	$(window).on('resize load', function(){
		var size = $(window).width();
			menu = $('.sidebar');
	    if (size > 767 ) {
			menu.removeClass('open').show();
	    }
	});


	$('#nav-main').on('click', function() {
		$('.main-menu').toggleClass('open').fadeToggle('fast');
		$('body').toggleClass('overflow')
		$('body').on('click', function(e) {
			if ($(e.target).closest(".main-menu.open, #nav-main").length) return;
				$('.main-menu.open').removeClass('open').fadeOut('fast');
				$('body').removeClass('overflow')
		});
	});


	$(".tab-head__link").click(function() {
	    $(".tab-head__link").removeClass("active");
	    $(this).addClass("active");
	    $(".tab-item").removeClass('open').hide();
	    var activeTab = $(this).attr("href");
	    $(activeTab).addClass('open').fadeIn(700);
	    return false;
	});


	$('.delivery-form .dv').click(function() {
		$('.delivery-form .dv').removeClass('active');
		$(this).addClass('active');
	});

	$('.pay-form .pay').click(function() {
		$('.pay-form .pay').removeClass('active');
		$(this).addClass('active');
	});
});