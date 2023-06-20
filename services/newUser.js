// import { URL_API } from "../services/dataUsers.js";

// const form = document.getElementsByClassName("formulario")[0];

// const createUser = async (form) => {
//   try {
//     const response = await axios.get(URL_API);
//     const usuarios = response.data;

//     const newUser = {};
//     const newUserInputs = form.querySelectorAll(".input input");
//     Array.from(newUserInputs).map((item) => {
//       newUser[item.id] = item.value;
//     });

//     const userExists = usuarios.find(
//       (user) =>
//         user.Nombre === newUser.name ||
//         user.Celphone === newUser.Celphone ||
//         user.password === newUser.password
//     );
//     if (userExists) {
//       alert('Usuario ya existe');
//       return;
//     }

//     console.log(newUser);
//     form.reset();

//     addToUsers(newUser);
//   } catch (error) {
//     console.log(error);
//     alert("Ha ocurrido un error al crear el usuario");
//   },
// }

// const addToUsers = (newUser) => {
//   axios
//     .post(URL_API, newUser, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then((response) => {
//       alert('Elemento agregado a Usuarios: ' + response.data);
//     })
//     .catch((error) => {
//       console.log('Error al agregar elemento a Usuarios:', error);
//     });
// };

// async function newUser(event) {
//   event.preventDefault();
//   await createUser(form);
// }

// export default newUser;


