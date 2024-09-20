import React from 'react'
import './styles/main.css'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
function App() {
  return (
    <div className='App'>
      <Sidebar/>
     <Hero/>
    </div>
  )
}

export default App
