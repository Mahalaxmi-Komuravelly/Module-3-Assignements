let users=JSON.parse(localStorage.getItem("users")) || [];

let signupform=document.querySelector(".signup-form");
signupform.addEventListener("submit",signUp)
function signUp(event){
    event.preventDefault();
    let name=document.getElementById("name").value.trim();
    let mail=document.getElementById("mail").value;
    let pwd=document.getElementById("pwd").value;
    let user={
        name,
        mail,
        pwd
    }
    users.push(user);
    save();
    window.location.replace('todos.html');
}
function save(){
    localStorage.setItem("users",JSON.stringify(users));
}
