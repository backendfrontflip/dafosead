import React from 'react';
import PageWrapper from '../components/PageWrapper.jsx';

const projects = [
  {
    title: "Lagos International Airport",
    image: "/assets/project-lagos.jpg",
    description: "Installed a complete baggage handling conveyor system with 24/7 maintenance service."
  },
  {
    title: "Abuja Terminal 2",
    image: "/assets/project-abuja.jpg",
    description: "Engineered and delivered a custom belt solution to handle high-volume passenger loads."
  },
  {
    title: "Port Harcourt Domestic",
    image: "/assets/project-port.jpg",
    description: "Upgraded aging conveyor systems with modern energy-efficient belts and components."
  }
];

const Projects = () => {
  return (
    <PageWrapper>
    <div className="px-6 md:px-20 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-red-600">Our Projects</h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-white">
        {projects.map((project, index) => (
          <div key={index} className="bg-red-600 rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-white">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  );
};

export default Projects;
