"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Code2,
  Smartphone,
  Users,
  Cloud,
  Lightbulb,
} from "lucide-react";

const services = [
  { name: "AI & Machine Learning", icon: Brain, href: "/services/ai-ml-solutions" },
  { name: "Custom Software Development", icon: Code2, href: "/services/custom-software" },
  { name: "Mobile App Development", icon: Smartphone, href: "/services/mobile-apps" },
  { name: "IT Staff Augmentation", icon: Users, href: "/services/staff-augmentation" },
  { name: "Cloud & DevOps", icon: Cloud, href: "/services/cloud-devops" },
  { name: "Technology Consulting", icon: Lightbulb, href: "/services/tech-consulting" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "How We Vet", href: "/how-we-vet" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0822]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-[62px] lg:h-[72px]">

          {/* ── Logo ────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/10 relative">
              <Image
                src="/logo.jpg"
                alt="NimerTech Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-[1.1rem] font-bold text-white tracking-tight">
              Nimer<span className="text-[var(--accent)]">Tech</span>
            </span>
          </Link>

          {/* ── Desktop: Frosted-glass pill nav (InvoHire style) ── */}
          <div className="hidden lg:flex items-center">
            <div
              className="flex items-center gap-1 backdrop-blur-[14px] bg-black/30 border border-white/10 rounded-[60px] px-6 py-2 shadow-lg"
            >
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-1.5 text-[13px] font-[400] rounded-full transition-all duration-150 ${
                      pathname === link.href || (link.hasDropdown && pathname.startsWith("/services"))
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform opacity-60 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 pt-3 w-72 z-50"
                        >
                          <div className="bg-[#0d0822]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                                  pathname === service.href
                                    ? "text-white bg-white/5"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                              >
                                <service.icon className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Desktop CTAs ─────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(130,124,224,0.45)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* ── Mobile Hamburger ─────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0c0827]/98 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-white/5 mt-3 pt-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center gap-3 px-4 py-2.5 ml-2 text-sm text-white/50 hover:text-white/80 rounded-xl transition-colors"
                  >
                    <service.icon className="w-4 h-4 text-[var(--accent)]" />
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
