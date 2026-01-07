import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Todos from './pages/Todos'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup"/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/todos" element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
