let BASE_URL = "http://localhost:3000/projects";
let projects = document.querySelector(".projects");
async function getData() {
  let res = await axios.get(BASE_URL);
  let data = await res.data;
  data.map((el) => {
    return (projects.innerHTML += `
    <div class="project">
    <div class="photo">
      <img src="${el.photo}" alt="" />
    </div>
    <div class="text">
      <p class="name">${el.text}</p>
      <a href="${el.link}" target="_blank" class="learn-more">
        <span
          >Project <i class="fa-solid fa-arrow-right"></i
        ></span>
        <div class="liquid"></div>
      </a>
    </div>
  </div>
    `);
  });
}
getData();
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
