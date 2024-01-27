let BASE_URL = "http://localhost:3000/projects";
let headText = document.querySelector(".heading");
let textInput = document.querySelector(".text");
let photoInput = document.querySelector(".photo");
let linkInput = document.querySelector(".link");
let btnSubmit = document.querySelector(".btn-submit");
let projects = document.querySelector(".project");
let base64;
let copyArr = [];
let editStatus = false;
let editId;

btnSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!editStatus) {
    if (textInput.value && linkInput.value) {
      axios.post(`${BASE_URL}`, {
        id: `${Date.now()}`,
        text: textInput.value,
        link: linkInput.value,
        photo: base64,
      });
    }
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      photo: base64,
      text: textInput.value,
      link: linkInput.value,
    });
    editStatus = false;
  }
});
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  base64 = await convertBase64(file);
};

photoInput.addEventListener("change", (e) => {
  uploadImage(e);
});

async function getProjects() {
  projects.innerHTML = "";
  let res = await axios.get(BASE_URL);
  let data = res.data;
  copyArr = data;
  console.log(data);
  data.forEach((el) => {
    return (projects.innerHTML += `
    <tr>
    <th scope="row">${el.id}</th>
    <td><img width="150px" height="90px" src="${el.photo}"/></td>
    <td>${el.text}</td>
    <td>${el.link}</td>
    <td><a href="#" onclick="editBtn(${el.id})"class="edit-btn">Edit</a></td>
    <td><a onclick="deleteBtn(${el.id})" class="delete-btn">Delete</a></td>
  </tr>
      `);
  });
}
getProjects();

function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
function editBtn(id) {
  editStatus = true;
  editId = id;
  copyArr.filter((elem) => elem.id == id);
  axios(`${BASE_URL}/${id}`).then((res) => {
    textInput.value = res.data.text;
    linkInput.value = res.data.link;
  });
  headText.innerHTML = "Edit Project";
  btnSubmit.innerHTML = "EDIT";
}
