import { URL_API } from "./dataUsers.js";

const addToUsers = (newUser) => {
  axios
    .post(URL_API, newUser, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      //popNotification2("Ususario registrado", response.data);
    })
    .catch((error) => {
      console.log("Error al agregar elemento a Usuarios:", error);
    });
};

export default addToUsers;
