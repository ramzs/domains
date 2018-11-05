$(function() {

	$(".popup_form").magnificPopup();

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

$(function(){
    $(".drop-link").hover(function() {
        $('.drop-menu', this).stop( true, true ).fadeIn("fast");
    },
    function() {
        $('.drop-menu', this).stop( true, true ).fadeOut("fast");
    });
  $(".drop-sublink").hover(function() {
        $('.drop-submenu', this).stop( true, true ).fadeIn("fast");
    },
    function() {
        $('.drop-submenu', this).stop( true, true ).fadeOut("fast");
    });
});

$(document).ready(function() {
		$('.bx-slider').bxSlider({
		  mode: 'fade',
		  auto: true,
		  speed: 800,
		  captions: true,
		  controls: false,
		  touchEnabled: true,
		  swipeThreshold: 30,
		  adaptiveHeight: true
		});
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

//Кнопки селект
$('.select').on('click', '.placeholder', function() {
  $(this).find("ul").slideToggle("fast");
  var parent = $(this).closest('.select');
  if (!parent.hasClass('is-open')) {
    parent.addClass('is-open');
    $('.select.is-open').not(parent).removeClass('is-open');
  } else {
    parent.removeClass('is-open');
  }
}).on('click', 'ul>li', function() {
  $(this).addClass("selected").siblings().removeClass("selected");
  var parent = $(this).closest('.select');
  parent.removeClass('is-open').find('.placeholder').text($(this).text());
  parent.find('input[type=hidden]').attr('value', $(this).attr('data-value'));
});
$(document).on('click', function (e) {
    var target = $(e.target).closest(".select");
    if (!target.length) {
        $(".select").removeClass("is-open").find("ul").slideUp("fast");
    }
});

//Смена фото авто и инфы на главной
$(document).ready(function () {
    $('.link.ek').click(function () {
    		$('.link.ek').removeClass('active');
    		$(this).addClass('active');
	});
	$('.link.ek').click(function () {
        $(".item-pict.ek").not($("#ek-" + $(this).attr("id"))).hide();
		$("#ek-" + $(this).attr("id")).show();
    });
});
$(document).ready(function () {
    $('.link.mid').click(function () {
    		$('.link.mid').removeClass('active');
    		$(this).addClass('active');
	});
	$('.link.mid').click(function () {
        $(".item-pict.mid").not($("#mid-" + $(this).attr("id"))).hide();
		$("#mid-" + $(this).attr("id")).show();
    });
});
$(document).ready(function () {
    $('.link.cros').click(function () {
    		$('.link.cros').removeClass('active');
    		$(this).addClass('active');
	});
	$('.link.cros').click(function () {
        $(".item-pict.cros").not($("#cros-" + $(this).attr("id"))).hide();
		$("#cros-" + $(this).attr("id")).show();
    });
});