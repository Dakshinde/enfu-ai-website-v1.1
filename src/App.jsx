import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Mail, Settings, Shield, TrendingUp, Lightbulb, Zap } from 'lucide-react'; 

// =================================================================
// 1. Utility Hook: useOnScreen (Unchanged)
// =================================================================
const useOnScreen = (ref, rootMargin = '0px', threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting !== isVisible) {
                setIsVisible(entry.isIntersecting);
            }
        }, { rootMargin, threshold });
        if (ref.current) { observer.observe(ref.current); }
        return () => { if (ref.current) { observer.unobserve(ref.current); } };
    }, [ref, rootMargin, threshold]);
    return [isVisible];
};

// =================================================================
// 2. Global Constants & Colors (Corrected ACCENT_PURPLE, Unchanged otherwise)
// =================================================================
const COLORS = {
    // Corrected ACCENT_PURPLE (removed 'ff' if it was a typo for hex value)
    ACCENT_PURPLE: '#5686E4', 
    ACCENT_CYAN: '#46A2E0', 
    DARK_NAVY: '#ffffff', 
    BRIGHT_CYAN_BUTTON: '#23DDD6',
    DARK_BACKGROUND: '#060010', 
};

// =================================================================
// 3. Global Animation Definitions (Unchanged)
// =================================================================
const ANIMATION_STYLES = `
/* 1. Blur Text Stagger */
@keyframes blur-reveal-stagger {
    0% { filter: blur(10px); opacity: 0; transform: translateY(-50px); }
    50% { filter: blur(5px); opacity: 0.5; }
    100% { filter: blur(0px); opacity: 1; transform: translateY(0); }
}

/* 2. Metallic Paint Effect (Kept, but not applied to elements) */
.metallic-text {
    background: linear-gradient(90deg, #c7c7c7 0%, #ffffff 20%, #7d7d7d 40%, #ffffff 60%, #c7c7c7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; 
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.4); 
    transition: all 0.5s;
}
.metallic-text-hover:hover {
    filter: brightness(1.2);
}
`;

// =================================================================
// 4. Component: AnimatedWords (FIXED: Improved Centering & Line Breaks)
// =================================================================
const AnimatedWords = ({ text, className = '', delay = 75, duration = 1.2, threshold = 0.4 }) => {
    // Split into words, but for proper centering, we might want to apply text-align 
    // to the parent <p> and let the spans flow naturally.
    // For staggered effect, we keep individual spans.
    const words = useMemo(() => text.split(' '), [text]);
    const ref = useRef(null);
    const [inView] = useOnScreen(ref, '0px', threshold);

    return (
        // 🟢 FIX: Removed 'display: flex' from here. Let the text flow naturally within <p> for centering.
        // The individual spans will still animate.
        <p ref={ref} className={className}> 
            {words.map((word, index) => (
                <span
                    key={index}
                    // 🟢 FIX: Removed 'whiteSpace: pre' from span. Let browser handle spaces.
                    // Added 'inline-block' so transform and opacity work correctly per word.
                    className="inline-block" 
                    style={{
                        animation: inView 
                            ? `blur-reveal-stagger ${duration}s ease-out ${index * delay}ms forwards`
                            : 'none',
                        opacity: 0, 
                        // Add a non-breaking space after each word to prevent weird gaps during animation
                        // but only if it's not the last word.
                    }}
                >
                    {word}{index < words.length - 1 ? '\u00A0' : ''} 
                </span>
            ))}
        </p>
    );
};

