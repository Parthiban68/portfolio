import React from "react";
import home from "../assets/home.png";
import about from "../assets/information.png";
import contact from "../assets/communication.png";
import projects from "../assets/project.png";
import certificate from "../assets/certificate.png";
import technology from "../assets/technology.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="z-[100] fixed md:top-1/2 md:left-0 bottom-0 left-0 md:w-16 w-full h-auto md:h-[340px] bg-gray-900 md:rounded-t-xl md:rounded-b-xl md:ml-5 flex md:flex-col flex-row justify-center items-center md:items-center md:justify-center p-2 md:-translate-y-1/2">
      <div className="flex md:flex-col flex-row items-center md:items-start  md:space-x-0 space-x-2 md:space-y-4 md:p-0 p-1">
        <ul className="flex md:flex-col flex-row items-center md:space-y-4 space-x-4 md:space-x-0">
          <li className="relative group">
            <NavLink
              to="/"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={home} alt="home" className="h-6 w-auto" />
            </NavLink>
            <span className="absolute left-10 md:left-12 md:bottom-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gray-800 text-white text-sm p-1 rounded-md pointer-events-none">
              Home
            </span>
          </li>

          <li className="relative group">
            <NavLink
              to="/about"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={about} alt="about" className="h-6 w-auto" />
            </NavLink>
            <span className="absolute left-10 md:left-12 md:bottom-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gray-800 text-white text-sm p-1 rounded-md pointer-events-none">
              About
            </span>
          </li>

          <li className="relative group">
            <NavLink
              to="/technology"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={technology} alt="technology" className="h-6 w-auto" />
            </NavLink>
            <span className="absolute left-10 md:left-12 md:bottom-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gray-800 text-white text-sm p-1 rounded-md pointer-events-none">
              Technology
            </span>
          </li>

          <li className="relative group">
            <NavLink
              to="/projects"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={projects} alt="projects" className="h-6 w-auto" />
            </NavLink>
            <span className="absolute left-10 md:left-12 md:bottom-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gray-800 text-white text-sm p-1 rounded-md pointer-events-none">
              Projects
            </span>
          </li>

          <li className="relative group">
            <NavLink
              to="/certificate"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={certificate} alt="certificate" className="h-6 w-auto" />
            </NavLink>
            <span className="absolute left-10 md:left-12 md:bottom-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gray-800 text-white text-sm p-1 rounded-md pointer-events-none">
              Certificate
            </span>
          </li>

          <li className="relative group">
            <NavLink
              to="/contactus"
              className="flex items-center md:p-2 py-1 px-2 hover:bg-gray-300 md:rounded-lg rounded-full transition"
            >
              <img src={contact} alt="contact" className="h-6 w-auto" />
            </NavLink>
            <span className="absolute left-10 md:left-12 md:bottom-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gray-800 text-white text-sm p-1 rounded-md pointer-events-none">
              Contact
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
