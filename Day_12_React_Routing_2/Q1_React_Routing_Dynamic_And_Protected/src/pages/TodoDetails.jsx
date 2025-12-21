import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TodoDetails(){

    const [todo,setTodo] = useState(null);
    const {todoId} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((response)=>response.json())
        .then((data)=>setTodo(data));
    },[todoId]);

    if(!todo){
        return <p>Loading...</p>
    }
    return(
        <div className="containerCard">
            <h2>Todo Details</h2>
            <p>ID : {todo.id}</p>
            <p>Title : {todo.title}</p>
            <p>Status : {todo.completed ? "Completed" : "Not Completed"}</p>
       
        </div>
    )
}

export default TodoDetails;