import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'

const TodoApp = () => {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleTodo = () => {
    if(todo.trim().length === 0)
    {
      alert("Invalid Todo");
      return;}
    setTodos(prevTodos => [...prevTodos,{text:todo, id:Date.now(),completed:false}]);
    setTodo("");
  }

  const handleToggle = (id) => {
    setTodos(prevTodos => (prevTodos.map((todo)=>
    todo.id === id ? {...todo,completed:!todo.completed} : todo)))
  }
  
  return (
    <div>
      <h2 className='text-center font-bold m-2 text-2xl'>Todo Applcation</h2>
      <div className='flex m-4 justify-center'>
        <Card className='w-full max-w-sm'>
          <CardHeader>
            <CardTitle className='text-center'>Todo Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder='Enter Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
          </CardContent>
          <CardFooter className='flex flex-col'>
            <Button className='m-auto' onClick={handleTodo}>Add Todo</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <h2 className='text-2xl font-semibold mt-5 m-3 underline'>Todo List</h2>
        {todos.map((todo)=>(
          <div key={todo.id} className='flex items-center gap-3'>
            <Checkbox checked={todo.completed} onCheckedChange = {()=>handleToggle(todo.id)}/>
            <p className='text-lg'>{todo.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoApp
