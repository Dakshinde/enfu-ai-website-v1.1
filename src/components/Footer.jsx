import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react'; // Added more icons

export const Footer = () => (
    <footer className="bg-black py-12 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-2xl text-white font-bold">EnFu AI</span>
            <p className="mt-4 text-sm text-gray-400">
                Empowering the Future with AI Innovation.
            </p>
            <div className="flex justify-center space-x-6 mt-6">
                <a href="#" aria-label="Email"><Mail className="w-6 h-6 hover:text-accent-cyan cursor-pointer transition-colors" /></a>
                <a href="#" aria-label="Twitter"><Twitter className="w-6 h-6 hover:text-accent-cyan cursor-pointer transition-colors" /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin className="w-6 h-6 hover:text-accent-cyan cursor-pointer transition-colors" /></a>
            </div>
            <p className="mt-8 text-xs text-gray-500">
                © {new Date().getFullYear()} EnFu AI. All rights reserved.
            </p>
        </div>
    </footer>
);