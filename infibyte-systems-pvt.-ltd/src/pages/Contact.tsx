import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Let's Interface.</h1>
            <p className="text-xl text-gray-400 mb-12">
              Ready to architect your next decade? Reach out to our synchronization team.
            </p>

            <div className="space-y-8">
              {[
                { Icon: MapPin, text: 'Outer Ring Road, Bengaluru, KA, India' },
                { Icon: Phone, text: '+91 80 4421 9000' },
                { Icon: Mail, text: 'hr@infibytetech.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-4 text-gray-400">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-10 border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Enterprise Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Project Details</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-surface font-bold rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                INITIATE CONTACT <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
