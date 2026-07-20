"use client";

const logos = [
  "TechNova", "CloudSync", "DataPulse", "FinEdge", "MedAxis",
  "ShopSphere", "EduVerse", "PropFlow", "LogiTrack", "StreamVault",
  "CodeForge", "CyberShield",
];

export default function TrustedBy() {
  return (
    <section className="py-10 border-b border-white/[0.06] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/25 mb-6 font-semibold">
          Trusted by Industry Leaders Worldwide
        </p>
        <div className="relative overflow-hidden">
          {/* Gradient Masks for smooth scroll edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee w-max">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 mx-10 opacity-25 hover:opacity-60 transition-opacity duration-300"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base font-extrabold text-white whitespace-nowrap tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
