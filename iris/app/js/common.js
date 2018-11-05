$(function() {

	$("#time-in").inputmask("99 : 99");

	$('select').styler({
		selectSmartPositioning: false
	});

	$('.popup').magnificPopup({
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  }
	});

	$('.zoom-gallery').magnificPopup({
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
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

$(document).ready(function(e) {
	$('.nav__item').mouseenter(function() {
		$('.nav__link', this).addClass('active');
		$('.nav-submenu', this).stop(true, true).fadeIn('fast');
	});
	$('.nav__item').mouseleave(function() {
		$('.nav__link', this).removeClass('active');
		$('.nav-submenu', this).stop(true, true).fadeOut('fast');
	});
});
$(window).on('resize load', function() {
    var windowWidth = $(window).width();
    if (windowWidth <= 767) {
        $(".nav__link").one("click", false);
    }
});

$(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		dots: false,
		centerMode: true,
		variableWidth: true,
		appendArrows: $(".slider-nav")
	});
});

$(document).ready(function() {
	$('#nav-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.nav').toggleClass('open').fadeToggle();
		$('body').on('click', function(e) {
			if ($(e.target).closest(".nav.open, #nav-btn").length) return;
			$('.nav.open').removeClass('open').fadeOut();
			$('#nav-btn').removeClass('active');
		});
	});
	$(window).on('resize load', function(){
	var size = $(window).width();
			menu = $('.nav');
	    if (size > 767 ) {
			menu.removeClass('open').show();
			$('#nav-btn').removeClass('active');
	    } else {
		menu.hide();
	    }
	});
});

$(document).ready( function() {
    $(".upload-wrap input[type=file]").change(function(){
			var filename = $(this).val().replace(/.*\\/, "");
         $(this).closest('.upload-wrap').find('.upload-in').val(filename);
    });
});

$(document).ready(function() {
	$(".change-tab__item").click(function() {
		var tab  = $(this).closest('.change-block').find('.change-tab__item');
			main = $(this).closest('.change-block').find('.change-item');
			activeTab = $(this).attr("data-target");
	    tab.removeClass("active");
		main.removeClass('open').hide();
	    $(this).addClass("active");
	    $(activeTab).addClass('open').stop(true, true).fadeIn(700);
	    return false;
	});
});

$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: true,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		callbacks: {

			    buildControls: function() {
			      // re-appends controls inside the main container
			      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
			    },
			    beforeOpen: function() {
			      // just a hack that adds mfp-anim class to markup
			       this.st.image.markup = this.st.image.markup.replace('mfp-figure mfp-with-anim');
			       this.st.mainClass = this.st.el.attr('data-effect');
			    }

			  },
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});
});