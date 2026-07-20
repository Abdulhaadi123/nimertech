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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
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
