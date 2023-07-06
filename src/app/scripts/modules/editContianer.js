import getUsers from "../services/getUsers";
import { URL_API } from "../services/dataUsers";
import { seeLocal } from "../services/validateUser";
import { nameEdituser, changeName, change } from "./dataDom";
import axios from "axios";

export const printName = () => {
  const storedName = seeLocal();
  if (storedName) {
    nameEdituser.setAttribute("value", storedName);
    changeName.setAttribute("value", storedName);
  }
};

change.addEventListener("click", () => {
  const userId = getUsers(id);
  updateUser(id);
});

export const updateUser = (id) => {
  const editName = changeName.value;
  const userId = getUsers("id");

  const nameEdit = {
    id: userId,
    Nombre: editName,
  };

  axios
    .patch(URL_API, nameEdit, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Nombre actualizado:", response.data.Nombre);
    })
    .catch((error) => {
      console.error("Error al actualizar el nombre:", error);
    });
};
