import newUser from "./services/newUser";
import { validateUser, seeSegnin, seeLocal } from "./services/validateUser";
import { toggleSignInUp } from "./modules/toggleSignInUp";
import { bluebg, form, form3 } from "./modules/dataDom";
import { local, printImgOnline } from "./modules/userOnline";
import { printContacts } from "./modules/printContacts";
import "../style/style.scss";
import { printName } from "./modules/editContianer";

seeSegnin();

bluebg.addEventListener("click", toggleSignInUp);

form.addEventListener("submit", (event) => {
  localStorage.clear();
  validateUser(event);
});

//----VALIDAR REGISTRO USUARIO
form3.addEventListener("submit", (event) => {
  newUser(event);
});

document.addEventListener("DOMContentLoaded", async () => {
  printContacts();
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("goOption")) {
    const actions = document.querySelector(".option-edit");
    console.log(actions);
    actions.classList.toggle("active");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("first")) {
    // console.log('hice click');
    const actions = document.querySelector(".visual");
    // console.log(actions);
    actions.classList.toggle("active2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("arrow")) {
    console.log("hice click");
    const actions = document.querySelector(".visual");
    console.log(actions);
    actions.classList.toggle("active2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("search-outline")) {
    console.log("hice click");
    const actions = document.querySelector(".show");
    console.log(actions);
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("closeSearch")) {
    console.log("hice click");
    const actions = document.querySelector(".show");
    console.log(actions);
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("second")) {
    console.log("hice click");
    const actions = document.querySelector(".show");
    console.log(actions);
    actions.classList.toggle("show2");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("second")) {
    console.log("hice click");
    localStorage.clear();
    window.location.reload();
  }
});
