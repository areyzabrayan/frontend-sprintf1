import newUser from "./services/newUser";
import { validateUser, seeSegnin, seeLocal } from "./services/validateUser";
import { toggleSignInUp } from "./modules/toggleSignInUp";
import { backChat, bluebg, btnSend, form, form3, inputMsg, inputchats, inputpalabra } from "./modules/dataDom";
import { local, printImgOnline } from "./modules/userOnline";
import {
  actualMessagesByIds,
  findMessagesByIds,
  idList,
  idUserSelec,
  oldMessages,
  printChatsFinder,
  printContacts,
  userSesionV,
} from "./modules/printContacts";
import "../style/style.scss";
import { printName } from "./modules/editContianer";
import addArrayElement, { newMessages } from "./services/newMessages.js";
import getUsers from "./services/getUsers";
import { URL_MSG } from "./services/dataUsers";
import postData from "./services/postData";
import { renderMessages } from "./modules/printChats";
import { printmessageFinder } from "./modules/printMessage";

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
    console.log(actions);
    actions.classList.toggle("active");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("first")) {
    // console.log('hice click');
    const actions = document.querySelector(".visual");
    // console.log(actions);
    actions.classList.toggle("active2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("arrow")) {
    console.log("hice click");
    const actions = document.querySelector(".visual");
    console.log(actions);
    actions.classList.toggle("active2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("search-outline")) {
    console.log("hice click");
    const actions = document.querySelector(".show");
    console.log(actions);
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("closeSearch")) {
    console.log("hice click");
    const actions = document.querySelector(".show");
    console.log(actions);
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("second")) {
    console.log("hice click");
    const actions = document.querySelector(".show");
    console.log(actions);
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("backChat")) {
    console.log("hice click");
    const actions = document.querySelector(".righContainer");
    console.log(actions);
    actions.classList.add("cambio");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("second")) {
    console.log("hice click");
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
    console.log(inptmessage);
    console.log(messages.messages);
    const newMessage = newMessages(inptmessage, messages);

    console.log(newMessage);
    console.log(idList);
    if (idList === 0) {
      const newConversation = {
        idUser1: idUser1,
        idUser2: Number(idUser2),
        messages: [newMessage],
      };
      console.log(newConversation);
      postData(newConversation, URL_MSG);
    } else {
      console.log("id lista", idList);
      addArrayElement(idList, newMessage, URL_MSG);
    }

    inputMsg.value = "";
  } else {
    return;
  }
});

//------------------------------------------------------------------------------
//evento filter al buscar en por nombre
//------------------------------------------------------------------------// inputpalabra.addEventListener('change', printMessageFinder )


inputchats.addEventListener('change', printChatsFinder);

inputpalabra.addEventListener('change', printmessageFinder);



