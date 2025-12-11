let users=JSON.parse(localStorage.getItem("users")) || [];

let loginform=document.querySelector(".login-form");
loginform.addEventListener("submit",logIn);

function logIn(event){
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let user=users.find(u=>u.mail === email && u.pwd === password);
        if(user){
            window.location.replace('./todos.html');
        }
        else{
            alert("Please enter valid email and password");
        }
    
}