$(function() {

	$(".header__icons a, .menu__list a").mPageScroll2id({
		scrollSpeed : 500
	});

	$('.popup').magnificPopup();

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {
	new WOW().init();
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("fast");

});