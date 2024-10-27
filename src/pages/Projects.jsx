// src/pages/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import FilterButtons from "../components/FilterButtons";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    imageUrl: "/web.webp", // Replace with your image path
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "A productivity app built using Kotlin and Jetpack Compose.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
    imageUrl: "path/to/your/image2.jpg", // Replace with your image path
  },
  {
    id: 3,
    title: "VR Game",
    description: "A virtual reality game developed in Unity and C#.",
    technologies: ["Unity", "C#", "VR"],
    imageUrl: "path/to/your/image3.jpg", // Replace with your image path
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Filtering projects based on search and selected technology
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" || project.technologies.includes(selectedFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8 min-h-screen">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search projects..."
        className="border p-2 mb-4 w-full md:w-1/2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filter Buttons */}
      <FilterButtons
        selectedFilter={selectedFilter}
        onFilterChange={(filter) => setSelectedFilter(filter)}
      />

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => openModal(project)}
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default Projects;
