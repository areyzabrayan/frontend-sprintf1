import { signinBton } from "./dataDom";
import { signupBton } from "./dataDom";
import { formBx } from "./dataDom";
import { body } from "./dataDom";

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
