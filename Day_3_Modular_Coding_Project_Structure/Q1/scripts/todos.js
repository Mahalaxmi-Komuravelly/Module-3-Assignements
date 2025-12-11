import { navBar } from "./components/navbar.js";
import {footer} from "./components/footer.js";
import {displayTodos} from "./displayTodos.js";

document.getElementById("navbar").innerHTML = navBar();
document.getElementById("footer").innerHTML = footer(); 

async function getToDos(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await response.json();
        displayTodos(data);

    } catch (error) {
        console.log("Error Occured while fetching the data",error);
    }
}

getToDos();



