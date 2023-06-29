import newUser from "./scripts/services/newUser";
import {
  validateUser,
  seeSegnin,
  seeLocal,
} from "./scripts/services/validateUser";
import { toggleSignInUp } from "./scripts/modules/toggleSignInUp";
import { bluebg, form, form3 } from "./scripts/modules/dataDom";
import { local, printImgOnline } from "./scripts/modules/userOnline";
import { printContacts } from "./scripts/modules/printContacts";
import "./style/style.css";

seeSegnin();

bluebg.addEventListener("click", toggleSignInUp);

form.addEventListener("submit", (event) => {
  localStorage.clear();
  validateUser(event);
  // printImgOnline(urlOnline);
  // printContacts();
});

//----VALIDAR REGISTRO USUARIO
form3.addEventListener("submit", (event) => {
  newUser(event);
});

document.addEventListener("DOMContentLoaded", async () => {
  const urlOnline = local();
  printImgOnline(urlOnline);
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
