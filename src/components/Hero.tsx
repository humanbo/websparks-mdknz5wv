import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div className="inline-flex items-center px-3 py-1.5 bg-silver-100/10 backdrop-blur-sm rounded-full border border-silver-600/20">
          <i className="bi bi-lightning-charge text-silver-300 mr-1.5 text-sm"></i>
          <span className="text-xs text-silver-300 font-medium">Something Revolutionary is Coming</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-silver-200 via-silver-100 to-silver-300 leading-tight animate-slide-up">
          The Future
          <br />
          <span className="text-silver-400">Starts Here</span>
        </h1>
        
        <p className="text-lg md:text-xl text-silver-300 max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Experience the next generation of innovation. Join thousands of visionaries who are already part of something extraordinary.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 text-silver-400 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center">
          <i className="bi bi-people mr-1.5 text-sm"></i>
          <span className="text-xs">10,000+ Early Adopters</span>
        </div>
        <div className="flex items-center">
          <i className="bi bi-star-fill mr-1.5 text-sm"></i>
          <span className="text-xs">Premium Experience</span>
        </div>
        <div className="flex items-center">
          <i className="bi bi-shield-check mr-1.5 text-sm"></i>
          <span className="text-xs">Exclusive Access</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
