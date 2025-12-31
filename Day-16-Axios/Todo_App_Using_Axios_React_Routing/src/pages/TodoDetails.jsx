import React, { useState,useEffect } from 'react'
import {useParams} from "react-router-dom"
import {getTodoById} from '../api/todoService'
const TodoDetails = () => {
  const {todoId} = useParams();
  const [todo,setTodo] = useState(null);

  useEffect(()=>{
    getTodoById(todoId)
    .then(setTodo)
  },[todoId]);

  if(!todo) return <p>Loading...</p>
  return (
    <div>
      <h3>Id: {todo.id}</h3>
      <h3>Title: {todo.title}</h3>
      <h4>Status: {todo.completed ? "Completed" : "Not completed"}</h4>
    </div>
  )
}

export default TodoDetails
