import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
      data-aos="fade-in"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Forest</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional UI/UX designer and builder creating memorable Roblox experiences, from the first sketch to the finished world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink 
                to="contact" 
                smooth
                className="btn-primary inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Start a commission <FaArrowRight />
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth
                className="btn-secondary inline-flex items-center justify-center cursor-pointer"
              >
                View my work
              </ScrollLink>
            </div>

            <div className="mt-12 text-sm font-medium uppercase tracking-widest text-blue-300">
              Roblox commissions open
            </div>
          </div>

          {/* Right side - Illustration placeholder */}
          <div 
            className="relative h-96 md:h-full flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative w-full h-full max-w-md">
              {/* Animated gradient blob */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>
              
              {/* Placeholder for image or avatar */}
              <div className="relative bg-dark-800 rounded-3xl border border-dark-700 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">F</div>
                  <p className="text-gray-400">Roblox commissions by Forest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
