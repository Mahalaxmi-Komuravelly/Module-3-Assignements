import { useState } from "react";
import { TodoContext } from "../context/TodoContext";



function Todos({children}){

    const [todos,setTodos] = useState([]);
    const addTodo = (title)=>{
        setTodos([...todos,{id:Date.now(),title}]);
    }

    const deleteTodo = (id) =>{
        setTodos(
            todos.filter((todo)=>todo.id !== id)
        )
    }

    return(
        <TodoContext.Provider value={{todos, addTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}


export default Todos;

    
