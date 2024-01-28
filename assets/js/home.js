/////////////////////////////////////////////// text design
var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
});
typewriter
  .typeString(" Frontend Developer.")
  .pauseFor(1000)
  .deleteAll()
  .typeString(" Freelancer.")
  .pauseFor(1000)
  .deleteAll()
  .start();

const btnPink = document.querySelector(".pink");
const btnBlue = document.querySelector(".blue");
const btnGreen = document.querySelector(".green");
const btnPurple = document.querySelector(".purple");
const state = "--main";
btnBlue.onclick = () => {
  document
    .querySelector(":root")
    .style.setProperty(
      "--main",
      getComputedStyle(document.documentElement).getPropertyValue("--second")
    );
  localStorage.clear();
  localStorage.setItem(
    "second-color",
    getComputedStyle(document.documentElement).getPropertyValue("--second")
  );
};
btnGreen.onclick = () => {
  document
    .querySelector(":root")
    .style.setProperty(
      "--main",
      getComputedStyle(document.documentElement).getPropertyValue("--third")
    );
  localStorage.clear();
  localStorage.setItem(
    "green-color",
    getComputedStyle(document.documentElement).getPropertyValue("--third")
  );
};
btnPink.onclick = () => {
  document
    .querySelector(":root")
    .style.setProperty(
      "--main",
      getComputedStyle(document.documentElement).getPropertyValue("--first")
    );
  localStorage.clear();
  localStorage.setItem(
    "first-color",
    getComputedStyle(document.documentElement).getPropertyValue("--first")
  );
};
btnPurple.onclick = () => {
  document
    .querySelector(":root")
    .style.setProperty(
      "--main",
      getComputedStyle(document.documentElement).getPropertyValue("--fourth")
    );
  localStorage.clear();
  localStorage.setItem(
    "purple-color",
    getComputedStyle(document.documentElement).getPropertyValue("--fourth")
  );
};

document
  .querySelector(".triggerButton")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (this.nextElementSibling.classList.contains("active") === true) {
      this.parentElement.classList.remove("active");
      this.nextElementSibling.classList.remove("active");
    } else {
      this.parentElement.classList.add("active");
      this.nextElementSibling.classList.add("active");
    }
  });
