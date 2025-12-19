import { useState } from "react";
import TodoCard from "./TodoCard ";
import { useEffect } from "react";

function TodoList(){
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json())
        .then(data=>setTodos(data.slice(0,15)));
    
        
    return ()=>{
        alert("cleanup worked")
    };
},[]);



    return(
        <TodoCard todos={todos}/>
    )
}

export default TodoList;