import React from "react";

function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start py-10 relative text-white">
      <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-40 overflow-hidden rounded-full"></div>
    <div className="max-w-full w-full px-8 md:px-20 flex flex-col md:flex-row items-center justify-between z-10">
      <div className="flex-1 px-4">
        <h1 className="text-5xl font-bold mb-6">Parthi Ban is Right Here!</h1>
        <p className="text-lg text-gray-200 mb-8 ">
          With a seasoned eye for design, I like to transform ideas into elegant
          products that speak out their functionalities.
        </p>
        <div className="flex space-x-4 mb-8">
          <button className="bg-yellow-500  text-xl text-black py-3 px-6 rounded font-medium hover:bg-yellow-600">
            Chat with Me
          </button>
          {/* <button className="border border-yellow-500 text-yellow-500 py-3 px-6 rounded font-medium hover:bg-yellow-600 hover:text-black">
            Start a Project
          </button> */}
        </div>
        <div className="flex space-x-8">
          <div>
            <p className="text-2xl font-bold">98%</p>
            <p className="text-gray-400 text-2xl">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100+</p>
            <p className="text-gray-400 text-xl">Projects Delivered</p>
          </div>
        </div>
      </div>

      {/* center Section */}
      <div className="flex-1 mt-20 md:mt-40 relative">
        <img
          src="https://via.placeholder.com/400x500"
          alt="Taaz Patel"
          className="w-80 h-96 object-cover rounded-lg mx-auto"
        />
       
       {/* Right Section */}
      </div>
      <div className="flex-1 z-10 relative" >
         <div className="absolute top-4 right-4 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold">Prototyping</h3>
          <p className="text-sm">
            I offer prototyping services that could bring your product concepts to life.
          </p>
        </div>
        <div className="absolute bottom-24 right-4 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold">Industrial Design</h3>
          <p className="text-sm">
            I develop the physical appearance and functionality of products, from electronics to furniture.
          </p>
        </div>
        <div className="absolute bottom-4 left-4 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold">Design Consulting</h3>
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
