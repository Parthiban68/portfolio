import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import Certificate from "./Pages/Certificate";
import Technology from "./Pages/Technology";
import ContactUs from "./Pages/ContactUs";
function Hero() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
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
