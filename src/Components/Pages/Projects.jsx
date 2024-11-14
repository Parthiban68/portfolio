// ProjectPage.js
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Hostel Management',
    description: 'An advanced software solution to streamline hostel administration, managing student accommodations, payments, and maintenance requests.',
    image: 'https://via.placeholder.com/300x200', // replace with actual image
  },
  {
    id: 2,
    title: 'Certificate Locker',
    description: 'A secure and centralized platform for storing and managing digital certificates with encryption and authentication.',
    image: 'https://via.placeholder.com/300x200', 
  },
  {
    id: 3,
    title: 'Hostel Management',
    description: 'An advanced software solution to streamline hostel administration, managing student accommodations, payments, and maintenance requests.',
    image: 'https://via.placeholder.com/300x200', 
  },
  {
    id: 4,
    title: 'Certificate Locker',
    description: 'A secure and centralized platform for storing and managing digital certificates with encryption and authentication.',
    image: 'https://via.placeholder.com/300x200', 
  },
];

const ProjectCard = ({ title, description, image, custom }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
        delay: custom * 0.3,
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Faster hover effect
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-base">{description}</p>
        <motion.button
          className="text-base px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
          whileHover={{ scale: 1.05 }} // Faster button hover effect
          transition={{ duration: 0.2 }} // Reduced hover duration
        >
          View More
        </motion.button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex items-center justify-center h-full bg-gradient-to-b from-purple-300 to-indigo-500 flex-col p-8">
      <motion.h1
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6"
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
