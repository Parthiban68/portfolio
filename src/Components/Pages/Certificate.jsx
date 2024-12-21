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
    <>
  {/* Heading */}
  <motion.h2
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-head text-white mb-8 sm:mb-10 z-10 text-center"
    variants={headingAnimation}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.8, type: "spring" }}
  >
    Certifications
  </motion.h2>

  {/* Certificates Section */}
  <motion.div
    className="grid grid-cols-1 gap-6  sm:w-4/5 md:w-5/6 lg:w-5/6 z-10"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
  >
    {certificates.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } overflow-hidden gap-6 sm:gap-10`}
      >
        {/* Image Section */}
        <img
          src={item.img}
          alt={`Certification Image ${index + 1}`}
          className="w-full sm:w-1/2 h-40 sm:h-60 md:h-auto object-cover rounded-3xl"
        />
        
        {/* Content Section */}
        <div className="p-4 sm:p-6 flex flex-col justify-center mt-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200 mb-2">
            {item.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200">
            {item.details}
          </p>
        </div>
      </div>
    ))}
  </motion.div>
</>

  );
};

export default Certificate;
