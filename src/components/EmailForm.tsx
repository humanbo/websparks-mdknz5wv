import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

interface EmailFormProps {
  onSubmit: (email: string) => void;
  loading: boolean;
}

const EmailForm: React.FC<EmailFormProps> = ({ onSubmit, loading }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email address is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={setEmail}
        error={error}
        icon="bi bi-envelope"
        className="animate-slide-up"
      />
      
      <Button
        type="submit"
        loading={loading}
        className="w-full animate-slide-up"
        style={{ animationDelay: '0.1s' }}
      >
        <span className="flex items-center justify-center">
          <i className="bi bi-arrow-right mr-2"></i>
          Join the Waitlist
        </span>
      </Button>
      
      <p className="text-center text-sm text-silver-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <i className="bi bi-shield-check mr-1"></i>
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
};

export default EmailForm;
