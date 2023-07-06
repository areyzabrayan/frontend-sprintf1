import axios from "axios";

const postData = (newUser, url) => {
  axios
    .post(url, newUser, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Error al agregar elemento a Usuarios:", error);
    });
};

export default postData;
