import getUsers from "../services/getUsers.js";
import { URL_API } from "../services/dataUsers.js";
import popNotification from "../modules/popNotification.js";

async function validateUser(event) {
  event.preventDefault();

  const cellNumberInput = document.getElementById("celphone");
  const passwordInput = document.getElementById("password");

  const cellNumber = cellNumberInput.value;
  const password = passwordInput.value;
  // console.log(cellNumber);
  // console.log(password);

  let cellNumberActivo = null;
  let mostrarError = true;

  try {
    const usuarios = await getUsers(URL_API);
    console.log(usuarios);
    for (const usuario of usuarios) {
      console.log(usuario.Celphone);
      if (usuario.Celphone == cellNumber) {
        if (usuario.password == password) {
          cellNumberActivo = usuario;
          console.log(usuario.Celphone);
          mostrarError = false;
          break; // Salir del bucle una vez encontrado el usuario válido
        } else {
          popNotification("Oops!! Contrasela incorrecta");
        }
      }
    }

    if (cellNumberActivo) {
      location.href = "././pages/online.html";
    } else {
      if (mostrarError) {
        console.log("errorhola");
        popNotification("Oops!! Usuario incorrecto");
        cellNumberInput.value = "";
        passwordInput.value = "";
      }
    }
  } catch (error) {
    console.log("hola error");
  }
}

export default validateUser;


