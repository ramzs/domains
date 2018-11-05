$(function() {

	$('.popup__video').magnificPopup({
		type: 'iframe',
		removalDelay: 350,
		mainClass: 'mfp-zoom-in'
	});

	$('.popup').magnificPopup({
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.banner__slider').owlCarousel({
		nav: true,
		items: 1,
		loop:true
	});

	$('.service__carousel').owlCarousel({
	    center: true,
	    items:3,
	    loop:true,
	    nav: true,
	    margin: 1
	});
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(window).load(function(){
	$('.grid').masonry({
		columnWidth: 270,
		itemSelector: '.grid__item',
		gutter: 10,
		stamp: '.stamp',
		fitWidth: true
	});
});

$(document).ready(function(){
	$('.popup').click(function() {
		$('.modal__slider').owlCarousel({
			nav: true,
			items: 1,
			loop:true
		});
	});
});