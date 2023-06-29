
import { seeLocal } from "../services/validateUser.js";
console.log(seeLocal);
import { nameEdituser, changeName } from "./dataDom.js";
console.log('estoy aqui');

export const printName = () => {
  const storedName = seeLocal();
  if (storedName) {
    nameEdituser.setAttribute('value', storedName);
    changeName.setAttribute('value', storedName);
  }
};



  