import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <div className="relative h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-dark-700"></div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With 5+ years of experience in web development, I've worked with startups and established companies to build scalable applications.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in tech started with a curiosity about how things work, and it has evolved into a career dedicated to crafting beautiful, performant web experiences. I'm constantly learning new technologies and best practices to stay at the forefront of web development.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Specialized in React, Node.js, and modern web technologies</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Passionate about UI/UX design and user-centric development</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Always eager to mentor junior developers and collaborate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
