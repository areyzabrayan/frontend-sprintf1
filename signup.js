const form = document.getElementById("form");

const createUser = (form) =>{
    const newUser = {};    
    const newUserInput = form.querySelectorAll(".input input");
    Array.from(newUserInput).forEach((item) =>{
        newUser[item.id] = item.value;
    });
    console.log(newUser); 

};
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    createUser(form);
    
})
 
