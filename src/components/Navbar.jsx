import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white text-gray-700 p-6 border-r transition-transform transform z-40 shadow-lg ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col items-center">
          <img
            src="/profile.png"
            alt="Chamssidine Abdallah"
            className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-gray-100 shadow-sm"
          />
          <h1 className="text-xl font-semibold">Chamssidine Abdallah</h1>
          <p className="text-sm text-gray-500 mb-4">Full-Stack Developer</p>

          <nav className="w-full">
            <ul className="space-y-2 text-left">
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-6 w-full border-t pt-4">
            <h2 className="text-sm font-medium text-gray-600 mb-2">Contact rapide</h2>
            <div className="flex items-center justify-between">
              <a
                href="mailto:chamssidineab@gmail.com"
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 w-full"
              >
                <i className="fa-solid fa-envelope text-gray-700"></i>
                <span className="text-sm truncate">chamssidineab@gmail.com</span>
              </a>
            </div>

            <div className="mt-3 flex gap-3 justify-center">
              <a
                href="https://github.com/Chamssidine"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abdallah-ambininstoa-chamssidine-219450219/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-xl text-blue-600"></i>
              </a>
            </div>

            <div className="mt-4">
              <a
                href="mailto:chamssidineab@gmail.com"
                className="block text-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
              >
                Travailler avec moi
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;