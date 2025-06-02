// src/pages/Skills.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skillsData = [
  { name: "JavaScript", level: 90, color: "bg-yellow-400", icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> },
  { name: "React.js", level: 85, color: "bg-blue-400", icon: <SiReact className="text-blue-400 w-6 h-6" /> },
  { name: "Node.js", level: 80, color: "bg-green-500", icon: <SiNodedotjs className="text-green-500 w-6 h-6" /> },
  { name: "MongoDB", level: 75, color: "bg-emerald-400", icon: <SiMongodb className="text-emerald-400 w-6 h-6" /> },
  { name: "HTML", level: 95, color: "bg-orange-500", icon: <SiHtml5 className="text-orange-500 w-6 h-6" /> },
  { name: "CSS", level: 90, color: "bg-blue-600", icon: <SiCss3 className="text-blue-600 w-6 h-6" /> },
];

// Helper function for proficiency categories
const getProficiency = (level) => {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Intermediate";
  return "Beginner";
};

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  // Filter and search skills
  const filteredSkills = skillsData.filter((skill) => {
    const matchesFilter = filter === "All" || getProficiency(skill.level) === filter;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400 opacity-10 blur-3xl pointer-events-none"></div>

      <motion.h2
        className="text-4xl font-bold mb-8 text-yellow-400 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-3xl mb-12 gap-4 z-10">
        <input
          type="text"
          placeholder="Search skills..."
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-yellow-400 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="w-full sm:w-1/3 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-yellow-400 transition"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter skills by proficiency"
        >
          <option value="All">All Levels</option>
          <option value="Expert">Expert (85%+)</option>
          <option value="Intermediate">Intermediate (70%+)</option>
          <option value="Beginner">Beginner (&lt;70%)</option>
        </select>
      </div>

      {/* Skills List */}
      <div className="w-full max-w-3xl space-y-8 z-10">
        {filteredSkills.length === 0 && (
          <p className="text-center text-gray-400 italic">No skills found.</p>
        )}

        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="w-full flex items-center space-x-4 bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-yellow-400/60 transition cursor-default"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.25, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Icon */}
            <div>{skill.icon}</div>

            {/* Skill info */}
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-white">{skill.name}</span>
                <span className="text-sm text-gray-300">
                  <CountUp end={skill.level} duration={1.5} suffix="%" />
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-5">
                <motion.div
                  className={`h-5 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
