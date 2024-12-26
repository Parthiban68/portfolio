import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import { ThemeProvider } from "./Components/ThemeContext/themeApi";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        {/* Loader */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative">
            {/* Spinning Circle */}
            <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            {/* Loader Text */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-black text-sm font-medium">
              Loading...
            </div>
          </div>
        </div>
      </div>
    );
  }

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
  );
}

export default App;
