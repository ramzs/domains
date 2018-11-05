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

	$('.layer-1').plaxmove({ratioH:0.05,ratioV:0.07})

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

$(document).ready(function() {
	$('.second-menu__item > a').click(function(e) {
		var link = $(this).parent();
			$('.second-menu__item').removeClass('active');
			$('.second-dropmenu').slideUp('fast');
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown('fast');
			link.addClass('active');
		}
		e.preventDefault();
	});
});