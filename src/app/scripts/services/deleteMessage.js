import axios from "axios";
import Swal from "sweetalert2";

export const deleteMessage = async (id, url) => {
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

    // Eliminar el mensaje del array
    messagesArray.splice(messageIndex, 1);

    // Realizar la solicitud PUT o PATCH para actualizar el objeto en el servidor
    await axios.put(url, existingObject);
    Swal.fire({
      icon: "success",
      title: "Excelent",
      text: "Mensaje eliminado correctamente:!",
      footer: "Intenta de nuevo",
    });
  } catch (error) {
    console.error("Error al eliminar el mensaje:", error);
  }
};
