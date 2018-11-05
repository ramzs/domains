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

	$('.sl-portfolio').slick({
		// autoplay: true,
		// autoplaySpeed: 3000,
		fade: true,
		slidesToShow: 1,
		slideToScroll: 1,
		dots: false,
		arrows: false,
		infinite: true,
		asNavFor: '.sl-portfolio-nav'
	});
	$('.sl-portfolio-nav').slick({
		slidesToShow: 4,
		slideToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		variableWidth: true,
		focusOnSelect: true,
		asNavFor: '.sl-portfolio',
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2
		      }
		    }
	    ]
	});

	$('.cl-feedback').slick({
		// autoplay: true,
		// autoplaySpeed: 3000,
		slidesToShow: 3,
		slideToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1
		      }
		    }
	    ]
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

	//прокрутка по якорям
   $('.header-menu a, .btn-title').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1000);
        e.preventDefault();
    });

	//видео
		var	def = $('.sl-portfolio-nav .slick-current .video-preview').attr('data-youtube');
	$('.sl-portfolio .slick-current .sl-video').html('<iframe src="https://www.youtube.com/embed/'+def+'?autoplay=0" frameborder="0" allowfullscreen></iframe>');

	$('.sl-portfolio-nav').on('afterChange', function(event, slick, currentSlide) {
		var	def = $('.sl-portfolio-nav .slick-current .video-preview').attr('data-youtube');

  		$('.sl-portfolio .sl-video').children().detach();
		$('.sl-portfolio .slick-current .sl-video').html('<iframe src="https://www.youtube.com/embed/'+def+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
	});

	$(".sl-portfolio-nav .sl-item").click(function() {
		var main        = $('.sl-portfolio .slick-current .sl-video');
		var dataYoutube = $(this).children('.video-preview').attr('data-youtube');
		$('.sl-portfolio .sl-video').children().detach();
		main.html('<iframe src="https://www.youtube.com/embed/'+dataYoutube+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');

		return false;
	});

});

$(document).ready(function() {

	$("form.form-1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-1.php", //Change
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

});

$(document).ready(function() {
	wow = new WOW(
      {
      mobile: false
    }
    )
    wow.init();
});