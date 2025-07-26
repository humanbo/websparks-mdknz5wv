import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import EmailForm from './components/EmailForm';
import SuccessModal from './components/SuccessModal';
import Footer from './components/Footer';

interface StoredEmail {
  email: string;
  timestamp: number;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [subscriberCount, setSubscriberCount] = useState(10247);

  useEffect(() => {
    // Load existing emails from localStorage
    const storedEmails = localStorage.getItem('waitlist-emails');
    if (storedEmails) {
      try {
        const emails: StoredEmail[] = JSON.parse(storedEmails);
        setSubscriberCount(10247 + emails.length);
      } catch (error) {
        console.error('Error loading stored emails:', error);
      }
    }
  }, []);

  const handleEmailSubmit = async (email: string) => {
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => window.setTimeout(resolve, 1500));
      
      // Store email in localStorage
      const storedEmails = localStorage.getItem('waitlist-emails');
      let emails: StoredEmail[] = [];
      
      if (storedEmails) {
        try {
          emails = JSON.parse(storedEmails);
        } catch (error) {
          console.error('Error parsing stored emails:', error);
        }
      }
      
      // Check if email already exists
      const emailExists = emails.some(item => item.email.toLowerCase() === email.toLowerCase());
      
      if (!emailExists) {
        emails.push({
          email: email.toLowerCase(),
          timestamp: Date.now()
        });
        
        localStorage.setItem('waitlist-emails', JSON.stringify(emails));
        setSubscriberCount(prev => prev + 1);
      }
      
      setSubmittedEmail(email);
      setShowSuccess(true);
      
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setSubmittedEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-black font-inter">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-silver-300/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <main className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <Hero />
            
            {/* Email Form Section */}
            <div className="mt-16 space-y-8">
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl md:text-3xl font-semibold text-silver-200 mb-4">
                  Be Among the First
                </h2>
                <p className="text-silver-400 max-w-lg mx-auto">
                  Join our exclusive waitlist and get early access to features that will transform how you work and create.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <EmailForm onSubmit={handleEmailSubmit} loading={loading} />
              </div>
              
              {/* Social Proof */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="inline-flex items-center px-6 py-3 bg-silver-100/5 backdrop-blur-sm rounded-full border border-silver-600/20">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-silver-300 to-silver-400 rounded-full border-2 border-charcoal-800"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-silver-400 to-silver-500 rounded-full border-2 border-charcoal-800"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-silver-200 to-silver-300 rounded-full border-2 border-charcoal-800"></div>
                  </div>
                  <span className="text-sm text-silver-300">
                    <span className="font-semibold text-silver-200">{subscriberCount.toLocaleString()}</span> visionaries already joined
                  </span>
                </div>
              </div>
            </div>
            
            {/* Features Preview */}
            <div className="mt-24 grid md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <div className="text-center p-6 bg-silver-100/5 backdrop-blur-sm rounded-2xl border border-silver-600/20 hover:bg-silver-100/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-silver-400 to-silver-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-lightning-charge text-charcoal-900 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-silver-200 mb-2">Lightning Fast</h3>
                <p className="text-silver-400 text-sm">Experience unprecedented speed and performance in everything you do.</p>
              </div>
              
              <div className="text-center p-6 bg-silver-100/5 backdrop-blur-sm rounded-2xl border border-silver-600/20 hover:bg-silver-100/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-silver-400 to-silver-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-shield-check text-charcoal-900 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-silver-200 mb-2">Secure by Design</h3>
                <p className="text-silver-400 text-sm">Your data and privacy are protected with enterprise-grade security.</p>
              </div>
              
              <div className="text-center p-6 bg-silver-100/5 backdrop-blur-sm rounded-2xl border border-silver-600/20 hover:bg-silver-100/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-silver-400 to-silver-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-magic text-charcoal-900 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-silver-200 mb-2">AI-Powered</h3>
                <p className="text-silver-400 text-sm">Intelligent features that adapt and evolve with your needs.</p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
      
      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={handleCloseSuccess}
        email={submittedEmail}
      />
    </div>
  );
}

export default App;
