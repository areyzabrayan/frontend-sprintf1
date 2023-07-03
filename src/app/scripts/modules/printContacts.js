import getUsers from "../services/getUsers";
import { chatlist, imgUser, username, rightContainer } from "./dataDom";
import { URL_API, URL_MSG } from "../services/dataUsers";

let selectedCard; // Declarar la variable selectedCard en el ámbito global

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
    // console.log(item.info);
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

    // Agregar el ID del usuario como un atributo personalizado en la card
    card.dataset.userId = item.id;

    // Agregar evento de clic al elemento 'card'
    card.addEventListener("click", () => {
      if (selectedCard) {
        console.log('hiceClick');
        //  const card = document.querySelector(".righContainer");
        //  card.classList.toggle("show2")
    
        selectedCard.classList.remove("onclik"); // Eliminar la clase 'oscuro' del elemento anterior   
      }

      card.classList.add("onclik"); // Agregar la clase 'oscuro' al elemento actual
      card.classList.remove("cambio")
      selectedCard = card; // Actualizar el elemento seleccionado actualmente

      //pintar contenedor de mensajes con la card seleccionada
      
      // Obtener el ID del usuario de la card seleccionada
      const userId2 = card.dataset.userId;
      console.log("ID del usuario dos:", userId2);

      // Obtener los datos del usuario de la card seleccionada
      const imageUrl = item.Url_image;
      const nombre = item.Nombre;
      updateUserInfo(imageUrl, nombre);

      // Actualizar los valores de los elementos de la cabecera
      const userSesion = userSesionV();
      console.log(userSesion);
      findMessagesByIds(userSesion, userId2);

      // Otras operaciones con el elemento 'card' capturado
      // ...
    });

    container.appendChild(card);
  });
};

const updateUserInfo = (imageUrl, nombre) => {
  imgUser.src = imageUrl;
  username.textContent = nombre;
};

const userSesionV = () => {
  const storedArrayString = localStorage.getItem("saveLocalUser");
  const storedArray = JSON.parse(storedArrayString);
  return storedArray.id;
};

const findMessagesByIds = async (idUser1, idUser2) => {
  try {
    const response = await getUsers(URL_MSG);
    const messages = response;
    const foundObj = messages.find(
      (obj) => obj.idUser1 == idUser1 && obj.idUser2 == idUser2
    );

    if (foundObj) {
      console.log(foundObj.messages);
      console.log("conversacion iniciada");
    } else {
      console.log("Mensajes no encontrados");
    }
  } catch (error) {
    console.log(error);
  }
};
