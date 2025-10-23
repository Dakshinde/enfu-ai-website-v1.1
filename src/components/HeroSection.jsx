import React from 'react';
import { AnimatedWords } from './AnimatedWords';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
    const bodyText = `EnFu AI is a next-generation artificial intelligence company dedicated to building intelligent, secure, and future-ready solutions. We empower creators, businesses, and innovators to thrive in the digital era.`;

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            
            {/* Layer 1: The Background (z-0) */}
            {/* This div sits at the very back and holds your CSS gradient animation. */}
            <div className="absolute top-0 left-0 w-full h-full z-0 animated-gradient" />
            
            {/* Layer 2: The Content (z-10) */}
            {/* This div sits on top of the background, making the text visible. */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <AnimatedWords
                        className={`text-6xl md:text-7xl lg:text-[7rem] text-white leading-none font-extrabold drop-shadow-xl mb-6`}
                        text={`Empowering the Future with AI Innovation`}
                        delay={80}
                        duration={1.2} // Added the duration prop back
                    />
                    <AnimatedWords
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                        text={bodyText}
                        delay={20}
                        duration={1.0} // Added the duration prop back
                    />
                    <Link to = "/about" classname="inline-block">
                    <Button className={`bg-gradient-to-r from-accent-purple to-accent-cyan shadow-xl hover:shadow-[0_0_30px_rgba(70,162,224,0.7)]`}>
                        Learn More
                    </Button>
                    </Link>
                </div>
                
            </div>
        </section>
    );
};