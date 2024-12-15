import React from "react";
import { motion } from "framer-motion";

function ContactUs() {
  const containerVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // <div className="min-h-screen w-full bg-black relative flex items-center justify-center p-6">
    //   <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
    //   <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-40 overflow-hidden rounded-full"></div>
    //   <motion.div
    //     className="w-6/6 md:w-5/6 bg-transparent rounded-lg shadow-2xl p-8 border"
    //     variants={containerVariant}
    //     initial="hidden"
    //     animate="visible"
    //   >
    //     <motion.h1
    //       className="ext-4xl font-extrabold text-white text-center mb-6 font-head"
    //       variants={itemVariant}
    //     >
    //       Contact Us!
    //     </motion.h1>

    //     {/* <motion.div
    //       className="grid grid-cols-1 md:grid-cols-2 gap-8"
    //       variants={containerVariant}
    //     >
    //       <motion.div variants={itemVariant} className="z-10">
    //         <div className="grid grid-rows-[auto,1fr] gap-4 h-full">
    //           <h1 className="text-2xl text-gray-300">Let's Talk</h1>
    //           <p className="text-lg text-white">I'm open to discussing web development projects or partnership opportunities.</p>
    //           <p className="text-lg text-white"><i class="fa-regular fa-envelope"></i> parthibanm1268@gmail.com</p>
    //           <p className="text-lg text-white"><i class="fa-solid fa-phone"></i> +91 8754131978</p>
    //           <p className="text-lg text-white"><i class="fa-solid fa-location-dot"></i> Coimbatore,Tamil Nadu,India</p>
    //           <h2 className="text-xl font-semibold text-gray-300 mb-4">
    //             Our Location
    //           </h2>
    //           <div className="h-full">
    //             <iframe
    //              title="Google Maps"
    //               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d581.6056716023618!2d76.97200501107393!3d10.928202594639833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1733837357064!5m2!1sen!2sin"
    //               className="w-full h-52 border rounded-lg"
    //               allowfullscreen=""
    //               loading="lazy"
    //               referrerpolicy="no-referrer-when-downgrade"
    //             ></iframe>
    //           </div>
    //         </div>
    //       </motion.div>

    //       <motion.div variants={itemVariant} className="z-10">
    //         <h2 className="text-xl font-semibold text-gray-300 mb-4">
    //           Please Fill The Required Details!
    //         </h2>
    //         <form className="space-y-4">
    //           <input
    //             type="text"
    //             placeholder="Name"
    //             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-xl"
    //           />
    //           <input
    //             type="email"
    //             placeholder="Email"
    //             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-xl"
    //           />
    //           <textarea
    //             placeholder="Message"
    //             rows="5"
    //             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-xl"
    //           ></textarea>
    //           <button
    //             type="submit"
    //             className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 text-xl"
    //           >
    //             Send Message
    //           </button>
    //         </form>
    //       </motion.div>
    //     </motion.div> */}
    //     <div className="bg-transparent py-12 px-6">
    //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    //         {/* Left Section */}
    //         <div>
    //           <h1 className="text-4xl font-bold text-white mb-6 z-10">
    //             Our contact
    //           </h1>
    //           <form className="space-y-4 z-10">
    //             <input
    //               type="text"
    //               placeholder="Enter your Name"
    //               className="w-full z-10 p-3 text-base rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             />
    //             <input
    //               type="email"
    //               placeholder="Enter a valid email address"
    //               className="w-full p-3 rounded-full text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             />
    //             <textarea
    //               placeholder="Enter your message"
    //               rows="5"
    //               className="w-full p-3 text-base rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             ></textarea>
    //             <button
    //               type="submit"
    //               className="px-6 py-3 bg-blue-500 text-white text-base rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             >
    //               SUBMIT
    //             </button>
    //           </form>
    //         </div>

    //         {/* Right Section */}
    //         <div className="flex flex-col md:flex-row gap-4">
    //           <div className="bg-blue-100 p-6 rounded-lg flex-1">
    //             <h2 className="text-lg font-semibold text-gray-800 mb-2">
    //               Future Vision AI
    //             </h2>
    //             <p className="text-gray-600 text-sm">
    //               789 Digital Avenue
    //               <br />
    //               Level 10, Tower B<br />
    //               London EC2A 3JR, United Kingdom
    //             </p>
    //             <p className="text-gray-600 text-sm mt-4">info@sample.com</p>
    //             <p className="text-gray-600 text-sm">+1 111 232 44 55</p>
    //           </div>
    //           <div className="bg-gray-100 p-6 rounded-lg flex-1 z-10">
    //             <h2 className="text-lg font-semibold text-gray-800 mb-2">
    //               TechHub AI Solutions
    //             </h2>
    //             <p className="text-gray-600 text-sm">
    //               123 Innovation Drive
    //               <br />
    //               Suite 400
    //               <br />
    //               San Francisco, CA 94103, USA
    //             </p>
    //             <p className="text-gray-600 text-sm mt-4">info@sample.com</p>
    //             <p className="text-gray-600 text-sm">+1 111 232 44 55</p>
    //           </div>
    //         </div>
    //       </div>
    //       {/* bottom */}
    //       <div className="flex gap-10 w-full mt-10">
    //         <div className="bg-blue-100 p-6 rounded-lg flex-1">
    //           <h2 className="text-lg font-semibold text-gray-800 mb-2">
    //             Future Vision AI
    //           </h2>
    //           <p className="text-gray-600 text-sm">
    //             789 Digital Avenue
    //             <br />
    //             Level 10, Tower B<br />
    //             London EC2A 3JR, United Kingdom
    //           </p>
    //           <p className="text-gray-600 text-sm mt-4">info@sample.com</p>
    //           <p className="text-gray-600 text-sm">+1 111 232 44 55</p>
    //         </div>
    //         <div className="bg-gray-100 p-6 rounded-lg flex-1">
    //           <h2 className="text-lg font-semibold text-gray-800 mb-2">
    //             TechHub AI Solutions
    //           </h2>
    //           <p className="text-gray-600 text-sm">
    //             123 Innovation Drive
    //             <br />
    //             Suite 400
    //             <br />
    //             San Francisco, CA 94103, USA
    //           </p>
    //           <p className="text-gray-600 text-sm mt-4">info@sample.com</p>
    //           <p className="text-gray-600 text-sm">+1 111 232 44 55</p>
    //         </div>
    //       </div>
    //     </div>
    //   </motion.div>
    // </div>
    <div className="min-h-screen w-full bg-black relative flex items-center justify-center p-6">
      {/* Background Circles */}
      <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-40 overflow-hidden rounded-full"></div>

      {/* Main Contact Section */}
      <motion.div
        className="w-full sm:w-11/12 md:w-5/6 bg-transparent rounded-lg shadow-2xl p-6 md:p-8 border z-10"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6 font-head z-20"
          variants={itemVariant}
        >
          Contact Us!
        </motion.h1>

        {/* Main Content */}
        <div className="bg-transparent py-8 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* Left Section */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 z-20">
                Our Contact
              </h1>
              <form className="space-y-4 z-20">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-3 text-sm sm:text-base rounded-full  placeholder:text-gray-600 bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20"
                />
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full p-3 text-sm sm:text-base placeholder:text-gray-600 bg-gray-200 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20"
                />
                <textarea
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full p-3 text-sm sm:text-base rounded-3xl  placeholder:text-gray-600 bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white text-sm sm:text-base rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center w-full p-6">
              <div className="w-full sm:w-11/12 md:w-4/6 lg:w-full h-full bg-white rounded-3xl shadow-md overflow-hidden">
                {/* Card Image */}
                <img
                  src="https://via.placeholder.com/400x200" // Replace with your image URL
                  alt="Card Image"
                  className="w-full h-48 sm:h-64 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 w-full mt-10">
            <div className="bg-blue-100 p-4 sm:p-6 rounded-lg flex-1 z-20">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Future Vision AI
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                789 Digital Avenue
                <br />
                Level 10, Tower B<br />
                London EC2A 3JR, United Kingdom
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-4">
                info@sample.com
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                +1 111 232 44 55
              </p>
            </div>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg flex-1 z-20">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                TechHub AI Solutions
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                123 Innovation Drive
                <br />
                Suite 400
                <br />
                San Francisco, CA 94103, USA
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-4">
                info@sample.com
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                +1 111 232 44 55
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;
