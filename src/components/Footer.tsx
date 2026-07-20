"use client";

import Link from "next/link";
import Image from "next/image";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const footerLinks = {
  services: [
    { name: "AI & ML Solutions", href: "/services/ai-ml-solutions" },
    { name: "Custom Software", href: "/services/custom-software" },
    { name: "Mobile Development", href: "/services/mobile-apps" },
    { name: "Staff Augmentation", href: "/services/staff-augmentation" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    { name: "Tech Consulting", href: "/services/tech-consulting" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "How We Vet", href: "/how-we-vet" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/nimertech/?viewAsMember=true", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8.5 h-8.5 rounded-lg overflow-hidden border border-white/10 relative">
                <Image
                  src="/logo.jpg"
                  alt="NimerTech Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white tracking-tight">
                Nimer<span className="text-[var(--accent)]">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xs">
              Engineering tomorrow&apos;s digital reality through AI-powered software solutions and world-class talent.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              <li><a href="mailto:info@nimertech.com" className="hover:text-white transition-colors">info@nimertech.com</a></li>
              <li className="leading-relaxed">New Jersey,<br />United States</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-secondary)]">© {new Date().getFullYear()} NimerTech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[var(--text-secondary)] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-[var(--text-secondary)] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
