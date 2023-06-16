// const Usuarios = 'https://back-sprintm1-2.onrender.com/Usuarios'

// const form = document.getElementById("form");

// const createUser = (form) =>{
//     const newUser = {};    
//     const newUserInput = form.querySelectorAll(".input input");
//     Array.from(newUserInput).forEach((item) =>{
//         newUser[item.id] = item.value;
//     });
//     console.log(newUser); 

// };
// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     createUser(form);
    
// })

// const userFound = axios.get('Usuarios')
// userFound = await Usuarios.find(
//     (userItem) => userItem.name === Nombre
// );

// if (userFound === Nombre) {
//     alert("El nombre ya existe");
//     continue;
// } else (userFound.Celphone === Celphone) {
//     alert("Numero de celular ya registrado");

// } else if (userFound.password === password){
//     alert("La contraseña ya existe");
// } else{
//     alert("Nuevo usuario registrado");
//     continue
// }

// })
// const UsuariosURL = 'https://back-sprintm1-2.onrender.com/Usuarios';

// const form = document.getElementById("form");

// const createUser = async (form) => {
//     const newUser = {};
//     const newUserInput = form.querySelectorAll(".input input");
//     Array.from(newUserInput).forEach((item) => {
//         newUser[item.id] = item.value;
//     });
//     console.log(newUser);

//     try {
//         const response = await axios.get(UsuariosURL);
//         const usuarios = response.data;

//         const userFound = usuarios.find((userItem) => userItem.Nombre === newUser.name);

//         if (userFound) {
//             alert("El nombre ya existe");
//         } else if (usuarios.some((userItem) => userItem.Celphone === newUser.number)) {
//             alert("Número de celular ya registrado");
//         } else if (usuarios.some((userItem) => userItem.password === newUser.password)) {
//             alert("La contraseña ya existe");
//         } else {
//             alert("Nuevo usuario registrado");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     createUser(form);
// });

const UsuariosURL = 'https://back-sprintm1-2.onrender.com/Usuarios';

const form = document.getElementById("form");

const createUser = async (form) => {
  const newUser = {};
  const validationUser = async(UsuariosURL)=>{
  try {
    const response = await axios.get(UsuariosURL);
    const usuarios = response.data;
    const nameExists = usuarios.some((user) => user.Nombre === newUser.name);
    const numberExists = usuarios.some((user) => user.Celphone === newUser.number);
    const passwordExists = usuarios.some((user) => user.password === newUser.password);
    if (nameExists) {
      alert("El nombre ya existe");
      return; 
    } else if (numberExists) {
      alert("Número de celular ya registrado");
      return;
    } else if (passwordExists) {
      alert("La contraseña ya existe");
      return;
    } else{
      const newUser = {};
    const newUserInput = form.querySelectorAll(".input input");
    Array.from(newUserInput).forEach((item) => {
        newUser[item.id] = item.value;
    });
    console.log(newUser);
    }

  } catch (error) {
    console.log(error);
  }
  }
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  createUser(form);
});



