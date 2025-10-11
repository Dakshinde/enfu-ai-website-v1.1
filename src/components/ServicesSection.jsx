import React from 'react';
import { Settings, Shield, TrendingUp, Lightbulb } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-card-dark p-6 rounded-lg shadow-xl border border-white/10 hover:border-accent-cyan transition-all duration-300 transform hover:-translate-y-1">
        <Icon className="w-10 h-10 text-accent-cyan mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

export const ServicesSection = () => (
    <section id="services" className="py-20 bg-dark-background text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-4 text-white">Our Core Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
                We deliver intelligent, secure, and scalable AI solutions tailored to drive growth and innovation in your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard icon={Settings} title="AI Automation" description="Streamline operations and reduce manual workload using custom, intelligent workflows." />
                <ServiceCard icon={Shield} title="Security Solutions" description="Protect your digital assets with AI-driven threat detection and proactive security." />
                <ServiceCard icon={TrendingUp} title="Predictive Analytics" description="Forecast market trends and optimize strategy with our advanced machine learning models." />
                <ServiceCard icon={Lightbulb} title="Innovation Labs" description="Partner with our R&D team to explore bleeding-edge technologies and AI applications." />
            </div>
        </div>
    </section>
);