$("[data-open-sidenav]").on("click", function() {
  if ($(this).data("open-sidenav").length && $(`#${$(this).data("open-sidenav")}`).length) {
    $(`#${$(this).data("open-sidenav")}`).animate({
      left: "0"
    }, 300);
  }
});

$(window).on("click", function() {
  $('.sidenav').each(function() {
    if (parseInt($(this).css("left")) === 0) {
      $(this).animate({
        left: "-400px"
      }, 300, "linear");
    }
  });
});

$(".sidenav").on("click", function(event) {
  event.stopPropagation();
});