// src/components/ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-lg p-8 w-11/12 md:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <p className="mb-4">{project.description}</p>
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
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Close
        </button>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.downloadUrl}
          download
          className="px-4 py-2 ml-2 bg-green-600 left-4 text-white rounded"
        >
          <i class="fa-solid fa-download"></i>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default ProjectModal;
