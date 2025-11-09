import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
        Bienvenue sur mon portfolio
      </motion.h1>
      {/* Enhanced Introduction */}
      <motion.p
        className="text-lg mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Je suis Chamssidine Abdallah, développeur Full-Stack. <br />
        Explorez mes projets, contactez-moi pour collaborer (Freelance ou CDI).
      </motion.p>
      {/* Call to Action */}
      <motion.div className="flex gap-4 justify-center mt-6">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          onClick={handleButtonClick}
        >
          Voir mes projets
        </button>
        <a
          href="mailto:chamssidineab@gmail.com"
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          target="_blank"
          rel="noopener"
        >
          Travailler avec moi
        </a>
      </motion.div>
    </div>
  );
}

export default Home;