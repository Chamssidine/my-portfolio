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
    imageUrl: "./web.webp", // Replace with your image path
    downloadUrl: "https://github.com/Chamssidine/my-portfolio.git", // Replace with your demo file URL
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "A productivity app built using Kotlin and Jetpack Compose.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
    imageUrl: "./kotlin.webp", // Replace with your image path
    downloadUrl: "path/to/your/demo2.zip", // Replace with your demo file URL
  },
  {
    id: 3,
    title: "VR Game",
    description: "A virtual reality game developed in Unity and C#.",
    technologies: ["Unity", "C#", "VR"],
    imageUrl: "./vr.webp", // Replace with your image path
    downloadUrl: "path/to/your/demo3.zip", // Replace with your demo file URL
  },
  {
    id: 4,
    title: "Application de reconnaissance faciale",
    technologies: ["Python, PyQte6, Eric6"],
    imageUrl: "./facial_detection.png",
    downloadUrl: "",
  },
  {
    id: 5,
    title: "Image Authentication",
    description:
      "Restfull API Image authentication using ASP.Net  and Solidity to authenticate a given ImaegData using the blockchain",
    technologies: ["ASP.Net, Solidity"],
    imageUrl: "./blockChain.jfif",
    downloadUrl: "https://github.com/Chamssidine/ImageAuth.git",
  },
  {
    id: 6,
    title: "ideaHub",
    description:
      "deaHub is a platform designed to foster innovation by allowing users to share, explore, and contribute to creative ideas. The application is structured around communities, where users can join groups, contribute to discussions, and collaborate on innovative solutions.",
    technologies: ["kotlin, Jetpack Compose"],
    imageUrl: "./ideahub.jfif",
    downloadUrl: "https://github.com/Chamssidine/IdeaHub.git",
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
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <input
        type="text"
        placeholder="Search projects..."
        className="border p-2 mb-4 w-full md:w-1/2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <FilterButtons
        selectedFilter={selectedFilter}
        onFilterChange={(filter) => setSelectedFilter(filter)}
      />

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
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={openModal}
          />
        ))}
      </motion.div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default Projects;