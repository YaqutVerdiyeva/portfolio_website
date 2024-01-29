let BASE_URL = "http://localhost:3000/posts";
let alertSection = document.querySelector(".info");
let nameInput = document.querySelector(".name");
let emailInput = document.querySelector(".email");
let subjectInput = document.querySelector(".subject");
let messageInput = document.querySelector(".message");
let submitBtn = document.querySelector(".submit-btn");

async function getData() {
  let res = await axios.get(BASE_URL);
  let data = await res.data;
  console.log(data);
}
getData();
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (
    nameInput.value &&
    emailInput.value &&
    subjectInput.value &&
    messageInput.value
  ) {
    axios.post(`${BASE_URL}`, {
      name: nameInput.value,
      email: emailInput.value,
      subject: subjectInput.value,
      message: messageInput.value,
    });
    alertSection.innerHTML = "Submit!";
  } else if (
    nameInput.value &&
    emailInput.value &&
    subjectInput.value &&
    messageInput.value == ""
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill message input!";
  } else if (
    nameInput.value &&
    emailInput.value &&
    subjectInput.value == "" &&
    messageInput.value
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill subject input!";
  } else if (
    nameInput.value &&
    emailInput.value == "" &&
    subjectInput.value &&
    messageInput.value
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill email input!";
  } else if (
    nameInput.value == "" &&
    emailInput.value &&
    subjectInput.value &&
    messageInput.value
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill name input!";
  } else if (
    nameInput.value == "" &&
    emailInput.value &&
    subjectInput.value == "" &&
    messageInput.value
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill name, subject input!";
  } else if (
    nameInput.value == "" &&
    emailInput.value &&
    subjectInput.value &&
    messageInput.value == ""
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill name, message input!";
  } else if (
    nameInput.value &&
    emailInput.value &&
    subjectInput.value == "" &&
    messageInput.value == ""
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill subject, message input!";
  } else if (
    nameInput.value &&
    emailInput.value == "" &&
    subjectInput.value &&
    messageInput.value == ""
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill email, message input!";
  } else if (
    nameInput.value &&
    emailInput.value == "" &&
    subjectInput.value == "" &&
    messageInput.value
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill email, subject input!";
  } else if (
    nameInput.value == "" &&
    emailInput.value == "" &&
    subjectInput.value &&
    messageInput.value
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill name, email input!";
  } else if (
    nameInput.value &&
    emailInput.value == "" &&
    subjectInput.value == "" &&
    messageInput.value == ""
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill email, subject, message input!";
  } else if (
    nameInput.value == "" &&
    emailInput.value &&
    subjectInput.value == "" &&
    messageInput.value == ""
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill name, subject, message input!";
  } else if (
    nameInput.value == "" &&
    emailInput.value == "" &&
    subjectInput.value &&
    messageInput.value == ""
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill name, email, message input!";
  } else if (
    nameInput.value == "" &&
    emailInput.value == "" &&
    subjectInput.value == "" &&
    messageInput.value
  ) {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill name, email, subject input!";
  } else {
    alertSection.setAttribute("class", "alert");
    alertSection.style.display = "block";
    alertSection.innerHTML = "Please fill all input!";
    setTimeout(() => {
      alertSection.classList.remove("alert");
    }, 3000);
  }
});
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