// =================================================================
// 5. Component: Button (Unchanged)
// =================================================================
const Button = ({ children, className = '', ...props }) => (
    <button
        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none text-white ${className}`}
        {...props}
    >
        {children}
    </button>
);


// =================================================================
// 6. Component: Navbar (FIXED: White, Rounded Background for Logo on Scroll)
// =================================================================
const Navbar = ({ isScrolled }) => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
            ? 'bg-dark-navy shadow-lg py-3' 
            : 'bg-transparent py-5'
    }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full"> 
            
            <a href="#" className="group flex items-center space-x-2">
                 {/* 🟢 FOCUS AREA: Logo Image with Conditional White Background */}
                <div className={`p-2 rounded-lg transition-colors duration-300 flex items-center ${
                    isScrolled 
                        ? 'bg-white' // Solid white when scrolled down (over dark background)
                        : 'bg-transparent' // Transparent when over hero (over dark background)
                } group-hover:shadow-lg group-hover:shadow-accent-cyan/50`}>
                    
                    {/* The image itself is set to w-8 h-8 and object-contain */}
                    <img src='/src/assets/enfu-ai-logo.png' alt="Logo" className="w-14 h-14 object-contain" /> 
                </div>
                
                <span className={`text-2xl font-extrabold transition-colors text-white group-hover:text-accent-cyan`} 
                >
                    EnFu AI
                </span>
            </a>

            {/* Links: Change color when scrolled */}
            <div className={`hidden md:flex space-x-8 font-medium transition-colors ${
                isScrolled ? 'text-accent-cyan' : 'text-white' 
            }`}>
                {['Home', 'About Us', 'Services', 'FAQs', 'Blogs'].map(item => (
                    <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors duration-200">
                        {item}
                    </a>
                ))}
            </div>

            {/* Contact Button */}
            <Button className={`bg-gradient-to-r from-accent-cyan to-bright-cyan-button text-white hover:shadow-[0_0_20px_rgba(35,221,214,0.7)]`}>
                Contact Us
            </Button>
        </div>
    </nav>
);


// =================================================================
// 7. Component: HeroSection (FIXED: Centered Content & Improved Text Flow)
// =================================================================
const HeroSection = () => {
    const bodyText = `EnFu AI is a next-generation artificial intelligence company dedicated to building intelligent, 
    secure, and future-ready solutions. We focus on helping creators, businesses, and innovators 
    thrive in the digital era by combining AI with smart automation and advanced technologies.`;

    return (
        <section 
            className="relative h-screen w-full flex items-center overflow-hidden" 
            style={{ backgroundColor: COLORS.DARK_BACKGROUND }}
        >
            
            {/* Background effect */}
            <div className="absolute inset-0 z-0 bg-black" style={{ opacity: 0.9, filter: 'blur(100px)' }}>
                <div 
                    className="absolute w-full h-full"
                    style={{
                        background: `radial-gradient(circle at 10% 50%, ${COLORS.ACCENT_PURPLE} 0%, transparent 40%)`,
                        opacity: 0.4,
                    }}
                />
            </div>

            {/* Hero Content: NOW CENTERED */}
            {/* 🟢 FIX: Changed flex-col md:flex-row to flex-col for mobile-first centering */}
            {/* 🟢 FIX: Added text-center to center all text content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 w-full flex flex-col items-center text-center">
                
                {/* 🟢 FIX: Removed w-full md:w-1/2 and pr-10, now it's a single centered block */}
                <div className="pt-20 md:pt-0"> 
                    
                    {/* FEATURE 1: Blur Text Stagger - Headline */}
                    <AnimatedWords 
                        className={`text-6xl md:text-7xl lg:text-[7rem] text-white leading-none font-extrabold drop-shadow-xl mb-6`}
                        text={`Empowering the Future with AI Innovation`}
                        delay={80} 
                        duration={1.2} 
                        threshold={0.4}
                    />

                    {/* NEW FEATURE: Blur Text Stagger - Body Copy */}
                    <AnimatedWords 
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-10" // 🟢 FIX: Added mx-auto for centering
                        text={bodyText}
                        delay={20} 
                        duration={1.0} 
                        threshold={0.4}
                    />

                    {/* Learn More Button */}
                    <Button className={`bg-gradient-to-r from-accent-purple to-accent-cyan shadow-xl hover:shadow-[0_0_30px_rgba(70,162,224,0.7)]`}>
                        Learn More
                    </Button>
                </div>

                {/* Removed the empty image div entirely as it's no longer needed for a left/right split */}
            </div>
        </section>
    );
};

// =================================================================
// 8. Component: Services Section (Unchanged)
// =================================================================

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-dark-navy p-6 rounded-lg shadow-xl border border-gray-800 hover:border-accent-cyan transition-all duration-300 transform hover:-translate-y-1">
        <Icon className="w-10 h-10 text-accent-cyan mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const ServicesSection = () => (
    <section id="services" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-4 text-white">Our Core Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
                We deliver intelligent, secure, and scalable AI solutions tailored to drive growth and innovation in your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard 
                    icon={Settings} 
                    title="AI Automation" 
                    description="Streamline operations and reduce manual workload using custom, intelligent workflows."
                />
                <ServiceCard 
                    icon={Shield} 
                    title="Security Solutions" 
                    description="Protect your digital assets with AI-driven threat detection and proactive security."
                />
                <ServiceCard 
                    icon={TrendingUp} 
                    title="Predictive Analytics" 
                    description="Forecast market trends and optimize strategy with machine learning models."
                />
                <ServiceCard 
                    icon={Lightbulb} 
                    title="Innovation Labs" 
                    description="Partner with our R&D team to explore bleeding-edge technologies and AI applications."
                />
            </div>
        </div>
    </section>
);

// =================================================================
// 9. Component: Footer (Unchanged)
// =================================================================
const Footer = () => (
    <footer className="bg-black py-12 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-xl text-white font-bold">
                EnFu AI
            </span>
            <p className="mt-4 text-sm text-gray-400">
                © {new Date().getFullYear()} EnFu AI. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
                <Mail className="w-5 h-5 hover:text-accent-cyan cursor-pointer transition-colors" />
            </div>
        </div>
    </footer>
);


// =================================================================
// MAIN APP COMPONENT
// =================================================================

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            <style>{ANIMATION_STYLES}</style>

            <Navbar isScrolled={isScrolled} />
            <main className="pt-20"> 
                <HeroSection />
                
                <ServicesSection />
                
            </main>
            <Footer />
        </div>
    );
}