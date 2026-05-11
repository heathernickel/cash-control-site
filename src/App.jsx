import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  RefreshCw,
  Eye,
  DollarSign,
  Phone,
  Mail,
  Menu,
} from "lucide-react";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/heather-theeightytwentygroup/30min";
const CONTACT_EMAIL = "heather@theeightytwentygroup.com";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function CTAButton({ children = "Apply for a Cash Review", dark = false }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-black tracking-tight transition-all md:px-10 ${
        dark
          ? "bg-white text-[#0F2A44] hover:bg-slate-100"
          : "bg-[#F6A51A] text-black hover:bg-[#ffb638]"
      }`}
    >
      {children}
      <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-[90] bg-[#0F2A44] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <div className="flex h-10 w-10 items-center justify-center border-2 border-white font-black">CC</div>
          <div className="text-xl font-black uppercase tracking-tight md:text-2xl">Cash Control System</div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex">
          <a href="#system" className="hover:text-[#F6A51A]">System</a>
          <a href="#process" className="hover:text-[#F6A51A]">Process</a>
          <a href="#fit" className="hover:text-[#F6A51A]">Fit</a>
          <a href="/insights" className="hover:text-[#F6A51A]">Insights</a>
          <a href="#faq" className="hover:text-[#F6A51A]">FAQ</a>
        </nav>

        <div className="hidden md:block">
          <CTAButton>Apply for a Cash Review</CTAButton>
        </div>

        <button
          className="relative z-[101] md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          type="button"
        >
          <Menu className="h-8 w-8" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0F2A44] px-8 pt-28 text-white md:hidden">
          <button
            className="absolute right-6 top-6 text-5xl font-black"
            onClick={closeMobileMenu}
            type="button"
          >×</button>

          <nav className="flex flex-col gap-7 text-3xl font-black uppercase tracking-tight">
            <a href="#system" onClick={closeMobileMenu}>System</a>
            <a href="#process" onClick={closeMobileMenu}>Process</a>
            <a href="#fit" onClick={closeMobileMenu}>Fit</a>
            <a href="/insights" onClick={closeMobileMenu}>Insights</a>
            <a href="#faq" onClick={closeMobileMenu}>FAQ</a>
            <a href={CALENDLY_URL} className="mt-4 bg-[#F6A51A] px-6 py-5 text-center text-xl font-black text-black">Apply for a Cash Review</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0F2A44] text-white">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
          alt="Contractor job site"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A44]/85 via-[#0F2A44]/75 to-[#0F2A44]/95" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 text-center md:px-8 md:py-32">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#F6A51A]">
            For contractors who are tired of cash surprises
          </motion.p>

          <motion.h1 variants={fadeUp} className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Stop guessing what you can afford.
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
            Most contractors don’t know what their cash looks like a few weeks from now. We show you where it gets tight so you can make the right call before it costs you.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4">
            <CTAButton>Apply for a Cash Review</CTAButton>

            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              Built by The Eighty Twenty Group, this system helps contractors focus on the 20% of cash decisions that drive 80% of financial control.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemAndSystem() {
  return (
    <section id="system" className="bg-white px-5 pt-28 pb-20 md:px-8 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">The problem</p>
        <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-5xl">
          You’re running the business off your bank balance.
        </h2>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="bg-[#0F2A44] px-5 py-20 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">How it works</p>

        <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Apply for a Cash Review.
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/80">
          We start by looking at where cash may already be getting tight inside the business, before it becomes a bigger problem.
        </p>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/80">
          On the first call, we review burn rate, runway, timing pressure, upcoming risk areas, and major cash decisions you’re considering.
        </p>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/80">
          If it makes sense, we then build the full 13-week Cash Control System around your business.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#081827] px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="text-2xl font-black uppercase tracking-tight">Cash Control System</div>
          <p className="mt-2 text-white/70">See your cash. Make better decisions. Stay in control.</p>
        </div>

        <div className="flex flex-col gap-3 text-white/80 md:items-end">
          <a href={CALENDLY_URL} className="inline-flex items-center gap-2 hover:text-[#F6A51A]">
            <Phone className="h-4 w-4" /> Apply for a Cash Review
          </a>

          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-[#F6A51A]">
            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <ProblemAndSystem />
      <ProcessSection />
      <Footer />
    </main>
  );
}
