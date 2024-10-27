import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      <nav
        className={`fixed top-0 left-0 h-full bg-white text-gray-600 p-4 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:w-64`}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/projects" className="block hover:underline" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link to="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
