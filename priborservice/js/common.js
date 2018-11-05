$(document).ready(function() {

    $(".popup").magnificPopup({type:'image'});
    $(".popup_form").magnificPopup();

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

     $("a.scrollto").click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
    });
     // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
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

window.addEvent('domready', function(){
  var myProducts = new ScrollBar('feedback', 'bar', 'knob', {
    scroll: {
      duration: 2000,
      onStart: function(){
      //  console.log('start ' + this.to[0]);
      },
      onComplete: function(){
      //  console.log('complete ' + this.to[0]);
      }
    },
    slider: {
      offset: -1,
      onChange: function(pos){
      //  console.log('change ' + pos);
      },
      onComplete: function(pos){
      //  console.log('complete ' + pos);
      }
    },
    knob: {
      duration: 1200,
      onStart: function(){
      //  console.log('start ' + this.to[0].value); // knob position
      }
    }
  });
});