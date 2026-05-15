import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const Industries = () => {
  const industries = [
    { name: 'Healthcare', icon: '🏥', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
    { name: 'E-commerce', icon: '🛒', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800' },
    { name: 'Finance', icon: '💼', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800' },
    { name: 'Banking', icon: '🏦', image: 'https://images.unsplash.com/photo-1541354329998-f447a4c92970?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-20 tracking-tighter max-w-4xl">
          Powering the most critical sectors on the planet.
        </h1>
        
        <div className="grid md:grid-cols-2 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="group relative h-[400px] rounded-2xl overflow-hidden border border-white/5">
              <img 
                src={ind.image} 
                alt={ind.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <span className="text-4xl mb-4">{ind.icon}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{ind.name}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">
                  Seamless integration of high-performance architecture tailored for {ind.name.toLowerCase()} compliance and scale.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
