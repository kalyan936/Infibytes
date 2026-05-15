import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const About = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 inline-block">The Infibyte Ecosystem</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Scale with Certainty.</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
               Infibyte Systems Pvt. Ltd. is a synergy of elite talent and advanced computation. We don't just provide services; we architect the operational backbone for the world's most ambitious enterprises.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
               Our approach is holistic—integrating HR consulting to find the right minds, Data Engineering to build the right foundations, and Generative AI to unlock unprecedented value. We believe that in the age of intelligence, speed must be matched by precision.
            </p>
            <div className="grid grid-cols-2 gap-8 py-10 border-t border-white/10">
               <div>
                  <p className="text-4xl font-bold text-white mb-1">12+</p>
                  <p className="text-gray-500 uppercase text-xs tracking-widest font-semibold">Years of Innovation</p>
               </div>
               <div>
                  <p className="text-4xl font-bold text-white mb-1">500+</p>
                  <p className="text-gray-500 uppercase text-xs tracking-widest font-semibold">Global Deployments</p>
               </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3" />
            <div className="absolute inset-0 glass-card flex items-center justify-center p-12 -rotate-3 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&q=80&w=800" 
                 alt="Lab background" 
                 className="absolute inset-0 opacity-20 grayscale brightness-50 object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="relative text-center">
                 <p className="text-3xl font-light italic text-white/80 leading-snug">
                   "We architect the systems that define tomorrow's market leaders."
                 </p>
                 <p className="mt-6 text-primary font-bold uppercase tracking-widest">— STRATEGY DIVISION</p>
               </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="py-24 border-t border-white/10">
          <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">Our Operational Philosophy</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Consult', desc: 'Deep-dive into enterprise friction points to identify optimization vectors.' },
              { step: '02', title: 'Architect', desc: 'Designing resilient data schemas and custom AI models tailored to intent.' },
              { step: '03', title: 'Embed', desc: 'Deploying specialist talent and autonomous agents into existing workflows.' },
              { step: '04', title: 'Accelerate', desc: 'Continuous CI/CD loops and MLOps to ensure infinite scalability.' }
            ].map((item) => (
              <div key={item.step} className="space-y-4">
                <span className="text-primary font-mono text-xl">{item.step}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
