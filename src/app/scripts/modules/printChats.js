import { DateTime } from "luxon";
import { URL_MSG } from "../services/dataUsers";
import { chatBox } from "./dataDom";
import { idList, userSesionV } from "./printContacts";
import axios from "axios";
import { deleteMessage } from "../services/deleteMessage";
import { updateMessage } from "../services/upDateMessage";

export const printChats = async () => {
  try {
    const response = await getUsers(URL_MSG);
    const users = response;
    let card = chatlist;
    printPersons(users, card);

    // Obtener los mensajes y usuarios de la sesión
    const userMessages = await axios.get(`${URL_MSG}/${idList}`);
    const messages = userMessages.data.messages;
    const userSesion = userSesionV();

    // Renderizar los mensajes
    renderMessages(messages, userSesion);
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
      timestamp.textContent = DateTime.fromISO(date).toRelative(); // Formatear la fecha de manera relativa utilizando luxon
      chevronIcon.setAttribute("name", "chevron-down-outline"); // Establecer el atributo name del icono

      if (sendBy === userSesion) {
        messageElement.classList.add("my_message");
      } else {
        messageElement.classList.add("frnd_message");
      }

      messageElement.setAttribute("id", id); // Agregar el ID al elemento del mensaje

      messageContent.textContent = text;
      messageContent.appendChild(timestamp);
      btnMsg.appendChild(chevronIcon);
      messageContent.appendChild(btnMsg);
      messageElement.appendChild(messageContent);

      menuContainer.classList.add("menuContainer");
      menuOptions.classList.add("menuOptions");
      editOption.classList.add("edit");
      deleteOption.classList.add("delet");
      editOption.textContent = "Editar";
      deleteOption.textContent = "Eliminar";
      menuOptions.appendChild(editOption);
      menuOptions.appendChild(deleteOption);
      menuContainer.appendChild(menuOptions);
      messageElement.appendChild(menuContainer);

      const editForm = document.createElement("form");
      const editInput = document.createElement("input");
      const submitButton = document.createElement("button");

      editForm.style.display = "none"; // Ocultar el formulario de edición al principio

      editInput.type = "text";
      editInput.value = text; // El texto actual del mensaje
      submitButton.type = "submit";
      submitButton.textContent = "Enviar";

      editForm.appendChild(editInput);
      editForm.appendChild(submitButton);
      messageElement.appendChild(editForm);

      // Agregar el contenido del mensaje al chatContainer utilizando appendChild
      chatContainer.appendChild(messageElement);

      btnMsg.addEventListener("click", () => {
        // Acción que deseas realizar al hacer clic en el elemento <b>
        menuContainer.style.display = "block";
      });

      messageElement.addEventListener("mouseleave", () => {
        menuContainer.style.display = "none";
      });

      editOption.addEventListener("click", () => {
        messageContent.style.display = "none";
        editForm.style.display = "block";
      });

      editForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const editedText = editInput.value;
        messageContent.style.display = "block";
        editForm.style.display = "none";
      });

      deleteOption.addEventListener("click", () => {
        const new_URL = `${URL_MSG}/${idList}`;
        deleteMessage(id, new_URL);
      });

      submitButton.addEventListener("click", () => {
        const newMessageText = editInput.value;
        const new_URL = `${URL_MSG}/${idList}`;

        updateMessage(id, newMessageText, new_URL);
      });
    }
  });
};
