import React from 'react'
import TodoList from './pages/TodoList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoDetails from './pages/TodoDetails'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path='/todos/:todoId' element={<TodoDetails/>}/>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
