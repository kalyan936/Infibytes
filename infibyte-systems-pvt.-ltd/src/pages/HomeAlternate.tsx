import React from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export const HomeAlternate = () => {
  return (
    <PageTransition>
      {/* 1. Hero / Video Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden py-20 px-6">
        <div className="absolute inset-0 z-0 bg-surface-dark">
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Big Play Button Wrapper */}
          <div className="relative mb-12 flex justify-center items-center">
            {/* Glowing rings */}
            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150" />
            <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-pulse-slow" />
            <div className="absolute inset-[-80px] border border-white/5 rounded-full animate-pulse-slow delay-150" />
            
            <button className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-400 to-primary flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_40px_rgba(124,58,237,0.5)] z-10 group">
              <svg 
                className="w-10 h-10 text-white ml-2 group-hover:scale-110 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </button>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed mx-auto">
            We deliver cutting-edge technology solutions that empower enterprises to innovate, scale, and achieve operational excellence. From cloud infrastructure to intelligent automation, we are your trusted partner in digital transformation.
          </p>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-20 px-6 bg-[#0B0F19] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-white font-semibold text-lg">Happy Clients</h4>
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">Delivering exceptional value to enterprises globally and ensuring satisfaction.</p>
              <div className="text-5xl font-bold text-white tracking-tighter">8,900+</div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-white font-semibold text-lg">Projects Delivered</h4>
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">Successfully executing complex technology initiatives on time and on budget.</p>
              <div className="text-5xl font-bold text-white tracking-tighter">2,750+</div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-white font-semibold text-lg">Global Reach</h4>
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">Providing scalable solutions across diverse global markets and regions.</p>
              <div className="text-5xl font-bold text-white tracking-tighter">42+</div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-white font-semibold text-lg">Expert Team</h4>
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">A dedicated team of industry-leading technologists and consultants.</p>
              <div className="text-5xl font-bold text-white tracking-tighter">400+</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About / Values Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Driving Innovation and Success Together
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We combine deep industry expertise with advanced technology to deliver solutions that drive sustainable growth. Our commitment to excellence ensures that your business stays ahead of the curve in a rapidly changing digital landscape.
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors text-sm tracking-wider uppercase">
                Discover More
              </button>
            </div>

            {/* Right Image/Values */}
            <div className="lg:w-1/2 relative w-full rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
              {/* Background image placeholder - user can update src */}
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Image: Team Collaboration</span>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-y-0 left-0 w-2/3 bg-black/80 backdrop-blur-sm p-8 flex flex-col justify-center">
                <ul className="space-y-4">
                  {['Innovation First', 'Data-Driven Thinking', 'Collaboration Matters', 'Customer-Centric Mindset', 'Continuous Learning', 'Ownership and Accountability'].map((val, idx) => (
                    <li key={idx} className="text-gray-300 font-medium border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. Services Grid (Bottom part of screenshot 3) */}
      <section className="py-20 px-6 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Service 1 */}
            <div className="flex flex-col">
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Automation</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                Streamline workflows and increase efficiency with our advanced AI-driven automation tools designed for complex enterprises.
              </p>
              <button className="self-start px-6 py-2 border border-white/20 text-white hover:bg-white/10 rounded transition-colors text-xs font-semibold tracking-wider uppercase">
                Learn More
              </button>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col">
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data-Driven Insights</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                Leverage powerful analytics and data engineering to make informed, strategic business decisions with clarity and precision.
              </p>
              <button className="self-start px-6 py-2 border border-white/20 text-white hover:bg-white/10 rounded transition-colors text-xs font-semibold tracking-wider uppercase">
                Learn More
              </button>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col">
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                Future-proof your enterprise with robust, scalable architectures designed for rapid growth and uncompromised performance.
              </p>
              <button className="self-start px-6 py-2 border border-white/20 text-white hover:bg-white/10 rounded transition-colors text-xs font-semibold tracking-wider uppercase">
                Learn More
              </button>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col">
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Seamless Integration</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                Connect your disparate systems effortlessly for a unified and highly optimized digital ecosystem.
              </p>
              <button className="self-start px-6 py-2 border border-white/20 text-white hover:bg-white/10 rounded transition-colors text-xs font-semibold tracking-wider uppercase">
                Learn More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Integrations / CTA Section */}
      <section className="py-24 px-6 bg-surface-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Explore Infibytes Systems Services and Solutions for Smarter Operations
              </h2>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center items-start lg:items-end">
              <p className="text-gray-400 mb-8 text-lg">
                Empower your business with our comprehensive suite of intelligent solutions. We design, build, and deploy enterprise-grade systems that transform your operations.
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors text-sm tracking-wider uppercase">
                Discover More
              </button>
            </div>
          </div>

          <div className="bg-[#121626] rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white max-w-sm">
              Power Up with Integrations to Popular Tech Platforms
            </h3>
            <div className="flex gap-4 flex-wrap justify-center">
              {/* Integration Badges */}
              {['GCP', 'DO', 'VULTR', 'AWS'].map((platform, i) => (
                <div key={i} className="px-6 py-3 bg-[#1A1F30] border border-white/10 rounded-xl text-white font-bold text-sm tracking-wider shadow-inner">
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
};
