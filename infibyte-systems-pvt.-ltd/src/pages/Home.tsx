import React from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export const Home = () => {
  return (
    <PageTransition>
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-dark/10 blur-[100px] rounded-full animate-pulse-slow" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Infibyte Systems Pvt. Ltd.
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
            DIGITAL PRECISION<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              INFINITE SCALE.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Leading-edge cloud infrastructure, distributed AI systems, and robust cybersecurity for the enterprise of tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 bg-primary text-surface font-bold rounded-full hover:scale-105 transition-transform">
              EXPLORE SOLUTIONS
            </button>
            <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
              WATCH REEL
            </button>
          </div>
        </div>

        {/* Floating Numbers/Stats Placeholder */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="font-mono text-sm text-gray-600 space-y-1">
            <p>LATENCY: 0.04ms</p>
            <p>THROUGHPUT: 1.2TB/s</p>
            <p>UPTIME: 99.9999%</p>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <section className="py-24 px-6 border-y border-white/5 bg-surface-soft">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-12">Trusted by Global Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale">
             {/* Mock logo placeholders */}
             {[1,2,3,4,5].map(i => (
               <div key={i} className="text-2xl font-bold text-white tracking-tighter italic">CORP-0{i}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Core Expertise</h2>
            <div className="h-1 w-20 bg-primary" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI & Automation', desc: 'Deploying autonomous agents and intelligent automation to revolutionize operations.' },
              { title: 'Data Intelligence', desc: 'Turning enterprise data into actionable insights with Data Science and Engineering.' },
              { title: 'Cloud Mastery', desc: 'Secure, scalable DevOps and cloud infrastructure for the modern enterprise.' }
            ].map((service, i) => (
              <div key={i} className="glass-card p-10 group hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <div className="w-6 h-6 border-2 border-primary group-hover:border-surface" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8">{service.desc}</p>
                <div className="text-primary font-semibold flex items-center gap-2 cursor-pointer">
                  Learn More <span className="text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
