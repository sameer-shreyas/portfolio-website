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
        {/* Logo and Title */}
        <div className="flex items-center">
    <h1 className="text-2xl font-bold">Sameer Shreyas</h1>

    {/* LeetCode Logo */}
    <a
      href="https://leetcode.com/u/sameershreyas13/"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-4"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
        alt="LeetCode"
        className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
      />
    </a>

    {/* LinkedIn Logo */}
    <a
    href="https://www.linkedin.com/in/sameer-shreyas-99171a209/"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-4"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
      alt="LinkedIn"
      className="hover:opacity-80 transition-opacity duration-300"
      style={{ width: '8rem', height: '2rem' }} // Adjust these values as needed
    />
  </a>


    {/* GitHub Logo */}
    <a
      href="https://github.com/sameer-shreyas"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-4"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt="GitHub"
        className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
      />
    </a>
  </div>
{/* <NavLink to="/" className="text-2xl font-bold">Logo</NavLink> */}

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
          } absolute top-0 left-0 w-full h-screen bg-gray-800 md:bg-transparent md:h-auto md:relative md:flex md:items-center md:w-auto md:space-x-4 mt-16 md:mt-0 p-6 md:p-0`}
        >
          {/* Close Icon for Mobile */}
          <button 
            onClick={toggleMenu} 
            className="absolute top-4 right-4 text-white md:hidden"
          >
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 text-center'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 text-center'
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 text-center'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 text-center'
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 text-center'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 text-center'
            }
            onClick={toggleMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 text-center'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 text-center'
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 text-center'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 text-center'
            }
            onClick={toggleMenu}
          >
            Work Experience
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline block py-2 text-center'
                : 'text-white hover:text-blue-400 transition-colors duration-300 block py-2 text-center'
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
