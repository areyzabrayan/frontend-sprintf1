// import { seeLocal } from "../services/validateUser.js";
// import getUsers from "../services/getUsers.js";
// import { editContainerVisual, nameEditUser } from "./dataDom.js";
// import { URL_API } from "../services/dataUsers.js";

// const nameEdit = nameEditUser;
// const userName = seeLocal();

// const printname = () => {
//   nameEdit.addEventListener('click', seeLocal);

//   const editContainer = document.querySelector('.editContainer');
//   const visualElement = editContainer.querySelector('.visual');
//   const nameInputElement = document.createElement('input');

//   nameInputElement.type = 'text';
//   nameInputElement.className = 'nameEdituser';
//   nameInputElement.placeholder = userName;

//   visualElement.querySelector('.editContainer__name').appendChild(nameInputElement);
// }

// printname();

// import { seeLocal } from "../services/validateUser.js";
// import getUsers from "../services/getUsers.js";
// import { editContainerVisual, nameEdituser, first, changeName } from "./dataDom.js";
// import { URL_API } from "../services/dataUsers.js";

// const printName = (seeLocal) =>{

//     nameEdituser.value = seeLocal.name;
//     changeName.value = seeLocal.name;
// }

// printName(seeLocal);

import { seeLocal } from "../services/validateUser";
console.log(seeLocal);
import { nameEdituser, changeName } from "./dataDom";
console.log("estoy aqui");

const printName = () => {
  const storedName = seeLocal();
  if (storedName) {
    nameEdituser.setAttribute("value", storedName);
    changeName.setAttribute("value", storedName);
  }
};

printName();
