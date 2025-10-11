// src/components/Navbar.jsx

import React from 'react';
import { Button } from './Button';
import logo from '../assets/enfu-ai-logo.png';

export const Navbar = ({ isScrolled }) => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-background/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
            <a href="#home" className="group flex items-center space-x-3">
                {/* 👇 The background class is now 'bg-white' 👇 */}
                <div className="bg-white p-0.8 rounded-lg">
                    <img 
                        src={logo} 
                        alt="EnFu AI Logo" 
                        className="w-11 h-11 object-contain"
                    />
                </div>
                <span className={`text-2xl font-extrabold transition-colors text-white group-hover:text-accent-cyan`}>
                    EnFu AI
                </span>
            </a>
            <div className={`hidden md:flex space-x-8 font-medium text-white`}>
                {['Home', 'Services', 'Why Us', 'FAQs'].map(item => (
                    <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-accent-cyan transition-colors duration-200">
                        {item}
                    </a>
                ))}
            </div>
            <Button className={`bg-gradient-to-r from-accent-cyan to-bright-cyan-button text-white hover:shadow-[0_0_20px_rgba(35,221,214,0.7)]`}>
                Contact Us
            </Button>
        </div>
    </nav>
);