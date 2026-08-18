import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Meet Forest</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <div className="relative h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-dark-700"></div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I am a professional UI/UX designer and Builder. I have contributed to over 3 million visits. I have been a UI designer for over 3 years and a builder for about a year now.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I turn ideas into polished Roblox experiences with a strong eye for atmosphere, clarity, and the way players move through a world. Every commission starts with your vision and ends with something built to be remembered.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">UI/UX design for Roblox games, communities, and interfaces</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Environment building with a focus on detail and player experience</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">A collaborative process shaped around your commission brief</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
