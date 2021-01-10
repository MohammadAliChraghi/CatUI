const Errors = {
  Code_1: "CatUI Error Code 1 : Target Element Not Found!",
  Code_2:
    "CatUI Error Code 2 : Some value is not given to the ( <value> or <div class='value'> ) element !",
};

function GetLocation(e) {
  var top = 0,
    left = 0;
  do {
    top += e.offsetTop || 0;
    left += e.offsetLeft || 0;
    e = e.offsetParent;
  } while (e);

  return {
    top: top,
    left: left,
  };
}

$(document).ready(function () {
  $(".progress-bar > value, progress-bar > value").each(function () {
    var p = $(this).data("percent");
    if (typeof p !== undefined && typeof p !== "undefined") {
      $(this).css("width", `${p}%`);
    } else {
      console.warn(Errors.Code_2);
    }
  });
});


var t = document.createElement("TOOLTIP");
const d = document.querySelectorAll("[data-tooltip]");
document.body.prepend(t);
d.forEach((i) => {
  const handleMouseLeave = () => t.classList.remove("open");
  const handleMouseMove = (e) => {
    t.innerText = i.getAttribute("data-tooltip");
    this.t.classList.add("open");
    this.t.style.top = e.clientY + 15 + "px";
    this.t.style.left = e.clientX + 15 + "px";
  };
  i.addEventListener("mousemove", handleMouseMove);
  i.addEventListener("mouseleave", handleMouseLeave);
});

$("[data-open]").on("click", function () {
  var e = $(this).data("open");
  if (e.length) {
    if ($(`#${e}`).length) {
      $(`#${e}`).addClass("open");
    } else {
      console.error(Errors.Code_1);
    }
  } else {
    $(this).parent().addClass("open");
  }
});

$("[data-close]").on("click", function () {
  var e = $(this).data("close");
  if (e.length) {
    if ($(`#${e}`).length) {
      $(`#${e}`).removeClass("open");
    } else {
      console.error(Errors.Code_1);
    }
  } else {
    $(this).parent().removeClass("open");
  }
});

$("list-item > li.clp, .list-item > li.clp").on("click", function () {
  if (!$(this).children().hasClass("open")) {
    $(this).children().addClass("open");
  } else {
    $(this).children().removeClass("open");
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

window.MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;
var target = document.querySelectorAll(
    ".progress-bar > value, progress-bar > value"
  ),
  observer = new MutationObserver(function (mutation) {
    var m = mutation[0].target;
    var p = m.attributes["data-percent"].value;
    m.style.width = `${p}%`;
  }),
  config = {
    attributes: true,
    attributeFilter: ["data-percent"],
  };

for (i of target) {
  observer.observe(i, config);
}

var i = 5;
setInterval(function () {
  $("progress-bar > value").attr("data-percent", i);
  i = i + 5;
}, 1000);
