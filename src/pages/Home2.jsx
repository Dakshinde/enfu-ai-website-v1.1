import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedWords } from '../components/AnimatedWords';
import heroImg from '../assets/ai-chip-image.png';

export const Home2 = () => {
    return (
        <div className="min-h-screen relative text-white overflow-hidden">
            {/* Decorative animated background made with SVG blobs and CSS animations - no external dependency */}
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
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <AnimatedWords text={'Build faster. Smarter. With EnFu AI.'} className={'text-4xl md:text-5xl font-extrabold mb-6 leading-tight'} delay={90} />
                        <p className="text-gray-300 max-w-xl mb-8">We empower enterprises with custom AI-powered products and workflows that scale. Reduce manual work, find insights, and create delightful user experiences powered by state-of-the-art models.</p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="inline-block">
                                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-bright-cyan-button font-semibold">Get in touch</button>
                            </Link>
                            <Link to="/blogs" className="inline-block">
                                <button className="px-6 py-3 rounded-full border border-gray-700 text-white">Read our thoughts</button>
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-[#071018]/60 rounded-2xl border border-gray-800/50">
                                <h4 className="font-bold">Enterprise Integrations</h4>
                                <p className="text-gray-300 text-sm">Connected systems, secure data flows and scalable deployments.</p>
                            </div>
                            <div className="p-4 bg-[#071018]/60 rounded-2xl border border-gray-800/50">
                                <h4 className="font-bold">Product Design</h4>
                                <p className="text-gray-300 text-sm">Human-centered AI interfaces that increase adoption and retention.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-md">
                            <img src={heroImg} alt="AI illustration" className="w-full rounded-2xl shadow-2xl border border-gray-800/60" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-16 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gradient-to-b from-[#071014] to-[#071018] rounded-2xl border border-gray-800/40">
                        <h3 className="text-xl font-bold mb-2">Data to Decisions</h3>
                        <p className="text-gray-300 text-sm">Turn logs, documents and product data into actionable insights with custom pipelines.</p>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-[#071014] to-[#071018] rounded-2xl border border-gray-800/40">
                        <h3 className="text-xl font-bold mb-2">Automation at Scale</h3>
                        <p className="text-gray-300 text-sm">Reduce manual tasks by up to 75% with intelligent automation tailored to your workflows.</p>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-[#071014] to-[#071018] rounded-2xl border border-gray-800/40">
                        <h3 className="text-xl font-bold mb-2">Responsible AI</h3>
                        <p className="text-gray-300 text-sm">Observability, guardrails and human-in-the-loop to keep models safe and reliable.</p>
                    </div>
                </div>
            </section>

            {/* Inline styles for blob animations */}
            <style>{`
                .blob-animate-1 { animation: move1 12s ease-in-out infinite; }
                .blob-animate-2 { animation: move2 14s ease-in-out infinite; }
                .blob-animate-3 { animation: move3 18s ease-in-out infinite; }

                @keyframes move1 { 0%{transform:translate(0,0)}50%{transform:translate(-30px,20px)}100%{transform:translate(0,0)} }
                @keyframes move2 { 0%{transform:translate(0,0)}50%{transform:translate(40px,-30px)}100%{transform:translate(0,0)} }
                @keyframes move3 { 0%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}100%{transform:translate(0,0)} }
            `}</style>
        </div>
    );
};
