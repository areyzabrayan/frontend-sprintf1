import { seeLocal } from "../services/validateUser";
import { nameEditUser, nameEditUser2, editFoto, editFoto2 } from "./dataDom";
import axios from "axios";
import Swal from "sweetalert2";
import { printImgOnline } from "./userOnline";

export const printName = () => {
  const storedName = seeLocal();
  if (storedName) {
    nameEditUser.setAttribute("value", storedName);
    editFoto.setAttribute("value", storedName);
  }
};

export const updateUserData = async (id, newValue, field, url) => {
  try {
    // Realizar la solicitud GET para obtener el objeto existente
    const response = await axios.get(`${url}/${id}`);
    const existingObject = response.data;

    // Verificar si se encontró el objeto con el ID
    if (existingObject.id !== id) {
      console.error("No se encontró el objeto con el ID:", id);
      return;
    }

    // Actualizar el campo correspondiente en el objeto existente
    existingObject[field] = newValue;

    // Realizar la solicitud PUT o PATCH para actualizar el objeto en el servidor
    await axios.put(`${url}/${id}`, existingObject);

    Swal.fire({
      icon: "success",
      title: "Muy bien",
      text: "Campo actualizado correctamente",
    });
    const savedUserLocal = JSON.parse(localStorage.getItem("saveLocalUser"));
    savedUserLocal[field] = newValue;
    localStorage.setItem("saveLocalUser", JSON.stringify(savedUserLocal));

    printImgOnline();
  } catch (error) {
    console.error(`Error al actualizar el campo ${field}:`, error);
  }
};
