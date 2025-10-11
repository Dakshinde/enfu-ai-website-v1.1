import React from 'react';

export const Button = ({ children, className = '', ...props }) => (
    <button
        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none text-white ${className}`}
        {...props}
    >
        {children}
    </button>
);