// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        className="text-5xl font-bold text-yellow-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="w-full max-w-3xl bg-gray-900 p-10 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <form action="#" method="POST" className="space-y-6">
          {["Name", "Email", "Message"].map((label, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
            >
              <label className="block text-sm mb-1 text-gray-300">
                {label}*
              </label>
              {label === "Message" ? (
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                ></textarea>
              ) : (
                <input
                  type={label === "Email" ? "email" : "text"}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
              )}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-yellow-400 text-black font-bold py-3 rounded-lg transition hover:bg-yellow-500 shadow-lg"
          >
            🚀 Send Message
          </motion.button>
        </form>

        <motion.div
          className="mt-10 text-center text-gray-400 text-sm space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:monthahaider9@gmail.com" className="hover:underline text-yellow-400">
              monthahaider9@gmail.com
            </a>
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaLinkedin className="text-blue-400" />
            <a href="https://linkedin.com/in/montha" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
              linkedin.com/in/montha
            </a>
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaGithub className="text-white" />
            <a href="https://github.com/monthahaider" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/monthahaider
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
