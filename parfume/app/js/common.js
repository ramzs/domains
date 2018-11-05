$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.letter-list').autocolumnlist({
        columns: 6,
        classname: 'letter-list__col',
        min: 5
    });

    $('.letter-menu--brend').autocolumnlist({
        columns: 4,
        classname: 'letter-menu__col',
        min: 10
    });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

function fixed() {
    $(window).scroll(function() {
      	var nav = $('.header');
			pos = $(window).scrollTop();
			size = $(window).width();



		if (size < 1000 ) {
			if (pos > 100000) {
				nav.addClass('header--fixed');
			}
			else {
				nav.removeClass('header--fixed');
			}
	    } else {
			if (pos > 90) {
				nav.addClass('header--fixed');
			}
			else {
				nav.removeClass('header--fixed');
			}
	    }
    });
  }
fixed();

$(document).ready(function() {
	$(".tab-head__link").on('click', function() {
	    $(".tab-head__link ").removeClass("active");
	    $(this).addClass("active");
	    $(".carousel, .card-box").removeClass('open').hide();
	    var activeTab = $(this).attr("href");
	    $(activeTab).addClass('open').fadeIn(700);
	    return false;
	});
});

$(document).ready(function(){
  $('.header-slider').slick({
  		arrows: true,
  		dots: true,
  		appendArrows: $('.arrow-block')
  });
  $('.article-slider').slick({
  		arrows: false,
  		dots: true,
  		adaptiveHeight: true
  });
  $('.carousel').slick({
  		arrows: true,
  		dots: false,
  		slidesToShow: 5,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
  });
});

// $(window).on('resize load', function(){
// 	var size = $(window).width();
//     if (size > 1000 ) {
// 		$('.change-list__link').on('mouseenter click',function(e) {
// 			$('.change-list__link').removeClass('active');
// 			$(this).addClass('active');
// 			$('.change-drop').addClass('open').stop(true, true).fadeIn('fast');
// 			var link = $(this).attr("data-target");
// 			$('.change-drop div').removeClass('show');
// 			$(link).addClass('show');
// 		    e.preventDefault();
// 		});
// 		$('body').mouseover(function(e) {
// 		    if ($(e.target).closest(".change-drop, .change-list__link").length) return;
// 		    $('.change-list__link').removeClass('active');
// 			$('.change-drop').removeClass('open').stop(true, true).fadeOut('fast');
// 	  });
//     } else {
// 		$('.change-list__link').on('click',function(e) {
// 			$('.change-list__link').removeClass('active');
// 			$(this).addClass('active');
// 			$('.change-drop').addClass('open').stop(true, true).fadeIn('fast');
// 			var link = $(this).attr("data-target");
// 			$('.change-drop div').removeClass('show');
// 			$(link).addClass('show');
// 		    e.preventDefault();
// 		});
// 		$('body').click(function(e) {
// 		    if ($(e.target).closest(".change-drop, .change-list__link").length) return;
// 		    $('.change-list__link').removeClass('active');
// 			$('.change-drop').removeClass('open').stop(true, true).fadeOut('fast');
// 	  });
//     }
// });

$(document).ready(function() {
	$('.change-list__link').on('click',function(e) {
		$('.change-list__link').removeClass('active');
		$(this).addClass('active');
		var link = $(this).attr("data-target");
		$('.letter').removeClass('show').stop(true, true).fadeOut('fast');
		$(link).addClass('show').stop(true, true).fadeIn('fast');
	    e.preventDefault();
	});
	$('body').click(function(e) {
	    if ($(e.target).closest(".letter, .change-list__link").length) return;
	    $('.change-list__link').removeClass('active');
		$('.letter').removeClass('show').stop(true, true).fadeOut('fast');
	});
});

$(document).ready(function() {
 /*Menu mobile*/
	$('.menu-btn').click(function(e){
		var btn  = $('.menu-btn');
			menu = $('.nav--header');
			bg   = $('.menu-overlay');

		if (menu.hasClass('open')) {
			btn.removeClass('active');
			menu.removeClass('open');
			bg.fadeOut('slow');
		} else {
			btn.addClass('active');
			menu.addClass('open');
			bg.fadeIn('slow');

			return false;
		}
	});

	$('.menu-overlay').click(function(e){
		$('.menu-btn').removeClass('active');
		$('.nav--header').removeClass('open');
		$('.menu-overlay').fadeOut('slow');
		e.stopPropagation();
	});
});

$(document).ready(function() {
	$('.search-btn').click(function() {
		$('.search__in').toggleClass('focus');
		$('.search-result').stop(true, true).fadeToggle('fast');
	});
	$('body').click(function(e) {
	    if ($(e.target).closest(".search, .search-result").length) return;
	    $('.search__in').removeClass('focus');
		$('.search-result').stop(true, true).fadeOut('fast');
  });
});

$('.tovar-thumb img').click(function(e){
	var thumb = $(this).attr('src');
		main = $('.tovar-pict img');

		main.attr('src', thumb);
		e.stopPropagation();
});