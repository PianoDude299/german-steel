import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ChairmanSection from '../components/ChairmanSection';
import ContactBar from '../components/ContactBar';
import ParticleBackground from '../components/ParticleBackground';
import Content from '../components/Content';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Particle Background - positioned absolutely to cover entire page */}
      <div className="fixed inset-0 w-full" style={{ height: '400vh', zIndex: 1 }}>
        <ParticleBackground />
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 pointer-events-none" style={{ zIndex: 2 }} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Content />
        <ChairmanSection />
        {/* Contact Bar - positioned at bottom of page content */}
        <ContactBar />
      </div>
    </div>
  );
};

export default HomePage;