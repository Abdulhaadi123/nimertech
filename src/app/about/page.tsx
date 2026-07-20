import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Heart, Globe, Award, MapPin, Activity, ShieldCheck, Database, Server, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — NimerTech",
  description: "Learn about NimerTech's mission, values, and the team behind AI-powered software solutions and world-class IT talent delivery.",
};

const values = [
  {
    icon: Target,
    title: "Engineering Excellence",
    description: "We follow strict SOLID principles, automated tests pipelines, and container-ready microservices architectures.",
    color: "border-violet-500/20 text-violet-400 bg-violet-500/5",
  },
  {
    icon: Heart,
    title: "Client-First Partnerships",
    description: "We work directly inside your Slack channels, coordinate daily agile standups, and share code updates directly.",
    color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
  },
  {
    icon: Globe,
    title: "Vetted Remote Matching",
    description: "Instant access to engineers synchronized in your timezone. Full technical checks completed beforehand.",
    color: "border-blue-500/20 text-blue-400 bg-blue-500/5",
  },
  {
    icon: Award,
    title: "Continuous Optimization",
    description: "Continuous learning culture covering LLM fine-tuning, vector embeddings, cloud infrastructure scale, and DevOps.",
    color: "border-amber-500/20 text-amber-400 bg-amber-500/5",
  },
];

const milestones = [
  { year: "2017", title: "Boutique Dev Studio Founded", desc: "Launched with a core team of 5 software engineers delivering custom client web modules." },
  { year: "2019", title: "AI/ML Engineering Expansion", desc: "Added dedicated artificial intelligence engineering, building semantic search and custom RAG vectors." },
  { year: "2020", title: "Talent Augmentation Bench", desc: "Established our pre-vetted developer matching system, scaling our active engineer bench to 50+." },
  { year: "2022", title: "100+ Clients & 30 Countries", desc: "Crossed 100 corporate clients with a 4.9 rating on Clutch and global project delivery." },
  { year: "2024", title: "Enterprise Systems Scale", desc: "Grew bench to 200+ active engineers. Added ISO 27001 compliance prep and tech audits." },
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      {/* Background ambient mesh flows */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header — Full-width text only, clean */}
        <div className="text-left mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">About NimerTech</span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Engineering Tomorrow&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Digital Reality</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl font-medium">
            NimerTech is a global technology partner specializing in custom software development, cloud systems, and elite IT staffing — making advanced AI, cloud infrastructure, and full-stack systems accessible for scaling enterprises worldwide.
          </p>
        </div>

        {/* Cinematic Full-Width Agency Photo — large, bold, editorial */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-16 border border-white/[0.06] group" style={{aspectRatio: '16/7'}}>
          <Image
            src="/about-office-hd.png"
            alt="NimerTech Engineering Team"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0822]/90 via-[#0d0822]/20 to-transparent z-10" />
          {/* Bottom-left label badge */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wide">Global Engineering Team — 30+ Countries</span>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {[
            { stat: "500+", label: "Projects Delivered" },
            { stat: "30+", label: "Countries Served" },
            { stat: "200+", label: "Engineers on Bench" },
            { stat: "8+", label: "Years of Excellence" },
          ].map((s) => (
            <div key={s.label} className="text-left p-6 bg-[#19123b]/40 border border-white/[0.06] rounded-2xl">
              <div className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {s.stat}
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Our Core Values (Vibrant principle cards with specific colors) */}
        <div className="mb-24">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">Our Principles</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex items-start gap-5 p-6 bg-[#19123b]/40 border border-white/[0.06] rounded-2xl hover:border-white/20 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-all ${v.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stepped Timeline Journey (Editorial staggered history list, no simple grids) */}
        <div className="mb-24 relative">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">Our History</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white tracking-tight">Our Journey</h2>
          </div>
          
          <div className="relative border-l border-white/[0.06] ml-4 pl-8 space-y-12">
            {milestones.map((m, mi) => (
              <div key={m.year} className="relative group text-left">
                {/* Node connector */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#0d0822] border border-white/10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] group-hover:scale-125 transition-transform" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Staggered text card */}
                  <div className="lg:col-span-8 bg-[#19123b]/40 border border-white/[0.06] rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                      {m.year}
                    </span>
                    <h3 className="text-white font-bold mt-1 mb-2 text-base sm:text-lg">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">{m.desc}</p>
                  </div>
                  {/* Subtle placeholder indicating step index */}
                  <div className="hidden lg:flex lg:col-span-4 text-right justify-end font-mono text-[70px] font-extrabold text-white/5 select-none pr-8">
                    0{mi + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Engineering Hubs (Interactive dashboard styling) */}
        <div className="mb-24">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">Global Scale</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white tracking-tight">Global Engineering Hubs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { 
                city: "San Francisco, CA", 
                role: "HQ & Client Services", 
                country: "United States", 
                stats: { ping: "12ms", active: "15 Leads", servers: "AWS Cloud" }
              },
              { 
                city: "Lahore, Pakistan", 
                role: "Engineering Center", 
                country: "Pakistan", 
                stats: { ping: "142ms", active: "120 Developers", servers: "Dedicated Rack" }
              },
              { 
                city: "Dubai, UAE", 
                role: "Middle East Operations", 
                country: "UAE", 
                stats: { ping: "38ms", active: "10 Architects", servers: "Multi-Cloud" }
              },
            ].map((office) => (
              <div key={office.city} className="p-6 bg-[#19123b]/40 rounded-3xl border border-white/[0.06] hover:border-white/20 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-20 h-20 bg-[var(--primary)]/5 rounded-full blur-xl" />
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-4 group-hover:border-white/20 transition-all">
                    <MapPin className="w-4.5 h-4.5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg">{office.city}</h3>
                  <p className="text-xs text-[var(--text-secondary)] font-semibold mt-1">{office.role}</p>
                </div>

                {/* Sub-dashboard specs */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5 font-mono text-[9px] text-white/50">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-[var(--accent)]" /> Network Ping</span>
                    <span className="text-white font-semibold">{office.stats.ping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3 text-[var(--accent)]" /> Staffing Capacity</span>
                    <span className="text-white font-semibold">{office.stats.active}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1"><Server className="w-3 h-3 text-[var(--accent)]" /> Hosting Node</span>
                    <span className="text-white font-semibold">{office.stats.servers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-white/[0.06] rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">Want to Join Our Team?</h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-8 max-w-lg mx-auto leading-relaxed">We&apos;re always looking for talented engineers and innovators to join our global team.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/careers" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#0c0827] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(97,215,242,0.4)] transition-all duration-300 hover:-translate-y-0.5">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/10 hover:bg-white/5 transition-all duration-300">
              Partner With Us
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
