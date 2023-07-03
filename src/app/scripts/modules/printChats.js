import { DateTime } from "luxon";
import { URL_MSG } from "../services/dataUsers";
import { chatBox } from "./dataDom";

export const printChats = async () => {
  try {
    const response = await getUsers(URL_MSG);
    const users = response;
    let card = chatlist;
    printPersons(users, card);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const renderMessages = (messages, userSesion) => {
  const chatContainer = chatBox;

  messages.forEach((message) => {
    const { id, sendBy, message: text, date } = message;

    // Verificar si el mensaje ya existe en el chatBox
    const existingMessageElement = document.getElementById(id);

    if (!existingMessageElement) {
      const messageElement = document.createElement("div");
      const messageContent = document.createElement("p");
      const timestamp = document.createElement("span");

      messageElement.classList.add("messagechat");
      messageContent.textContent = text;
      timestamp.textContent = DateTime.fromISO(date).toRelative(); // Formatear la fecha de manera relativa utilizando luxon

      if (sendBy === userSesion) {
        messageElement.classList.add("my_message");
      } else {
        messageElement.classList.add("frnd_message");
      }

      messageElement.setAttribute("id", id); // Agregar el ID al elemento del mensaje

      messageContent.appendChild(timestamp);
      messageElement.appendChild(messageContent);

      // Agregar el contenido del mensaje al chatBox utilizando innerHTML
      chatContainer.innerHTML += messageElement.outerHTML;
    }
  });
};
