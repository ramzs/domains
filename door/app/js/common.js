$(function() {

	//FormStyler

	  $('input, select').styler();


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

	$('.zoom-gallery').magnificPopup({
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
		$(".zoom-gallery a").click(function(e) {

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
	$('.menu-main__item').mouseenter(function(e) {
		$(this).children('ul').stop(true, true).fadeIn();
		$(this).children('a').addClass('active');
	});
	$('.menu-main__item').mouseleave(function(e) {
		$(this).children('ul').stop(true, true).fadeOut();
		$(this).children('a').removeClass('active');
	});
});

$(document).ready(function() {
	$('.home-slider').slick({
		infinite: true,
		variableWidth: true,
		centerMode: true,
		arrows: true,
		appendArrows: $('.slider-nav')
	});

	$('.sidebar-nav__link').click(function(e) {
		$(this).toggleClass('active');
		$(this).next().slideToggle().toggleClass('open');
		e.preventDefault();
	});

	$('.change-block a').click(function(e) {
		$(this).closest('.change-block').find('a').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('.change-size__item').click(function(e) {
		$('.change-size__item').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('.tovar-price__in').click(function(e) {
		$('.tovar-price__in').removeClass('active');
		$(this).addClass('active');
	});

	$('.tooltip-complect').mouseenter(function() {
		$('.tooltip').stop(true, true).fadeIn('fast');
	});
	$('.tooltip-complect, .tooltip').mouseleave(function() {
		$('.tooltip').stop(true, true).fadeOut('fast');
	});

	$(".tab-block__item").click(function() {
		var tab  = $(this).closest('.tab-block').find('.tab-block__item');
			main = $('.tab-body').find('.tab-content');
			activeTab = $(this).attr("data-target");
	    tab.removeClass("active");
		main.removeClass('open').hide();
	    $(this).addClass("active");
	    $(activeTab).addClass('open').stop(true, true).fadeIn(700);
	    return false;
	});
});

$(window).on('load change', function() {
   $('input[type="number"]').each(function(){
		var value = $(this).closest('.cart-count').find('input').val();
		if (value <= 1) {
			$(this).closest('.cart-count').addClass('noactive');
		} else {
			$(this).closest('.cart-count').removeClass('noactive');
		}
   });
});