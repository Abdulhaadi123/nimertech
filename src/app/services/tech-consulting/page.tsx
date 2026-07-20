import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Lightbulb,
  Target,
  FileSearch,
  ShieldCheck,
  BarChart3,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Consulting — NimerTech",
  description:
    "Strategic technology advisory: AI readiness assessments, architecture design, ISO 27001 preparedness, digital transformation roadmaps, and vendor evaluation.",
};

const services = [
  {
    icon: Lightbulb,
    title: "AI Readiness Assessment",
    description:
      "Evaluate your data maturity, infrastructure, and organizational readiness for AI adoption. Get a clear roadmap with prioritized use cases and ROI projections.",
  },
  {
    icon: Target,
    title: "Architecture Design & Review",
    description:
      "System design for new projects or architectural validation for existing platforms. Scalability audits, performance optimization, and technology stack recommendations.",
  },
  {
    icon: ShieldCheck,
    title: "ISO 27001 & Compliance",
    description:
      "Prepare your organization for ISO 27001 certification. Gap analysis, policy development, risk assessment, and implementation roadmaps.",
  },
  {
    icon: FileSearch,
    title: "Technology Audit & Due Diligence",
    description:
      "Comprehensive codebase audits, infrastructure assessments, and technical due diligence for mergers, acquisitions, and investment decisions.",
  },
  {
    icon: BarChart3,
    title: "Digital Transformation Strategy",
    description:
      "End-to-end digital transformation roadmaps covering process automation, cloud migration, data strategy, and change management.",
  },
  {
    icon: Compass,
    title: "Vendor & Platform Evaluation",
    description:
      "Independent evaluation of technology vendors, SaaS platforms, and build vs. buy decisions with detailed comparison matrices.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "Understand your challenges, goals, and constraints in a free 30-minute consultation.",
  },
  {
    step: "02",
    title: "Assessment",
    desc: "Deep-dive analysis of your current systems, processes, and organizational readiness.",
  },
  {
    step: "03",
    title: "Strategic Roadmap",
    desc: "Deliverable with prioritized recommendations, timelines, budgets, and risk mitigation.",
  },
  {
    step: "04",
    title: "Implementation Support",
    desc: "Hands-on guidance during execution with regular check-ins and course corrections.",
  },
];

export default function TechConsultingPage() {
  return (
    <main className="pt-20 pb-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-pink-500/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[var(--primary)]/6 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <Link
                href="/services"
                className="flex w-fit items-center gap-1.5 text-xs text-[var(--accent)] hover:text-white transition-colors mb-6 opacity-70 hover:opacity-100"
              >
                ← Back to Services
              </Link>

              <span className="inline-block text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-4">
                Strategic Advisory
              </span>

              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Technology{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Consulting
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
                Strategic advisory to accelerate your digital transformation. From AI readiness assessments
                and architecture design to ISO 27001 preparedness and technology roadmaps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(133,135,219,0.4)] transition-all"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-we-vet"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/70 border border-white/10 hover:border-[var(--primary)]/50 hover:text-white transition-all"
                >
                  Our Vetting Process
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                {["AI Strategy", "ISO 27001", "Architecture Review", "Risk Audit"].map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[var(--text-secondary)]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Illustration */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[var(--primary)]/20 shadow-[0_0_80px_rgba(133,135,219,0.1)]">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)]/60 rounded-tl-2xl z-10" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--accent)]/60 rounded-tr-2xl z-10" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--primary)]/60 rounded-bl-2xl z-10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--primary)]/60 rounded-br-2xl z-10" />
                <Image
                  src="/tech-consulting-illustration.png"
                  alt="Technology Consulting — Holographic strategy board with glowing roadmap"
                  width={780}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-[var(--text-secondary)]">Assessments Done</p>
                <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                  80<span className="text-[var(--accent)]">+</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">
              Advisory Services
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white">
              How We Help You Win
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(133,135,219,0.08)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                  <s.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consulting Process ─────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-10 text-center">
            Our Consulting Engagement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--primary)]/30 transition-all group"
              >
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  {s.step}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mt-3 mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 via-[var(--card-bg)] to-[var(--accent)]/5 border border-[var(--card-border)] rounded-2xl p-12">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-4">
              Need Expert Technology Guidance?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Book a free 30-minute discovery call with our solutions architects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(133,135,219,0.4)] transition-all"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
