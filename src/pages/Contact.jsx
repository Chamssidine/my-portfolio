import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Reset the form after submission
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000); // Hide the success message after 3 seconds
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <motion.div
      className="p-8 min-h-screen flex flex-col items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Page Title */}
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      {/* Success Message */}
      {submitted && (
        <motion.p
          className="text-green-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for reaching out! I'll get back to you soon.
        </motion.p>
      )}

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <div>
          <label className="block mb-2 text-left text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-2 text-left text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block mb-2 text-left text-lg font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </motion.form>
 
    </motion.div>
  );
}

export default Contact;
