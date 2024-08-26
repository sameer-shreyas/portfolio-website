import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sameer Shreyas</h1>
        <div className="space-x-4 hidden md:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 underline' : 'text-white hover:text-blue-400 transition-colors duration-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 underline' : 'text-white hover:text-blue-400 transition-colors duration-300'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 underline' : 'text-white hover:text-blue-400 transition-colors duration-300'
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 underline' : 'text-white hover:text-blue-400 transition-colors duration-300'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 underline' : 'text-white hover:text-blue-400 transition-colors duration-300'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
