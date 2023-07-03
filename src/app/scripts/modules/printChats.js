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
      const btnMsg = document.createElement("b");
      const chevronIcon = document.createElement("ion-icon");
      const menuContainer = document.createElement("div");
      const menuOptions = document.createElement("div");
      const editOption = document.createElement("span");
      const deleteOption = document.createElement("span");

      messageElement.classList.add("messagechat");
      messageContent.textContent = text;
      timestamp.textContent = DateTime.fromISO(date).toRelative(); // Formatear la fecha de manera relativa utilizando luxon
      chevronIcon.setAttribute("name", "chevron-down-outline"); // Establecer el atributo name del icono

      if (sendBy === userSesion) {
        messageElement.classList.add("my_message");
      } else {
        messageElement.classList.add("frnd_message");
      }

      messageElement.setAttribute("id", id); // Agregar el ID al elemento del mensaje

      messageContent.appendChild(timestamp);
      btnMsg.appendChild(chevronIcon);
      messageContent.appendChild(btnMsg);
      messageElement.appendChild(messageContent);

      menuContainer.classList.add("menuContainer");
      menuOptions.classList.add("menuOptions");
      editOption.textContent = "Editar";
      deleteOption.textContent = "Eliminar";
      menuOptions.appendChild(editOption);
      menuOptions.appendChild(deleteOption);
      menuContainer.appendChild(menuOptions);
      messageElement.appendChild(menuContainer);

      // Agregar el contenido del mensaje al chatContainer utilizando appendChild
      chatContainer.appendChild(messageElement);

      btnMsg.addEventListener("click", () => {
        // Acción que deseas realizar al hacer clic en el elemento <b>
        menuContainer.style.display = "block";
        console.log("hice click en el mensajes con id:", id);
      });

      messageElement.addEventListener("mouseleave", () => {
        // Acción que deseas realizar cuando el cursor se aleja del mensaje
        menuContainer.style.display = "none";
      });
    }
  });
};
