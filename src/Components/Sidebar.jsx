import React from "react";
import '../styles/siderbar.css'
import home from '../assets/home.png'
import about from '../assets/information.png'
import contact from '../assets/communication.png'
import projects from '../assets/project.png'
import certificate from '../assets/certificate.png'
import technology from '../assets/technology.png'
import hi from '../assets/hello.png'
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="siderbar">
        {/* <div className="headingcontainer">
          <img src={hi} alt="welcome" />
        </div> */}
        <div className="routecontainer">
          <ul>
            <li>
              <NavLink to="/"><img src={home} alt="home" /></NavLink>
            </li>
            <li> 
              <NavLink to="/about"><img src={about} alt="about"/></NavLink>
            </li>
            <li>
              <NavLink to="/technology"><img src={technology} alt="technology" /></NavLink>
            </li>
            <li>
            <NavLink to="/projects"><img src={projects} alt="projects" /></NavLink>
            </li>
            <li>     
              <NavLink to="/certificate"><img src={certificate} alt="certifcate" /></NavLink>
            </li>
            <li>
              <NavLink to="/contactus"><img src={contact} alt="contact" /></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
