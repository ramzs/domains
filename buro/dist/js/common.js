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

$(document).ready(function() {
	//формы
	$("form.form-0").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-0.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.form').find('.success').removeClass('active').fadeOut();
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
});