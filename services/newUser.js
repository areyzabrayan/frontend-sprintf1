// import { URL_API } from "../services/dataUsers.js";
// import getUsers from "../services/getUsers.js";
// import {
//   popNotification,
//   popNotification2,
// } from "../modules/popNotification.js";
// import {
//   form3,
//   nameR,
//   celphoneR,
//   passwordR,
//   urlR
// } from "../modules/dataDom.js";

// const newUser = async (event) => {
//   event.preventDefault();
  

//   try {
    
//     const users = await getUsers(URL_API);
   
//     console.log(users);

//     const newUser={};

//     const newCelphoneR = celphoneR.value;

//     const foundNumber = users.find((user) => user.Celphone == newCelphoneR);
//     if (foundNumber) {

//       popNotification("Numero existente");
//       // location.reload();
//       return;
//     } 
//       console.log(newUser);
//       form3.reset();

//       addToUsers(newUser);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const addToUsers = (newUser) => {
//   axios.post(URL_API, newUser, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       alert('Elemento agregado a Usuarios:', response.data);
//     })
//     .catch((error) => {
//       console.log('Error al agregar elemento a Usuarios:', error);
//     });
// };

//   export default newUser;

//PRUEBA 6

import { URL_API } from "../services/dataUsers.js";
import getUsers from "../services/getUsers.js";
import {
  popNotification,
  popNotification2,
} from "../modules/popNotification.js";
import {
  form3,
  nameR,
  celphoneR,
  passwordR,
  urlR
} from "../modules/dataDom.js";

const newUser = async (event) => {
  event.preventDefault();
  

  try {
    
    const users = await getUsers(URL_API);
   
    console.log(users);

    const newUser={};
    // const newUserInput = form.querySelectorAll("#form3 input");
    // Array.from(newUserInput).forEach((item) => {
    //   newUser[item.id] = item.value;
    // });
  

    
    const newCelphoneR = celphoneR.value;

    const foundNumber = users.find((user) => user.Celphone == newCelphoneR);
    if (foundNumber) {

      popNotification("Numero existente");
      // location.reload();
      return;
    } 
    const newNmane = nameR.value;
    const newPassword = passwordR.value;
    const newUrl = urlR.value;
    console.log(newPassword);
      console.log(newUser);
      form3.reset();

      addToUsers(newUser);
  } catch (error) {
    console.log(error);
  }
};

const addToUsers = (newUser) => {
  axios.post(URL_API, newUser, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response);
      alert('Elemento agregado a Usuarios:', response.data);
    })
    .catch((error) => {
      console.log('Error al agregar elemento a Usuarios:', error);
    });
};

  export default newUser;


 