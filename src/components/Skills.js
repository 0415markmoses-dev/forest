import React from 'react';
import { FaReact, FaNode, FaPython, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: <FaReact /> },
        { name: 'JavaScript', level: 95, icon: null },
        { name: 'Tailwind CSS', level: 90, icon: null },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, icon: <FaNode /> },
        { name: 'Python', level: 80, icon: <FaPython /> },
        { name: 'Databases', level: 85, icon: <FaDatabase /> },
      ]
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 92, icon: <FaGitAlt /> },
        { name: 'Docker', level: 85, icon: <FaDocker /> },
        { name: 'CI/CD', level: 80, icon: null },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex}
              className="card"
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100}
            >
              <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
              
              <div className="space-y-6">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <span className="text-blue-400 text-xl">{skill.icon}</span>}
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
