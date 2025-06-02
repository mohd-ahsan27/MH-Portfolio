// src/pages/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A multi-page personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/monthahaider/My-Portfolio/",
    image: "/Images/Portfolio.png", // place your image in public/images
    details: "Includes animated routing, responsive design, and professional layout.",
  },
  {
    title: "MERN Blog App",
    description: "A complete blog platform with backend authentication and CRUD.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/monthahaider/mern-blog",
    image: "/Images/blog.png",
    details: "User registration, login, post creation/editing, and RESTful API.",
  },
  {
    title: "E-commerce Store",
    description: "An online store with shopping cart, payment, and admin dashboard.",
    tech: ["React", "Redux", "Firebase"],
    link: "https://yourstore.com",
    image: "/Images/ecommerce.png",
    details: "Includes payment gateway, order tracking, and authentication.",
  },
  {
    title: "Enquiry Management System",
    description: "A MERN-based CRM to track and manage customer enquiries.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/monthahaider/enquiry-system",
    image: "/Images/enquiry.png",
    details: "Add, edit, view, and delete enquiries with responsive admin UI.",
  },
  // 🔽 Add your real projects below by copying the structure
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0 8px 20px rgba(255, 211, 89, 0.5)" },
};

const Modal = ({ show, onClose, project }) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-lg p-6 max-w-lg w-full shadow-lg relative"
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: "0", opacity: 1, transition: { delay: 0.2 } }}
          exit={{ y: "100vh", opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-yellow-400 text-2xl font-bold"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>

          <h3 className="text-3xl font-semibold mb-4 text-yellow-400">
            {project.title}
          </h3>
          <img
            src={project.image}
            alt={project.title}
            className="rounded mb-4 w-full object-cover"
          />
          <p className="text-gray-300 mb-4">{project.details}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-700 px-3 py-1 rounded-full font-mono tracking-wide text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md transition"
            >
              🔗 Visit Project
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const allTechs = ["All", ...new Set(projects.flatMap((p) => p.tech))];

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selectedTech));

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 sm:px-16 py-16 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 mb-8 mt-24 sm:mt-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedTech === tech
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 text-gray-300 hover:bg-yellow-500 hover:text-black"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-4 flex flex-col cursor-pointer hover:ring-2 hover:ring-yellow-400 transition"
            variants={cardVariants}
            whileHover="hover"
            tabIndex={0}
            onClick={() => setModalProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setModalProject(project);
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 object-cover h-40 w-full"
            />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-200 mb-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-700 px-2 py-1 rounded-full font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <Modal
        show={!!modalProject}
        onClose={() => setModalProject(null)}
        project={modalProject}
      />
    </section>
  );
};

export default Projects;
