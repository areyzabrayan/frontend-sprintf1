import { signinBton } from "./dataDom.js";
import { signupBton } from "./dataDom.js";
import { formBx } from "./dataDom.js";
import { body } from "./dataDom.js";

export const toggleSignInUp = (event) => {
  const botonPresionado = event.target;

  if (botonPresionado === signupBton) {
    formBx.classList.add("active");
    body.classList.add("active");
  } else if (botonPresionado === signinBton) {
    formBx.classList.remove("active");
    body.classList.remove("active");
  }
};

export default toggleSignInUp;
