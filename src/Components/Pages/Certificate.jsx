import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Docker and Kubernetes Fundamentals",
    details: "Scaler Masterclass Certification",
    img: "/assets/certificates/certificate1.jpg",
  },
  {
    id: 2,
    title: "Kafka and Zookeeper Masterclass",
    details: "In-depth understanding of Kafka",
    img: "/assets/certificates/certificate2.jpg",
  },
  {
    id: 3,
    title: "MERN Stack Development",
    details: "KGisl Micro College Certificate",
    img: "/assets/certificates/certificate3.jpg",
  },
  {
    id: 4,
    title: "React and Node.js Development",
    details: "Advanced MERN Stack Skills",
    img: "/assets/certificates/certificate4.jpg",
  },
];

const Certificate = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 }, // Cards start faded and below their position
    visible: { opacity: 1, y: 0 }, // Cards fade in and slide up
    hover: { scale: 1.05 }, // Enlarge slightly on hover
  };

  const headingAnimation = {
    hidden: { opacity: 0, y: -50 }, // Heading starts above and faded
    visible: { opacity: 1, y: 0 }, // Heading slides down and fades in
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-primary relative flex-col p-8">
       <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricleone absolute top-10 left-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
       <div className="w-60 sm:w-80 h-60 sm:h-80 bg-cricletwo absolute bottom-10 right-0 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <motion.h2
        className="text-4xl font-extrabold text-white mb-10"
        variants={headingAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, type: "spring" }}
      >
        Certifications
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 w-5/6 z-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="p-6 bg-transparent border shadow-2xl rounded-lg overflow-hidden"
            variants={cardAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-40 object-cover text-custom-white rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold text-custom-white">{cert.title}</h3>
              <p className="mt-2 text-sm text-gray-200 font-mono">{cert.details}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificate;
