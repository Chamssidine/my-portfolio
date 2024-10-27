import React from "react";
import { motion } from "framer-motion";

function Projects() {
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

      {/* Animated Paragraph */}
      <motion.p
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Explore my projects in C, C#, Python, and Kotlin:
      </motion.p>

      {/* Animated Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Each child element appears with a delay
            },
          },
        }}
      >
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-200 rounded shadow"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Project {index}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
