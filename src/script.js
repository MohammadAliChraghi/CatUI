const Errors = {
  Code_1: "CatUI Error Code 1 : Target Element Not Found!",
  Code_2:
    "CatUI Error Code 2 : Some value is not given to the ( <value> or <div class='value'> ) element !",
  Code_3:
    "CatUI Error Code 3 : Collapsable Element First Child Can Only Be <ul>",
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

document
  .querySelectorAll(".progress-bar > value, progress-bar > value")
  .forEach((i) => {
    var p = i.getAttribute("data-percent");
    if (typeof p !== undefined && typeof p !== "undefined") {
      i.style.width = `${p}%`;
    } else {
      console.warn(Errors.Code_2);
    }
  });

var t = document.createElement("TOOLTIP");
document.body.prepend(t);
document.querySelectorAll("[data-tooltip]").forEach((i) => {
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

document.querySelectorAll("[data-open]").forEach((i) => {
  i.addEventListener("click", () => {
    var e = i.getAttribute("data-open");
    if (e.length) {
      var ec = document.querySelector(`#${e}`);
      var ec = document.querySelector(`#${e}`);
      if (ec) {
        ec.classList.add("open");
      } else {
        console.error(Errors.Code_1);
      }
    } else {
      i.parentNode.classList.add("open");
    }
  });
});

document.querySelectorAll("[data-close]").forEach((i) => {
  i.addEventListener("click", () => {
    var e = i.getAttribute("data-close");
    if (e.length) {
      var ec = document.querySelector(`#${e}`);
      if (ec) {
        ec.classList.remove("open");
      } else {
        console.error(Errors.Code_1);
      }
    } else {
      i.parentNode.classList.remove("open");
      console.log("Hi");
    }
  });
});

document
  .querySelectorAll("list-item > li.clp, .list-item > li.clp")
  .forEach((i) => {
    i.addEventListener("click", () => {
      if (i.children[0].nodeName === "UL") {
        var e = i.children[0];
        if (!e.classList.contains("open")) {
          e.classList.add("open");
        } else {
          e.classList.remove("open");
        }
      } else {
        console.error(Errors.Code_3);
      }
    });
  });

window.addEventListener("click", () => {
  document.querySelectorAll(".sidenav, sidenav").forEach((i) => {
    var str = window.getComputedStyle(i).getPropertyValue("transform");
    var x = str.split(",");
    var len = x.length;
    if (parseInt(x[len - 2]) >= 0) {
      i.classList.remove("open");
    }
  });

  document.querySelectorAll(".nav, nav").forEach((i) => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      var str = window.getComputedStyle(i).getPropertyValue("transform");
      var x = str.split(",");
      var len = x.length;
      if (parseInt(x[len - 2]) >= 0) {
        i.classList.remove("open");
      }
    }
  });
});
document.querySelectorAll(".sidenav, sidenav").forEach((i) => {
  i.addEventListener("click", (ev) => {
    ev.stopPropagation();
  })
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