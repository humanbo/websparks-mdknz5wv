import React, { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, email }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = window.setTimeout(() => {
        onClose();
      }, 5000);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-silver-600/20 shadow-2xl animate-slide-up">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
            <i className="bi bi-check-lg text-white text-2xl"></i>
          </div>
          
          <h3 className="text-2xl font-semibold text-silver-100 mb-4">
            Welcome to the Future
          </h3>
          
          <p className="text-silver-300 mb-6 leading-relaxed">
            Thank you for joining our exclusive waitlist. We have sent a confirmation to{' '}
            <span className="text-silver-100 font-medium">{email}</span>
          </p>
          
          <div className="bg-silver-100/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-silver-400">
              <i className="bi bi-info-circle mr-2"></i>
              You will be among the first to experience our revolutionary platform when we launch.
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-silver-400 to-silver-300 text-charcoal-900 rounded-xl font-medium hover:from-silver-300 hover:to-silver-200 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
