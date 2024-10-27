import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/projects");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center text-center bg-white relative">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Enhanced Introduction */}
      <motion.p
        className="text-lg mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm Chamssidine Abdallah, a Full-Stack Developer specializing in C#,
        Unity, Kotlin, and more. Let's build something amazing together!
      </motion.p>

      {/* Animated Button with Redirect */}
      <motion.button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition mb-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.5, duration: 0.8 }}
        onClick={handleButtonClick}
        style={{ zIndex: 1 }} // Ensure the button is clickable
      >
        Let's go!
      </motion.button>

      {/* Animated Skill Badges */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ zIndex: 1 }} // Ensure skill badges are above any other background elements
      >
        {["C#", "Unity", "Kotlin", "Python"].map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Home;
