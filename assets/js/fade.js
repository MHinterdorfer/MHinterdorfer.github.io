$(document).ready(function() {
  $(window).scroll(function() {
    $(".hiddendiv").each(function(i) {
      var top_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > top_of_object) {
        $(this).animate({ opacity: "1" }, 1400);
      }
    });
  });
});
