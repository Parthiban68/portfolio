import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import { ThemeProvider } from './Components/ThemeContext/themeApi'
function App() {
  return (
<div className="relative h-auto flex items-center justify-center bg-cover bg-center">
  <div className="absolute inset-0 "></div>
  <div className="relative z-10 text-black text-4xl">
    <ThemeProvider>
    <Sidebar />
    <Hero />
    </ThemeProvider>
  </div>
</div>
  )
}

export default App
