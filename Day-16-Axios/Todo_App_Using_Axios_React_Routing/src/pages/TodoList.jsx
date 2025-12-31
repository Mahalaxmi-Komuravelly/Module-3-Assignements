import React, { useState,useEffect } from 'react'
import { getTodos } from '../api/todoService';
import { Link } from 'react-router-dom';
const TodoList = () => {
  const [todos,setTodos] = useState([]);


  useEffect(()=>{
    getTodos()
    .then(todos=>setTodos(todos.data))
  },[])

  return (
    <div className='card'>
      
        {todos && todos.map((todo)=>
          <Link to={`/todos/${todo.id}`} key={todo.id} className='list'>
            Title: {todo.title} - Status: {todo.completed? "Completed": "Not completed"}
          </Link>
        )}
      
    </div>
  )
}

export default TodoList
