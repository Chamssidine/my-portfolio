import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar with fixed width */}
        <div className="w-64">
          <Navbar />
        </div>

        {/* Main content fills the remaining space */}
        <div className="flex-1 p-2 bg-gray-100">
          <div className="h-full bg-white rounded-lg shadow-lg flex flex-col">
            {/* Header section */}
           

            {/* Routes section takes up the rest */}
            <div className="flex-1 p-5 overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
