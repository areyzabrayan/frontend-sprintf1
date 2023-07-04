import { DateTime } from "luxon";
import { URL_MSG } from "../services/dataUsers";
import { chatBox } from "./dataDom";
import addArrayElement from "../services/newMessages";
import { idList, userSesionV } from "./printContacts";
import axios from "axios";

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
        console.log("Hice clic en el mensaje con ID:", id);
      });

      messageElement.addEventListener("mouseleave", () => {
        // Acción que deseas realizar cuando el cursor se aleja del mensaje
        menuContainer.style.display = "none";
      });

      editOption.addEventListener("click", () => {
        // Acción que deseas realizar al hacer clic en el elemento "Editar"
        messageContent.style.display = "none";
        editForm.style.display = "block";
      });

      editForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        const editedText = editInput.value; // Obtener el nuevo texto del campo de edición
        console.log("Mensaje editado:", editedText);
        messageContent.style.display = "block";
        editForm.style.display = "none";
      });

      deleteOption.addEventListener("click", () => {
        // Acción que deseas realizar al hacer clic en el elemento "Eliminar"
        console.log("Hice clic en 'Eliminar' del mensaje con ID:", id);
      });

      submitButton.addEventListener("click", () => {
        // Acción que deseas realizar al hacer clic en el botón "Enviar"
        const newMessageText = editInput.value; // Obtener el nuevo texto del mensaje
        const new_URL = `${URL_MSG}/${idList}`;

        updateMessage(id, newMessageText, new_URL);
      });
    }
  });
};

// Código actualizado
const updateMessage = async (id, updatedMessage, url) => {
  try {
    // Realizar la solicitud GET para obtener el objeto existente
    const response = await axios.get(url);
    const existingObject = response.data;
    console.log(existingObject);

    // Obtener el array de mensajes
    const messagesArray = existingObject.messages;

    // Buscar el índice del mensaje en el array
    const messageIndex = messagesArray.findIndex(
      (message) => message.id === id
    );

    // Verificar si se encontró el mensaje
    if (messageIndex === -1) {
      console.error("No se encontró el mensaje con el ID:", id);
      return;
    }

    // Actualizar el mensaje en el objeto existente
    messagesArray[messageIndex].message = updatedMessage;

    // Realizar la solicitud PUT o PATCH para actualizar el objeto en el servidor
    await axios.put(url, existingObject);

    console.log("Mensaje actualizado correctamente:", existingObject);
  } catch (error) {
    console.error("Error al actualizar el mensaje:", error);
  }
};
