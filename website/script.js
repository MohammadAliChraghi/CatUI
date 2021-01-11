var darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click", () => {
  if (darkmode.checked == true) {
    document.querySelector("html").setAttribute("theme", "dark");
  } else {
    document.querySelector("html").removeAttribute("theme");
  }
});
