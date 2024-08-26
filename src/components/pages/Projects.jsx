import React from 'react';
import epicEatsScreenshot from '../../assets/EpicEats.png';
import moodSyncScreenshot from '../../assets/MoodSyncTunes.jpg';


const projects = [
  {
    title: "EpicEats",
    description: "A full-stack food delivery platform with user authentication, shopping cart, and order tracking features. Built with MERN stack.",
    details: "EpicEats offers a seamless food ordering experience with real-time updates, personalized orders, and secure payment integration. The project focuses on scalability, responsive UI, and efficient database management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/sameer-shreyas/EpicEats",
    screenshot: epicEatsScreenshot,
  },
  {
    title: "MoodSyncTunes",
    description: "A facial emotion music recommender using a CNN for real-time emotion-based song recommendations. Built with HTML/CSS, JavaScript, and Python.",
    details: "MoodSyncTunes analyzes real-time facial emotions and suggests songs that match the mood. The project uses a convolutional neural network and integrates with music APIs to provide personalized recommendations.",
    technologies: ["HTML/CSS", "JavaScript", "Python"],
    link: "https://github.com/sameer-shreyas/MoodSyncTunes",
    screenshot: moodSyncScreenshot,
  },
];

const Projects = () => {
  return (
    <section className="bg-pattern text-gray-800 py-20 fade-in">
      <div className="container mx-auto text-center px-4 lg:px-32">
        <h3 className="text-5xl font-extrabold mb-10">Projects</h3>
        <p className="text-xl text-gray-600 mb-12">
          Here are some of the exciting projects I’ve worked on:
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="rounded-md mb-6 w-full object-cover h-48"
              />
              <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-700 mb-4">{project.details}</p>
              <p className="text-gray-700 font-semibold mb-4">
                Technologies: {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
