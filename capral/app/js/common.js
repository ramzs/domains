$(function() {

	$('input[type=number]').styler();

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

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

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function() {
	$(".btn--list").click(function() {
		$('.preview-list').toggleClass('open');
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).text('Свернуть список');
		} else {
			$(this).text('Открыть полный список');
		}
		return false;
	});

	$(".read-link").click(function() {
		$('.text-hide').slideToggle();
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).text('Свернуть');
		} else {
			$(this).text('Читать полностью');
		}
		return false;
	});

	$(".filter-container__title").click(function() {
		$(this).toggleClass('active').next().slideToggle();
		return false;
	});

	$('.popular-carousel').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1150,
				settings: {
					slidesToShow: 3
				}
			},
			{
			breakpoint: 650,
				settings: {
					slidesToShow: 2
				}
			},
	    ]
	});

	$('.product-thumb__item img').click(function(e){
		var thumb = $(this).attr('src');
			main = $('.product-pict__main img');
			link = $('.product-pict__main a');

			main.attr('src', thumb);
			link.attr('href', thumb);
			e.stopPropagation();
	});

});

$(document).ready(function() {
	$('#btn-mob').on('click', function() {
		$('.menu-mob').toggleClass('open').fadeToggle();
		$(this).toggleClass('active');
		$('body').on('click', function(e) {
			if ($(e.target).closest(".menu-mob.open, #btn-mob.active").length) return;
			$('.menu-mob.open').removeClass('open').fadeOut();
			$('#btn-mob.active').removeClass('active');
		});
	});
});

$(function() {
	$( "#slider-price" ).slider({
		range: true,
		min: 4500,
		max: 17900,
		step: 5,
		values: [ 0, 17900 ],
		slide: function( event, ui ) {
			//Поле минимального значения
			$( "#price-min" ).val(ui.values[0]);
			//Поле максимального значения
			$("#price-max").val(ui.values[1]);
		}
	});

	//Записываем значения ползунков в момент загрузки страницы
	//То есть значения по умолчанию
	$( "#price-min" ).val($( "#slider-price" ).slider( "values", 0 ));
	$("#price-max").val($("#slider-price").slider( "values", 1 ));
	$('#price-min').change(function() {
		var val = $(this).val();
		$('#slider-price').slider("values",0,val);
	});
	$('#price-max').change(function() {
		var val1 = $(this).val();
		$('#slider-price').slider("values",1,val1);
	});
});