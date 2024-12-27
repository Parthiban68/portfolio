// ProjectPage.js
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import {useTheme} from '../ThemeContext/themeApi'
const Projects = () => {

  const {darkTheme} = useTheme();
  
  return (
    <>
     
      <motion.h1
        className={`text-4xl font-extrabold font-head ${darkTheme ? 'text-headings' : 'text-white'} mb-8 z-10`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-6/6 md:w-5/6 lg:w-5/6 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >

      {projects.map((project, index) => (
          <div key={project.id} className="rounded-lg z-10">
            <div
              className={`p-4 flex flex-col ${
                project.alignment === "left"
                  ? "items-start text-left"
                  : "items-end text-right"
              }`}
            >
              <img 
                src={project.image}
                alt={project.title}
                className={`${
                  project.alignment === "left"
                    ? "w-full h-72"
                    : "w-64 h-80 mt-20 "
                } object-cover rounded-lg mb-4 border`}
              />
              <p className={`${darkTheme ? 'text-gray-900' : 'text-white'} text-base font-[600] mb-2`}>{project.category}</p>
              <h1 className={`${darkTheme ? 'text-headings' : 'text-white'} text-2xl font-bold py-2`}>
                {project.title}
              </h1>
              <p className={`${darkTheme ? 'text-gray-700' : 'text-white '} text-lg mb-4`}>{project.description}</p>
              <button className="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white text-lg">
                View Project
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
