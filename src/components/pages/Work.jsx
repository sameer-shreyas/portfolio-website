import React from 'react';
import magicpinLogo from '../../assets/magicpin-logo.svg';
import businessWebSolutionsLogo from '../../assets/business-web-solutions-logo.jpeg';
// Import other logos as needed

const experiences = [
  {
    company: "Magicpin",
    role: "Analyst Intern",
    duration: "Jan 2024 - Mar 2024",
    description: `
      During my time at Magicpin, I played a key role in automating several reporting processes by developing Python scripts, which resulted in a 30% reduction in manual effort and a significant increase in efficiency. 
      I also worked on devising ONDC offer strategies that were implemented to boost customer engagement and sales. My collaboration with the Data Science team involved data extraction, analysis, and visualization to support various business decisions.
      Additionally, I provided crucial support to the Sales Team by delivering data-driven insights and automating their daily tasks.
    `,
    technologies: ["Python", "Data Analysis", "Automation", "Data Visualization"],
    logo: magicpinLogo, // Path to the company logo
    letterLink: "https://drive.google.com/file/d/1-8nALoIFpp0AAIUuX-_aj8HGQMzvVoGk/view?usp=sharing", // Replace with the actual link
  },
  {
    company: "Business Web Solutions",
    role: "Web Developer Intern",
    duration: "June 2023 - July 2023",
    description: `
      As a Web Developer Intern at Business Web Solutions, I successfully completed a range of front-end development tasks. I implemented pixel-perfect designs based on client specifications using HTML, CSS, and JavaScript, ensuring a responsive and user-friendly experience across various devices.
      I was also involved in debugging and optimizing code, which improved the performance of the websites by 20%. My work on this project helped me develop strong foundational skills in web development, and I gained hands-on experience in managing project timelines and client expectations.
    `,
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Cross-Browser Compatibility"],
    logo: businessWebSolutionsLogo, // Path to the company logo
    letterLink: "https://drive.google.com/file/d/13WBAiErLEFaSqpQFAUJO56ebyh8yQMnR/view?usp=sharing", // Replace with the actual link
  },
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <section className="bg-pattern text-gray-800 py-20 fade-in">
      <div className="container mx-auto text-center px-4 lg:px-32">
        <h3 className="text-5xl font-extrabold mb-10">Work Experience</h3>
        <p className="text-xl text-gray-600 mb-12">
          Here are some of the roles I've undertaken, with detailed insights into the projects and technologies I worked with:
        </p>
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-16 h-16 mr-6"
                />
                <div className="text-left">
                  <h4 className="text-3xl font-semibold">{experience.role}</h4>
                  <h5 className="text-2xl font-medium">{experience.company}</h5>
                  <p className="text-gray-600">{experience.duration}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{experience.description}</p>
              <p className="text-gray-700 font-semibold mb-4">
                Technologies Used: {experience.technologies.join(", ")}
              </p>
              <a
                href={experience.letterLink}
                className="inline-block bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Completion Letter
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
