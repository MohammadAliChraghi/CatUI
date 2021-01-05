$("[data-open]").on("click", function () {
  var e = $(this).data("open");
  if (e.length && $(`#${e}`).length) {
    $(`#${e}`).addClass("open");
  }
});

$(window).on("click", function () {
  $(".sidenav").each(function () {
    var str = $(this).css("transform");
    var x = str.split(",");
    var len = x.length;
    if (parseInt(x[len - 2]) >= 0) {
      $(this).removeClass("open");
    }
  });

  $(".nav, nav").each(function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
      var str = $(this).css("transform");
      var x = str.split(",");
      var len = x.length;
      if (parseInt(x[len - 2]) >= 0) {
        $(this).removeClass("open");
      }
    }
  });
});

$(".sidenav").on("click", function (event) {
  event.stopPropagation();
});
