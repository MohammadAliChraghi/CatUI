$(".opensidenav").on("click", function () {
  $(".sidenav").animate(
    {
      width: "400px",
    },
    300
  );
});
/*
$(document).click(function (e) {
  if (!$(e.target).is(".sidenav") && !$(e.target).is(".opensidenav")) {
    $(".sidenav").css("width", "0");
  }
});
*/

$(window).click(function () {
  if (parseInt($(".sidenav").css("width")) > 0) {
    $(".sidenav").animate(
      {
        width: "0",
      },
      300
    );
  }
});

$(".sidenav").click(function (event) {
  event.stopPropagation();
});
