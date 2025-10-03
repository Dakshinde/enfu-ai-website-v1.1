import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      bg-white p-6 rounded-2xl shadow-xl border border-gray-100 
      transition-all duration-300
      ${hover ? 'hover:shadow-2xl hover:border-gray-200 hover:scale-105' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;