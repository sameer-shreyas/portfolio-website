import React from 'react';
import aboutImage from '../../assets/MyImage.jpg'; // Adjust path as needed

const About = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 py-20">
      <div className="container mx-auto px-4 lg:px-32 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={aboutImage}
            alt="About Me"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h3 className="text-5xl font-extrabold mb-6">About Me</h3>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            I'm a final-year B.Tech student specializing in IoT in Electronics and Communication Engineering at NSUT, Delhi. I have experience in full-stack web development, data analysis, and automation. My projects showcase my passion for building scalable and innovative solutions.
          </p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            I’ve worked as an Analyst Intern at Magicpin, a Web Developer Intern at Business Web Solutions, and have successfully completed projects like EpicEats and MoodSyncTunes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
