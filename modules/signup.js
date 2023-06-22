const UsuariosURL = 'https://back-sprintm1-2.onrender.com/Usuarios';

const form = document.getElementById("form");

const createUser = async (form) => {
  try {
    const response = await axios.get(UsuariosURL);
    const usuarios = response.data;

    const newUser = {};
    const newUserInput = form.querySelectorAll(".input input");
    Array.from(newUserInput).map((item) => {
      newUser[item.id] = item.value;
    });

    const userExists = usuarios.find((user) => user.Nombre === newUser.name || user.Celphone === newUser.number || user.password === newUser.password );
    if (userExists) {
      Swal.fire(
        'Oops!',
        'Campo Existente!',
      );
      return;
    }

    console.log(newUser);
    form.reset();

    addToUsers(newUser); 
  } catch (error) {
    console.log(error);
    alert("Ha ocurrido un error al crear el usuario");
  }
};


const addToUsers = (newUser) => {
  axios.post(UsuariosURL, newUser, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      alert('Elemento agregado a Usuarios:', response.data);
    })
    .catch((error) => {
      console.log('Error al agregar elemento a Usuarios:', error);
    });
};


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await createUser(form);
});
