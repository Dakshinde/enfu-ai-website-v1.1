import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Blogs } from './pages/Blogs';
import { Contact } from './pages/Contact';
import { WhyUs2 as AboutUs } from './pages/WhyUs2';

// 1. Define the animation styles exactly as in your original file.
const ANIMATION_STYLES = `
@keyframes blur-reveal-stagger {
    0% { filter: blur(10px); opacity: 0; transform: translateY(-50px); }
    50% { filter: blur(5px); opacity: 0.5; }
    100% { filter: blur(0px); opacity: 1; transform: translateY(0); }
}
`;

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-black overflow-x-hidden">
                {/* 2. Inject the styles directly into the app. This makes the animation globally available. */}
                <style>{ANIMATION_STYLES}</style>

                <Navbar isScrolled={isScrolled} />
                <main>
                    <Routes>
                        <Route index element={<>
                            <HeroSection />
                            <ServicesSection />
                            <WhyUsSection />
                            <FaqSection />
                        </>} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<AboutUs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}