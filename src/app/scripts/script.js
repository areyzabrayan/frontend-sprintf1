import newUser from "./services/newUser";
import { validateUser, seeSegnin } from "./services/validateUser";
import { toggleSignInUp } from "./modules/toggleSignInUp";
import {
  backChat,
  bluebg,
  btnSend,
  form,
  form3,
  inputMsg,
  inputchats,
} from "./modules/dataDom";
import {
  idList,
  idUserSelec,
  oldMessages,
  printChatsFinder,
  printContacts,
  userSesionV,
} from "./modules/printContacts";
import "../style/style.scss";
import addArrayElement, { newMessages } from "./services/newMessages.js";
import { URL_MSG } from "./services/dataUsers";
import postData from "./services/postData";

seeSegnin();

bluebg.addEventListener("click", toggleSignInUp);

form.addEventListener("submit", (event) => {
  localStorage.clear();
  validateUser(event);
});

//----VALIDAR REGISTRO USUARIO
form3.addEventListener("submit", (event) => {
  newUser(event);
});

document.addEventListener("DOMContentLoaded", async () => {
  printContacts();
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("goOption")) {
    const actions = document.querySelector(".option-edit");
    actions.classList.toggle("active");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("first")) {
    const actions = document.querySelector(".visual");
    actions.classList.toggle("active2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("arrow")) {
    const actions = document.querySelector(".visual");
    actions.classList.toggle("active2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("search-outline")) {
    const actions = document.querySelector(".show");
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("closeSearch")) {
    const actions = document.querySelector(".show");
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("second")) {
    const actions = document.querySelector(".show");
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("backChat")) {
    const actions = document.querySelector(".righContainer");
    actions.classList.add("cambio");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("second")) {
    localStorage.clear();
    window.location.reload();
  }
});

//------------------------------------------------------------------------------
//evento click al enviar un mensaje
//------------------------------------------------------------------------------
btnSend.addEventListener("click", (e) => {
  e.preventDefault();

  const inptmessage = inputMsg.value;
  const idUser1 = userSesionV();
  const idUser2 = idUserSelec;
  let messages = oldMessages || []; // Inicializar como un array vacío si oldMessages es falsy

  if (inptmessage.length > 0) {
    const newMessage = newMessages(inptmessage);
    if (idList === 0) {
      const newConversation = {
        idUser1: idUser1,
        idUser2: Number(idUser2),
        messages: [newMessage],
      };
      postData(newConversation, URL_MSG);
    } else {
      addArrayElement(idList, newMessage, URL_MSG);
    }

    inputMsg.value = "";
  } else {
    return;
  }
});

//------------------------------------------------------------------------------
//evento filter al buscar en por nombre
//-----------------------------------------------------------------------

inputchats.addEventListener("change", printChatsFinder);
