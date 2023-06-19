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

//--- VALIDACION DE USUARIO

const form = document.querySelector("formulario");

const createUser = async (form) => {
    try {
      const response = await axios.get(URL_API);
      const usuarios = response.data;
  
      const newUser = {};
      const newUserInput = form.querySelectorAll(".cuenta-gratis input");
      Array.from(newUserInput).forEach((item) => {
        newUser[item.id] = item.value;
      });
  
      const nameExists = usuarios.some((user) => user.Nombre === newUser.name);
      if (nameExists) {
        alert("El nombre ya existe");
        return;
      }
     const numberExists = usuarios.some((user) => user.Celphone === newUser.number);
      if (numberExists) {
        alert("Número de celular ya registrado");
        return;
      }
  
      const passwordExists = usuarios.some((user) => user.password === newUser.password);
      if (passwordExists) {
        alert("La contraseña ya existe");
        return;
      }
  
      const urlExists = usuarios.some((user) => user.url === newUser.url);
      if (urlExists) {
        alert("La URL de imagen ya existe");
        return;
      }
  
      console.log(newUser);
      form.reset();
    } catch (error) {
      console.log(error);
      alert("Ha ocurrido un error al crear el usuario");
    }
  };
  
createUser(form);

