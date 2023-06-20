import { URL_API } from "./services/dataUsers.js";
import getUsers from "./services/getUsers.js";
import { validateUser, seeSegnin } from "./services/validateUser.js";
//toggleSignInUp();
import { toggleSignInUp } from "./modules/toggleSignInUp.js";
// Elementos DOM.
import { bluebg, form } from "./modules/dataDom.js";

localStorage.clear();
seeSegnin();
//toggleSignInUp();
bluebg.addEventListener("click", toggleSignInUp);

form.addEventListener("submit", validateUser);
