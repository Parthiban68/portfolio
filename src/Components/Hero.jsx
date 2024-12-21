import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import Certificate from "./Pages/Certificate";
import Technology from "./Pages/Technology";
import ContactUs from "./Pages/ContactUs";
import { useTheme } from "./ThemeContext/themeApi";

function Hero() {
  const {darkTheme} = useTheme();
  return (
    <div className={`w-full min-h-screen ${darkTheme ? 'bg-white' : 'bg-black'} flex flex-col items-center justify-start py-2 relative text-white`}>
    <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
    <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-40 overflow-hidden rounded-full"></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default Hero;
