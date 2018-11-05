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

	//Карусель
	var carousel = $(".port-cl").waterwheelCarousel({
		startingItem: 3,
		separation: 260,
		sizeMultiplier: 0.82,
		opacityMultiplier: 1,
		separationMultiplier: 0.86,
		flankingItems: 2,
		movingToCenter: function ($item) {
        $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
      },
      movedToCenter: function ($item) {
        $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
      },
      movingFromCenter: function ($item) {
        $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
      },
      movedFromCenter: function ($item) {
        $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
      },
      clickedCenter: function ($item) {
        $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
      }
    });

    $('#prev').bind('click', function () {
      carousel.prev();
      return false
    });

    $('#next').bind('click', function () {
      carousel.next();
      return false;
    });

	//Табы
	jQuery(".tab a").click(function() {
		var activeTab = jQuery(this).attr("href");
	    jQuery(".tab a").removeClass("active");
	    jQuery(this).addClass("active");
	    jQuery('.tab-body').removeClass('open').hide();
	    jQuery(activeTab).addClass('open').fadeIn(700);
	    return false;
	});

	$("form.form-1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail-1.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).closest('.qst-form').find('.success').addClass('active').fadeIn();
			setTimeout(function() {
				$(th).closest('.qst-form').find('.success').removeClass('active').fadeOut();
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

});