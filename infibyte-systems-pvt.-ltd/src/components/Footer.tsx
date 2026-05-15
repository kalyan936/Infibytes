import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-surface-soft border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <NavLink to="/" className="flex items-center gap-2 mb-6">
              <Logo />
            </NavLink>
            <p className="text-gray-400 max-w-sm mb-8">
              Architecting the next generation of digital infrastructure through AI-driven innovation and precision engineering.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Careers', 'Industries', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {['HR Consulting', 'Data Science & AI', 'AI Agents', 'Data Engineering', 'DevOps & Cloud'].map((item) => (
                <li key={item}>
                  <a href="/services" className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Infibyte Systems Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
