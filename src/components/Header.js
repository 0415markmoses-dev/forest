import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Forest
        </div>
        
        <div className="hidden md:flex gap-8">
          <ScrollLink to="hero" smooth className="hover:text-blue-400 cursor-pointer transition-colors">Home</ScrollLink>
          <ScrollLink to="about" smooth className="hover:text-blue-400 cursor-pointer transition-colors">About</ScrollLink>
          <ScrollLink to="skills" smooth className="hover:text-blue-400 cursor-pointer transition-colors">Services</ScrollLink>
          <ScrollLink to="projects" smooth className="hover:text-blue-400 cursor-pointer transition-colors">Showcase</ScrollLink>
          <ScrollLink to="contact" smooth className="hover:text-blue-400 cursor-pointer transition-colors">Commission</ScrollLink>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-gray-100"></div>
            <div className="w-6 h-0.5 bg-gray-100"></div>
            <div className="w-6 h-0.5 bg-gray-100"></div>
          </div>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-700">
          <div className="px-4 py-4 space-y-3">
            <ScrollLink to="hero" smooth className="block hover:text-blue-400 cursor-pointer py-2">Home</ScrollLink>
            <ScrollLink to="about" smooth className="block hover:text-blue-400 cursor-pointer py-2">About</ScrollLink>
            <ScrollLink to="skills" smooth className="block hover:text-blue-400 cursor-pointer py-2">Services</ScrollLink>
            <ScrollLink to="projects" smooth className="block hover:text-blue-400 cursor-pointer py-2">Showcase</ScrollLink>
            <ScrollLink to="contact" smooth className="block hover:text-blue-400 cursor-pointer py-2">Commission</ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
