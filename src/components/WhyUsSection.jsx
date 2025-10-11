import React from 'react';
import { CheckCircle, Zap, Users } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, children }) => (
    <li className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <Icon className="w-6 h-6 text-accent-cyan" />
        </div>
        <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="text-gray-400 mt-1">{children}</p>
        </div>
    </li>
);

export const WhyUsSection = () => (
    <section id="why-us" className="py-20 bg-black text-white">
        {/* The grid is removed to make the content centered */}
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-4">Why Choose EnFu AI?</h2>
            <p className="text-xl text-gray-400 mb-12">
                We're not just another AI company. We are your dedicated partners in innovation, committed to delivering tangible results.
            </p>
            {/* The list is now centered and text is aligned left for readability */}
            <ul className="space-y-6 text-left max-w-2xl mx-auto">
                <FeatureItem icon={Zap} title="Cutting-Edge Technology">
                    We leverage the latest advancements in AI and machine learning to give you a competitive edge.
                </FeatureItem>
                <FeatureItem icon={Users} title="Expert Team">
                    Our team consists of industry veterans and passionate researchers dedicated to your success.
                </FeatureItem>
                <FeatureItem icon={CheckCircle} title="Proven Results">
                    We have a track record of delivering high-impact solutions for businesses of all sizes.
                </FeatureItem>
            </ul>
        </div>
    </section>
);