import { DateTime } from "luxon";
import { userSesionV } from "../modules/printContacts";
import axios from "axios";

export const newMessages = (message, listMessages) => {
  //Calcular id
  const id =
    listMessages && listMessages.messages
      ? listMessages.messages.length + 1
      : 1;
  console.log(listMessages);
  const userSesion = userSesionV();
  //const date = DateTime.now().toLocaleString(DateTime.DATE_SHORT);

  const newMessage = {
    id: id,
    sendBy: userSesion,
    date: "date",
    message: message,
    flag: false,
  };

  return newMessage;
};

const addArrayElement = async (id, newArrayElement, url) => {
  try {
    // Obtener el objeto existente
    const response = await axios.get(`${url}/${id}`);
    const existingObject = response.data;

    // Agregar el nuevo elemento al array
    existingObject.messages.push(newArrayElement);

    // Realizar la solicitud PUT o PATCH para actualizar el objeto en el servidor
    await axios.put(`${url}/${id}`, existingObject);

    console.log("Elemento agregado correctamente");
  } catch (error) {
    console.error("Error al agregar el elemento:", error);
  }
};

export default addArrayElement;
