"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, MessageCircle, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "Top 3% Technical Talent",
    description:
      "Our rigorous 5-stage assessments, algorithmic vetting, and live pair-programming sessions guarantee you work with elite, battle-tested senior engineers.",
  },
  {
    icon: Zap,
    title: "48-Hour Engineering Deployment",
    description:
      "We match and deploy senior developers tailored to your specific tech stack and timezone within 48 hours. No recruitment overhead, no project delays.",
  },
  {
    icon: MessageCircle,
    title: "Transparent & Direct Communication",
    description:
      "Daily standups, shared Slack channels, and direct developer communication keep you in complete command of your roadmap at all times.",
  },
  {
    icon: Settings,
    title: "Flexible Engagement Scaling",
    description:
      "Scale resource capacity dynamically based on project scope. Choose dedicated software engineering teams, fractional support, or direct placement.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-28 relative border-t border-white/[0.04]">
      {/* Decorative ambient flows */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Sticky Headline & CTA) */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28 h-fit">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
              Why NimerTech
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Built as an extension of your core team
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              We eliminate traditional hiring friction, providing immediate technical leadership, top-tier engineering talent, and battle-tested processes to ship code faster.
            </p>
            <div className="flex">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                Schedule Team Assessment
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column (Premium Benefit Rows) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#19123b]/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-all">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>

                  {/* Benefit Description */}
                  <div className="text-left">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
