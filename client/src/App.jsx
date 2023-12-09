import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
    
  )
}

export default App
