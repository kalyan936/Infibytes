import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const Services = () => {
  const services = [
    { title: 'HR Consulting & Talent Resourcing', desc: 'Strategic human capital solutions and elite talent acquisition for high-growth tech enterprises.', tags: ['Recruitment', 'Strategy', 'HR Tech'] },
    { title: 'Data Science, AI & Generative AI', desc: 'Custom LLMs and predictive models designed to unlock competitive advantages through data.', tags: ['LLMs', 'MLOps', 'GenAI'] },
    { title: 'AI Agents & Intelligent Automation', desc: 'Autonomous digital workers and robotic process automation for seamless operational efficiency.', tags: ['Automation', 'Agents', 'Efficiency'] },
    { title: 'Data Engineering & Analytics', desc: 'Robust data pipelines and advanced visualization suites for real-time decision making.', tags: ['Big Data', 'ELT/ETL', 'BI'] },
    { title: 'DevOps & Cloud Infrastructure', desc: 'Resilient, scalable, and secure cloud foundations built on zero-trust principles.', tags: ['SRE', 'AWS/Azure', 'Kubernetes'] },
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-32 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Modular Power.</h1>
          <p className="text-xl text-gray-400">
            Our services are built to be integrated but designed to be independent. Orchestrate your enterprise stack with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="glass-card hover:bg-white/5 transition-all p-8 flex flex-col h-full border-white/5 group">
              <div className="mb-8">
                <div className="w-10 h-10 border border-primary/40 rounded flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-all">
                  0{i+1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
