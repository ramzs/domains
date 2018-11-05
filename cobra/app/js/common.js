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

	// $('.popup').magnificPopup({
	// 	removalDelay: 500,
	// 	callbacks: {
	// 	    beforeOpen: function() {
	// 	       this.st.mainClass = this.st.el.attr('data-effect');
	// 	    }
	// 	  },
	// 	  midClick: true
	// });

	$('.gallery').magnificPopup({
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

$(document.body).on('click', function(e) {
  if (!$(e.target).closest('.navbar-collapse, .navbar-toggle').length) {
    $('.navbar-collapse').removeClass('in');
    $('.navbar-toggle').removeClass('collapsed');
  }
});

$(document).ready(function() {
	$('.navbar-toggle').on('click', function(e) {
	    $('.navbar-collapse').toggleClass('in');
	    $('.navbar-toggle').toggleClass('collapsed');
	});
});

$(document).ready(function() {
   $('.nav a').bind("click", function(e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
   });

   $("#scroll-top").click(function(){
		$("html, body").animate({scrollTop:0},"slow");
	})
   return false;
});