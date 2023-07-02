import { URL_MSG } from "../services/dataUsers";

export const printChats = async () => {
  try {
    const response = await getUsers(URL_MSG);
    const users = response;
    let card = chatlist;
    printPersons(users, card);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const renderMessages = (messages, userSesion) => {
  const chatBox = document.querySelector(".chatBox");

  messages.forEach((message) => {
    const { id, sendBy, message: text, date } = message;
    const messageElement = document.createElement("div");
    const messageContent = document.createElement("p");
    const timestamp = document.createElement("span");

    messageElement.classList.add("messagechat");
    messageContent.textContent = text;
    timestamp.textContent = date;

    if (sendBy === userSesion) {
      messageElement.classList.add("my_message");
    } else {
      messageElement.classList.add("frnd_message");
    }

    messageContent.appendChild(timestamp);
    messageElement.appendChild(messageContent);
    chatBox.appendChild(messageElement);
  });
};
