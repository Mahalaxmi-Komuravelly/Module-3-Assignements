import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Todos(){

    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{

            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response)=>response.json())
            .then((data)=>setTodos(data.slice(0,10)))
    },[]);

    const handleLogout = () =>{
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    }
    return(

        <div>
            <div>
                <h1>Todos</h1>
                <button className="logoutbtn" onClick={handleLogout}>Logout</button>
            </div>
            <div>
            
                {todos.map((todo) => (
                    <Link className="card" key={todo.id} to={`/todos/${todo.id}`}>
                        Title: {todo.title} - 
                        Status: {todo.completed?"Completed":"Not Completed"}
                    </Link>
                )

                )}
            </div>
        </div>
    )
}

export default Todos;