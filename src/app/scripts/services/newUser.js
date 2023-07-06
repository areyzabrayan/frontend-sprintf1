import getUsers from "./getUsers";
import { form3, nameR, celphoneR, passwordR, urlR } from "../modules/dataDom";
import { URL_API } from "./dataUsers";
import postData from "./postData";
import Swal from "sweetalert2";

const newUser = async (event) => {
  event.preventDefault();

  try {
    const users = await getUsers(URL_API);

    const newCelphoneR = celphoneR.value;

    const foundNumber = users.find((user) => user.Celphone == newCelphoneR);
    if (foundNumber) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Numero Existente!",
        footer: "Intenta de nuevo",
      });
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
    postData(newUser, URL_API);
    Swal.fire({
      icon: "success",
      title: "Hecho",
      text: "Nuevo usuario agregado!",
    });
  } catch (error) {
    console.log(error);
  }
};

export default newUser;
