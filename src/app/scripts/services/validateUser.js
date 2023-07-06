import { URL_API } from "./dataUsers";
import getUsers from "./getUsers";
import {
  celInput,
  nextInput,
  passwordInput,
  loginInput,
  form2,
  form,
  desktop,
  container,
} from "../modules/dataDom";
import { printImgOnline } from "../modules/userOnline";
import { printName } from "../modules/editContianer";
import Swal from "sweetalert2";
import { printContacts } from "../modules/printContacts";

export const validateUser = async (event) => {
  event.preventDefault();

  try {
    // Obtener los usuarios desde el servidor
    const response = await getUsers(URL_API);
    const users = response; // response ya contiene los datos de usuarios, no es necesario acceder a response.data

    const enteredCel = Number(celInput.value);

    // Encontrar el usuario con el número de celular correspondiente
    const foundCel = users.find((user) => user.Celphone === enteredCel);

    if (foundCel) {
      //console.log("User information:", foundCel);
      removHiddenPwd();
      // alert("Enter password");
      form2.addEventListener("submit", (e) => {
        e.preventDefault();
        validPwd(users);
      });
      // Realizar las acciones necesarias con la información del usuario encontrado
    } else {
      //console.log("Number not found in the array:", enteredCel);
      // alert("Enter a valid password");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario Incorrepto!",
        footer: "Intenta de nuevo",
      });
      form.reset();
      addHiddenPwd();
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const validPwd = (users) => {
  const enteredPwd = Number(passwordInput.value);
  const foundPwd = users.find((user) => user.password === enteredPwd);
  if (foundPwd) {
    const saveLocalUser = foundPwd;
    const userLocal = JSON.stringify(saveLocalUser);
    localStorage.setItem("saveLocalUser", userLocal);
    const userOnline = seeLocal();
    seeDesktop();
    const welcome = seeLocal();
    printContacts();
    Swal.fire({
      icon: "success",
      title: "Muy bien",
      text: "bienvenido!",
    });
    printImgOnline();
    printName();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Contraseña Incorrepta!",
    });
    form.reset();
    form2.reset();
    addHiddenPwd();
    seeSegnin();
  }
};

const addHiddenPwd = () => {
  passwordInput.classList.add("hidden");
  loginInput.classList.add("hidden");
  nextInput.classList.remove("hidden");
};

const removHiddenPwd = () => {
  passwordInput.classList.remove("hidden");
  loginInput.classList.remove("hidden");
  nextInput.classList.add("hidden");
};

export const seeSegnin = () => {
  container.classList.remove("borrar");
  desktop.classList.add("borrar");
};

const seeDesktop = () => {
  container.classList.add("borrar");
  desktop.classList.remove("borrar");
};

export const seeLocal = () => {
  const storedArrayString = localStorage.getItem("saveLocalUser");
  const storedArray = JSON.parse(storedArrayString);
  return storedArray.Nombre;
};
