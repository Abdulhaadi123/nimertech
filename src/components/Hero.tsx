"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

// High-quality official colored brand logos for clients
const ClientLogos = () => (
  <div className="w-full max-w-4xl mx-auto mt-12 mb-8">
    <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-6 font-semibold">
      Trusted by Teams at Global Innovators
    </p>
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
      {/* Google (Official Colors) */}
      <svg className="h-6 w-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </svg>
      {/* Amazon (Official Black/Orange Arrow) */}
      <svg className="h-5 w-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFFFFF" d="M15.93 17.06c-1.39.92-2.9 1.4-4.5 1.4-2.82 0-5.15-1.57-5.15-4.73 0-3.72 2.86-5.1 7.23-5.1h2.24V7.5c0-1.63-.78-2.55-2.6-2.55-1.55 0-3.1.66-4.04 1.34l-.84-2.02c1.23-.9 3.32-1.57 5.58-1.57 3.53 0 4.96 1.76 4.96 4.94v6.86c0 1.54.58 2.14 1.15 2.14.34 0 .74-.18 1.05-.44l.7 1.8c-.68.68-1.74 1.14-2.77 1.14-1.8 0-2.48-1.12-2.56-2.72zm-2.92-6.52c-2.6 0-4.14.7-4.14 2.65 0 1.44 1 2.2 2.46 2.2 1.56 0 2.85-.85 2.85-2.64v-2.2h-1.17z"/>
        <path fill="#FF9900" d="M21.39 19.32c-3.1 2.38-7.53 3.68-11.4 3.68-5.36 0-10.05-2.45-12.72-6.38-.28-.41.05-.72.48-.48 3.03 1.74 6.8 2.64 10.75 2.64 4.54 0 9.25-1.3 12.44-4.05.5-.43.95.12.45.6z"/>
      </svg>
      {/* Microsoft (Official 4 Colors) */}
      <svg className="h-5 w-auto" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F25022" d="M0 0h11v11H0z"/>
        <path fill="#7FBA00" d="M12 0h11v11H12z"/>
        <path fill="#00A4EF" d="M0 12h11v11H0z"/>
        <path fill="#FFB900" d="M12 12h11v11H12z"/>
      </svg>
      {/* Salesforce (Official Cyan-Blue) */}
      <svg className="h-6 w-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#00A1E0" d="M17.4 9.1c-.2-1.9-1.8-3.4-3.8-3.4-.9 0-1.7.3-2.4.9-.7-1.7-2.4-2.9-4.4-2.9-2.3 0-4.1 1.6-4.5 3.8C1 8.2 0 9.8 0 11.6c0 2.5 2 4.6 4.5 4.6h12.9c3.6 0 6.6-3 6.6-6.6 0-3.3-2.5-6.1-5.7-6.5-1-.9-2.3-1.4-3.7-1.4-2 0-3.7 1.2-4.4 2.9-.7-.6-1.5-.9-2.4-.9-2 0-3.6 1.5-3.8 3.4-1.6.7-2.7 2.3-2.7 4.1 0 2.5 2 4.5 4.5 4.5h12.9c3.6 0 6.6-2.9 6.6-6.5 0-3.6-3-6.5-6.6-6.5z"/>
      </svg>
      {/* Slack (Official 4 Colors) */}
      <svg className="h-5.5 w-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm0-6.341a2.528 2.528 0 0 1 2.52-2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H2.522A2.528 2.528 0 0 1 0 11.346v-2.52a2.528 2.528 0 0 1 2.522-2.523h2.52z"/>
        <path fill="#36C5F0" d="M8.823 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm6.341 0a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52a2.528 2.528 0 0 1-2.522-2.52V5.043z"/>
        <path fill="#2EB67D" d="M18.958 8.824a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522V8.824zm0 6.341a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.522-2.522 2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52z"/>
        <path fill="#ECB22E" d="M15.177 18.958a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm-6.341 0a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v5.043a2.528 2.528 0 0 1-2.522 2.52z"/>
      </svg>
    </div>
  </div>
);

