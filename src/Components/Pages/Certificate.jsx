import React from "react";
import { motion } from "framer-motion";
import { certificates } from "../../constants";

const Certificate = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }, 
    hover: { scale: 1.05 },
  };

  const headingAnimation = {
    hidden: { opacity: 0, y: -50 }, 
    visible: { opacity: 1, y: 0 }, 
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-black relative flex-col p-8">
        <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-40 overflow-hidden rounded-full"></div>
      <motion.h2
        className="text-4xl font-extrabold font-head text-white mb-10 z-10"
        variants={headingAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, type: "spring" }}
      >
        Certifications
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-5/6 z-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="p-2 bg-transparent border shadow-2xl rounded-lg overflow-hidden items-center"
            variants={cardAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-52 object-cover text-custom-white rounded-md"
            />
            <div className="mt-4 p-5">
              <h3 className="text-xl font-semibold text-custom-white ">{cert.title}</h3>
              <p className="mt-2 text-sm text-gray-200 font-bodys">{cert.details}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificate;
