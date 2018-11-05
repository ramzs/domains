$(function() {

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

});

$(window).load(function() {

	$(".loader_inner").delay(2200).fadeOut("slow");
	$(".loader").delay(2000).fadeOut("slow");

});

$(document).ready(function() {
 /*Menu mobile*/
	$('.menu-btn').click(function(e){
		if ($('.nav-menu').hasClass('open')) {
			$('.menu-btn').removeClass('active');
			$('.nav-menu').removeClass('open');
			$('.menu-overlay').fadeOut('slow');
		} else {
			$('.menu-btn').addClass('active');
			$('.nav-menu').addClass('open');
			$('.menu-overlay').fadeIn('slow');
			return false;
		}
	});

	$('.menu-overlay').click(function(e){
		$('.menu-btn').removeClass('active');
		$('.nav-menu').removeClass('open');
		$('.menu-overlay').fadeOut('slow');
		e.stopPropagation();
	});
});