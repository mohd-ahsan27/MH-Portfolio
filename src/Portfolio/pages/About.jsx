// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-12 overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-yellow-400 opacity-10 blur-3xl pointer-events-none"></div>

      <motion.h2
        className="text-4xl font-bold mb-8 text-yellow-400 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl bg-gray-800 p-10 rounded-xl shadow-lg relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          Hello! I'm <span className="text-white font-semibold">Montha Haider</span>, a dedicated and curious Fullstack Developer
          with a passion for building modern web applications. I specialize in technologies like{" "}
          <span className="text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-yellow-600 font-semibold">Node.js</span>,{" "}
          <span className="text-purple-600 font-semibold">Express.js</span>, and{" "}
          <span className="text-green-400 font-semibold">MongoDB</span>.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 text-gray-200"
        >
          <motion.div
            variants={fadeSlideLeft}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(252, 211, 77, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 rounded-lg cursor-pointer bg-gray-700 shadow-md"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">🎯 My Mission</h3>
            <p className="leading-relaxed text-gray-300">
              To design intuitive, responsive, and high-performing applications that make users’ lives easier and more enjoyable.
            </p>
          </motion.div>

          <motion.div
            variants={fadeSlideRight}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(252, 211, 77, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 rounded-lg cursor-pointer bg-gray-700 shadow-md"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">🎮 Fun Fact</h3>
            <p className="leading-relaxed text-gray-300">
              Besides coding, I'm a gaming enthusiast — always exploring the intersection of creativity and technology.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
