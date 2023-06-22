import { URL_API } from "./services/dataUsers.js";
import getUsers from "./services/getUsers.js";
import  newUser  from "./services/newUser.js";
import { validateUser, seeSegnin } from "./services/validateUser.js";

//toggleSignInUp();
import { toggleSignInUp } from "./modules/toggleSignInUp.js";
// import newUser from "./services/newUser.js";
// Elementos DOM.
import { bluebg, form, form3 } from "./modules/dataDom.js";

localStorage.clear();
seeSegnin();
//toggleSignInUp();
bluebg.addEventListener("click", toggleSignInUp);

form.addEventListener("submit", validateUser);

form3.addEventListener("submit", (event)=>{
    newUser(event);
});

document.addEventListener("click",(event)=>{
    if (event.target.classList.contains("goOption")) {
        const actions = document.querySelector('.option-edit');
        console.log(actions);
        actions.classList.toggle("active");
    }
})

document.addEventListener("click", (event)=>{
    if (event.target.classList.contains("first")) {
        console.log('hice click');
        const actions = document.querySelector('.visual');
        console.log(actions);
        actions.classList.toggle("active2");
    }
})
document.addEventListener("click", (event)=>{
    if (event.target.classList.contains("arrow")) {
        console.log('hice click');
        const actions = document.querySelector('.visual');
        console.log(actions);
        actions.classList.toggle("active2");
    }
})
