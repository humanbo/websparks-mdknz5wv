import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-silver-600/20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-silver-200">Company</h3>
            <div className="space-y-1.5">
              <a href="#" className="block text-sm text-silver-400 hover:text-silver-200 transition-colors">About Us</a>
              <a href="#" className="block text-sm text-silver-400 hover:text-silver-200 transition-colors">Careers</a>
              <a href="#" className="block text-sm text-silver-400 hover:text-silver-200 transition-colors">Press</a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-silver-200">Support</h3>
            <div className="space-y-1.5">
              <a href="#" className="block text-sm text-silver-400 hover:text-silver-200 transition-colors">Help Center</a>
              <a href="#" className="block text-sm text-silver-400 hover:text-silver-200 transition-colors">Contact</a>
              <a href="#" className="block text-sm text-silver-400 hover:text-silver-200 transition-colors">Privacy</a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-silver-200">Connect</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-silver-400 hover:text-silver-200 transition-colors">
                <i className="bi bi-twitter text-lg"></i>
              </a>
              <a href="#" className="text-silver-400 hover:text-silver-200 transition-colors">
                <i className="bi bi-linkedin text-lg"></i>
              </a>
              <a href="#" className="text-silver-400 hover:text-silver-200 transition-colors">
                <i className="bi bi-instagram text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-silver-600/20 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-silver-500 text-xs">
            © 2025 Premium Experience. All rights reserved.
          </p>
          <p className="text-silver-500 text-xs">
            Powered by <span className="text-silver-300 font-medium">Websparks AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
