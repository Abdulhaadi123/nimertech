"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, Mail, MapPin, Clock, AlertCircle, Loader2 } from "lucide-react";

const infoCards = [
  { icon: Mail, label: "Email Us", value: "info@nimertech.com", sub: "We reply within 24 hours" },
  { icon: MapPin, label: "Headquarters", value: "New Jersey, United States", sub: "NJ, USA" },
  { icon: Clock, label: "Response Time", value: "< 24 Hours", sub: "Average first response" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    company: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    const nameTrimmed = formData.from_name.trim();
    if (!nameTrimmed) {
      errors.from_name = "Full name is required.";
    } else if (nameTrimmed.length < 2) {
      errors.from_name = "Name must be at least 2 characters.";
    }

    const emailTrimmed = formData.from_email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrimmed) {
      errors.from_email = "Email address is required.";
    } else if (!emailRegex.test(emailTrimmed)) {
      errors.from_email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      errors.service = "Please select a service.";
    }

    const messageTrimmed = formData.message.trim();
    if (!messageTrimmed) {
      errors.message = "Project details are required.";
    } else if (messageTrimmed.length < 10) {
      errors.message = "Please describe your project (at least 10 characters).";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setStatus("success");
        setFormData({ from_name: "", from_email: "", company: "", service: "", message: "" });
        setFormErrors({});
        setTimeout(() => setStatus("idle"), 5000);
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name.trim(),
          from_email: formData.from_email.trim(),
          company: formData.company.trim() || "N/A",
          service: formData.service || "General Inquiry",
          message: formData.message.trim(),
        },
        publicKey
      );

      setStatus("success");
      setFormData({ from_name: "", from_email: "", company: "", service: "", message: "" });
      setFormErrors({});
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage(err?.text || "Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            Get In Touch
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Tell us about your technical roadmap and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-5 flex flex-col gap-3 hover:border-[var(--primary)]/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                <card.icon className="w-4.5 h-4.5 text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1 font-semibold">{card.label}</p>
                <p className="text-sm font-bold text-white">{card.value}</p>
                <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">{card.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8 space-y-5"
            >
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-white">Message Sent Successfully!</strong>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-white">Sending Failed</strong>
                    {errorMessage}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-white/70 mb-2 block">Full Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-white/25 focus:outline-none transition-all text-sm ${
                      formErrors.from_name ? "border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20"
                    }`}
                  />
                  {formErrors.from_name && <p className="text-xs text-rose-400 mt-1 font-medium">{formErrors.from_name}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-white/70 mb-2 block">Email Address *</label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-white/25 focus:outline-none transition-all text-sm ${
                      formErrors.from_email ? "border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20"
                    }`}
                  />
                  {formErrors.from_email && <p className="text-xs text-rose-400 mt-1 font-medium">{formErrors.from_email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-white/70 mb-2 block">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white/70 mb-2 block">Service Needed *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border text-white/70 focus:outline-none transition-all text-sm appearance-none ${
                      formErrors.service ? "border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20"
                    }`}
                  >
                    <option value="" className="bg-[#19123b]">Select a service</option>
                    <option value="AI & Machine Learning" className="bg-[#19123b]">AI & Machine Learning</option>
                    <option value="Custom Software Development" className="bg-[#19123b]">Custom Software Development</option>
                    <option value="Mobile App Development" className="bg-[#19123b]">Mobile App Development</option>
                    <option value="IT Staff Augmentation" className="bg-[#19123b]">IT Staff Augmentation</option>
                    <option value="Cloud & DevOps" className="bg-[#19123b]">Cloud & DevOps</option>
                    <option value="Technology Consulting" className="bg-[#19123b]">Technology Consulting</option>
                  </select>
                  {formErrors.service && <p className="text-xs text-rose-400 mt-1 font-medium">{formErrors.service}</p>}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/70 mb-2 block">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-white/25 focus:outline-none transition-all text-sm resize-none ${
                    formErrors.message ? "border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/20"
                  }`}
                />
                {formErrors.message && <p className="text-xs text-rose-400 mt-1 font-medium">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(130,124,224,0.4)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === "sending" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending Message...</>
                ) : status === "success" ? (
                  <><CheckCircle className="w-4 h-4" /> Message Sent!</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 flex-1 hover:border-[var(--primary)]/20 transition-all">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-6">
                Why Partner With Us
              </h3>
              <div className="space-y-5">
                {[
                  { stat: "500+", label: "Projects Delivered" },
                  { stat: "97%", label: "Client Satisfaction" },
                  { stat: "48hrs", label: "Average Response Time" },
                  { stat: "30+", label: "Countries Served" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                      {item.stat}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--primary)]/20 rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base font-bold text-white mb-2">
                Prefer to talk?
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Schedule a free 30-minute consultation with our solutions architect.
              </p>
              <a
                href="mailto:info@nimertech.com"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--accent)] hover:text-white transition-colors"
              >
                Book a Call →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
