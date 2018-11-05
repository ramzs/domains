$(function() {

	//Закрыть magnificpopup после отправки сообщения
	$(document).on('mailsent.wpcf7', function () {

		setTimeout(function() {
			$.magnificPopup.close();
		}, 4000);
	});


	//Галерея
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
	//свайп для галереи
	(function() {
	  /* Define a variável que dá swipe no lightbox */
		var magnificPopup = $.magnificPopup.instance;

		/* Carrega a função quando clica no lightbox (senão não pega a classe utilizada) */
		$(".zoom-gallery").click(function(e) {

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
	//конец галереи


	// $('.zoom-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	closeOnContentClick: false,
	// 	closeBtnInside: false,
	// 	mainClass: 'mfp-with-zoom mfp-img-mobile',
	// 	image: {
	// 		verticalFit: true,
	// 		titleSrc: function(item) {
	// 			return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
	// 		}
	// 	},
	// 	gallery: {
	// 		enabled: true
	// 	},
	// 	zoom: {
	// 		enabled: true,
	// 		duration: 300, // don't foget to change the duration also in CSS
	// 		opener: function(element) {
	// 			return element.find('img');
	// 		}
	// 	}

	// });


	//FormStyler
	/*
	  $('input, select').styler({
		selectSmartPositioning: false
	  });
	*/

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
	$('body').click(function(e) {
	    if ($(e.target).closest(".navbar-collapse, .navbar-toggle").length) return;
	    $('.navbar-collapse').removeClass('in');
	    $('.navbar-toggle').addClass('collapsed');
	});

	//Слайдер на главной
	$('.slider-home').slick({
		fade: true,
		arrows: true,
		asNavFor: '.slider-navbutton'
	});
	$('.slider-navbutton').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-home',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: "destroy"
		    }
		]
	});
	//конец

	//Карусель наши работы
	$('.work-cl').slick({
		slidesToShow: 6,
		slidesToScroll: 3,
		dots: true,
		arrows: true,
		infinite: true,
		responsive: [
			{
			breakpoint: 1650,
			settings: {
			slidesToShow: 5,
			slidesToScroll: 2
				}
			},
			{
			breakpoint: 1390,
			settings: {
			slidesToShow: 4,
			slidesToScroll: 2
				}
			},
			{
			breakpoint: 1090,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3
				}
			},
			{
			breakpoint: 800,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
				}
			},
			{
			breakpoint: 550,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
				}
			}
		]
	});
	//конец

	//Карусель на странице услуги
	$('.service-cl').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		responsive: [
			{
			breakpoint: 992,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
				}
			}
		]
	});
	//конец
});