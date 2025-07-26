import React, { useState } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = '',
  icon,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className={`${icon} text-silver-500`}></i>
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          className={`
            w-full px-4 py-4 ${icon ? 'pl-12' : ''} 
            bg-white/10 backdrop-blur-sm border border-silver-600/30 
            rounded-xl text-silver-100 placeholder-silver-500 
            focus:outline-none focus:ring-2 focus:ring-silver-400 focus:border-transparent
            transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
            ${focused ? 'bg-white/20 border-silver-400/50' : ''}
            ${error ? 'border-red-400 focus:ring-red-400' : ''}
          `}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400 animate-fade-in">
          <i className="bi bi-exclamation-circle mr-1"></i>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
