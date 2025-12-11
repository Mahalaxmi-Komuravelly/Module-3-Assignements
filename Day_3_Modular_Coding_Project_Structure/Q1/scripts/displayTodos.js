export function displayTodos(data){

    let list = document.getElementById("todolist");
    list.innerHTML = "";

    data.forEach((todo)=>{
        let card = document.createElement("div");
        card.className="card";

        let title = document.createElement("h3");
        title.textContent = todo.title;

        let completed = document.createElement("p");
        completed.textContent = "Satus: " + todo.completed;

        card.append(title,completed);
        list.append(card);
    })
    
}


