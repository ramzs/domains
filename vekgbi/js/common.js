$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
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

	}

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: true,
	  auto: true,
	  controls: false,
    touchEnabled: false
});

$(document).ready(function() {
  $(window).scroll(function() {
    var index = $(this).scrollTop();
    if(index>440) {
      $('.header-top').addClass('header-scroll');
    } else {
      $('.header-top').removeClass('header-scroll');
    }
  });
});

$(document).ready(function() {
	$("a.scrollto").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
      return false;
    });
     // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight()+150,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

        // Bind to scroll
        $(window).scroll(function(){
           // Get container scroll position
           var fromTop = $(this).scrollTop()+topMenuHeight;

           // Get id of current scroll item
           var cur = scrollItems.map(function(){
             if ($(this).offset().top < fromTop)
               return this;
           });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";

       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
       }
    });
});

$(window).scroll(function(){
  var left = $(this).scrollLeft();
  $('.header-top').css('left',-left);
});