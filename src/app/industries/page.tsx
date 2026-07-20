import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, HeartPulse, ShoppingBag, Truck, Film, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve — NimerTech",
  description: "Explore NimerTech's domain expertise across FinTech, Healthcare, E-Commerce, Logistics, Media, and Enterprise SaaS.",
};

const industries = [
  {
    icon: Landmark,
    number: "01",
    name: "FinTech & Banking",
    tagline: "Secure. Compliant. Fast.",
    description:
      "We architect PCI-DSS compliant transaction pipelines, multi-currency digital wallets, and automated KYC/AML systems. Our fintech platforms process millions in daily volume with zero downtime SLAs and deep Stripe, Plaid, and open banking API integrations.",
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "PCI-DSS", label: "Compliance" },
      { value: "50M+", label: "Transactions/Day" },
    ],
    solutions: ["Digital Wallets", "KYC/AML Automation", "Payment Gateways", "Open Banking APIs", "Fraud Detection"],
    accent: "#7c6fe0",
  },
  {
    icon: HeartPulse,
    number: "02",
    name: "Healthcare & MedTech",
    tagline: "HIPAA-Hardened. Patient-First.",
    description:
      "We build HIPAA-compliant clinical platforms — from EHR/EMR FHIR integrations to telehealth portals and AI-assisted diagnostic assistants. Every system is architected with end-to-end encryption, audit trails, and role-based access control built in from day one.",
    stats: [
      { value: "HIPAA", label: "Compliant" },
      { value: "FHIR R4", label: "Standard" },
      { value: "0", label: "Data Breaches" },
    ],
    solutions: ["EHR/EMR Integrations", "Telehealth Portals", "Clinical AI Summaries", "HIPAA Audit Trails", "HL7 FHIR APIs"],
    accent: "#60c4f4",
  },
  {
    icon: ShoppingBag,
    number: "03",
    name: "E-Commerce & Retail",
    tagline: "Conversion-Optimized. Scalable.",
    description:
      "Headless commerce architectures, vector-search powered recommendation engines, and real-time inventory systems designed for high-traffic flash sales. Our storefronts handle surge events without downtime, with cart-to-checkout funnels engineered for maximum conversions.",
    stats: [
      { value: "3x", label: "Faster Load Times" },
      { value: "40%", label: "Avg Conversion Lift" },
      { value: "10M+", label: "SKUs Managed" },
    ],
    solutions: ["Headless Commerce", "AI Recommendations", "Real-Time Inventory", "Multi-Currency Checkout", "Analytics Dashboards"],
    accent: "#a78bfa",
  },
  {
    icon: Truck,
    number: "04",
    name: "Logistics & Supply Chain",
    tagline: "Real-Time. Route-Optimized.",
    description:
      "GPS coordinate tracking, vehicle routing algorithm optimization, and fleet dispatch managers that scale across hundreds of drivers in real time. We build warehouse control panels, IoT device pipelines, and last-mile delivery status portals.",
    stats: [
      { value: "30%", label: "Fuel Cost Savings" },
      { value: "<5ms", label: "Location Latency" },
      { value: "10K+", label: "Fleet Vehicles" },
    ],
    solutions: ["Route Optimization", "Live Fleet Tracking", "Warehouse WMS", "IoT Pipelines", "Dispatch Management"],
    accent: "#34d399",
  },
  {
    icon: Film,
    number: "05",
    name: "Media & Entertainment",
    tagline: "Low-Latency. DRM-Protected.",
    description:
      "High-performance video/audio streaming platforms with adaptive bitrate encoding, DRM content protection, and creator monetization portals. We build custom subscription billing systems and content delivery architectures trusted at scale.",
    stats: [
      { value: "4K", label: "Stream Quality" },
      { value: "<200ms", label: "Latency" },
      { value: "99.9%", label: "Availability" },
    ],
    solutions: ["Adaptive Streaming", "DRM Protection", "Creator Portals", "Subscription Billing", "CDN Architecture"],
    accent: "#f97316",
  },
  {
    icon: Layout,
    number: "06",
    name: "Enterprise SaaS",
    tagline: "Multi-Tenant. API-First.",
    description:
      "Multi-tenant SaaS platforms with role-based permission systems, third-party API integration frameworks, and automated billing engines. We build customizable business process automation tools that help enterprises scale operations without proportional headcount growth.",
    stats: [
      { value: "10K+", label: "Active Tenants" },
      { value: "99.9%", label: "Uptime" },
      { value: "SOC 2", label: "Ready" },
    ],
    solutions: ["Multi-Tenancy", "Billing Engines", "Workflow Automation", "White-Label Portals", "API Marketplaces"],
    accent: "#e879f9",
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      {/* Background ambient */}
      <div className="absolute top-0 left-[-15%] w-[600px] h-[600px] bg-[var(--primary)]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent)]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Page Header ── */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">Domain Expertise</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                Serve
              </span>
            </h1>
            <p className="text-base text-[var(--text-secondary)] max-w-md leading-relaxed lg:text-right">
              Deep domain expertise across 6 verticals — engineering solutions that meet the specific compliance, 
              performance, and scalability requirements of each industry.
            </p>
          </div>
          {/* Thin divider */}
          <div className="mt-10 h-px bg-gradient-to-r from-[var(--primary)]/40 via-white/10 to-transparent" />
        </div>

        {/* ── Industry Rows ── */}
        <div className="space-y-0">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={ind.name}
                className="group py-12 border-b border-white/[0.06] last:border-b-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEven ? "" : "lg:direction-rtl"}`}>

                  {/* ─ Left: Number + Icon + Name ─ */}
                  <div className="lg:col-span-4 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <span
                        className="font-[family-name:var(--font-space-grotesk)] text-5xl font-extrabold leading-none"
                        style={{ color: ind.accent + "20" }}
                      >
                        {ind.number}
                      </span>
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: ind.accent + "15", border: `1px solid ${ind.accent}25` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: ind.accent }} />
                      </div>
                    </div>

                    <div>
                      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-white mb-1 leading-tight">
                        {ind.name}
                      </h2>
                      <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ind.accent }}>
                        {ind.tagline}
                      </p>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {ind.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-2xl p-3 text-left"
                          style={{ background: ind.accent + "08", border: `1px solid ${ind.accent}18` }}
                        >
                          <div
                            className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold leading-none mb-1"
                            style={{ color: ind.accent }}
                          >
                            {s.value}
                          </div>
                          <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider leading-tight">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ─ Right: Description + Solutions ─ */}
                  <div className="lg:col-span-8 flex flex-col justify-start gap-6 lg:pl-8 lg:border-l" style={{ borderColor: ind.accent + "20" }}>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed font-medium">
                      {ind.description}
                    </p>

                    {/* Solutions chips */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">What We Deliver</p>
                      <div className="flex flex-wrap gap-2">
                        {ind.solutions.map((sol) => (
                          <span
                            key={sol}
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                            style={{
                              background: ind.accent + "12",
                              border: `1px solid ${ind.accent}28`,
                              color: ind.accent,
                            }}
                          >
                            {sol}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover CTA */}
                    <div className="mt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 opacity-50 group-hover:opacity-100"
                        style={{ color: ind.accent }}
                      >
                        Discuss Your {ind.name} Project <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-20 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#19123b]/30 p-10 sm:p-14">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-transparent" />
          <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] bg-[var(--primary)]/8 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Ready to Build in Your Industry?
              </h2>
              <p className="text-sm text-[var(--text-secondary)] max-w-lg leading-relaxed">
                Tell us your domain. We'll scope your architecture, assemble the right engineers, and ship in weeks — not quarters.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#0c0827] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_30px_rgba(130,124,224,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
