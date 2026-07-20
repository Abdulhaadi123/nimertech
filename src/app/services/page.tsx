import { Metadata } from "next";
import Link from "next/link";
import { Brain, Code2, Smartphone, Users, Cloud, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — NimerTech",
  description: "Explore NimerTech's full range of technology services: AI & Machine Learning, Custom Software Development, Mobile Apps, Staff Augmentation, Cloud & DevOps, and Technology Consulting.",
};

const services = [
  {
    icon: Brain, 
    title: "AI & Machine Learning Solutions", 
    href: "/services/ai-ml-solutions",
    description: "Custom AI/ML models, RAG systems, LangChain integrations, Pinecone vector databases, and GPT-powered intelligent chatbots that deliver measurable business ROI.",
    highlights: ["Generative AI & LLMs", "RAG Systems", "Agentic AI Workflows", "OpenAI-Powered Chatbots"],
    gradient: "from-violet-500/10 to-indigo-500/5",
    borderGlow: "hover:border-[var(--primary)]/40 hover:shadow-[0_0_30px_rgba(130,124,224,0.15)]",
  },
  {
    icon: Code2, 
    title: "Custom Software Development", 
    href: "/services/custom-software",
    description: "Full-cycle product development from MVP to enterprise-scale platforms. We architect robust, scalable software tailored to your unique business requirements.",
    highlights: ["SaaS Platforms", "Enterprise Web Apps", "MVP Development", "API Integrations"],
    gradient: "from-blue-500/10 to-cyan-500/5",
    borderGlow: "hover:border-[var(--accent)]/40 hover:shadow-[0_0_30px_rgba(74,212,237,0.15)]",
  },
  {
    icon: Smartphone, 
    title: "Mobile App Development", 
    href: "/services/mobile-apps",
    description: "Native and cross-platform mobile experiences that users love. High-performance iOS and Android applications with stunning UI and seamless functionality.",
    highlights: ["iOS & Android Native", "React Native & Flutter", "Payment Apps", "On-Demand Services"],
    gradient: "from-emerald-500/10 to-teal-500/5",
    borderGlow: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Users, 
    title: "IT Staff Augmentation", 
    href: "/services/staff-augmentation",
    description: "Scale your team instantly with pre-vetted senior engineers. Multiple engagement models including dedicated teams, direct hire, retainer programs, and on-demand engineers.",
    highlights: ["48-Hour Matching", "5-Stage Vetting Pipeline", "Dedicated Squads", "Flexible Scaling"],
    gradient: "from-amber-500/10 to-orange-500/5",
    borderGlow: "hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  {
    icon: Cloud, 
    title: "Cloud & DevOps Engineering", 
    href: "/services/cloud-devops",
    description: "Modernize your infrastructure with cloud-native architecture, CI/CD pipelines, containerization, security hardening, and 24/7 monitoring for maximum uptime.",
    highlights: ["AWS / Azure / GCP", "Kubernetes & Docker", "CI/CD Automation", "Cybersecurity Audits"],
    gradient: "from-sky-500/10 to-indigo-500/5",
    borderGlow: "hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
  },
  {
    icon: Lightbulb, 
    title: "Technology Consulting", 
    href: "/services/tech-consulting",
    description: "Strategic advisory to accelerate your digital transformation. AI readiness assessments, architecture design, ISO 27001 preparedness, and technology roadmaps.",
    highlights: ["AI Readiness Review", "Architecture Design", "ISO 27001 Prep", "Vendor Matrix"],
    gradient: "from-pink-500/10 to-rose-500/5",
    borderGlow: "hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 relative">
      {/* Background Decorative Lines */}
      <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[50%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">What We Do</span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Our Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Capabilities</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
            From intelligence automation to full-stack engineering and pre-vetted senior talent — we deliver high-performance technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block h-full">
              <div className={`relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between ${service.borderGlow}`}>
                {/* Background radial glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                      <service.icon className="w-5.5 h-5.5 text-[var(--accent)]" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="relative z-10 mt-auto pt-4 border-t border-white/5 space-y-2">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Dynamic CTA Board */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--card-border)] rounded-3xl p-8 sm:p-12 text-center backdrop-blur-sm">
          {/* Decorative glows */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--primary)]/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[var(--accent)]/20 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">Not sure which service fits your roadmap?</h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-8 leading-relaxed font-medium">
              Schedule a free 30-minute call with our technology architect. We will evaluate your requirements, design scope, and suggest the right implementation model.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#0c0827] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(97,215,242,0.4)] hover:scale-[1.02] transition-all duration-300">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
