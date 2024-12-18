import React, { useEffect, useState } from "react";
import home from "../assets/home.png";
import about from "../assets/information.png";
import contact from "../assets/communication.png";
import projects from "../assets/project.png";
import certificate from "../assets/certificate.png";
import technology from "../assets/technology.png";
import { NavLink } from "react-router-dom";

function Sidebar() {

  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    // Mobile Bottom Bar
    <div className="z-[100] fixed bottom-0 w-full h-16 bg-gray-100 flex justify-around items-center p-2 shadow-lg">
      <NavLink to="/" className="flex items-center p-2 hover:bg-gray-300 rounded-full transition">
        <img src={home} alt="Home" className="h-5 w-auto" />
      </NavLink>
      <NavLink to="/about" className="flex items-center p-2 hover:bg-gray-300 rounded-full transition">
        <img src={about} alt="About" className="h-5 w-auto" />
      </NavLink>
      <NavLink to="/technology" className="flex items-center p-2 hover:bg-gray-300 rounded-full transition">
        <img src={technology} alt="Technology" className="h-5 w-auto" />
      </NavLink>
      <NavLink to="/projects" className="flex items-center p-2 hover:bg-gray-300 rounded-full transition">
        <img src={projects} alt="Projects" className="h-5 w-auto" />
      </NavLink>
      <NavLink to="/certificate" className="flex items-center p-2 hover:bg-gray-300 rounded-full transition">
        <img src={certificate} alt="Certificate" className="h-5 w-auto" />
      </NavLink>
      <NavLink to="/contactus" className="flex items-center p-2 hover:bg-gray-300 rounded-full transition">
        <img src={contact} alt="Contact" className="h-5 w-auto" />
      </NavLink>
    </div>
  ) : (
    // Desktop Sidebar
   <div className="z-[100] fixed md:bottom-0 md:right-0 bottom-0 right-0 md:w-16 w-full h-auto md:h-16 md:rounded-full md:mr-5 flex md:flex-col flex-row justify-center items-center md:items-center md:justify-center p-2 group transition-all ">
      <div className="absolute md:bottom-0 mb-4 md:left-0 bg-gray-100 md:group-hover:h-[330px] md:group-hover:rounded-ful md:group-hover:rounded-full md:w-16 h-16 rounded-full transition-all "></div>

      <ul
        className="relative flex md:flex-col flex-row items-center md:space-y-4 space-x-4 md:space-x-0 "
        style={{ transform: "translateY(-50%)" }}
      >
        <div
          className="hidden md:group-hover:flex flex-col space-y-4 transition-transform "
          style={{ marginTop: "-30%" }}
        >
          <li className="relative group">
            <NavLink
              to="/contactus"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={contact} alt="contact" className="h-5 w-auto" />
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/certificate"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={certificate} alt="certificate" className="h-5 w-auto" />
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/projects"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={projects} alt="projects" className="h-5 w-auto" />
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/technology"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={technology} alt="technology" className="h-5 w-auto" />
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/about"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={about} alt="about" className="h-5 w-auto" />
            </NavLink>
          </li>
        </div>

        <li className="z-20 ">
          <NavLink
            to="/"
            className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
          >
            <img src={home} alt="home" className="h-5 w-auto" />
          </NavLink>
        </li>
      </ul>
    </div>
  );


}

export default Sidebar;
