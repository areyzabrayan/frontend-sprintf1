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

export default newUser;
