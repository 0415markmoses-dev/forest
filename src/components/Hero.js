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
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A full-stack developer passionate about creating beautiful, performant web applications. I love building digital experiences that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink 
                to="contact" 
                smooth
                className="btn-primary inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Get In Touch <FaArrowRight />
              </ScrollLink>
              <button className="btn-secondary">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-6">
              <a href="#" className="w-12 h-12 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.735-2.004 1.442-.103.25-.129.599-.129.948v5.415h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.39 3.733 4.384v5.508zm-12.654-11.156c-1.143 0-1.921-.757-1.921-1.707 0-.968.777-1.708 1.96-1.708 1.18 0 1.92.74 1.94 1.708 0 .95-.76 1.707-1.979 1.707zm1.529 11.156h-3.065V10.806h3.065v8.646zM1.349 0h21.302c.744 0 1.349.605 1.349 1.351v21.298c0 .744-.605 1.351-1.349 1.351H1.349C.605 24 0 23.395 0 22.649V1.351C0 .605.605 0 1.349 0z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.586c-3.387 1.694-6.778 2.877-10.265 3.6 1.52-1.897 2.747-4.138 2.747-6.57 0-5.288-4.388-9.57-9.8-9.57-5.412 0-9.8 4.282-9.8 9.57 0 .75.085 1.499.255 2.229C2.82 4.924 1.171 4.06.36 2.607c-.8 2.228-.8 5.686 0 7.914 2.588 3.086 6.304 4.934 10.316 4.934-.165.959-.256 1.949-.256 2.954 0 5.288 4.388 9.57 9.8 9.57s9.8-4.282 9.8-9.57c0-1.881-.635-3.639-1.738-5.063 1.181-.266 2.308-.666 3.357-1.365z"/></svg>
              </a>
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
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-400">Your Avatar Here</p>
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
