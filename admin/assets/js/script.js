let BASE_URL = "http://localhost:3000/posts";
let messages = document.querySelector(".message");
let copyArr = [];
let editStatus = false;
let editId;

async function getMessages() {
  messages.innerHTML = "";
  let res = await axios.get(BASE_URL);
  let data = res.data;
  copyArr = data;
  console.log(data);
  data.forEach((el) => {
    return (messages.innerHTML += `
    <tr>
    <th scope="row">${el.id}</th>
    <td>${el.name}</td>
    <td>${el.email}</td>
    <td>${el.subject}</td>
    <td>${el.message}</td>
    <td><a onclick="deleteBtn(${el.id})" class="delete-btn">Delete</a></td>
  </tr>
      `);
  });
}
getMessages();

function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
