$(function() {
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	}
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

$(document).ready(function($) {
	$('.area-link').click(function(){
		$('.form-area').fadeToggle("fast");
		$(this).toggleClass('active');
		return false;
	});
	$('.form-area .btn-save').click(function(){
		$('.form-area').fadeOut('fast');
		$('.area-link').removeClass('active');
	});
	$("body").click(function(e) {
	if($(e.target).closest(".form-area").length==0) {
		$('.form-area').fadeOut('fast');
		$('.area-link').removeClass('active');
		}
	});
});
$(document).ready(function($) {
	$('.area-link_mob').click(function(){
		$('.form-area_mob').fadeToggle("fast");
		$(this).toggleClass('active');
		return false;
	});
	$('.form-area_mob .btn-save').click(function(){
		$('.form-area_mob').fadeOut('fast');
		$('.area-link_mob').removeClass('active');
	});
});
$(document).ready(function() {
	$('.account-link').click(function(){
		$('.form-account').fadeToggle("fast");
		$(this).toggleClass('active');
		return false;
	});
	$('.form-account .btn-login').click(function(){
		$('.form-account').fadeOut('fast');
		$('.account-link').removeClass('active');
	});
	$("body").click(function(e) {
	if($(e.target).closest(".form-account").length==0) {
		$('.form-account').fadeOut('fast');
		$(".account-link").removeClass('active');
		}
	});
});

$(document).ready(function(e) {
	$('.header-block_tab a, .personal-link a').on('click', function(e) {
		e.preventDefault();
		if ($('.header-block_tab a, .personal-link a').hasClass('focus')) {
			$('.header-block_tab a, .personal-link a').removeClass('focus');
			$(this).toggleClass('focus');
		} else {
			$(this).addClass('focus');
		}

		var link = $('.personal-block_tab a, .personal-link a'),
			block = $('.personal-block'),
			blockShow = $($(this).attr("href"));

		if (link.hasClass('focus')) {
			block.removeClass('open');
			blockShow.addClass('open');
		}
	});
	$('.header-block_tab a.btn-select ul li').click(function() {
		if ($('.header-block_tab a').hasClass('focus')) {
			$('.header-block_tab a').removeClass('focus');
			$(this).toggleClass('focus');
		} else {
			$(this).addClass('focus');
		}
	});
});

//Кнопки селект
$(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
    });
});
$(document).on('click', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
        $('.header-block_tab a').removeClass('focus');
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
});
$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
        $('.header-block_tab a.btn-select').removeClass('focus');
    }
});

$(document).ready(function() {
/* Mobile Navigation */
	$('#navmobile-btn').click(function(){
		$('#nav-mobile').addClass('mobile-open');
		$('body').css('overflow', 'hidden');
		return false;
	});
	$('#navmobile-close').click(function(){
		$('#nav-mobile').removeClass('mobile-open');
		$('body').css('overflow', 'auto');
		return false;
	});
});

$('.shop-link').click(function() {
        $('body, span').css('font-size', '20px');
        return false;
});

(function($) {
		$(function() {
			$('input, select').styler({
			});
		});
})(jQuery);

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
});