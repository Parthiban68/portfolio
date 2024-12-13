import React from "react";
import { motion } from "framer-motion";

const aboutSections = [
  {
    id: 1,
    title: "🌟 Welcome to My Portfolio!",
    content: (
      <p className="text-base text-custom-white font-bodys">
        Hello and thank you for stopping by! I'm thrilled to have you here.
        Whether you're exploring my work or just curious about what I do, I hope
        you find inspiration and insight in my journey as a developer.
      </p>
    ),
  },
  {
    id: 2,
    title: "💻 What I Do",
    content: (
      <ul className="list-disc list-inside text-gray-800 space-y-2 font-bodys">
        <li className="text-base text-custom-white">
          <strong className="text-white">Web Development</strong>: Skilled in
          creating responsive, engaging web applications using the latest
          technologies in the MERN stack (MongoDB, Express.js, React.js,
          Node.js). I focus on clean, efficient code and seamless user
          experiences.
        </li>
        <li className="text-base text-custom-white">
          <strong className="text-custom-white">Mobile Development</strong>:
          Proficient in building mobile applications using Flutter, delivering
          smooth, native-like experiences across iOS and Android platforms.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "🚀 Why I Code",
    content: (
      <p className="text-base text-custom-white font-bodys">
        I believe in the power of technology to transform everyday life, and I’m
        driven to solve real-world problems through innovative software
        solutions. Whether it's a sleek website or an intuitive mobile app, I
        strive to make technology more accessible and enjoyable for everyone.
      </p>
    ),
  },
  {
    id: 4,
    title: "📈 Commitment to Growth",
    content: (
      <p className="text-base text-custom-white font-bodys">
        Technology is ever-evolving, and so am I. I constantly explore new
        frameworks, tools, and best practices to stay at the forefront of the
        field, ensuring that I’m bringing the latest and greatest to my
        projects.
      </p>
    ),
  },
  {
    id: 5,
    title:"🤝 Let's Connect!",
    content: (
      <p className="text-base text-custom-white font-bodys">
        Feel free to look around and see what I’ve been working on. If you have
        a question, a project idea, or just want to chat, don’t hesitate to
        reach out—I’d love to connect with you! 😊
      </p>
    ),
  },
];

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start py-2 relative text-white">
      <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-40 overflow-hidden rounded-full"></div>
      <motion.h2
        className="text-4xl font-head font-[600] text-custom-white mb-10 text-center z-10"
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
            className="p-6 bg-transparent rounded-xl shadow-2xl border border-gray-400 z-10"
            variants={cardVariants}
            whileHover={{ scale: 1.040 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl mb-4 font-head text-white">
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
