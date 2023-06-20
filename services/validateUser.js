import { URL_API } from "../services/dataUsers.js";
import getUsers from "../services/getUsers.js";
import {
  popNotification,
  popNotification2,
} from "../modules/popNotification.js";
import {
  celInput,
  nextInput,
  passwordInput,
  loginInput,
  form2,
  form,
  desktop,
  container,
} from "../modules/dataDom.js";

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
      popNotification2("Enter password");
      form2.addEventListener("submit", (e) => {
        e.preventDefault();
        validPwd(users);
      });
      // Realizar las acciones necesarias con la información del usuario encontrado
    } else {
      //console.log("Number not found in the array:", enteredCel);
      popNotification("Enter a valid username");
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
    const userSesion = JSON.stringify(foundPwd);
    localStorage.setItem("foundPwd", userSesion);
    versosial();
    seeDesktop();
  } else {
    popNotification("Incorrect password");
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

const versosial = () => {
  const storedArrayString = localStorage.getItem("foundPwd");
  const storedArray = JSON.parse(storedArrayString);
  console.log(storedArray);
};
