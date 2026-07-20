import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Users, Clock, Shield, Briefcase, Star, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Staff Augmentation — NimerTech",
  description: "Scale your team instantly with pre-vetted senior engineers. Direct hire, retainer programs, dedicated teams, and on-demand engineers deployed within 48 hours.",
};

const engagementModels = [
  { icon: Briefcase, title: "Direct Hire Placement", description: "Traditional per-hire fee model for permanent roles. We source, vet, and present top candidates aligned to your culture and requirements.", tag: "Per-Hire Fee" },
  { icon: Users, title: "Dedicated Teams", description: "Fully embedded engineering squads that operate as an extension of your team. Dedicated PM, daily standups, and seamless integration.", tag: "Monthly Retainer" },
  { icon: Zap, title: "On-Demand Engineers", description: "Ready-to-go offshore engineering teams for rapid scaling. Budget-friendly rates with zero recruitment overhead.", tag: "Hourly / Monthly" },
  { icon: Star, title: "Executive Search & Headhunting", description: "Focused recruitment for hard-to-fill senior, executive, and C-level technology leadership positions.", tag: "Success Fee" },
];

const roles = [
  "Frontend Developers (React, Angular, Vue)", "Backend Developers (Node.js, Python, Java, .NET)", "Full-Stack Engineers", "Mobile App Developers (iOS, Android, React Native, Flutter)",
  "AI/ML Engineers", "Data Scientists & Engineers", "DevOps & SRE Engineers", "Cloud Architects (AWS, Azure, GCP)",
  "QA & Test Automation Engineers", "UI/UX Designers", "Product Managers", "Engineering Managers",
  "Blockchain & Web3 Developers", "Cybersecurity Specialists", "Business Analysts", "Technical Project Managers",
];

const vettingSteps = [
  { step: "01", title: "Technical Screening", desc: "Resume review, portfolio analysis, and preliminary skills assessment against role requirements." },
  { step: "02", title: "Coding Challenge", desc: "Domain-specific coding test evaluating problem-solving, code quality, architecture decisions, and edge case handling." },
  { step: "03", title: "Live Technical Interview", desc: "Pair programming session with our senior engineers covering system design, algorithms, and real-world scenarios." },
  { step: "04", title: "Culture & Communication", desc: "Behavioral interview assessing communication skills, collaboration style, remote work readiness, and cultural alignment." },
  { step: "05", title: "Reference Verification", desc: "Professional background check, past employer verification, and portfolio project validation." },
];

export default function StaffAugmentationPage() {
  return (
    <main className="pt-32 pb-20 relative">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Split Content + Premium Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <Link href="/services" className="text-sm text-[var(--accent)] hover:underline mb-4 block">← Back to Services</Link>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              IT Staff <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Augmentation</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              Scale your engineering team in 48 hours, not 48 days. Access our pre-vetted pool of 200+ senior engineers across every tech stack — with flexible engagement models, replacement guarantees, and zero recruitment overhead.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl border border-white/10 p-2 shadow-2xl bg-white/[0.02] backdrop-blur-md overflow-hidden group">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)]/50 rounded-tl-2xl z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--primary)]/50 rounded-br-2xl z-20" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/staff-aug-illustration.png"
                  alt="NimerTech Developer Augmentation Talent Mesh Illustration"
                  fill
                  className="object-cover transition-transform duration-750 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a28]/60 via-transparent to-transparent z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { stat: "48hrs", label: "Average Deployment" }, { stat: "200+", label: "Engineers on Bench" },
            { stat: "97%", label: "Client Retention" }, { stat: "Top 3%", label: "Talent Accepted" },
          ].map((s) => (
            <div key={s.label} className="text-center p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
              <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">{s.stat}</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Engagement Models */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-8">Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((m) => (
              <div key={m.title} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <m.icon className="w-8 h-8 text-[var(--accent)]" />
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">{m.tag}</span>
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white mb-2">{m.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vetting Process */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-8">Our 5-Stage Vetting Pipeline</h2>
          <div className="space-y-4">
            {vettingSteps.map((v) => (
              <div key={v.step} className="flex items-start gap-5 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent shrink-0">{v.step}</span>
                <div><h3 className="text-white font-semibold mb-1">{v.title}</h3><p className="text-sm text-[var(--text-secondary)]">{v.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Employment Types */}
        <div className="mb-20 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-4">Supported Employment Types</h2>
          <div className="flex flex-wrap gap-3">
            {["W-2 (Full-Time)", "1099 (Independent Contractor)", "C2C (Corp-to-Corp)", "Contract-to-Hire", "Part-Time / Hourly", "Onshore & Offshore"].map((t) => (
              <span key={t} className="px-4 py-2 text-sm rounded-lg bg-white/5 text-[var(--text-secondary)] border border-white/5 font-semibold">{t}</span>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-6">Roles Available On-Demand</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {roles.map((r) => (
              <div key={r} className="flex items-center gap-2 p-3 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span className="text-sm text-[var(--text-secondary)] font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: "48-Hour Deployment", desc: "From requirement brief to resource deployment in under 48 hours." },
            { icon: Shield, title: "Replacement Guarantee", desc: "If an engineer isn't the right fit, we replace them at no additional cost." },
            { icon: Star, title: "12-Hour Response Time", desc: "We respond to every hiring brief within 12 hours, guaranteed." },
          ].map((g) => (
            <div key={g.title} className="text-center p-6 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 rounded-2xl border border-[var(--card-border)]">
              <g.icon className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-2">{g.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--card-border)] rounded-2xl p-10">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Scale Your Team?</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-lg mx-auto">Tell us the roles you need and we&apos;ll match you with pre-vetted engineers within 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#0c0827] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(97,215,242,0.4)] transition-all">
            Hire Top Talent <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
