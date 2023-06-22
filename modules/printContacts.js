import getUsers from "../services/getUsers.js";
import { chatlist } from "./dataDom.js";
import { URL_API } from "../services/dataUsers.js";

export const printContacts = async () => {
  try {
    const response = await getUsers(URL_API);
    const users = response;
    let card = chatlist;
    printPersons(users, card);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const printPersons = (array, container) => {
  array.forEach((item) => {
    console.log(item.Nombre);
    console.log(item.info);
    const card = document.createElement("div");
    card.classList.add("block");
    card.innerHTML = `
      <figure class="imgchat">
        <img
          src="${item.Url_image}"
          alt="imgchat"
          class="cover"
        />
      </figure>
      <div class="description">
        <div class="headList">
          <h4>${item.Nombre}</h4>
          <p class="time">12:27</p>
        </div>
        <div class="message">
          <p>
            ${item.info}
          </p>
          <b>1</b>
        </div>
      </div>    
    `;
    container.appendChild(card);
  });
};
