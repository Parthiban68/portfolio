import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext/themeApi";

const aboutSections = [
  {
    id: 1,
    title: "🌟 Welcome to My Portfolio!",
    content: (
      <p className="text-base  font-bodys">
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
      <ul className="list-disc list-inside space-y-2 font-bodys">
        <li className="text-base">
          <strong className="">Web Development</strong>: Skilled in
          creating responsive, engaging web applications using the latest
          technologies in the MERN stack (MongoDB, Express.js, React.js,
          Node.js). I focus on clean, efficient code and seamless user
          experiences.
        </li>
        <li className="text-base ">
          <strong className="">Mobile Development</strong>:
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
      <p className="text-base  font-bodys">
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
      <p className="text-base  font-bodys">
        Technology is ever-evolving, and so am I. I constantly explore new
        frameworks, tools, and best practices to stay at the forefront of the
        field, ensuring that I’m bringing the latest and greatest to my
        projects.
      </p>
    ),
  },
  {
    id: 5,
    title: "🤝 Let's Connect!",
    content: (
      <p className="text-base font-bodys">
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

  const { darkTheme } = useTheme();

  return (
    <>
      <motion.h2
        className={`text-4xl font-head font-[600] ${
          darkTheme ? "text-headings" : "text-custom-white"
        } mb-10 text-center z-10 `}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        👋 About Me!
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-5/6 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {aboutSections.map((section) => (
          <motion.div
            key={section.id}
            className={`p-6 ${
              darkTheme ? "bg-white" : "bg-transparent"
            } rounded-xl shadow-2xl border border-gray-400 z-10`}
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3
              className={`text-2xl mb-4 font-head ${
                darkTheme ? "text-headings" : "text-white"
              } `}
            >
              {section.title}
            </h3>
            <div className={`${darkTheme ? 'text-gray-700' : 'text-custom-white'}`}>{section.content}</div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AboutUs;
