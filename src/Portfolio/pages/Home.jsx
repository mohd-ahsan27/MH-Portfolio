// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const skills = [
  { name: "React", color: "text-blue-400" },
  { name: "Node.js", color: "text-green-500" },
  { name: "Express.js", color: "text-cyan-400" },
  { name: "MongoDB", color: "text-green-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 relative overflow-hidden">
      {/* Typing animation */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6 tracking-tight drop-shadow-lg"
      >
        👋 Hi, I'm{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-yellow-400"
        >
          Montha Haider
        </motion.span>
      </motion.h1>

      {/* Subtitle with fade */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed mb-8"
      >
        A passionate{" "}
        <span className="text-yellow-400 font-semibold">Fullstack Developer</span>{" "}
        crafting modern web apps using:
      </motion.p>

      {/* Skills badges with staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-6 flex-wrap justify-center mb-12"
      >
        {skills.map(({ name, color }) => (
          <motion.span
            key={name}
            variants={itemVariants}
            className={`px-4 py-2 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-gray-900 cursor-default transition`}
          >
            {name}
          </motion.span>
        ))}
      </motion.div>

      {/* Call to Action button */}
      <motion.a
        href="/projects"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(252 211 77)" }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg transition duration-300"
      >
        View My Work
      </motion.a>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="flex gap-8 mt-12 text-yellow-400 text-3xl"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-yellow-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/montha-haider"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-yellow-300 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-yellow-300 transition"
        >
          <FaTwitter />
        </a>
      </motion.div>

      {/* Scroll down arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 text-yellow-400 text-4xl cursor-pointer"
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
        aria-label="Scroll Down"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Home;
