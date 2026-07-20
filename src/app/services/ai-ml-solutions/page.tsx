import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Brain, Cpu, MessageSquare, Database, GitBranch, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Machine Learning Solutions — NimerTech",
  description: "Custom AI/ML models, RAG systems, LangChain integrations, Pinecone vector databases, and GPT-powered chatbots. NimerTech builds intelligent automation that delivers measurable ROI.",
};

const capabilities = [
  { icon: Brain, title: "Generative AI & LLMs", description: "Fine-tuned large language models, prompt engineering, and custom GPT integrations tailored to your business domain and data." },
  { icon: Database, title: "RAG Systems", description: "Retrieval-Augmented Generation pipelines with Pinecone vector databases for contextually accurate, hallucination-free AI responses." },
  { icon: GitBranch, title: "LangChain & Agentic AI", description: "Multi-step reasoning AI agents using LangChain, tool-augmented workflows, and autonomous task execution systems." },
  { icon: MessageSquare, title: "Intelligent Chatbots", description: "OpenAI-powered conversational AI for customer support, sales automation, internal knowledge bases, and lead qualification." },
  { icon: Cpu, title: "Computer Vision & OCR", description: "Image recognition, object detection, document processing, and optical character recognition for automated data extraction." },
  { icon: Layers, title: "NLP & Text Analytics", description: "Sentiment analysis, named entity recognition, text classification, and language understanding for unstructured data processing." },
];

const techStack = ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Pinecone", "Hugging Face", "scikit-learn", "Weaviate", "ChromaDB", "FAISS", "LlamaIndex", "AWS SageMaker"];

export default function AiMlPage() {
  return (
    <main className="pt-32 pb-20 relative">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Split Content + Premium Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <Link href="/services" className="text-sm text-[var(--accent)] hover:underline mb-4 block">← Back to Services</Link>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              AI & Machine Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              We build custom AI/ML models, RAG systems, LangChain integrations, and GPT-powered chatbots that transform raw data into intelligent automation — delivering measurable ROI from day one.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl border border-white/10 p-2 shadow-2xl bg-white/[0.02] backdrop-blur-md overflow-hidden group">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)]/50 rounded-tl-2xl z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--primary)]/50 rounded-br-2xl z-20" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/services-ai-illustration.png"
                  alt="NimerTech Artificial Intelligence Neural Core Illustration"
                  fill
                  className="object-cover transition-transform duration-750 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a28]/60 via-transparent to-transparent z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-white/10 transition-all hover:-translate-y-1 duration-300">
              <cap.icon className="w-8 h-8 text-[var(--accent)] mb-4" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-8">Our AI Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "AI Readiness Assessment", desc: "We evaluate your data, infrastructure, and goals to define the right AI strategy." },
              { step: "02", title: "Data Pipeline & Prep", desc: "Clean, structure, and prepare your data for model training and inference pipelines." },
              { step: "03", title: "Model Development", desc: "Build, fine-tune, and validate custom ML models using state-of-the-art frameworks." },
              { step: "04", title: "Deploy & Monitor", desc: "Production deployment with CI/CD, monitoring dashboards, and continuous model improvement." },
            ].map((s) => (
              <div key={s.step} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">{s.step}</span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mt-3 mb-2">{s.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-6">AI/ML Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span key={t} className="px-4 py-2 text-sm rounded-lg bg-white/5 text-[var(--text-secondary)] border border-white/5 hover:border-[var(--primary)]/30 hover:text-white transition-all">{t}</span>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-8">Industry Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "EdTech: AI career guidance platform with psychometric testing",
              "FinTech: Fraud detection and risk scoring with real-time ML",
              "Healthcare: Clinical note summarization and diagnostic support",
              "E-Commerce: Personalized recommendation engines boosting engagement 65%",
              "HR: Resume screening automation with NLP classification",
              "Logistics: Demand forecasting and route optimization models",
            ].map((uc) => (
              <div key={uc} className="flex items-start gap-3 p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--card-border)] rounded-2xl p-10">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Integrate AI Into Your Business?</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-lg mx-auto">Get a free AI readiness assessment and discover how intelligent automation can transform your operations.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#0c0827] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(133,135,219,0.4)] transition-all">
            Get Your AI Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
