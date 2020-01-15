$(function() {

	//FormStyler
	$('input, select').styler({
		selectSmartPositioning: false
	});

	$(window).on("load",function(){
        $(".jq-selectbox__dropdown ul").mCustomScrollbar({
        	axis:"y"
        });
    });


	$(document).ready(function() {

		var values = [0, 120, 250, 500];
	    var slider = $("#slider-js").slider({
	        orientation: 'horizontal',
	        range: "min",
	        min: values[0],
	        max: values[values.length - 1],
	        value: values[0],

	        slide: function(event, ui) {
	            var includeLeft = event.keyCode != $.ui.keyCode.RIGHT;
	            var includeRight = event.keyCode != $.ui.keyCode.LEFT;
	            var value = findNearest(includeLeft, includeRight, ui.value);
	            slider.slider('value', value);
	            return false;
	        }
	    });

	    function findNearest(includeLeft, includeRight, value) {
	        var nearest = null;
	        var diff = null;
	        for (var i = 0; i < values.length; i++) {
	            if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
	                var newDiff = Math.abs(value - values[i]);
	                if (diff == null || newDiff < diff) {
	                    nearest = values[i];
	                    diff = newDiff;
	                }
	            }
	        }
	        return nearest;
	    }

		//моб. меню
		$('#btn-mob').on('click', function() {
			$(this).toggleClass('active');
			$('.header-nav').toggleClass('open');
		});
		$('body').click(function(e) {
		    if ($(e.target).closest(".menu-mob, .header-nav").length) return;
		    $('.menu-mob').removeClass('active');
		    $('.header-nav').removeClass('open');
		});

		// //прокрутка по якорям
	   $('.header-menu a').bind("click", function(e) {
	        var anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $(anchor.attr('href')).offset().top - 80
	        }, 1000);
	        e.preventDefault();
	    });
	   var lastId,
        topMenu = $(".header-menu"),
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
});