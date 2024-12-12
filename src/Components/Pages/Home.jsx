import React from "react";

function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start py-10 relative text-white">
      {/* Background Circles */}
      <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-40 overflow-hidden rounded-full"></div>

      {/* Main Content */}
      <div className="max-w-full w-full px-6 sm:px-10 md:px-20 flex flex-col md:flex-row items-center justify-between z-10 ">
        {/* Left Section */}
        <div className="flex-1 px-4 text-center md:text-left ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Parthi Ban is Right Here!
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-8">
            With a seasoned eye for design, I like to transform ideas into elegant
            products that speak out their functionalities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="bg-yellow-500 text-lg sm:text-xl text-black py-3 px-6 rounded font-medium hover:bg-yellow-600">
              Chat with Me
            </button>
            {/* Uncomment if needed */}
            {/* <button className="border border-yellow-500 text-yellow-500 py-3 px-6 rounded font-medium hover:bg-yellow-600 hover:text-black">
              Start a Project
            </button> */}
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-start">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-gray-400 text-base sm:text-lg">Satisfaction Rate</p>
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold">25+</p>
              <p className="text-gray-400 text-base sm:text-lg">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex-1 mt-20 md:mt-40 relative">
          <img
            src="https://via.placeholder.com/400x500"
            alt="Parthi Ban"
            className="w-64 sm:w-72 md:w-80 h-auto object-cover rounded-lg mx-auto"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center md:items-end space-y-6 relative md:mt-0 mt-10">
          <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-lg w-72 sm:w-80">
            <h3 className="font-semibold text-lg">Prototyping</h3>
            <p className="text-sm">
              I offer prototyping services that could bring your product concepts to life.
            </p>
          </div>
          <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-lg w-72 sm:w-80">
            <h3 className="font-semibold text-lg">Industrial Design</h3>
            <p className="text-sm">
              I develop the physical appearance and functionality of products, from electronics to furniture.
            </p>
          </div>
          <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-lg w-72 sm:w-80">
            <h3 className="font-semibold text-lg">Design Consulting</h3>
            <p className="text-sm">
              I provide expert guidance on design strategy, market trends, and product positioning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
