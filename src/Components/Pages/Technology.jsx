import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../../constants';
import { useTheme } from "../ThemeContext/themeApi";
const Technology = () => {
  const {darkTheme} = useTheme();
  return (
    <>
      <motion.h2
        className={`text-4xl ${darkTheme ? 'text-headings' : 'text-custom-white'} mb-10 font-head text-center z-10 mt-10`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         Powering your Web Application <br />With Frameworks and Tools
      </motion.h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 w-full max-w-[80%] mx-auto mb-20">
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
    </>
  );
};

export default Technology;
