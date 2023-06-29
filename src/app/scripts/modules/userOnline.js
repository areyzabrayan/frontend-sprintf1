import { imgOnline } from "./dataDom";

export const printImgOnline = (userOnline) => {
  let container = imgOnline;
  container.innerHTML = `
    <img src="${userOnline}" alt="imgUser" class="cover" />
    `;
};

export const local = () => {
  const storedArrayString = localStorage.getItem("saveLocalUser");
  const storedArray = JSON.parse(storedArrayString);
  
};
