import React, { useState } from 'react';
import { FaDiscord, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Start A Roblox Commission</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-6">Bring your idea to Forest.</h3>
            <p className="text-gray-300 mb-8">
              Tell me what you are building, what you need designed or built, and what the finished experience should feel like. Include references, scope, and your timeline so I can understand the brief.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-blue-400">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Commission brief</p>
                  <span className="text-white font-medium">Use the form to get started</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-blue-400">
                  <FaDiscord className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Availability</p>
                  <span className="text-white font-medium">Open for Roblox commissions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="card" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell Forest about your Roblox commission..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary"
            >
              Send commission brief
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
