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

    const imgchat = document.createElement("figure");
    imgchat.classList.add("imgchat");

    const img = document.createElement("img");
    img.src = item.Url_image;
    img.alt = "imgchat";
    img.classList.add("cover");

    imgchat.appendChild(img);
    card.appendChild(imgchat);

    const description = document.createElement("div");
    description.classList.add("description");

    const headList = document.createElement("div");
    headList.classList.add("headList");

    const name = document.createElement("h4");
    name.textContent = item.Nombre;

    const time = document.createElement("p");
    time.classList.add("time");
    time.textContent = "12:27";

    headList.appendChild(name);
    headList.appendChild(time);

    const message = document.createElement("div");
    message.classList.add("message");

    const p = document.createElement("p");
    p.textContent = item.info;

    const b = document.createElement("b");
    b.textContent = "1";

    message.appendChild(p);
    message.appendChild(b);

    description.appendChild(headList);
    description.appendChild(message);

    card.appendChild(description);

    container.appendChild(card);
  });
};
