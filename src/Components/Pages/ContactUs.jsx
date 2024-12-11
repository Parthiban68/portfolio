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
    <div className="min-h-screen w-full bg-primary relative flex items-center justify-center p-6">
      <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <motion.div
        className="w-6/6 md:w-5/6 bg-transparent rounded-lg shadow-2xl p-8 border"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="ext-4xl font-extrabold text-white text-center mb-6"
          variants={itemVariant}
        >
          Contact Us!
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariant}
        >
          <motion.div variants={itemVariant} className="z-10">
            <div className="grid grid-rows-[auto,1fr] gap-4 h-full">
              <h2 className="text-xl font-semibold text-gray-300 mb-4">
                Our Location
              </h2>
              <div className="h-full">
                <iframe
                 title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d581.6056716023618!2d76.97200501107393!3d10.928202594639833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1733837357064!5m2!1sen!2sin"
                  className="w-full h-full border rounded-lg"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariant} className="z-10">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">
              Please Fill The Required Details!
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-xl"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-xl"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-xl"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 text-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactUs;
