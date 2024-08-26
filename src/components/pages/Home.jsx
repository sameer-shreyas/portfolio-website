import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/your-background-image.jpg'; // Adjust path as needed

const Home = () => {
  return (
    <section
      className="bg-cover bg-center text-white h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center bg-gray-900 bg-opacity-60 p-8 rounded-lg shadow-lg">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Hi, I'm Sameer Shreyas
        </h2>
        <p className="text-2xl mb-6 animate-fade-in">
          Full-Stack Developer | Web Developer | IoT Specialist
        </p>
        <Link to="/projects">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 animate-fade-in">
            View My Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
