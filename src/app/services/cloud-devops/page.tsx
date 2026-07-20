import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cloud, Shield, Monitor, Container, GitBranch, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & DevOps Engineering — NimerTech",
  description:
    "Cloud-native infrastructure, CI/CD pipelines, containerization, cybersecurity, and 24/7 monitoring on AWS, Azure, and GCP.",
};

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    description:
      "Design and migrate to cloud-native architectures on AWS, Azure, or GCP. Lift-and-shift, re-platform, or re-architect for optimal performance.",
  },
  {
    icon: Container,
    title: "Containerization & Orchestration",
    description:
      "Docker containerization and Kubernetes orchestration for scalable, resilient microservices with auto-scaling and self-healing.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Automation",
    description:
      "Automated build, test, and deployment pipelines using GitHub Actions, Jenkins, GitLab CI, and ArgoCD for rapid, reliable releases.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Logging",
    description:
      "24/7 infrastructure monitoring with Prometheus, Grafana, ELK Stack, and Datadog. Real-time alerting and incident response.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description:
      "Enterprise-grade security operations, ISO 27001 compliance readiness, penetration testing, vulnerability scanning, and security audits.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description:
      "Terraform, Ansible, and CloudFormation for repeatable, version-controlled infrastructure provisioning and management.",
  },
];

const techStack = [
  "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform",
  "Ansible", "Jenkins", "GitHub Actions", "ArgoCD",
  "Prometheus", "Grafana", "ELK Stack", "Datadog", "Nginx", "Cloudflare",
];

export default function CloudDevOpsPage() {
  return (
    <main className="pt-20 pb-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-sky-500/8 blur-[120px] pointer-events-none" />
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
                Cloud & Infrastructure
              </span>

              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Cloud & DevOps{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Engineering
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
                Modernize your infrastructure with cloud-native architecture, automated CI/CD pipelines,
                containerization, security hardening, and 24/7 monitoring for maximum uptime and performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(133,135,219,0.4)] transition-all"
                >
                  Get Infrastructure Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-we-vet"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/70 border border-white/10 hover:border-[var(--primary)]/50 hover:text-white transition-all"
                >
                  Our Vetting Process
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                {["AWS / Azure / GCP", "Kubernetes", "CI/CD", "ISO 27001"].map((b) => (
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
                  src="/cloud-devops-illustration.png"
                  alt="Cloud & DevOps Engineering — Holographic cloud infrastructure with Kubernetes pods"
                  width={780}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-[var(--text-secondary)]">Uptime Guarantee</p>
                <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                  99.9<span className="text-[var(--accent)]">%</span>
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
              Services
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white">
              What We Offer
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
            DevOps & Cloud Stack
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 text-sm rounded-xl bg-white/5 text-[var(--text-secondary)] border border-white/5 hover:border-[var(--primary)]/30 hover:text-white transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 via-[var(--card-bg)] to-[var(--accent)]/5 border border-[var(--card-border)] rounded-2xl p-12">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-4">
              Need Infrastructure That Scales?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Get a free infrastructure audit and discover how cloud-native architecture can reduce costs
              and increase reliability.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(133,135,219,0.4)] transition-all"
            >
              Get Infrastructure Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
