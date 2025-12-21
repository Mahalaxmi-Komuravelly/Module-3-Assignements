import { useEffect, useState } from "react";

function Todos(){
 
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>response.json())
        .then((data)=>setTodos(data.slice(0,10)))
    },[])
    return(
        <>
            <h1>Todos</h1>
            <div className="container">
                {todos.map((todo)=>(
                <div className="card" key={todo.id}>
                    <h4>Title : {todo.title}</h4>
                    <p>Status : {todo.completed? "Completed" : "Not Completed"}</p>
                </div>
            ))}
            </div>
        </>
    )
}

export default Todos;
