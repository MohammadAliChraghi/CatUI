$("[data-open]").on("click", function () {
  var e = $(this).data("open");
  if (e.length && $(`#${e}`).length) {
    $(`#${e}`).addClass("open");
  }
});

$("[data-close]").on("click", function () {
  var e = $(this).data("close");
  if (e.length) {
    if ($(`#${e}`).length) {
      var specialEls = ["dialog"];
      var ElType;
      function isSpecial() {
        for (i in specialEls) {
          if (
            $(`#${e}`).hasClass(specialEls[i]) ||
            $(`#${e}`).prop("tagName").toLowerCase() === specialEls[i]
          ) {
            ElType = specialEls[i];
            return true;
          } else {
            return false;
          }
          break;
        }
      }
      // Specials
      if (isSpecial()) {
        if (ElType === "dialog") {
          $(`#${e}`)
            .css("box-shadow", "0 0 0 0 rgba(0,0,0,0.4)")
            .animate({ bottom: "-120vh" });
        }
      }
      // Specials
    }
    else{
      console.error("CatUI Error Code 1 : Target Element Not Found!");
    }
  } else {
    $(this).parent().addClass("d-none");
  }
});

$(window).on("click", function () {
  $(".sidenav, sidenav").each(function () {
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

$(".sidenav, sidenav, .nav, nav").on("click", function (event) {
  event.stopPropagation();
});