// Official branded colored SVGs for the technology marquee
const techStack = [
  {
    name: "React",
    svg: (
      <svg className="w-5 h-5 fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <ellipse rx="11" ry="4.2" cx="12" cy="12" stroke="#61DAFB" strokeWidth="2"/>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 12 12)"/>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.892 18.258l-5.617-7.234v7.234H10.45v-9.9h1.758l5.292 6.842V8.358h1.825v9.9h-1.433z"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#339933" d="M12 1l10.4 6v12L12 23 1.6 19V7L12 1zm0 2.2L3.6 8v8l8.4 4.8 8.4-4.8V8L12 3.2zm0 4.8l6 3.4v2.8l-6 3.4-6-3.4v-2.8l6-3.4z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3776AB" d="M11.97 0C5.37 0 5.5 4.5 5.5 4.5v3h6.5V9H5.5S2 9 2 13.5s3.5 4.5 3.5 4.5h2v-2.7c0-2 1.6-3.3 3.3-3.3h5.7c2 0 3.3-1.6 3.3-3.3V3.5S19.8 0 11.97 0z"/>
        <path fill="#FFD343" d="M12.03 24c6.6 0 6.47-4.5 6.47-4.5v-3H12V15h6.5S22 15 22 10.5s-3.5-4.5-3.5-4.5h-2v2.7c0 2-1.6 3.3-3.3 3.3H7.5c-2 0-3.3 1.6-3.3 3.3V20.5S4.2 24 12.03 24z"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF9900" d="M18.07 14.88c-.89.6-1.8.85-2.85.85-1.95 0-3.5-1.15-3.5-3.15 0-2.45 1.8-3.4 4.85-3.4h1.5v-.5c0-1.1-.5-1.7-1.7-1.7-1 0-2 .4-2.6.9l-.6-1.3c.8-.6 2.1-1.1 3.5-1.1 2.3 0 3.3 1.2 3.3 3.3v4.6c0 1 .4 1.4.8 1.4.2 0 .5-.1.7-.3l.5 1.2c-.4.4-1.1.7-1.8.7-1.2 0-1.6-.7-1.7-1.8zm-1.85-4.3c-1.7 0-2.7.4-2.7 1.7 0 .9.6 1.4 1.6 1.4 1 0 1.9-.5 1.9-1.7V10.6h-.8zm3.55 8.1c-2.1 1.6-5.1 2.5-7.7 2.5-3.6 0-6.8-1.7-8.6-4.3-.2-.3 0-.5.3-.3 2 1.2 4.6 1.8 7.3 1.8 3.1 0 6.3-.9 8.5-2.7.3-.3.6.1.2.4z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2496ED" d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.937 0h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.937 0h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186H8.109c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.936 0h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186H5.173c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm2.936-2.946h2.119c.102 0 .186-.084.186-.186V5.829c0-.102-.084-.186-.186-.186H8.109c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm2.937 0h2.119c.102 0 .186-.084.186-.186V5.829c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm2.937 0h2.119c.102 0 .186-.084.186-.186V5.829c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.937-2.947h2.119c.102 0 .186-.084.186-.186V2.883c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zM24 13.082c-.893-.9-2.585-.9-3.478 0-.486.491-1.077 1.258-3.036 1.258h-6.223v2.247c0 .54.407.962.96.962h9.274c3.483 0 5.626-3.565 2.503-4.467z"/>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#326CE5" d="M11.398 0l10.158 5.867v11.731l-10.158 5.868L1.24 17.598V5.867L11.398 0zm.01 2.379L3.305 7.009v9.26l8.103 4.678 8.103-4.678V7.01l-8.103-4.631zm0 2.977l5.525 3.19v6.381l-5.525 3.19-5.525-3.19V8.546l5.525-3.19z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3178C6" d="M0 0h24v24H0V0zm21.6 18.25c0-2-1.35-3.1-3.6-3.8-1.5-.5-2-.8-2-1.4 0-.5.4-.8 1-.8.7 0 1.2.3 1.5.8l1.7-1.1c-.6-1-1.6-1.6-3.2-1.6-2.2 0-3.6 1.2-3.6 3 0 1.9 1.1 2.8 3.2 3.5 1.7.5 2.3.9 2.3 1.5 0 .7-.6 1.1-1.5 1.1-1.2 0-2-.6-2.4-1.5l-1.7 1c.6 1.4 2.1 2.4 4.1 2.4 2.6 0 4.1-1.3 4.1-3.4zM10.8 7.3H3.6v2.2h2.4v10.9h2.5V9.5h2.3V7.3z"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#336791" d="M12 1.75c-3.125 0-5.75 1.875-5.75 4.25 0 .625.125 1.25.375 1.75C6.125 8.125 5.5 8.5 5 9c-.5.5-.875 1.125-1.125 1.75C3.375 11.25 3 12 3 12.75c0 1.75 1 3.25 2.5 3.75-.125.375-.25.875-.25 1.375 0 2.5 2 4.375 4.5 4.375.5 0 1-.125 1.5-.375h1.5c.5.25 1 .375 1.5.375 2.5 0 4.5-1.875 4.5-4.375 0-.5-.125-1-.25-1.375 1.5-.5 2.5-2 2.5-3.75 0-.75-.375-1.5-.875-2-.25-.625-.625-1.25-1.125-1.75-.5-.5-1.125-.875-1.625-1.25.25-.5.375-1.125.375-1.75 0-2.375-2.625-4.25-5.75-4.25zm0 1.5c2.375 0 4.25 1.375 4.25 2.75S14.375 8.75 12 8.75s-4.25-1.375-4.25-2.75 1.875-2.75 4.25-2.75z"/>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Full-Viewport Background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(130, 124, 224, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 70%, rgba(74, 212, 237, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(130, 124, 224, 0.06) 0%, transparent 60%),
            #0d0822
          `,
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top-center radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 text-center max-w-5xl mx-auto w-full">

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2 mb-7 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
          </span>
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-white/80">
            AI-Powered Development &amp; Elite Talent
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-extrabold leading-[1.04] tracking-tight mb-5 text-white"
        >
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[#a78bfa] to-[var(--accent)]">
            Intelligent Software
          </span>{" "}
          That Scales
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-9 leading-relaxed max-w-2xl"
        >
          From custom AI integrations and RAG systems to high-performance enterprise platforms —
          NimerTech engineers top-tier software solutions tailored to scale your global business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-[#0d0822] bg-gradient-to-r from-[var(--primary)] via-[#a78bfa] to-[var(--accent)] hover:shadow-[0_0_40px_rgba(130,124,224,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-4"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white/60">4.9/5 Clutch rating</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/10" />
          <span className="text-xs text-[var(--text-secondary)]">Trusted by over 150+ companies worldwide</span>
        </motion.div>

        {/* Clean client logo strip integrated under Hero content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.48 }}
        >
          <ClientLogos />
        </motion.div>
      </div>

      {/* ── Marquee of official colored technology logo SVGs ── */}
      <div className="relative z-10 overflow-hidden border-t border-b border-white/[0.06] py-4 bg-[#19123b]/20 backdrop-blur-[2px] mt-auto">
        <div className="flex animate-marquee w-max">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center shrink-0 pr-12 text-white/70 hover:text-white transition-colors duration-200">
              <span className="mr-3 shrink-0">
                {tech.svg}
              </span>
              <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                {tech.name}
              </span>
              <span className="ml-12 text-white/10 text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
