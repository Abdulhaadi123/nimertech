"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your target audience requirements, project parameters, and business metrics to define a clear technology roadmap.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Architecture",
    description:
      "Our software architects define solid system dependencies and microservices, while UI designers build crisp interactive mockups.",
  },
  {
    icon: Code,
    number: "03",
    title: "Agile Development",
    description:
      "Using two-week sprints, we write clean code, build microservices, and deploy tests. Weekly calls and live demos keep you fully in loop.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy & Scale Support",
    description:
      "We launch your software smoothly using automated CI/CD pipelines, container orchestration, and continuous system monitoring.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-20 sm:py-28 relative border-t border-white/[0.04]">
      {/* Background Decor */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            How We Work
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Battle-Tested Workflow
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From initial strategy formulation to cloud scaling and post-launch maintenance, we ensure seamless delivery.
          </p>
        </motion.div>

        {/* Process Timeline Grid (Staggered modern card row, no template connecting lines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#19123b]/40 border border-white/[0.06] rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                {/* Step Index Label */}
                <div className="absolute top-5 right-5 font-mono text-xs font-semibold text-white/10 group-hover:text-[var(--accent)]/30 transition-colors">
                  {step.number}
                </div>

                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:border-white/20 transition-all">
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
