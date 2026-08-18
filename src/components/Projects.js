import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend. Features include product management, user authentication, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using WebSockets. Includes team collaboration features and analytics dashboard.',
      tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      image: '✓',
      link: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that provides real-time weather data with forecasts. Features geolocation support and responsive design.',
      tags: ['React', 'Weather API', 'Tailwind CSS', 'JavaScript'],
      image: '🌤️',
      link: '#',
      github: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="card flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-5xl mb-4">
                {project.image}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-dark-700">
                <a 
                  href={project.link}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" /> Live
                </a>
                <a 
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-dark-700 text-gray-100 rounded-lg border border-dark-600 hover:bg-dark-600 transition-colors"
                >
                  <FaGithub className="text-sm" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
