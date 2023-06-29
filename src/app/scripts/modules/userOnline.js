import { imgOnline } from "./dataDom";

export const printImgOnline = () => {
  let container = imgOnline;
  container.innerHTML = `
    <img src="${local()}" alt="imgUser" class="cover" />
    `;
};

export const local = () => {
  const storedArrayString = localStorage.getItem("saveLocalUser");
  const storedArray = JSON.parse(storedArrayString);
  
};
