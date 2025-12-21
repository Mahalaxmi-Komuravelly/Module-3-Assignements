import { useRef } from "react";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";



function AddTodo(){

    const inputRef=useRef(null);
    
    const {addTodo} = useContext(TodoContext);
    const handleTodo = ()=>{
        const title = inputRef.current.value.trim();
        if(!title) return;
        addTodo(title);
        inputRef.current.value="";
        
    }

    return(
        <>
            <input type="text" placeholder="Enter task..." ref={inputRef}/>
            <button onClick={handleTodo}>Add Todo</button>
        </>
    )
}

export default AddTodo;