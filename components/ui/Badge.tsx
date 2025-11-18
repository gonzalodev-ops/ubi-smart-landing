import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  strong?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ children, strong = false }) => {
  const baseStyles = "text-xs font-medium px-3 py-1.5 rounded-full border";
  const strongStyles = "border-brand/30 bg-brand/10 text-brand-dark";
  const normalStyles = "border-gray-300 bg-white text-gray-500";

  return (
    <span className={`${baseStyles} ${strong ? strongStyles : normalStyles}`}>
      {children}
    </span>
  );
};