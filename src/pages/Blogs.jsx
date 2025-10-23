import React from 'react';
import { Link } from 'react-router-dom';

export const Blogs = () => {
    const posts = [
        { id: 1, title: 'How AI is Transforming Small Businesses', excerpt: 'Practical ways AI can boost efficiency and growth.' },
        { id: 2, title: 'Prompt Engineering 101', excerpt: 'Tips for getting better results from large language models.' },
        { id: 3, title: 'AI Ethics for Startups', excerpt: 'A concise guide to responsible AI adoption.' },
    ];

    return (
        <div className="min-h-screen bg-black text-white py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-4">Blogs</h1>
                <p className="text-gray-300 mb-8">Insights, tutorials and stories about AI, product and growth.</p>

                <div className="grid gap-6 md:grid-cols-2">
                    {posts.map(post => (
                        <article key={post.id} className="bg-gradient-to-br from-[#071014] to-[#071018] p-6 rounded-2xl border border-gray-800/40">
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-300 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <Link to="#" className="text-accent-cyan font-semibold hover:underline">Read more</Link>
                                <span className="text-sm text-gray-400">Sep 2025</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};
