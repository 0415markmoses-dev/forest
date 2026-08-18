import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: 'Game UI & HUDs',
      description: 'Clean, expressive interfaces that help players understand your game and make every interaction feel intentional.',
      tags: ['UI design', 'UX flow', 'Roblox'],
      image: 'UI',
      link: '#contact'
    },
    {
      title: 'Roblox Environments',
      description: 'Detailed spaces with strong composition, memorable landmarks, and an atmosphere built around your game’s identity.',
      tags: ['Building', 'World design', 'Detailing'],
      image: '3D',
      link: '#contact'
    },
    {
      title: 'Full Experience Direction',
      description: 'A joined-up visual direction for games that need their world, interface, and player journey to feel like one experience.',
      tags: ['Concepting', 'UI/UX', 'Roblox'],
      image: 'FX',
      link: '#contact'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Commission Areas</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="card flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
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

              <div className="flex gap-3 pt-4 border-t border-dark-700">
                <a 
                  href={project.link}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Discuss this <FaArrowRight className="text-sm" />
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
