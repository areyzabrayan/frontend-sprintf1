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
    id: generateUniqueId(),
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

export const generateUniqueId = () => {
  const timestamp = Date.now().toString(36); // Obtener una representación en base 36 del timestamp actual
  const randomChars = Math.random().toString(36).substring(2, 8); // Generar una cadena aleatoria de 6 caracteres en base 36
  const uniqueId = `${timestamp}${randomChars}`; // Concatenar el timestamp y la cadena aleatoria
  return uniqueId;
};
