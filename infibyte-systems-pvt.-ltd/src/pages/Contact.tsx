import React from "react";
import { PageTransition } from "../components/PageTransition";
import { Send, MapPin, Mail, Building2 } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      Icon: MapPin,
      title: "Office Address",
      text: "#52, 3rd Cross, Aswath Nagar, Marathahalli, Bengaluru, Karnataka - 560037",
    },
    {
      Icon: Mail,
      title: "HR & Careers",
      text: "hr@infibytetech.com",
    },
    {
      Icon: Building2,
      title: "Business Inquiries",
      text: "manjunath@infibytetech.com",
    },
  ];

  const focusAreas = [
    "HR Consulting",
    "AI Solutions",
    "Generative AI",
    "AI Agents",
    "Data Engineering",
    "DevOps & Cloud",
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Contact Infibyte
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-8 tracking-tighter">
            Let’s Build Something Intelligent.
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
            Connect with us for AI solutions, automation, data engineering,
            cloud infrastructure, DevOps, or talent resourcing support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-10 border border-white/10 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-6">
                Reach Our Team
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8">
                Share your business requirement, hiring need, or technology
                challenge. Our team will review it and connect with you.
              </p>

              <div className="space-y-6">
                {contactInfo.map(({ Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Icon size={20} className="text-primary" />
                    </div>

                    <div>
                      <p className="text-white font-semibold mb-1">{title}</p>
                      <p className="text-gray-400 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-10 border border-white/10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                What We Can Help With
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-gray-300 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-10 border border-white/10 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-8">
              Send An Inquiry
            </h2>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                  Requirement
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors">
                  <option className="bg-surface text-white">
                    Select a service
                  </option>
                  <option className="bg-surface text-white">
                    HR Consulting & Talent Resourcing
                  </option>
                  <option className="bg-surface text-white">
                    Data Science, AI & Generative AI Solutions
                  </option>
                  <option className="bg-surface text-white">
                    AI Agents & Intelligent Automation Solutions
                  </option>
                  <option className="bg-surface text-white">
                    Data Engineering & Advanced Analytics
                  </option>
                  <option className="bg-surface text-white">
                    DevOps & Cloud Infrastructure Services
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, hiring need, or business challenge..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-surface font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
