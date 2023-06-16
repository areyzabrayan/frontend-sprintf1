const UsuariosURL = 'https://back-sprintm1-2.onrender.com/Usuarios';

const form = document.getElementById("form");

const createUser = async (form) => {
  try {
    const response = await axios.get(UsuariosURL);
    const usuarios = response.data;

    const newUser = {};
    const newUserInput = form.querySelectorAll(".input input");
    Array.from(newUserInput).forEach((item) => {
      newUser[item.id] = item.value;
    });

    const nameExists = usuarios.some((user) => user.Nombre === newUser.name);
    if (nameExists) {
      alert("El nombre ya existe");
      return;
    }
   const numberExists = usuarios.some((user) => user.Celphone === newUser.number);
    if (numberExists) {
      alert("Número de celular ya registrado");
      return;
    }

    const passwordExists = usuarios.some((user) => user.password === newUser.password);
    if (passwordExists) {
      alert("La contraseña ya existe");
      return;
    }

    const urlExists = usuarios.some((user) => user.url === newUser.url);
    if (urlExists) {
      alert("La URL de imagen ya existe");
      return;
    }

    console.log(newUser);
    form.reset();
  } catch (error) {
    console.log(error);
    alert("Ha ocurrido un error al crear el usuario");
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await createUser(form);
});
