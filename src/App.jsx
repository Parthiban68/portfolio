import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
function App() {
  return (
    <div>
      <Sidebar/>
     <Hero/>
    </div>
  )
}

export default App
