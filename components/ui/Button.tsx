import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: 'play' | 'arrow' | 'check';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/30 hover:shadow-brand/50",
    secondary: "bg-white text-brand-accent border border-gray-200 shadow-sm hover:border-brand/30 hover:bg-gray-50",
    outline: "border border-brand text-brand hover:bg-brand/10",
  };

  const IconComponent = () => {
    if (icon === 'play') return <Play size={16} fill="currentColor" />;
    if (icon === 'arrow') return <ArrowRight size={18} />;
    if (icon === 'check') return <span className="text-lg">✓</span>;
    return null;
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <IconComponent />
      <span>{children}</span>
    </button>
  );
};