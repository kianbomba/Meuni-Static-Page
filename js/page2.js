(function($) {
  $(document).ready(function() {
    $('#gotop').on('click', function() {
      $('html, body').animate({scrollTop: 0}, 1000);
    })
  });
}(window.$))
