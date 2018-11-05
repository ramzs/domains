$(function() {

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
		midClick: true,
		closeBtnInside: false
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

	// $('.gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	closeOnContentClick: false,
	// 	showCloseBtn: false,
	// 	mainClass: 'mfp-with-zoom mfp-img-mobile',
	// 	image: {
	// 		verticalFit: true
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

$(window).on('load resize', function(){
	var windowWidth = $(window).width();


    if (windowWidth <= 767) {
    	$('.grid').masonry({
		  // options
		  itemSelector: '.grid-item',
		  columnWidth: '.grid-item',
		  percentPosition: true
		});
    } else {
    	$('.grid').masonry({
		  // options
		  itemSelector: '.grid-item',
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});
    }
});

// $(window).on('load resize', function(){
// 	$('.grid').masonry({
// 	  // options
// 	  itemSelector: '.grid-item',
// 	  columnWidth: '.grid-item',
// 	  // fitWidth: true,
// 	  // gutter: 30,
// 	  percentPosition: true
// 	});
// });

$(document).ready(function() {

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

   //Слайдер
	$('.gallery-gl').slick({
	  fade: true,
	  dots: true,
	  arrows: false,
	});

	$('.btn-type').click(function(e) {
		var title = $(this).closest(".type-item").find('.type-item__title');
			val   = title.text();
	    $('#form-title').val(val);
	    $('.callback-form__subtitle').html(val);
	});

	//формы
	$("form.form-0").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-0.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.callback-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.callback-form').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	$("form.form-1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-1.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.main-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.main-form').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
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
			$(th).closest('.form-block').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.form-block').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
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
			$(th).closest('.callback-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.callback-form').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
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
			$(th).closest('.sidebar-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.sidebar-form').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	$("form.form-5").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-5.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.qs-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.qs-form').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
});