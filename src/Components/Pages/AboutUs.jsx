import React from "react";
import { motion } from "framer-motion";

const aboutSections = [
  {
    id: 1,
    title: "💻 What I Do",
    content: (
      <ul className="list-disc list-inside text-gray-800 space-y-2 font-mono">
        <li className="text-base">
          <strong className="text-black">Web Development</strong>: Skilled in creating responsive, engaging web applications using the latest technologies in the MERN stack (MongoDB, Express.js, React.js, Node.js). I focus on clean, efficient code and seamless user experiences.
        </li>
        <li className="text-base">
          <strong className="text-black">Mobile Development</strong>: Proficient in building mobile applications using Flutter, delivering smooth, native-like experiences across iOS and Android platforms.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "🚀 Why I Code",
    content: (
      <p className="text-base text-gray-800 font-mono">
        I believe in the power of technology to transform everyday life, and I’m driven to solve real-world problems through innovative software solutions. Whether it's a sleek website or an intuitive mobile app, I strive to make technology more accessible and enjoyable for everyone.
      </p>
    ),
  },
  {
    id: 3,
    title: "🌱 Always Learning",
    content: (
      <p className="text-base text-gray-800 font-mono">
        Technology is ever-evolving, and so am I. I constantly explore new frameworks, tools, and best practices to stay at the forefront of the field, ensuring that I’m bringing the latest and greatest to my projects.
      </p>
    ),
  },
];

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Stagger child animations
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
    hover: { scale: 1.05 }, 
  };

  return (
    <div className="w-full min-h-screen bg-custom-white flex flex-col items-center justify-start py-10">
 
      <motion.h2
        className="text-4xl font-extrabold text-black mb-10 font-mono text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        👋 About Me!
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-5/6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {aboutSections.map((section) => (
          <motion.div
            key={section.id}
            className="p-6 bg-gradient-to-r from-purple-300 via-purple-100 to-blue-200 bg-opacity-80 rounded-xl drop-shadow-lg border"
            variants={cardVariants}
            whileHover={{ scale: 1.10 }}
            initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4 font-mono">
              {section.title}
            </h3>
            {section.content}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;
