$(function() {

	$('input, select').styler({
		selectSmartPositioning: false
	});

	// $('.popup').magnificPopup({
	// 	removalDelay: 350,
	// 	mainClass: 'mfp-fade'
	// });

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
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

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function() {
	$('a#callback-link').on('click', function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
		 		$('#callback-form')
					.css('display', 'block')
					.animate({opacity: 1, top: '100px'}, 200);
				});
	});

	$('#modal-close, #overlay').click( function(){
		$('#callback-form')
			.animate({opacity: 0, top: '15%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
				);
		});
});

$(document).ready(function() {
	$('#search-link').on('click', function(e) {
		e.preventDefault();
		$('#search-block').fadeToggle(400);
	});
	$('#search__close').on('click', function(e) {
		e.preventDefault();
		$('#search-block').fadeOut(400);
	});
});

$(document).ready(function() {
	$('#btn-menu').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		if ($('#btn-menu').hasClass('active')) {
			$('#menu-mob').fadeIn(400);
		} else {
			$('#menu-mob').fadeOut(400);
		}
	});
});
$(window).on('resize load', function() {
   	var windowWidth = $(window).width();
    if (windowWidth >= 992) {
    	$('#menu-mob').hide();
    	$('#btn-menu').removeClass('active');
    }
});

$(document).ready(function() {
	$('#filter-link').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('open');
		if ($(this).hasClass('open')) {
			$('#project-filter').fadeIn(400);
		} else {
			$('#project-filter').fadeOut(400);
		}
	});
});

$(function(){
  $("#form-phone, #find-phone").mask("+7 (999) 999-99-99");
});

$(".work__tabs a, .project__tabs a").click(function() {
    $(".work__tabs a, .project__tabs a").removeClass("active");
    $(this).addClass("active");
    $(".work__block, .project__block").removeClass('open');
    $(".work__block, .project__block").hide();
    var activeTab = $(this).attr("href");
    $(activeTab).addClass('open').fadeIn(700);
    return false;
});

$(function() {
		$( "#slider-price" ).slider({
			range: true,
			min: 0,
			max: 20,
			values: [ 0, 7 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#price-min" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#price-max").val(ui.values[1]);
			}
		});

		$( "#slider-area" ).slider({
			range: true,
			min: 0,
			max: 2000,
			step: 50,
			values: [ 0, 900 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#area-min" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#area-max").val(ui.values[1]);
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

		$( "#area-min" ).val($( "#slider-area" ).slider( "values", 0 ));
		$("#area-max").val($("#slider-area").slider( "values", 1 ));
		$('#area-min').change(function() {
			var val = $(this).val();
			$('#slider-area').slider("values",0,val);
		});
		$('#area-max').change(function() {
			var val1 = $(this).val();
			$('#slider-area').slider("values",1,val1);
		});
});

$(document).ready(function(){
  $('.gallery').bxSlider({
 	mode: 'fade',
 	pager: true,
	pagerCustom: '#bx-pager',
	slideMargin: 50
	});
});