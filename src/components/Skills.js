import React from 'react';
import { FaPaintBrush, FaCube, FaGamepad, FaCode, FaUsers, FaLightbulb } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      category: 'UI / UX Design',
      skills: [
        { name: 'Interface design', level: 95, icon: <FaPaintBrush /> },
        { name: 'Player-first layouts', level: 92, icon: <FaGamepad /> },
        { name: 'Visual direction', level: 90, icon: <FaLightbulb /> },
      ]
    },
    {
      category: 'Roblox Building',
      skills: [
        { name: 'Environment building', level: 90, icon: <FaCube /> },
        { name: 'World composition', level: 88, icon: <FaGamepad /> },
        { name: 'Detail passes', level: 86, icon: <FaPaintBrush /> },
      ]
    },
    {
      category: 'Commission Process',
      skills: [
        { name: 'Brief discovery', level: 95, icon: <FaUsers /> },
        { name: 'Clear communication', level: 94, icon: <FaUsers /> },
        { name: 'Reliable delivery', level: 90, icon: <FaCode /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">What I Bring To A Commission</h2>
        
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
