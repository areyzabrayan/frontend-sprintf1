import { URL_API } from "./services/dataUsers.js";
import getUsers from "./services/getUsers.js";
import { validateUser, seeSegnin } from "./services/validateUser.js";
//toggleSignInUp();
import { toggleSignInUp } from "./modules/toggleSignInUp.js";
<<<<<<< HEAD
import validateUser from "./services/validateUser.js";
import newUser from "./services/newUser.js";
=======
// Elementos DOM.
import { bluebg, form } from "./modules/dataDom.js";
>>>>>>> 9cef58aa07694b95a7cad566d433f9c9f1f861c9

localStorage.clear();
seeSegnin();
//toggleSignInUp();
bluebg.addEventListener("click", toggleSignInUp);

<<<<<<< HEAD
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
=======
form.addEventListener("submit", validateUser);
>>>>>>> 9cef58aa07694b95a7cad566d433f9c9f1f861c9
