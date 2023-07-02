import axios from "axios";
import Swal from "sweetalert2";

const postData = (newUser, url) => {
  axios
    .post(url, newUser, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Hecho',
        text: 'Nuevo usuario agregado!',
      })
      //popNotification2("Ususario registrado", response.data);
    })
    .catch((error) => {
      console.log("Error al agregar elemento a Usuarios:", error);
    });
};

export default postData;
