import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
function App() {
  return (
<div className="relative h-auto flex items-center justify-center bg-cover bg-center">
{/* <div className="relative h-auto flex items-center justify-center bg-cover bg-center bg-[url('./assets/umbra-03.jpeg')]"> */}
  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
  <div className="relative z-10 text-white text-4xl">
    <Sidebar />
    <Hero />
  </div>
</div>

  )
}

export default App
