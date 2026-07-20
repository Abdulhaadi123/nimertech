"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Official branded SVGs and details for a clean, professional agency grid
const technologies = [
  {
    name: "React",
    role: "Frontend Library",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="2"/>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 12 12)"/>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    role: "React Framework",
    svg: (
      <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.892 18.258l-5.617-7.234v7.234H10.45v-9.9h1.758l5.292 6.842V8.358h1.825v9.9h-1.433z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    role: "Typed JavaScript",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3178C6" d="M0 0h24v24H0V0zm21.6 18.25c0-2-1.35-3.1-3.6-3.8-1.5-.5-2-.8-2-1.4 0-.5.4-.8 1-.8.7 0 1.2.3 1.5.8l1.7-1.1c-.6-1-1.6-1.6-3.2-1.6-2.2 0-3.6 1.2-3.6 3 0 1.9 1.1 2.8 3.2 3.5 1.7.5 2.3.9 2.3 1.5 0 .7-.6 1.1-1.5 1.1-1.2 0-2-.6-2.4-1.5l-1.7 1c.6 1.4 2.1 2.4 4.1 2.4 2.6 0 4.1-1.3 4.1-3.4zM10.8 7.3H3.6v2.2h2.4v10.9h2.5V9.5h2.3V7.3z"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    role: "Runtime Environment",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#339933" d="M12 1l10.4 6v12L12 23 1.6 19V7L12 1zm0 2.2L3.6 8v8l8.4 4.8 8.4-4.8V8L12 3.2zm0 4.8l6 3.4v2.8l-6 3.4-6-3.4v-2.8l6-3.4z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    role: "Backend & Scripting",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3776AB" d="M11.97 0C5.37 0 5.5 4.5 5.5 4.5v3h6.5V9H5.5S2 9 2 13.5s3.5 4.5 3.5 4.5h2v-2.7c0-2 1.6-3.3 3.3-3.3h5.7c2 0 3.3-1.6 3.3-3.3V3.5S19.8 0 11.97 0z"/>
        <path fill="#FFD343" d="M12.03 24c6.6 0 6.47-4.5 6.47-4.5v-3H12V15h6.5S22 15 22 10.5s-3.5-4.5-3.5-4.5h-2v2.7c0 2-1.6 3.3-3.3 3.3H7.5c-2 0-3.3 1.6-3.3 3.3V20.5S4.2 24 12.03 24z"/>
      </svg>
    ),
  },
  {
    name: "Go",
    role: "System Language",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#00ADD8" d="M1.2 11.8c.1-3 2.1-5.7 5.2-6.5C9 4.6 11.9 5.8 13.1 8c1.3.1 2.5-.2 3.6-.8l1 1.7c-1.3.9-2.9 1.3-4.5 1.1-.9 1.7-2.7 2.8-4.7 2.8-3.1 0-5.6-2.5-5.6-5.6-.1-.1-.1-.3-.1-.4z"/>
        <path fill="#00ADD8" d="M22.8 11.8c-.1 3-2.1 5.7-5.2 6.5-2.6.7-5.5-.5-6.7-2.7-1.3-.1-2.5.2-3.6.8l-1-1.7c1.3-.9 2.9-1.3 4.5-1.1.9-1.7 2.7-2.8 4.7-2.8 3.1 0 5.6 2.5 5.6 5.6.1.1.1.3.1.4z"/>
      </svg>
    ),
  },
  {
    name: "Flutter",
    role: "Mobile Framework",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#02569B" d="M12.2 0L5.3 6.9l6.9 6.9 6.9-6.9-6.9-6.9zm6.9 10.2l-6.9 6.9-6.9-6.9L0 17.1l12.2 12.2L24.4 17.1l-5.3-6.9z"/>
      </svg>
    ),
  },
  {
    name: "Swift",
    role: "iOS Native Development",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F05138" d="M20.5 15.6c-2.4 2-5.7 2.8-8.8 2.3-3.1-.5-5.8-2.2-7.5-4.8 2.2 1 4.7 1.4 7.1.9 2.4-.5 4.5-1.7 6-3.6-1.5.3-3.1.2-4.5-.4-1.4-.6-2.5-1.7-3.1-3.1 1.4.3 2.9.1 4.2-.6 1.3-.7 2.3-1.8 2.8-3.2-1.7.9-3.7 1.2-5.6.8C8.3 3.5 5.8 2 3.1 1c2.2 2.6 3.1 6.1 2.3 9.4-.8 3.3-3 6-6 7.4 3.1-.1 6.1-1.2 8.4-3.2 2.3-2 3.8-4.8 4.3-7.9-.5 3.3-2 6.3-4.3 8.5 2.3-2.2 3.8-5.2 4.3-8.5-.1 3.1-1.3 6-3.4 8.2 2.1-2.2 3.3-5.1 3.4-8.2.3 2.4-.2 4.9-1.5 7z"/>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    role: "Generative AI API",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#10A37F" d="M21.3 9.5c-.3-1.6-1.4-2.8-3-3.2-.3-.6-.7-1.1-1.3-1.5-.7-.4-1.6-.6-2.4-.4-.5-1.1-1.4-1.9-2.5-2.2-1.3-.3-2.7 0-3.6.9-.6-.2-1.3-.3-2-.1-1.2.3-2.1 1.2-2.5 2.4-.9.2-1.7.8-2.2 1.6-.7.9-1 2.1-.7 3.2.1.4.3.8.6 1.2-.3.6-.5 1.3-.5 2 0 1.3.6 2.5 1.6 3.2.3.7.8 1.3 1.4 1.7.8.5 1.7.7 2.6.5.5 1 1.4 1.8 2.4 2.1 1.2.3 2.5.1 3.5-.7.6.3 1.3.4 2 .3 1.2-.2 2.1-1 2.6-2.1.8-.2 1.6-.7 2.2-1.4.7-.9.9-2 .7-3.1-.2-.5-.4-.9-.7-1.3.3-.6.5-1.3.5-2 .1-.9-.1-1.8-.6-2.6zm-8.8 8.9c-.3.2-.7.3-1.1.2l-3.9-2.2c-.3-.2-.5-.6-.5-1v-4.5c0-.4.2-.8.5-1l3.9-2.2c.4-.2.8-.2 1.1 0l3.9 2.2c.3.2.5.6.5 1v4.5c0 .4-.2.8-.5 1l-3.9 2.3z"/>
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    role: "Deep Learning Library",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF9900" d="M12 1L2 6.8v10.4l10 5.8 10-5.8V6.8L12 1zm8.2 15.2L12 20.8l-8.2-4.6V8.2L12 3.6l8.2 4.6v8z"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    role: "Relational Database",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#336791" d="M12 1.75c-3.125 0-5.75 1.875-5.75 4.25 0 .625.125 1.25.375 1.75C6.125 8.125 5.5 8.5 5 9c-.5.5-.875 1.125-1.125 1.75C3.375 11.25 3 12 3 12.75c0 1.75 1 3.25 2.5 3.75-.125.375-.25.875-.25 1.375 0 2.5 2 4.375 4.5 4.375.5 0 1-.125 1.5-.375h1.5c.5.25 1 .375 1.5.375 2.5 0 4.5-1.875 4.5-4.375 0-.5-.125-1-.25-1.375 1.5-.5 2.5-2 2.5-3.75 0-.75-.375-1.5-.875-2-.25-.625-.625-1.25-1.125-1.75-.5-.5-1.125-.875-1.625-1.25.25-.5.375-1.125.375-1.75 0-2.375-2.625-4.25-5.75-4.25zm0 1.5c2.375 0 4.25 1.375 4.25 2.75S14.375 8.75 12 8.75s-4.25-1.375-4.25-2.75 1.875-2.75 4.25-2.75z"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    role: "NoSQL Database",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#47a248" d="M12 1.25c-.25 0-.5.125-.625.375C9.25 5.875 7.75 10 7.75 12.75c0 3.375 1.75 6.25 4.25 7.875.25.125.5.125.75 0 2.5-1.625 4.25-4.5 4.25-7.875 0-2.75-1.5-6.875-3.625-11.125-.125-.25-.375-.375-.625-.375zm0 2c1.75 3.75 3 7.375 3 9.5 0 2.625-1.25 4.875-3 6.125-1.75-1.25-3-3.5-3-6.125 0-2.125 1.25-5.75 3-9.5z"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    role: "Cloud Provider",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF9900" d="M18.07 14.88c-.89.6-1.8.85-2.85.85-1.95 0-3.5-1.15-3.5-3.15 0-2.45 1.8-3.4 4.85-3.4h1.5v-.5c0-1.1-.5-1.7-1.7-1.7-1 0-2 .4-2.6.9l-.6-1.3c.8-.6 2.1-1.1 3.5-1.1 2.3 0 3.3 1.2 3.3 3.3v4.6c0 1 .4 1.4.8 1.4.2 0 .5-.1.7-.3l.5 1.2c-.4.4-1.1.7-1.8.7-1.2 0-1.6-.7-1.7-1.8zm-1.85-4.3c-1.7 0-2.7.4-2.7 1.7 0 .9.6 1.4 1.6 1.4 1 0 1.9-.5 1.9-1.7V10.6h-.8zm3.55 8.1c-2.1 1.6-5.1 2.5-7.7 2.5-3.6 0-6.8-1.7-8.6-4.3-.2-.3 0-.5.3-.3 2 1.2 4.6 1.8 7.3 1.8 3.1 0 6.3-.9 8.5-2.7.3-.3.6.1.2.4z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    role: "Container Platform",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2496ED" d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.937 0h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.937 0h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186H8.109c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.936 0h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186H5.173c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm2.936-2.946h2.119c.102 0 .186-.084.186-.186V5.829c0-.102-.084-.186-.186-.186H8.109c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm2.937 0h2.119c.102 0 .186-.084.186-.186V5.829c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm2.937 0h2.119c.102 0 .186-.084.186-.186V5.829c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.937-2.947h2.119c.102 0 .186-.084.186-.186V2.883c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zM24 13.082c-.893-.9-2.585-.9-3.478 0-.486.491-1.077 1.258-3.036 1.258h-6.223v2.247c0 .54.407.962.96.962h9.274c3.483 0 5.626-3.565 2.503-4.467z"/>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    role: "Container Orchestration",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#326CE5" d="M11.398 0l10.158 5.867v11.731l-10.158 5.868L1.24 17.598V5.867L11.398 0zm.01 2.379L3.305 7.009v9.26l8.103 4.678 8.103-4.678V7.01l-8.103-4.631zm0 2.977l5.525 3.19v6.381l-5.525 3.19-5.525-3.19V8.546l5.525-3.19z"/>
      </svg>
    ),
  },
  {
    name: "Terraform",
    role: "Infrastructure as Code",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#7B42BC" d="M1.2 4.2v6.9L7.2 15V8.1L1.2 4.2zm6.9 4.8V15.9l6-3.9V5.1l-6 3.9zm6.9-3.9v6.9l6 3.9V8.1l-6-3.9zm-6.9 14.7v6.9l6-3.9v-6.9l-6 3.9z"/>
      </svg>
    ),
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" className="py-20 sm:py-28 relative">
      {/* Background ambient flows */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            Our Arsenal
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technologies We Master
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            A premium, battle-tested core technology stack deployed across our engineering teams.
          </p>
        </motion.div>

        {/* Clean, Premium Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="bg-[#19123b]/40 border border-white/[0.06] rounded-2xl p-5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(130,124,224,0.04)] flex items-center gap-4"
            >
              {/* Logo Frame */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-all">
                {tech.svg}
              </div>
              
              {/* Text details */}
              <div className="text-left">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  {tech.name}
                </h3>
                <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 font-medium uppercase tracking-wide">
                  {tech.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
