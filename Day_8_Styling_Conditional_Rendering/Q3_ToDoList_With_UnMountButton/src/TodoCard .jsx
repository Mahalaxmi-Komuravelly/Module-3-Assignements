function TodoCard({todos}){
    return (
                todos.map(todo=>(
                <div className="card" key={todo.id}>
                    <p>User Id: {todo.userId}</p>
                    <p>Title: {todo.title}</p>
                    <p>Completed: {todo.completed === true ? "true" : "false"}</p>
                </div>
            ))   
    )
}

export default TodoCard;