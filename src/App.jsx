import React from "react";
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
  BarChart3,
  Gauge,
  CalendarDays,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function CTAButton({ children = "Book a Cash Review", dark = false }) {
  return (
    <a
      href="#book"
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

function Highlight({ children }) {
  return (
    <span className="relative inline-block px-3 text-white">
      <span className="absolute inset-x-0 bottom-1 top-2 -z-10 -rotate-1 bg-[#1399C9]" />
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0F2A44] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-white font-black">
            CC
          </div>
          <div className="text-xl font-black uppercase tracking-tight md:text-2xl">
            Cash Control System
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex">
          <a href="#system" className="hover:text-[#F6A51A]">System</a>
          <a href="#outcomes" className="hover:text-[#F6A51A]">Outcomes</a>
          <a href="#process" className="hover:text-[#F6A51A]">Process</a>
          <a href="#faq" className="hover:text-[#F6A51A]">FAQ</a>
        </nav>
        <div className="hidden md:block">
          <CTAButton>Book a Review</CTAButton>
        </div>
        <button className="md:hidden" aria-label="Open menu">
          <Menu className="h-8 w-8" />
        </button>
      </div>
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
          <motion.p
            variants={fadeUp}
            className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#F6A51A]"
          >
            Built for contractors who want cash clarity
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
          >
            Busy, but your <Highlight>cash</Highlight> is still tight?
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl"
          >
            We install a weekly cash control system so you know exactly how long your cash lasts, where it’s getting stuck, and what you can safely afford next.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CTAButton />
            <p className="max-w-sm text-sm font-semibold text-white/80">
              We’ll walk through your cash and show you where it’s getting stuck.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-6 text-base font-bold text-white/90"
          >
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> See 13 weeks ahead</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Fix cash leaks</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Make decisions weekly</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "You’re making decisions off today’s bank balance.",
    "You don’t know what cash looks like 2–4 weeks out.",
    "Receivables are drifting and nobody is chasing them hard enough.",
    "You’re unsure if you can hire, spend, pay yourself, or take on the next job.",
    "One wrong cash decision can create a $50K–$200K problem.",
  ];

  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            The problem
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-6xl">
            Cash feels tight even when you’re busy.
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-700">
            Revenue is not the same as control. If you can’t see what’s coming, every decision feels heavier than it should.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="rounded-2xl bg-slate-100 p-7 md:p-10"
        >
          {items.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="flex gap-4 border-b border-slate-200 py-5 last:border-b-0"
            >
              <AlertTriangle className="mt-1 h-6 w-6 flex-none text-[#F6A51A]" />
              <p className="text-lg font-bold leading-snug text-[#0F2A44] md:text-xl">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function System() {
  const steps = [
    {
      title: "See",
      color: "text-red-700",
      icon: Eye,
      subtitle: "Know exactly how long your cash lasts.",
      bullets: ["Burn rate snapshot", "Cash runway", "Cash trap analysis", "Slow-season pressure"],
    },
    {
      title: "Fix",
      color: "text-[#C88800]",
      icon: ShieldCheck,
      subtitle: "Build a plan you can actually use.",
      bullets: ["13-week forecast", "Cash control rules", "Deposit discipline", "A/R and A/P cleanup"],
    },
    {
      title: "Control",
      color: "text-green-700",
      icon: RefreshCw,
      subtitle: "Run the system every week.",
      bullets: ["Weekly cash meeting", "Actual vs forecast", "Decision-making rhythm", "Quarterly reset"],
    },
  ];

  return (
    <section id="system" className="bg-[#0F2A44] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#F6A51A]">
            The Cash Control System
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            You don’t need more reports. <Highlight>You need a system.</Highlight>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/80">
            A simple system we install and run with you every week.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl bg-white p-8 text-[#0F2A44] shadow-2xl"
              >
                <div className="absolute right-6 top-6 text-8xl font-black text-slate-100">
                  {index + 1}
                </div>
                <Icon className={`relative z-10 h-12 w-12 ${step.color}`} />
                <h3 className={`relative z-10 mt-6 text-4xl font-black uppercase tracking-tight ${step.color}`}>
                  {step.title}
                </h3>
                <p className="relative z-10 mt-3 text-lg font-bold">{step.subtitle}</p>
                <ul className="relative z-10 mt-7 space-y-4">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-base font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#F6A51A]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            Built with you
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-6xl">
            Built and run with you — not handed off.
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-700">
            This isn’t a tool or a course. We work through your cash with you and install the system so it actually runs inside your business.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-100 p-8 shadow-sm">
          <div className="aspect-[4/5] rounded-xl bg-[#0F2A44] p-8 text-white shadow-lg">
            <div className="flex h-full flex-col justify-end">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F6A51A]">Founder / Operator</p>
              <h3 className="mt-3 text-3xl font-black">Heather Nickel</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Systems, cash clarity, and weekly execution for growing contractor businesses.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Add your founder photo here when ready.
          </p>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const outcomes = [
    { icon: Eye, title: "Clear visibility", text: "See your cash with confidence." },
    { icon: CheckCircle2, title: "Better decisions", text: "Know what you can afford and when." },
    { icon: ShieldCheck, title: "Fewer surprises", text: "Catch issues before they become problems." },
    { icon: DollarSign, title: "Stronger position", text: "More control. More freedom." },
  ];

  return (
    <section id="outcomes" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            The outcome
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-6xl">
            Know what you can afford. Decide with confidence.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {outcomes.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <Icon className="h-10 w-10 text-green-700" />
              <h3 className="mt-5 text-xl font-black text-[#0F2A44]">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const before = [
    "Guessing what you can afford",
    "Payroll stress",
    "Late collections",
    "Surprise shortages",
    "No clear weekly decision rhythm",
  ];
  const after = [
    "Know what you can spend",
    "See tight weeks ahead",
    "Clear A/R and A/P rules",
    "Weekly cash decisions",
    "Stronger cash position",
  ];

  return (
    <section className="bg-slate-100 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-6xl">
          Before and after cash control.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 text-left">
            <h3 className="text-3xl font-black text-[#0F2A44]">Before</h3>
            <ul className="mt-6 space-y-5">
              {before.map((item) => (
                <li key={item} className="flex gap-3 text-lg font-bold text-slate-700">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-200 text-[#0F2A44]">
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0F2A44] p-8 text-left text-white">
            <h3 className="text-3xl font-black">After</h3>
            <ul className="mt-6 space-y-5">
              {after.map((item) => (
                <li key={item} className="flex gap-3 text-lg font-bold text-white/90">
                  <CheckCircle2 className="h-7 w-7 flex-none text-[#F6A51A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const phases = [
    { title: "Phase 1: See", weeks: "Weeks 1–2", text: "Understand your real cash position, burn rate, runway, and where cash is breaking." },
    { title: "Phase 2: Fix", weeks: "Weeks 3–4", text: "Build your 13-week forecast and put the cash control rules in place." },
    { title: "Phase 3: Control", weeks: "Weeks 5–8", text: "Run weekly cash meetings, compare actuals to forecast, and make decisions." },
    { title: "Phase 4: Optimize", weeks: "Weeks 9–13", text: "Improve collections, payment timing, job margins, and cash buffer." },
  ];

  return (
    <section id="process" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
              How it works
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-6xl">
              A 13-week install, then weekly control.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-700">
              This is not a report you forget about. It’s a working rhythm for decisions, cash timing, and action.
            </p>
          </div>
          <div className="space-y-5">
            {phases.map((phase) => (
              <div key={phase.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-black text-[#0F2A44]">{phase.title}</h3>
                  <span className="rounded-full bg-[#F6A51A]/20 px-4 py-2 text-sm font-black text-[#0F2A44]">
                    {phase.weeks}
                  </span>
                </div>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">{phase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Rules() {
  const rules = [
    "Deposits on every job",
    "No A/R past 60 days",
    "No A/P past 60 days",
    "Track job margins",
    "Maintain cash buffer",
    "Know your pipeline",
  ];

  return (
    <section className="bg-[#0F2A44] px-5 py-20 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#F6A51A]">
            Implemented weekly
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Cash control rules that stop leaks.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => (
            <div key={rule} className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
              <CheckCircle2 className="h-7 w-7 flex-none text-[#F6A51A]" />
              <p className="text-lg font-black">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Is this bookkeeping?", "No. This sits above bookkeeping. We use your numbers to help you see cash, make decisions, and control timing."],
    ["Do I need perfect financials?", "No. We start with what you have, identify the gaps, and build from there."],
    ["How long does it take?", "The core install is designed around a 13-week process, with weekly support and decision meetings."],
    ["What happens after 13 weeks?", "You can keep running the system internally or continue with ongoing cash oversight."],
  ];

  return (
    <section id="faq" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-6xl">
          Everything else you need to know.
        </h2>
        <div className="mt-12 divide-y divide-slate-200">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-black text-[#0F2A44]">
                {q}
                <span className="text-3xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-[#0F2A44] px-5 py-20 text-center text-white md:px-8 md:py-28">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80"
          alt="Construction site"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#0F2A44]/80" />
      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          If cash feels unclear, this fixes it.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
          Book a cash review and we’ll walk through where cash is getting stuck, what’s coming next, and whether the system makes sense for your business.
        </p>
        <div className="mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#081827] px-5 py-12 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="text-2xl font-black uppercase tracking-tight">Cash Control System</div>
          <p className="mt-2 text-white/70">See your cash. Fix the leaks. Stay in control.</p>
        </div>
        <div className="flex flex-col gap-3 text-white/80 md:items-end">
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Book a Cash Review</span>
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@cashcontrolsystem.com</span>
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
      <Problem />
      <System />
      <TrustSection />
      <Outcomes />
      <BeforeAfter />
      <Process />
      <Rules />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
