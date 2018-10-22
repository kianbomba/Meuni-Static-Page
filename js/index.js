(function($) {
  function image_hovering () {
    var img = $("#image-to-be-hover"),
        url = $(".url-link");

    $(document).mousemove(function(event) {
      img.css({left: event.pageX, top: event.pageY});
    });

    url.mouseenter(function() {
      img.show();
    }).mouseleave(function() {
      img.hide();
      $(document).mouse
    })
  }

  $(document).ready(function() {
    // Intialise load here
    image_hovering();
  });
}(window.$))
