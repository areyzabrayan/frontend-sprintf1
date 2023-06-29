
import { seeLocal } from "../services/validateUser";
console.log(seeLocal);
import { nameEdituser, changeName } from "./dataDom";
console.log("estoy aqui");

export const printName = () => {
  const storedName = seeLocal();
  if (storedName) {
    nameEdituser.setAttribute("value", storedName);
    changeName.setAttribute("value", storedName);
  }
};



  
