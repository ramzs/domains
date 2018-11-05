$(function() {

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

	$('.gallery-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		showCloseBtn: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
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

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

$(document).ready(function() {
	//Маска ввода
	$(".phone-in").inputmask("+7 (999) 999-99-99",{ showMaskOnHover: false });

	//Скрыть/показать плейсхолдер
	$('input').focus(function () {
	    $(this).closest('label').find('.placeholder').fadeOut(100);
	});
	$('input').blur(function () {
	    if ($(this).val().trim() === '') {
	        $(this).closest('label').find('.placeholder').fadeIn(100);
	    }
	});

	//моб. меню
	$('#btn-mob').on('click', function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
	});
	$('body').click(function(e) {
	    if ($(e.target).closest(".menu-mob, .header-nav").length) return;
	    $('.menu-mob').removeClass('active');
	    $('.header-nav').removeClass('open');
	});

	// //прокрутка по якорям
   $('.header-menu a').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1000);
        e.preventDefault();
    });

    $("form.form-1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-1.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.callback-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.callback-form').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
				th.find('.placeholder').fadeIn(800);
			}, 3000);
		});
		return false;
	});
    $("form.form-2").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-2.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.callback-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.callback-form').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
				th.find('.placeholder').fadeIn(800);
			}, 3000);
		});
		return false;
	});
	$("form.form-3").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-3.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.form-front').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.form-front').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
				th.find('.placeholder').fadeIn(800);
			}, 3000);
		});
		return false;
	});
	$("form.form-4").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-4.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.callback-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.callback-form').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
				th.find('.placeholder').fadeIn(800);
			}, 3000);
		});
		return false;
	});

});