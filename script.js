import { URL_API } from "./services/dataUsers.js";
import getUsers from "./services/getUsers.js";
import  newUser  from "./services/newUser.js";
import { validateUser, seeSegnin } from "./services/validateUser.js";

//toggleSignInUp();
import { toggleSignInUp } from "./modules/toggleSignInUp.js";
// import newUser from "./services/newUser.js";
// Elementos DOM.
import { bluebg, form, form3 } from "./modules/dataDom.js";

localStorage.clear();
seeSegnin();
//toggleSignInUp();
bluebg.addEventListener("click", toggleSignInUp);

form.addEventListener("submit", validateUser);

form3.addEventListener("submit", (event)=>{
    newUser(event);
});

//----VALIDAR REGISTRO USUARIO

// const registerForm = document.querySelector(".formulario");
// registerForm.addEventListener("submit", (event) => {
//   newUser(event);
// });
