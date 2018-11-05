$(function() {

	$('.popup').magnificPopup({
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  }
	});

	$('.gallery-item__pict').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});

	(function() {
	  /* Define a variável que dá swipe no lightbox */
		var magnificPopup = $.magnificPopup.instance;

		/* Carrega a função quando clica no lightbox (senão não pega a classe utilizada) */
		$(".gallery-item__pict a").click(function(e) {

		/* Espera carregar o lightbox */
		setTimeout(function() {
		    /* Swipe para a esquerda - Próximo */
		    $(".mfp-figure").swipe( {
		      swipeLeft:function(event, direction, distance, duration, fingerCount) {
		        console.log("swipe right");
		        magnificPopup.next();
		      },

		    /* Swipe para a direita - Anterior */
		    swipeRight:function(event, direction, distance, duration, fingerCount) {
		      console.log("swipe left");
		      magnificPopup.prev();
		    },
		    });
		}, 500);
		});

		}).call(this);

	// $("body").swipe({
 //        swipeLeft: function(event, direction, distance, duration, fingerCount) {
 //            $(".mfp-arrow-left").magnificPopup("next");
 //        },
 //        swipeRight: function(event, direction, distance, duration, fingerCount) {
 //            $(".mfp-arrow-right").magnificPopup("prev");
 //        },
 //        threshold: 50
 //    });


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

$(document).ready(function() {
	$('.slider-main').slick({
		arrows: true,
		dots: true,
		centerMode: true,
		variableWidth: true,
		adaptiveHeight: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-main',
		dots: false,
		focusOnSelect: true
	});

	$('.slider-content').slick({
		arrows: true,
		dots: true,
		centerMode: true,
		variableWidth: true
	});
});

$(".ev").click(function() {
    $(this).closest('.calendare').find('.ev').removeClass("today");
    $(this).addClass("today");
    $(this).closest('.event__item').find('.event-descr').removeClass('open').hide();
    var activeTab = $(this).attr("data-target");
    $(activeTab).addClass('open').fadeIn(700);
    return false;
});

$(document).ready(function() {
	$('.nav-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.nav-menu--header').toggleClass('open').fadeToggle();
		$('body').on('click', function(e) {
			if ($(e.target).closest(".nav-menu--header.open, .nav-btn").length) return;
			$('.nav-menu--header.open').removeClass('open').fadeOut();
			$('.nav-btn').removeClass('active');
		});
	});
	$(window).on('resize load', function(){
	var size = $(window).width();
			menu = $('.nav-menu--header');
	    if (size > 767 ) {
			menu.removeClass('open').show();
			$('.nav-btn').removeClass('active');
	    } else {
		menu.hide();
	    }
	});
});