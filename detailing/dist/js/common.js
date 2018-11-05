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
		  midClick: true
	});

	$('.gallery').magnificPopup({
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

	$('.map').hover(function() {
		$(this).toggleClass('active');
		$('.contact').toggleClass('active');
	});

	//Parallax
	var scene1 = document.getElementById('scene1');
	var scene2 = document.getElementById('scene2');
	var scene3 = document.getElementById('scene3');
	var scene4 = document.getElementById('scene4');
	$(window).on('load', function(){
		    var windowWidth = $(window).width();
		    if(windowWidth <= 992) {
		    	Parallax.disable();
			} else {
			   var parallaxInstance = new Parallax(scene1, {
					hoverOnly: true
				});
				var parallaxInstance = new Parallax(scene2, {
					hoverOnly: true
				});
				var parallaxInstance = new Parallax(scene3, {
					hoverOnly: true
				});
				var parallaxInstance = new Parallax(scene4, {
					hoverOnly: true
				});
			}
	});

	// //прокрутка по якорям
   $('.header-menu a').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1000);
        e.preventDefault();
    });

  //кнопка наверх
 //   $(".scroll-top").hide().removeAttr("href");
	// $(window).scroll(function(){
	// 	if ($(window).scrollTop() <= "1000") {
	// 		$(".scroll-top").removeClass('active').stop().fadeOut("slow");
	// 	} else {
	// 		$(".scroll-top").addClass('active').stop().fadeIn("slow");
	// 	}
	// });
	$(".footer-logo").click(function(){
		$("html, body").animate({scrollTop:0},"slow");
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
			$(th).closest('.callback-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.callback-form').find('.success').removeClass('active').fadeOut();
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
			$(th).closest('.form-block').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.form-block').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});