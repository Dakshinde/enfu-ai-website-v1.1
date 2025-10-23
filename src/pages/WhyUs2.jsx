import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedWords } from '../components/AnimatedWords';
import heroImg from '../assets/ai-chip-image.png';


export const WhyUs2 = () => {
    const parallaxRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const offset = window.scrollY;
                parallaxRef.current.style.transform = `translateY(${offset * 0.15}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="min-h-screen relative text-white overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="g1" x1="0%" x2="100%">
                            <stop offset="0%" stopColor="#052022" />
                            <stop offset="100%" stopColor="#02121a" />
                        </linearGradient>
                        <filter id="blur">
                            <feGaussianBlur stdDeviation="60" />
                        </filter>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#g1)" />
                    <g filter="url(#blur)" opacity="0.85">
                        <circle cx="20%" cy="30%" r="160" fill="#063542" className="blob-animate-1" />
                        <circle cx="80%" cy="20%" r="140" fill="#02303a" className="blob-animate-2" />
                        <circle cx="60%" cy="75%" r="200" fill="#042a3a" className="blob-animate-3" />
                    </g>
                </svg>
            </div>
            <section className="relative z-10 py-28 px-6 lg:px-20">
                {/* Animated gradient background for hero section */}
                <div className="absolute inset-0 w-full h-full -z-10 animate-gradient-move" style={{background: 'linear-gradient(120deg, #0f2027, #2c5364, #1c92d2, #f2fcfe)'}} />
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        {/* Split text animation for headline, React Bits style */}
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple animate-split-text">
                            {"About EnFu AI".split("").map((char, i) => (
                                <span key={i} style={{animationDelay: `${i * 0.06}s`}} className="inline-block opacity-0 animate-fade-in-split">{char}</span>
                            ))}
                        </h1>
                        <p className="text-gray-300 max-w-xl mb-8">We deliver enterprise-grade AI solutions with world-class design, security, and reliability. Our team blends deep technical expertise with creative product thinking to help you win in your market.</p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="inline-block">
                                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-bright-cyan-button font-semibold hover:scale-105 transition-transform">Get in touch</button>
                            </Link>
                            <Link to="/blogs" className="inline-block">
                                <button className="px-6 py-3 rounded-full border border-gray-700 text-white hover:bg-accent-cyan/20 transition-colors">Read our thoughts</button>
                            </Link>
                        </div>
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-[#071018]/60 rounded-2xl border border-gray-800/50 hover:scale-105 transition-transform animate-fade-in">
                                <h4 className="font-bold">Enterprise Integrations</h4>
                                <p className="text-gray-300 text-sm">Connected systems, secure data flows and scalable deployments.</p>
                            </div>
                            <div className="p-4 bg-[#071018]/60 rounded-2xl border border-gray-800/50 hover:scale-105 transition-transform animate-fade-in delay-100">
                                <h4 className="font-bold">Product Design</h4>
                                <p className="text-gray-300 text-sm">Human-centered AI interfaces that increase adoption and retention.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                            <div className="w-full max-w-md" ref={parallaxRef}>
                                <img src={heroImg} alt="AI illustration" className="w-full rounded-2xl shadow-2xl border border-gray-800/60" />
                            </div>
                    </div>
                </div>
                <style>{`
                    .animate-gradient-move {
                        animation: gradientMove 8s ease-in-out infinite alternate;
                    }
                    @keyframes gradientMove {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 100% 50%; }
                    }
                    .animate-split-text span {
                        animation: fadeInSplit 0.7s cubic-bezier(.57,.21,.69,1.25) forwards;
                    }
                    @keyframes fadeInSplit {
                        from { opacity: 0; transform: translateY(30px) scale(0.8); }
                        to { opacity: 1; transform: none; }
                    }
                `}</style>
            </section>
            <section className="relative z-10 py-16 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gradient-to-b from-[#071014] to-[#071018] rounded-2xl border border-gray-800/40 hover:scale-105 transition-transform animate-fade-in">
                        <h3 className="text-xl font-bold mb-2">Data to Decisions</h3>
                        <p className="text-gray-300 text-sm">Turn logs, documents and product data into actionable insights with custom pipelines.</p>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-[#071014] to-[#071018] rounded-2xl border border-gray-800/40 hover:scale-105 transition-transform animate-fade-in delay-100">
                        <h3 className="text-xl font-bold mb-2">Automation at Scale</h3>
                        <p className="text-gray-300 text-sm">Reduce manual tasks by up to 75% with intelligent automation tailored to your workflows.</p>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-[#071014] to-[#071018] rounded-2xl border border-gray-800/40 hover:scale-105 transition-transform animate-fade-in delay-200">
                        <h3 className="text-xl font-bold mb-2">Responsible AI</h3>
                        <p className="text-gray-300 text-sm">Observability, guardrails and human-in-the-loop to keep models safe and reliable.</p>
                    </div>
                </div>
            </section>
            <style>{`
                .blob-animate-1 { animation: move1 12s ease-in-out infinite; }
                .blob-animate-2 { animation: move2 14s ease-in-out infinite; }
                .blob-animate-3 { animation: move3 18s ease-in-out infinite; }
                @keyframes move1 { 0%{transform:translate(0,0)}50%{transform:translate(-30px,20px)}100%{transform:translate(0,0)} }
                @keyframes move2 { 0%{transform:translate(0,0)}50%{transform:translate(40px,-30px)}100%{transform:translate(0,0)} }
                @keyframes move3 { 0%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}100%{transform:translate(0,0)} }
                .animate-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
            `}</style>
        </div>
    );
}
