import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const Careers = () => {
  const jobs = [
    { title: 'Principal Distributed Systems Engineer', loc: 'Remote / SF', type: 'Full-time' },
    { title: 'AI Infrastructure Architect', loc: 'Berlin', type: 'Full-time' },
    { title: 'Security Research Lead', loc: 'Tokyo', type: 'Full-time' },
    { title: 'Senior UX Designer (Spatial Computing)', loc: 'Remote', type: 'Contract' },
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
          Join the Elite.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-20 leading-relaxed">
          We don't hire "developers." We hire architects, visionaries, and precision-driven hackers who want to build the world's most stable digital foundations.
        </p>

        <div className="space-y-4 max-w-4xl mx-auto text-left">
          {jobs.map((job, i) => (
            <div key={i} className="glass-card p-8 group hover:border-primary/40 transition-all flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                <div className="flex gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                  <span>{job.loc}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <button className="px-6 py-3 border border-white/10 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-surface transition-all">
                VIEW ROLE
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
