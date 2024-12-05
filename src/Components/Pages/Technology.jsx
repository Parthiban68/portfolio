import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../../constants';

const Technology = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 pb-20 md:pb-4 bg-bgdark relative">
      <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-20 overflow-hidden rounded-full"></div>
      <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-20 overflow-hidden rounded-full"></div>
      <motion.h2
        className="text-4xl text-custom-white mb-10 font-heading font- text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         Powering your Web Application With Frameworks and Tools
      </motion.h2>
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
              delay: index * 0.2,
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
