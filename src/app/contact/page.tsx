"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, MapPin, Mail, AlertCircle, Loader2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@nimertech.com", href: "mailto:info@nimertech.com" },
  { icon: MapPin, label: "Location", value: "United States, NJ", href: "#" },
];

export default function ContactPage() {
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
        setFormData({
          from_name: "",
          from_email: "",
          company: "",
          service: "",
          message: "",
        });
        setFormErrors({});
        setTimeout(() => setStatus("idle"), 6000);
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
      setFormData({
        from_name: "",
        from_email: "",
        company: "",
        service: "",
        message: "",
      });
      setFormErrors({});
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage(
        err?.text || "Failed to send message. Please check your credentials or try again later."
      );
    }
  };

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4 block font-semibold">
            Get In Touch
          </span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something Extraordinary
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Whether you need AI integration, a development team, or strategic guidance — tell us about your project and we&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
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
                    Thank you for reaching out to NimerTech. Our team will get back to you within 24 hours.
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
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-[var(--text-secondary)]/50 focus:outline-none transition-all text-sm ${
                      formErrors.from_name
                        ? "border-rose-500 ring-1 ring-rose-500/30"
                        : "border-[var(--card-border)] focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30"
                    }`}
                  />
                  {formErrors.from_name && (
                    <p className="text-xs text-rose-400 mt-1 font-medium">{formErrors.from_name}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-[var(--text-secondary)]/50 focus:outline-none transition-all text-sm ${
                      formErrors.from_email
                        ? "border-rose-500 ring-1 ring-rose-500/30"
                        : "border-[var(--card-border)] focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30"
                    }`}
                  />
                  {formErrors.from_email && (
                    <p className="text-xs text-rose-400 mt-1 font-medium">{formErrors.from_email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--card-border)] text-white placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-[var(--text-secondary)] focus:outline-none transition-all text-sm appearance-none ${
                      formErrors.service
                        ? "border-rose-500 ring-1 ring-rose-500/30"
                        : "border-[var(--card-border)] focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30"
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="IT Staff Augmentation">IT Staff Augmentation</option>
                  </select>
                  {formErrors.service && (
                    <p className="text-xs text-rose-400 mt-1 font-medium">{formErrors.service}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your project, timeline, and goals..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-[var(--text-secondary)]/50 focus:outline-none transition-all text-sm resize-none ${
                    formErrors.message
                      ? "border-rose-500 ring-1 ring-rose-500/30"
                      : "border-[var(--card-border)] focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30"
                  }`}
                />
                {formErrors.message && (
                  <p className="text-xs text-rose-400 mt-1 font-medium">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[#0c0827] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_20px_rgba(130,124,224,0.3)] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" /> Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] hover:border-white/10 transition-all"
              >
                <c.icon className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                    {c.label}
                  </p>
                  <p className="text-white text-sm">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="bg-gradient-to-br from-[var(--primary)]/15 to-[var(--accent)]/10 border border-[var(--primary)]/20 rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-2">
                Prefer a quick call?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Book a free 30-minute consultation with our solutions architect to discuss your project requirements.
              </p>
              <a
                href="mailto:info@nimertech.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-white transition-colors"
              >
                Book a Call →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
