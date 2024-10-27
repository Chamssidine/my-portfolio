import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="p-8 min-h-screen flex flex-col items-center text-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.img
        className="w-48 h-48 object-cover  rounded-full mb-4"
        src="/profile.png"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      />

      {/* Animated Paragraph */}
      <motion.p
        className="text-lg mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I'm a passionate developer with experience in various programming
        languages and frameworks. I enjoy building software that solves
        real-world problems, whether it's a game in Unity, a mobile app, or a
        desktop application.
      </motion.p>

      {/* Skill Badges Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="bg-blue-100 px-4 py-2 rounded-full text-sm">C#</span>
        <span className="bg-blue-100 px-4 py-2 rounded-full text-sm">
          Unity
        </span>
        <span className="bg-blue-100 px-4 py-2 rounded-full text-sm">
          Kotlin
        </span>
        <span className="bg-blue-100 px-4 py-2 rounded-full text-sm">
          Python
        </span>
        <span className="bg-blue-100 px-4 py-2 rounded-full text-sm">
          JavaScript
        </span>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="w-full max-w-3xl text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h3 className="text-2xl font-bold mb-4">Timeline</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>2018 - Started learning programming</li>
          <li>2019 - Developed my first game in Unity</li>
          <li>2020 - Worked on mobile apps using Kotlin</li>
          <li>2021 - Started freelancing as a full-stack developer</li>
          <li>2023 - Built several desktop and mobile applications</li>
        </ul>
      </motion.div>

      {/* Fun Fact Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h3 className="text-2xl font-bold mb-4">Fun Facts</h3>
        <p>I drink way too much coffee ☕ and love solving complex puzzles!</p>
      </motion.div>
    </div>
  );
}

export default About;
