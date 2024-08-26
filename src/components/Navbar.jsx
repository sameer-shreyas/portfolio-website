import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sameer Shreyas</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 mt-4 md:mt-0 bg-gray-800 md:bg-transparent w-full md:w-auto text-center md:text-left`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 md:inline-block'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 md:inline-block'
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 md:inline-block'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 md:inline-block'
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 md:inline-block'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 md:inline-block'
            }
            onClick={toggleMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 md:inline-block'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 md:inline-block'
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 md:inline-block'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 md:inline-block'
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
