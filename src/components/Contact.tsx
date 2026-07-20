"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Mail, MapPin, Clock } from "lucide-react";

const infoCards = [
  { icon: Mail, label: "Email Us", value: "info@nimertech.com", sub: "We reply within 24 hours" },
  { icon: MapPin, label: "Headquarters", value: "New Jersey, United States", sub: "NJ, USA" },
  { icon: Clock, label: "Response Time", value: "< 24 Hours", sub: "Average first response" },
];


export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            Get In Touch
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Tell us about your technical roadmap and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Info Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-5 flex flex-col gap-3 hover:border-[var(--primary)]/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                <card.icon className="w-4.5 h-4.5 text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1 font-semibold">
                  {card.label}
                </p>
                <p className="text-sm font-bold text-white">{card.value}</p>
                <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">{card.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-white/70 mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white/70 mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-white/70 mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white/70 mb-2 block">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-white/10 text-white/70 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all text-sm appearance-none">
                    <option value="" className="bg-[#19123b]">Select a service</option>
                    <option value="ai" className="bg-[#19123b]">AI &amp; Machine Learning</option>
                    <option value="software" className="bg-[#19123b]">Custom Software Development</option>
                    <option value="mobile" className="bg-[#19123b]">Mobile App Development</option>
                    <option value="staff" className="bg-[#19123b]">IT Staff Augmentation</option>
                    <option value="cloud" className="bg-[#19123b]">Cloud &amp; DevOps</option>
                    <option value="consulting" className="bg-[#19123b]">Technology Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/70 mb-2 block">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(130,124,224,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Stats */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 flex-1 hover:border-[var(--primary)]/20 transition-all">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-6">
                Why Partner With Us
              </h3>
              <div className="space-y-5">
                {[
                  { stat: "500+", label: "Projects Delivered" },
                  { stat: "97%", label: "Client Satisfaction" },
                  { stat: "48hrs", label: "Average Response Time" },
                  { stat: "30+", label: "Countries Served" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                      {item.stat}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book a call */}
            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--primary)]/20 rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base font-bold text-white mb-2">
                Prefer to talk?
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Schedule a free 30-minute consultation with our solutions architect.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--accent)] hover:text-white transition-colors"
              >
                Book a Call →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
