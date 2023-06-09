import getUsers, { findChats } from "../services/getUsers";
import {
  chatlist,
  imgUser,
  username,
  inputMsg,
  chatBox,
  inputchats,
} from "./dataDom";
import { URL_API, URL_MSG } from "../services/dataUsers";
import { renderMessages } from "./printChats";

let selectedCard; // Declarar la variable selectedCard en el ámbito global
export let idUserSelec = "";
export let oldMessages = "";
export let idList = "";
export let mensajesActuales = "";

export const printContacts = async () => {
  try {
    const response = await getUsers(URL_API);
    const users = response;
    let card = chatlist;
    printPersons(users, card, userSesionV());
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const printPersons = (array, container, currentUserId) => {
  array.forEach((item) => {
    // Verificar si el ID del usuario coincide con el ID del usuario actual
    if (item.id === currentUserId) {
      return; // Omitir la creación de la tarjeta
    }

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
        </div>
      </div>    
    `;

    // Agregar el ID del usuario como un atributo personalizado en la card
    card.dataset.userId = item.id;

    // Agregar evento de clic al elemento 'card'
    card.addEventListener("click", () => {
      if (selectedCard) {
        const card = document.querySelector(".righContainer");
        card.classList.remove("cambio");

        selectedCard.classList.remove("onclik");
        // Eliminar la clase 'oscuro' del elemento anterior
      }

      card.classList.add("onclik"); // Agregar la clase 'oscuro' al elemento actual

      selectedCard = card; // Actualizar el elemento seleccionado actualmente
      inputMsg.value = "";

      // Obtener el ID del usuario de la card seleccionada
      const userId2 = card.dataset.userId;

      // Obtener los datos del usuario de la card seleccionada
      const imageUrl = item.Url_image;
      const nombre = item.Nombre;
      updateUserInfo(imageUrl, nombre);

      // Actualizar los valores de los elementos de la cabecera
      const userSesion = userSesionV();
      findMessagesByIds(userSesion, userId2);
      idUserSelec = userId2;
    });

    container.appendChild(card);
  });
};

const updateUserInfo = (imageUrl, nombre) => {
  imgUser.src = imageUrl;
  username.textContent = nombre;
};

export const userSesionV = () => {
  const storedArrayString = localStorage.getItem("saveLocalUser");
  const storedArray = JSON.parse(storedArrayString);
  return storedArray.id;
};

export const findMessagesByIds = async (idUser1, idUser2) => {
  try {
    const response = await getUsers(URL_MSG);
    const messages = response;
    const foundObj = messages.find(
      (obj) =>
        (obj.idUser1 == idUser1 && obj.idUser2 == idUser2) ||
        (obj.idUser1 == idUser2 && obj.idUser2 == idUser1)
    );

    if (foundObj) {
      oldMessages = foundObj;
      idList = foundObj.id;
      const chatContainer = chatBox;
      chatContainer.innerHTML = "";
      renderMessages(foundObj.messages, userSesionV());
      mensajesActuales = foundObj.messages;
    } else {
      const chatContainer = chatBox;
      chatContainer.innerHTML = "";
      oldMessages = "";
      idList = 0;
    }
  } catch (error) {
    console.log(error);
  }
};

export const printChatsFinder = async () => {
  const chatFinder = await findChats(inputchats.value);
  let card = chatlist;
  card.innerHTML = "";
  printPersons(chatFinder, card);
};
