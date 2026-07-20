import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Layers,
  Repeat,
  Globe,
  Database,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development — NimerTech",
  description:
    "Full-cycle custom software development: SaaS platforms, enterprise applications, MVPs, application modernization, and API integrations.",
};

const capabilities = [
  {
    icon: Code2,
    title: "SaaS Platform Development",
    description:
      "Multi-tenant, subscription-ready platforms with billing, analytics dashboards, user management, and scalable cloud architecture.",
  },
  {
    icon: Layers,
    title: "Enterprise Software",
    description:
      "Mission-critical enterprise applications with role-based access, audit trails, SSO integration, and complex business logic.",
  },
  {
    icon: Repeat,
    title: "MVP Development",
    description:
      "Rapid prototyping and minimum viable products to validate your idea and achieve product-market fit in weeks, not months.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, responsive web apps using React, Angular, Vue.js, and Next.js with server-side rendering and progressive enhancement.",
  },
  {
    icon: Database,
    title: "Application Modernization",
    description:
      "Migrate legacy systems to modern microservices architecture. Re-platform, re-host, or completely re-build aging applications.",
  },
  {
    icon: Settings,
    title: "API & System Integration",
    description:
      "RESTful and GraphQL APIs, third-party integrations, payment gateways, CRM/ERP connectors, and middleware solutions.",
  },
];

const techStack = {
  Frontend: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "Java", ".NET", "Go", "Laravel", "Ruby on Rails"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Firebase"],
};

const approach = [
  {
    title: "Agile Sprints",
    desc: "2-week sprints with daily standups, weekly demos, and continuous feedback loops. Full transparency at every stage.",
  },
  {
    title: "Clean Architecture",
    desc: "SOLID principles, clean code, comprehensive testing (unit, integration, E2E), and CI/CD-ready codebases.",
  },
  {
    title: "Scalability First",
    desc: "Microservices, event-driven architecture, horizontal scaling, and auto-scaling infrastructure from day one.",
  },
  {
    title: "Security by Design",
    desc: "OWASP compliance, encrypted data at rest and in transit, regular penetration testing, and vulnerability scanning.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <main className="pt-20 pb-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Background glow blobs */}
        <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[var(--accent)]/8 blur-[120px] pointer-events-none" />

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
                Custom Development
              </span>

              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Custom Software{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
                From MVP to enterprise-scale platforms, we architect and build robust, scalable
                software tailored to your unique business requirements and growth trajectory.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(133,135,219,0.4)] transition-all"
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-we-vet"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/70 border border-white/10 hover:border-[var(--primary)]/50 hover:text-white transition-all"
                >
                  Our Vetting Process
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-10">
                {["SaaS Platforms", "Enterprise Apps", "MVPs", "API Integrations"].map((b) => (
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
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)]/60 rounded-tl-2xl z-10" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--accent)]/60 rounded-tr-2xl z-10" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--primary)]/60 rounded-bl-2xl z-10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--primary)]/60 rounded-br-2xl z-10" />
                <Image
                  src="/custom-software-illustration.png"
                  alt="Custom Software Development — Holographic code editor with microservices architecture"
                  width={780}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-[var(--text-secondary)]">Projects Delivered</p>
                <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                  500<span className="text-[var(--accent)]">+</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities Grid ──────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">
              Capabilities
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white">
              What We Build
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(133,135,219,0.08)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                  <c.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-8 text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([cat, techs]) => (
              <div
                key={cat}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5"
              >
                <h3 className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-[var(--text-secondary)] border border-white/5 hover:border-[var(--primary)]/30 hover:text-white transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Approach ─────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-8 text-center">
            Our Development Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {approach.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] hover:border-[var(--primary)]/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
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
              Have a Software Idea?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Let&apos;s discuss your requirements and build a roadmap to bring it to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(133,135,219,0.4)] transition-all"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
