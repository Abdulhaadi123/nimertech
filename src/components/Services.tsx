"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Brain,
  Code2,
  Smartphone,
  Users,
  Cloud,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    href: "/services/ai-ml-solutions",
    description:
      "Transform your business with intelligent automation. We build custom AI/ML models, RAG systems, LangChain integrations, and GPT-powered chatbots that deliver measurable ROI.",
    tags: ["Generative AI", "LLMs", "RAG Systems", "Agentic AI"],
    gradient: "from-violet-500/10 via-indigo-500/5 to-transparent",
    borderGlow: "hover:border-[var(--primary)]/40 hover:shadow-[0_0_30px_rgba(133,135,219,0.15)]",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    href: "/services/custom-software",
    description:
      "From MVP to enterprise-scale platforms, we architect and build robust, scalable software tailored to your unique business requirements and growth trajectory.",
    tags: ["SaaS Platforms", "Enterprise Web", "API Integration"],
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    borderGlow: "hover:border-[var(--accent)]/40 hover:shadow-[0_0_30px_rgba(97,215,242,0.15)]",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    href: "/services/mobile-apps",
    description:
      "Native and cross-platform mobile experiences that users love. We design and develop high-performance iOS and Android applications with stunning UIs.",
    tags: ["iOS & Android", "React Native", "Flutter"],
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    borderGlow: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Users,
    title: "IT Staff Augmentation",
    href: "/services/staff-augmentation",
    description:
      "Scale your team instantly with pre-vetted senior engineers. No recruitment delays, no overheads — just top 3% talent ready to integrate with your workflow.",
    tags: ["Dedicated Teams", "48-Hour Match", "Direct Hire"],
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    borderGlow: "hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Engineering",
    href: "/services/cloud-devops",
    description:
      "Modernize your infrastructure with cloud-native architecture, CI/CD pipelines, containerization, and 24/7 monitoring for maximum uptime.",
    tags: ["AWS/GCP/Azure", "Kubernetes", "CI/CD Pipelines"],
    gradient: "from-sky-500/10 via-indigo-500/5 to-transparent",
    borderGlow: "hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    href: "/services/tech-consulting",
    description:
      "Strategic advisory to accelerate your digital transformation. AI readiness assessments, architecture design, technology roadmaps, and vendor evaluation.",
    tags: ["AI Strategy", "ISO 27001 Prep", "Risk Audit"],
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    borderGlow: "hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        href={service.href}
        className={`group relative flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${service.borderGlow}`}
      >
        {/* Subtle Gradient Glow in Background */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            {/* Icon Wrapper */}
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
              <service.icon className="w-5.5 h-5.5 text-[var(--accent)]" />
            </div>

            {/* Title */}
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {service.description}
            </p>
          </div>

          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.03] text-[var(--text-secondary)] border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Explore Link */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
              <span>Explore Solution</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 25 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            Our Expertise
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Custom Tech Services Built to Scale
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Delivering high-performance custom development and strategic AI integrations for forward-thinking organizations worldwide.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
