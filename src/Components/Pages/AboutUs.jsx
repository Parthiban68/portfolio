import React from 'react'

function AboutUs() {
  return (
    <div className="w-full flex items-start justify-center h-full bg-custom-white ">
      <div className="w-5/6 p-10 bg-gradient-to-r from-purple-300 via-purple-00 to-blue-200  bg-opacity-80 rounded-xl drop-shadow-2xl mx-4 border mt-10">
      <h2 class="text-4xl font-extrabold text-black mb-7 font-mono flex justify-center">👋 About Me!</h2>
    <p class="text-base text-gray-800 mb-4 font-mono">
      A passionate Software Developer with a flair for building dynamic, user-centered web and mobile applications. With a solid foundation in both front-end and back-end development, I bring ideas to life by crafting solutions that blend functionality with aesthetics.
    </p>
    
    <h3 class="text-2xl font-semibold text-black mt-6 mb-2 font-mono">💻 What I Do</h3>
    <ul class="list-disc list-inside text-gray-800 space-y-2 font-mono">
      <li className='text-base'>
        <strong className='text-black '>Web Development</strong>: Skilled in creating responsive, engaging web applications using the latest technologies in the MERN stack (MongoDB, Express.js, React.js, Node.js). I focus on clean, efficient code and seamless user experiences.
      </li>
      <li className='text-base'>
        <strong className='text-black '>Mobile Development</strong>: Proficient in building mobile applications using Flutter, delivering smooth, native-like experiences across iOS and Android platforms.
      </li>
    </ul>
    
    <h3 class="text-2xl font-semibold text-black mt-6 mb-2 font-mono">🚀 Why I Code</h3>
    <p class="text-base text-gray-800 font-mono">
      I believe in the power of technology to transform everyday life, and I’m driven to solve real-world problems through innovative software solutions. Whether it's a sleek website or an intuitive mobile app, I strive to make technology more accessible and enjoyable for everyone.
    </p>
    
    <h3 class="text-2xl font-semibold text-black mt-6 mb-2 font-mono">🌱 Always Learning</h3>
    <p class="text-base text-gray-800 font-mono">
      Technology is ever-evolving, and so am I. I constantly explore new frameworks, tools, and best practices to stay at the forefront of the field, ensuring that I’m bringing the latest and greatest to my projects.
    </p>

    <p class="text-base text-black mt-6 font-mono">Let’s connect and create something amazing together!</p>
      </div>
    </div>
  )
}

export default AboutUs