import axios from "axios";

export const updateMessage = async (id, updatedMessage, url) => {
  try {
    // Realizar la solicitud GET para obtener el objeto existente
    const response = await axios.get(url);
    const existingObject = response.data;

    // Obtener el array de mensajes
    const messagesArray = existingObject.messages;

    // Buscar el índice del mensaje en el array
    const messageIndex = messagesArray.findIndex(
      (message) => message.id === id
    );

    // Verificar si se encontró el mensaje
    if (messageIndex === -1) {
      console.error("No se encontró el mensaje con el ID:", id);
      return;
    }

    // Actualizar el mensaje en el objeto existente
    messagesArray[messageIndex].message = updatedMessage;

    // Realizar la solicitud PUT o PATCH para actualizar el objeto en el servidor
    await axios.put(url, existingObject);

    console.log("Mensaje actualizado correctamente:", existingObject);
  } catch (error) {
    console.error("Error al actualizar el mensaje:", error);
  }
};
