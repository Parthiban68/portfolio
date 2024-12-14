import React from "react";
import { motion } from "framer-motion";
function Home() {
  const base = 0.5;

  const chevronStyles = (delay) => ({
    position: "absolute",
    width: `${base * 3.0}rem`,
    height: `${base * 0.9}rem`,
    opacity: 0,
    transform: "scale(0.3)",
    animation: `move-chevron 3s ease-out ${delay}s infinite`,
  });

  const beforeAfterStyles = (isBefore) => ({
    content: "''",
    position: "absolute",
    top: 0,
    height: "70%",
    width: "50%",
    background: "#ffffff",
    transform: isBefore ? "skewY(30deg)" : "skewY(-30deg)",
    left: isBefore ? 0 : "auto",
    right: isBefore ? "auto" : 0,
  });

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start py-2 relative text-white">
      <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-40 overflow-hidden rounded-full"></div>
      <div className="w-full flex items-center justify-between px-5 mr-10">
        <div className="text-3xl sm:text-6xl font-bold p-2 rounded-lg font-head">PB</div>
        <div className="flex items-center">
          <button className="md:text-xl text-base p-2 rounded-lg font-head">
            <a href="https://drive.google.com/file/d/1O1_3xYvJXbUR6ey_BqLlzXL0uZ_7R2bE/view?usp=sharing"> Resume</a>      
          </button>
          <div className="flex items-start justify-start mb-20">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="chevron"
                  style={chevronStyles(index)}
                >
                  <div style={beforeAfterStyles(true)} />
                  <div style={beforeAfterStyles(false)} />
                </div>
              ))}

              <style>
                {`
          @keyframes move-chevron {
            25% {
              opacity: 1;
            }
            33.3% {
              opacity: 1;
              transform: translateY(${base * 3.8}rem);
            }
            66.6% {
              opacity: 1;
              transform: translateY(${base * 5.2}rem);
            }
            100% {
              opacity: 0;
              transform: translateY(${base * 8}rem) scale(0.5);
            }
          }
        `}
              </style>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full w-full px-6 sm:px-10 md:px-20 flex flex-col md:flex-row justify-between z-10 ">
        {/* Left Section */}
        <div className="flex-1 px-4 text-center md:text-left items-start mt-5">
          <h1 className="text-3xl sm:text-5xl md:text-[2.98rem] mb-6 text-yellow-300 font-head font-[400]">
            Parthi Ban is Right Here!
          </h1>
          <p className="text-base sm:text-base text-gray-100 mt-0 md:mt-10 font-bodys font-[200]">
            With a seasoned eye for design, I like to transform ideas into
            elegant products that speak out their functionalities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-4 md:mt-12">
            <button className="bg-yellow-500 text-lg sm:text-xl text-black font-semibold py-3 px-6 rounded hover:bg-yellow-600 font-head">
              Chat with Me
            </button>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-4 md:mt-20">
            <div className="text-start">
              <p className="text-2xl font-bold font-head">98%</p>
              <p className="text-gray-300 text-base sm:text-lg font-bodys font-[500]">
                Satisfaction Rate
              </p>
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold font-head">25+</p>
              <p className="text-gray-300 text-base sm:text-lg font-bodys font-[500]">
                Projects Completed
              </p>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex-1 mt-20 md:mt-32 relative">
          <img
            src="https://via.placeholder.com/400x500"
            alt="Parthi Ban"
            className="w-64 sm:w-72 md:w-80 h-auto object-cover rounded-lg mx-auto"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center md:items-end space-y-6 relative md:mt-16 mt-10">
          <div className="bg-transparent text-black p-4 rounded-lg shadow-lg w-72 sm:w-80 hover:border-yellow-500">
            <h3 className="font-semibold text-xl text-yellow-500 font-head">
              Prototyping
            </h3>
            <p className="text-base text-gray-200 pt-2 font-bodys font-[200]">
              I offer prototyping services that could bring your product
              concepts to life.
            </p>
          </div>
          <div className="bg-transparent text-black p-4 rounded-lg shadow-lg w-72 sm:w-80">
            <h3 className="font-semibold text-xl text-yellow-500 font-head">
              Industrial Design
            </h3>
            <p className="text-base text-gray-200 pt-2 font-bodys font-[200]">
              I develop the physical appearance and functionality of products,
              from electronics to furniture.
            </p>
          </div>
          <div className="bg-transparent text-black p-4 rounded-lg shadow-lg w-72 sm:w-80">
            <h3 className="font-semibold text-xl text-yellow-500 font-head">
              Design Consulting
            </h3>
            <p className="text-base text-gray-200 pt-2 font-bodys font-[200]">
              I provide expert guidance on design strategy, market trends, and
              product positioning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
