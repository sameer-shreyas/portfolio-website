import React from 'react';
import reactLogo from '../../assets/React.png'; // Adjust path as needed
import nodeLogo from '../../assets/NodeJs.png'; // Adjust path as needed
import pythonLogo from '../../assets/Python.png'; // Adjust path as needed
import javascriptLogo from '../../assets/JS.png'; // Adjust path as needed
import CppLogo from '../../assets/Cpp.png'; // Adjust path as needed
import SQLogo from '../../assets/SQL.png'; // Adjust path as needed
import MongoLogo from '../../assets/Mongo.png'; // Adjust path as needed
import ExpressLogo from '../../assets/Express.png'; // Adjust path as needed

const skills = [
  { name: 'React.js', logo: reactLogo, proficiency: 85 },
  { name: 'Node.js', logo: nodeLogo, proficiency: 85 },
  { name: 'Python', logo: pythonLogo, proficiency: 80 },
  { name: 'JavaScript', logo: javascriptLogo, proficiency: 90 },
  { name: 'C++', logo: CppLogo, proficiency: 95 },
  { name: 'SQL', logo: SQLogo, proficiency: 95 },
  { name: 'MongoDB', logo: MongoLogo, proficiency: 80 },
  { name: 'Express.js', logo: ExpressLogo, proficiency: 85 }
];

const Skills = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-20">
      <div className="container mx-auto px-4 lg:px-32">
        <h3 className="text-5xl font-extrabold mb-10 text-center">Skills</h3>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Here are some of the technologies and tools I’m proficient with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="text-gray-500 text-sm">{skill.proficiency}% Proficient</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
