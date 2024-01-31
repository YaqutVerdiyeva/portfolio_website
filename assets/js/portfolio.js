/////////////////////////////////////////////////////scrollup
let scrollUpBtn = document.querySelector(".scrollup");
scrollUpBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

window.addEventListener("scroll", function () {
  scrollFunction();
});
