import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      <div className="space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-silver-100/10 backdrop-blur-sm rounded-full border border-silver-600/20 animate-glow">
          <i className="bi bi-lightning-charge text-silver-300 mr-2"></i>
          <span className="text-sm text-silver-300 font-medium">Something Revolutionary is Coming</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-silver-200 via-silver-100 to-silver-300 leading-tight animate-slide-up">
          The Future
          <br />
          <span className="text-silver-400">Starts Here</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-silver-300 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Experience the next generation of innovation. Join thousands of visionaries who are already part of something extraordinary.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 text-silver-400 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center">
          <i className="bi bi-people mr-2"></i>
          <span className="text-sm">10,000+ Early Adopters</span>
        </div>
        <div className="flex items-center">
          <i className="bi bi-star-fill mr-2"></i>
          <span className="text-sm">Premium Experience</span>
        </div>
        <div className="flex items-center">
          <i className="bi bi-shield-check mr-2"></i>
          <span className="text-sm">Exclusive Access</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
