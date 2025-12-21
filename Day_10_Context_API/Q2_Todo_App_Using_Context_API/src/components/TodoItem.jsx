import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({item}){
    const {deleteTodo} = useContext(TodoContext);
    const handleDeleteTodo = ()=>{
        deleteTodo(item.id);
    }
    return(
        <div>
            <ul>
                <li>
                    {item.title}
                </li>
                <button className="delbtn" onClick={handleDeleteTodo}>Delete</button>
            </ul>
        </div>
    )

}

export default TodoItem;