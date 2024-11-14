import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../../constants';

const Technology = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 pb-20 md:pb-4 bg-gradient-to-r from-purple-300 via-purple-00 to-blue-200">
      <h1 className="text-2xl md:text-3xl text-center mb-8 text-black font-mono">
        Powering your Web Application With Frameworks and Tools
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 w-full max-w-[80%] mx-auto">
        {technologies.map((framework, index) => (
          <motion.div
            key={index}
            className="relative p-4 rounded-lg transition-shadow duration-200 w-20 h-20 md:w-[100px] md:h-[100px] bg-stone-800"
            style={{
              boxShadow: '0 0 0px 0px transparent',
              transition: 'box-shadow 0.9s ease',
              transitionDelay: '0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 50px 4px ${framework.color}`;
              e.currentTarget.style.transitionDelay = '0.2s';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0px 0px transparent';
              e.currentTarget.style.transitionDelay = '1s';
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // add delay for staggered animation
              ease: 'easeOut',
            }}
          >
            <img src={framework.icon} alt={framework.name} className="w-12 h-12 md:w-[70px] md:h-[70px]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
