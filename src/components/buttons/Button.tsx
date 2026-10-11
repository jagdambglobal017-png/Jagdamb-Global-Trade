import React from 'react';
import { ArrowRight } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'glass' | 'whatsapp' | 'orange' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showArrow?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  showArrow = false,
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 active:scale-[0.98] select-none';
  
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wider uppercase font-bold',
    md: 'px-5 py-2.5 text-sm tracking-wide font-extrabold',
    lg: 'px-7 py-3 text-sm sm:text-base font-extrabold tracking-wide',
  };

  const variantStyles = {
    primary: 'bg-slate-800 hover:bg-slate-700 text-white shadow-md border border-slate-600/50 hover:border-slate-500',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-md',
    glass: 'bg-gray-200/90 backdrop-blur-md text-slate-900 hover:bg-gray-300 border border-gray-300 shadow-sm hover:border-gray-400',
    whatsapp: 'bg-slate-800 hover:bg-slate-700 text-white shadow-md border border-slate-600/50',
    orange: 'bg-slate-800 hover:bg-slate-700 text-white shadow-md border border-slate-600/50',
    icon: 'p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 shadow-sm',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};
