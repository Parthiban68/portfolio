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
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-800 to-orange-400 flex items-center justify-center p-6">
      <motion.div
        className="w-5/6 bg-transparent rounded-lg shadow-2xl p-8 border"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl font-bold text-center text-white mb-6"
          variants={itemVariant}
        >
          Contact Us!
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariant}
        >

          <motion.div variants={itemVariant}>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Subscribe
            </h2>
            <form className="mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-xl"
              />
              <button
                type="submit"
                className="w-full bg-transparent border text-white py-3 rounded-lg hover:bg-purple-700 text-xl"
              >
                Subscribe
              </button>
            </form>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Our Location
            </h2>
            <div className="mb-6">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019137934115!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb992b89%3A0x1dcb15a4123d4e93!2sCanada!5e0!3m2!1sen!2sus!4v1633542552472"
                className="w-full h-48 border rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

    
          <motion.div variants={itemVariant}>
            <h2 className="text-xl font-semibold text-white mb-4">
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
