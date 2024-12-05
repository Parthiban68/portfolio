// ProjectPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../constants';


const ProjectCard = ({ title, description, image, custom }) => {
  return (
    <motion.div
      className="bg-transparent rounded-lg shadow-2xl border overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
        delay: custom * 0.3,
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} 
      whileTap={{ scale: 0.95 }}
    >
      <div className='p-2 overflow-hidden'>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      </div>
     
      <div className="p-6">
        <h3 className="text-xl text-custom-white font-heading mb-2">{title}</h3>
        <p className="text-gray-200 mb-4 text-base font-body">{description}</p>
        <motion.button
          className="text-base font-mono px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }} 
        >
          View More
        </motion.button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-primary relative flex-col p-8">
        <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <motion.h1
        className="ext-4xl font-extrabold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-6/6 md:w-5/6 "
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
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            custom={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
