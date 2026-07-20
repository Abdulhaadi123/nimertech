import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Globe, BookOpen, Heart, Coffee,
  Laptop, GraduationCap, MapPin, Clock, Zap, Users, Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — NimerTech",
  description: "Join NimerTech's global engineering team. Explore open positions, internship programs, and our engineering culture.",
};

const stats = [
  { value: "200+", label: "Engineers Worldwide" },
  { value: "30+", label: "Countries" },
  { value: "4.9★", label: "Glassdoor Rating" },
  { value: "92%", label: "Retention Rate" },
];

const perks = [
  {
    icon: Globe,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world. We embrace async communication and trust-based flexibility across time zones.",
    accent: "#7c6fe0",
  },
  {
    icon: BookOpen,
    title: "Learning & Growth",
    description: "Annual $2,000 learning budget, conference sponsorships, internal tech talks, and structured mentorship programs.",
    accent: "#60c4f4",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health coverage, mental health support through partnerships, and monthly wellness stipends.",
    accent: "#f472b6",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, unlimited PTO, and protected no-meeting Fridays designed for deep engineering focus.",
    accent: "#fb923c",
  },
  {
    icon: Laptop,
    title: "Best-in-Class Tools",
    description: "Latest MacBook Pro, your choice of IDE and tools, and full cloud development environment setup on day one.",
    accent: "#34d399",
  },
  {
    icon: Zap,
    title: "Equity & Rewards",
    description: "Competitive salaries benchmarked globally, performance bonuses, and equity options for senior contributors.",
    accent: "#fbbf24",
  },
];

const openRoles = [
  { title: "Senior AI/ML Engineer", location: "Remote", type: "Full-time", team: "AI Division", level: "Senior" },
  { title: "Full-Stack Developer (React/Node)", location: "Remote", type: "Full-time", team: "Engineering", level: "Mid–Senior" },
  { title: "DevOps Engineer (AWS/K8s)", location: "Remote", type: "Full-time", team: "Infrastructure", level: "Senior" },
  { title: "Mobile Developer (React Native)", location: "Remote", type: "Full-time", team: "Mobile", level: "Mid" },
  { title: "UI/UX Designer", location: "Remote", type: "Full-time", team: "Design", level: "Mid–Senior" },
  { title: "Technical Project Manager", location: "Remote", type: "Full-time", team: "Delivery", level: "Senior" },
  { title: "AI/ML Intern (Summer 2025)", location: "Remote / NJ", type: "Internship", team: "AI Division", level: "Intern" },
  { title: "Software Engineering Intern", location: "Remote / NJ", type: "Internship", team: "Engineering", level: "Intern" },
];

const teamValues = [
  { icon: Star, label: "Excellence First", text: "We ship clean code, not just fast code." },
  { icon: Users, label: "Team Over Ego", text: "Great ideas come from collaboration, not silos." },
  { icon: Globe, label: "Global Mindset", text: "30+ countries, one engineering culture." },
  { icon: Zap, label: "Ship & Iterate", text: "We move fast, measure, and improve." },
];

export default function CareersPage() {
  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      {/* Background ambiants */}
      <div className="absolute top-0 left-[-15%] w-[700px] h-[700px] bg-[var(--primary)]/6 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Hero Header ── */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-5 block font-semibold">
            Join The Team
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] max-w-2xl">
              Build What&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                Next
              </span>
              <br />With Us
            </h1>
            <p className="text-base text-[var(--text-secondary)] max-w-sm leading-relaxed lg:text-right">
              200+ engineers across 30+ countries, building AI-powered software for the world&apos;s fastest-growing companies.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl px-5 py-4 text-left"
              >
                <div className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-white mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-gradient-to-r from-[var(--primary)]/40 via-white/10 to-transparent mb-20" />

        {/* ── Engineering Values ── */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-white/30 mb-3 block font-semibold">How We Work</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {teamValues.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all"
                >
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{v.label}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Perks Grid ── */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-white/30 mb-2 block font-semibold">Benefits</span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Engineers Love NimerTech
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all"
                    style={{ background: p.accent + "15", border: `1px solid ${p.accent}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: p.accent }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Open Positions ── */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-white/30 mb-2 block font-semibold">Now Hiring</span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Open Positions
              </h2>
            </div>
            <span className="text-xs text-[var(--text-secondary)] font-semibold border border-white/10 rounded-full px-3 py-1.5">
              {openRoles.length} roles open
            </span>
          </div>

          <div className="space-y-3">
            {openRoles.map((role, idx) => (
              <Link
                key={role.title}
                href="/contact"
                className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[var(--primary)]/30 transition-all duration-300"
              >
                {/* Left: Role number + Title */}
                <div className="flex items-center gap-5 min-w-0">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-white/10 shrink-0 hidden sm:block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold group-hover:text-[var(--accent)] transition-colors text-base sm:text-lg truncate">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                      <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)] font-medium">
                        <Users className="w-3 h-3" />
                        {role.team}
                      </span>
                      <span className="text-white/10">·</span>
                      <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)] font-medium">
                        <MapPin className="w-3 h-3" />
                        {role.location}
                      </span>
                      <span className="text-white/10">·</span>
                      <span className="text-xs text-[var(--text-secondary)] font-medium">
                        {role.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Badge + Arrow */}
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span
                    className={`hidden sm:inline-flex text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      role.type === "Internship"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                    }`}
                  >
                    {role.type}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-white/[0.06] group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>



        {/* ── CTA ── */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 p-8 sm:p-14 text-center">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]" />
          <div className="relative z-10">
            <Clock className="w-8 h-8 text-[var(--accent)] mx-auto mb-4 opacity-60" />
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-8 max-w-lg mx-auto leading-relaxed">
              We&apos;re always looking for exceptional engineers and builders. Send us your resume and we&apos;ll review for fit within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#0c0827] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_30px_rgba(130,124,224,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Send Your Resume <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
