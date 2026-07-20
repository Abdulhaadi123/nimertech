"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "NimerTech transformed our legacy system into a scalable, AI-driven platform. Their engineering depth in RAG and LangChain agents delivered results far beyond our expectations.",
    name: "Sarah Mitchell",
    title: "CTO, FinEdge Solutions",
    rating: 5,
    initials: "SM",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "We matched and deployed 5 senior engineers in 48 hours. The technical vetting was outstanding — every engineer fit seamlessly into our agile sprints from day one.",
    name: "David Chen",
    title: "VP Engineering, CloudVault Inc.",
    rating: 5,
    initials: "DC",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "Their customization capabilities are unmatched. The custom recommendation engine they built boosted customer engagement by 65% in just three months.",
    name: "Amara Okafor",
    title: "Head of Product, ShopSphere",
    rating: 5,
    initials: "AO",
    gradient: "from-amber-500 to-orange-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            Client Stories
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Engineering Leaders
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Real feedback from high-growth technology startups and enterprise leaders who trust NimerTech.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 sm:p-10 text-center relative hover:border-[var(--primary)]/30 transition-all duration-300"
          >
            <Quote className="w-10 h-10 text-[var(--primary)]/20 mx-auto mb-6" />

            {/* Stars */}
            <div className="flex items-center justify-center gap-1.5 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-sm font-bold text-white shadow-lg`}
              >
                {testimonials[current].initials}
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm sm:text-base">
                  {testimonials[current].name}
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {testimonials[current].title}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-white/20 transition-all cursor-pointer bg-[var(--card-bg)]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === current
                      ? "bg-[var(--primary)] w-6"
                      : "bg-white/10 w-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-white/20 transition-all cursor-pointer bg-[var(--card-bg)]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
