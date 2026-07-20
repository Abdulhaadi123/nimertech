import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, Users, Award, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Vet Talent — NimerTech",
  description: "Learn about NimerTech's rigorous 5-stage vetting process to select and onboard the top 3% of global software engineering talent.",
};

const vettingStages = [
  {
    step: "01",
    title: "Initial Profile Screening",
    metric: "80% filtered out",
    description: "We review resumes, portfolio projects, and verify work history. Only candidates with verified mid-to-senior level expertise and strong English communication skills proceed.",
    details: ["Resume & portfolio evaluation", "Automated background check", "Language & communication check"],
  },
  {
    step: "02",
    title: "Algorithmic & Skill Coding Assessment",
    metric: "only 15% proceed",
    description: "Candidates solve timed coding problems focusing on data structures, algorithmic complexity, language-specific depth, and clean code conventions.",
    details: ["Data structures & algorithms test", "Language-specific deep dive", "Clean code standards check"],
  },
  {
    step: "03",
    title: "Live Pair-Programming & System Design",
    metric: "only 6% proceed",
    description: "A 90-minute live session with our Senior Tech Leads. Candidates build a system component in real-time and defend their architectural decisions, scalability, and design patterns.",
    details: ["Live coding challenge", "System design & architecture", "Security & scaling defense"],
  },
  {
    step: "04",
    title: "Soft Skills & Tech Fit Review",
    metric: "only 4.2% proceed",
    description: "Evaluation of collaborative abilities, product mindset, agility, and project management skills. We ensure they can integrate smoothly into remote agile workflows.",
    details: ["Behavioral interviews", "Agile scrum compatibility", "Problem-solving analysis"],
  },
  {
    step: "05",
    title: "Reference Checking & Trial Period",
    metric: "top 3% hired",
    description: "We perform formal checks with past technical supervisors. Once cleared, engineers start with a 2-week risk-free trial period to guarantee a perfect match.",
    details: ["Manager reference check", "Security clearance check", "2-week trial monitoring"],
  },
];

export default function VettingProcessPage() {
  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      {/* Background ambient flows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            Our Quality Shield
          </span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            How We Vet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Top 3%</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Inspired by elite global engineering frameworks, our rigorous 5-stage vetting pipeline filters out hundreds of applicants so you only work with absolute experts.
          </p>
        </div>

        {/* Funnel Dropoff Visual (Horizontal Flow for Desktop) */}
        <div className="bg-[#19123b]/30 border border-white/[0.06] rounded-3xl p-6 sm:p-8 mb-20 text-center relative overflow-hidden">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Our Talent Pipeline Selection Funnel</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "1. Applicants", val: "100%", sub: "Initial intake" },
              { label: "2. Screened", val: "20%", sub: "Pass profiles" },
              { label: "3. Coding Test", val: "15%", sub: "Pass algorithms" },
              { label: "4. Live Review", val: "6%", sub: "Pass live build" },
              { label: "5. Active Bench", val: "3%", sub: "Final match" },
            ].map((f, i) => (
              <div key={i} className="bg-[#0c0827] rounded-2xl border border-white/5 p-4 flex flex-col justify-center">
                <span className="text-[10px] text-[var(--text-secondary)] font-semibold mb-1 truncate">{f.label}</span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-extrabold text-white">{f.val}</span>
                <span className="text-[9px] text-[var(--text-secondary)]/70 mt-1">{f.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vetting Steps Staggered List */}
        <div className="space-y-12 mb-20">
          {vettingStages.map((stage, index) => (
            <div 
              key={stage.step} 
              className="bg-[#19123b]/40 border border-white/[0.06] rounded-3xl p-6 sm:p-10 hover:border-white/20 transition-all duration-300 flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch"
            >
              {/* Step Index & Funnel Tag */}
              <div className="flex flex-col justify-between lg:w-4/12 gap-4">
                <div>
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                    {stage.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-white mt-2">
                    {stage.title}
                  </h3>
                </div>
                <div className="inline-flex mt-auto mr-auto px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold uppercase tracking-wider">
                  {stage.metric}
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block w-px bg-white/[0.06] self-stretch" />

              {/* Step Details & Explanations */}
              <div className="flex flex-col justify-center lg:w-8/12 text-left">
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
                  {stage.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {stage.details.map((detail, di) => (
                    <div key={di} className="flex items-center gap-2 text-xs text-white/80 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span className="font-semibold">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Bottom Block */}
        <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-white/[0.06] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              Work With Pre-Vetted Software Engineers
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-8 max-w-lg mx-auto leading-relaxed">
              Skip the recruitment search and start matching with our vetted top 3% tech talent today.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#0c0827] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(130,124,224,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Matching Talent <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
