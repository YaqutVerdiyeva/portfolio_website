////////////////////////////////////////////////// navbar
let menuBtn = document.querySelector(".menu-button");
let closeMenuBtn = document.querySelector(".close-menu-btn");
let navbar = document.querySelector(".navbar");
let items = document.querySelector(".items");
let homeLink = document.querySelector(".home");
let aboutLink = document.querySelector(".about");
let blogLink = document.querySelector(".blog");
let portfolioLink = document.querySelector(".portfolio");
let contactLink = document.querySelector(".contact");
let linkTextHome = document.querySelector(".link-text-home");
let linkTextAbout = document.querySelector(".link-text-about");
let linkTextBlog = document.querySelector(".link-text-blog");
let linkTextPortfolio = document.querySelector(".link-text-portfolio");
let linkTextContact = document.querySelector(".link-text-contact");
menuBtn.addEventListener("click", () => {
  navbar.style.animation = "nav 1s forwards";
  navbar.style.display = "block";
});
closeMenuBtn.addEventListener("click", () => {
  navbar.style.animation = "closenav 1s forwards";
});

homeLink.addEventListener("mousemove", () => {
  linkTextHome.style.display = "block";
});
aboutLink.addEventListener("mousemove", () => {
  linkTextAbout.style.display = "block";
});
blogLink.addEventListener("mousemove", () => {
  linkTextBlog.style.display = "block";
});
portfolioLink.addEventListener("mousemove", () => {
  linkTextPortfolio.style.display = "block";
});
contactLink.addEventListener("mousemove", () => {
  linkTextContact.style.display = "block";
});

homeLink.addEventListener("mouseleave", () => {
  linkTextHome.style.display = "none";
});
aboutLink.addEventListener("mouseleave", () => {
  linkTextAbout.style.display = "none";
});
blogLink.addEventListener("mouseleave", () => {
  linkTextBlog.style.display = "none";
});
contactLink.addEventListener("mouseleave", () => {
  linkTextContact.style.display = "none";
});
portfolioLink.addEventListener("mouseleave", () => {
  linkTextPortfolio.style.display = "none";
});
