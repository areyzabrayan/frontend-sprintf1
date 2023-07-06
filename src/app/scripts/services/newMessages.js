import { DateTime } from "luxon";
import { userSesionV } from "../modules/printContacts";
import axios from "axios";
import { renderMessages } from "../modules/printChats";

export const newMessages = (message) => {
  //Calcular id

  const userSesion = userSesionV();
  //const date = DateTime.now().toLocaleString(DateTime.DATE_SHORT);

  const newMessage = {
    id: generateUniqueId(),
    sendBy: userSesion,
    date: DateTime.now(),
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
    const response2 = await axios.get(`${url}/${id}`);
    const existingObject2 = response2.data;
    renderMessages(existingObject2.messages, userSesionV());

    console.log("Elemento agregado correctamente", existingObject2.messages);
  } catch (error) {
    console.error("Error al agregar el elemento:", error);
  }
};

export default addArrayElement;

export const generateUniqueId = () => {
  const timestamp = Date.now().toString(36); // Obtener una representación en base 36 del timestamp actual
  const randomChars = Math.random().toString(36).substring(2, 5); // Generar una cadena aleatoria de 3 caracteres en base 36
  const uniqueId = `${timestamp}${randomChars}`; // Concatenar el timestamp y la cadena aleatoria
  return uniqueId;
};
