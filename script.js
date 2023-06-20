import { URL_API } from "./services/dataUsers.js";
import getUsers from "./services/getUsers.js";
import { toggleSignInUp } from "./modules/toggleSignInUp.js";
import validateUser from "./services/validateUser.js";
import newUser from "./services/newUser.js";

getUsers(URL_API);
toggleSignInUp();

//---VALIDAR USUARIO Y CONTRASEÑA
const form = document.getElementById("login");

form.addEventListener("submit", (event) => {
  validateUser(event);
});

//----VALIDAR REGISTRO USUARIO

const registerForm = document.querySelector(".formulario");
registerForm.addEventListener("submit", (event) => {
  newUser(event);
});
