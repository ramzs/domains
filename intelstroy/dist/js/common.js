$(function() {

	//FormStyler

	 //  $('input, select').styler({
		// selectSmartPositioning: false
	 //  });


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

	new WOW().init();

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

$(document).ready(function() {
	$('.object-cl').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	      	arrows: false,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 479,
	      settings: {
	      	arrows: false,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});

$(document).ready( function() {

	//стили для input type=file
    $(".upload-wrap input[type=file]").change(function(){
			var filename = $(this).val().replace(/.*\\/, "");
         $(this).closest('.upload-wrap').find('.upload-in').val(filename);
    });

    //мобильное меню
	$('.navbar-toggle').on('click', function(e) {
	    $('.navbar-collapse').toggleClass('open');
	    $('.navbar-toggle').toggleClass('active');
	});

	//Якоря
   $('.nav a').bind("click", function(e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });

   //кнопка "наверх"
	$("#scroll-top").click(function(){
		$("html, body").animate({scrollTop:0},"slow");
	});
	return false;
});

$(document.body).on('click', function(e) {
  if (!$(e.target).closest('.navbar-collapse, .navbar-toggle').length) {
    $('.navbar-collapse').removeClass('open');
    $('.navbar-toggle').removeClass('active');
  }
});

// $(document).ready(function() {
// 	$('.tech-pict__tab > img').click(function(e){
// 		var thumb = $(this).attr('src');
// 			main = $('.tech-pict__main img');

// 			main.attr('src', thumb);
// 			e.stopPropagation();
// 	});
// });