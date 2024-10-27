import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate(); // Initialize the hook

  const handleButtonClick = () => {
    navigate("/projects"); // Navigate to the Projects page
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center text-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm Chamssidine Abdallah, a Full-Stack Developer with experience in C#,
        Unity, JavaScript, Python, and mobile development with Kotlin Jetpack
        Compose.
      </motion.p>

      {/* Animated Button with Redirect */}
      <motion.button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition mb-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onClick={handleButtonClick} // Handle click event
      >
        Let's go!
      </motion.button>

      {/* Skill Badges */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">C#</span>
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
          Unity
        </span>
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
          Kotlin
        </span>
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
          Python
        </span>
      </motion.div>
    </div>
  );
}

export default Home;
