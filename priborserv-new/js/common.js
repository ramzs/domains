$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	//E-mail Ajax Send
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "../mail.php", //Change
        data: th.serialize()
      }).done(function() {
        swal("Ваша заявка отправлена!", "Мы свяжемся с вами в ближайшее время!", "success");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".header-top__menu li a, .scroll-top").mPageScroll2id({
		scrollSpeed : 500
	});

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function(){
    $(".fancybox").fancybox();
});
