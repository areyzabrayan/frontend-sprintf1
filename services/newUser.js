import getUsers from "../services/getUsers.js";
import {
  popNotification,
  popNotification2,
} from "../modules/popNotification.js";
import {
  form3,
  nameR,
  celphoneR,
  passwordR,
  urlR,
} from "../modules/dataDom.js";
import { URL_API } from "../services/dataUsers.js";
import addToUsers from "./addToUsers.js";

const newUser = async (event) => {
  event.preventDefault();

  try {
    const users = await getUsers(URL_API);
    console.log(users);

    const newCelphoneR = celphoneR.value;

    const foundNumber = users.find((user) => user.Celphone == newCelphoneR);
    if (foundNumber) {
      popNotification("Número existente");
      return;
    }

    const newNmane = nameR.value;
    const newPassword = passwordR.value;
    const newUrl = urlR.value;

    const newUser = {
      Nombre: newNmane,
      Celphone: Number(newCelphoneR),
      password: Number(newPassword),
      Url_image: newUrl,
    };

    form3.reset();
    addToUsers(newUser);
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
const addToUsers = (newUser) => {
  axios
    .post(URL_API, newUser, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      alert("Elemento agregado a Usuarios:", response.data);
    })
    .catch((error) => {
      console.log("Error al agregar elemento a Usuarios:", error);
    });
};

=======
>>>>>>> 566040e7f0c5c14e5ff1ae92cf29bcaf2ede2e06
export default newUser;
