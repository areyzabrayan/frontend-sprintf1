import { URL_API } from "./services/dataUsers.js";
import getUsers from "./services/getUsers.js";
import newUser from "./services/newUser.js";
import { validateUser, seeSegnin, seeLocal } from "./services/validateUser.js";
import { toggleSignInUp } from "./modules/toggleSignInUp.js";
import { bluebg, form, form3 } from "./modules/dataDom.js";
import { local, printImgOnline } from "./modules/userOnline.js";
import { printContacts } from "./modules/printContacts.js";

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
  const urlOnline = local();
  printImgOnline(urlOnline);
  printContacts();
});
