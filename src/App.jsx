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

function CTAButton({ children = "Find Where Cash Is Stuck", dark = false }) {
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
          <a href="#process" className="hover:text-[#F6A51A]">Process</a>
          <a href="#fit" className="hover:text-[#F6A51A]">Fit</a>
          <a href="#faq" className="hover:text-[#F6A51A]">FAQ</a>
        </nav>
        <div className="hidden md:block">
          <CTAButton>Book a 15-Min Review</CTAButton>
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
            For contractors making money but still feeling cash pressure
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
            We install a weekly cash control system so you know what is coming, where cash is getting stuck, and what you can safely afford before one bad decision wipes out months of margin.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CTAButton />
            <p className="max-w-sm text-sm font-semibold text-white/80">
              15 minutes. We’ll walk through what is happening and whether this system makes sense.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-6 text-base font-bold text-white/90"
          >
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> See weeks ahead</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Find cash leaks</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Make decisions without guessing</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemAndSystem() {
  const problems = [
    "You are making decisions off today’s bank balance.",
    "You do not know what cash looks like 2–4 weeks out.",
    "Cash is getting stuck in timing gaps, collections, or job performance.",
    "You are unsure if you can hire, spend, pay yourself, or take on the next job.",
    "One bad cash decision can wipe out months of margin.",
  ];

  const steps = [
    {
      title: "See",
      color: "text-red-700",
      icon: Eye,
      subtitle: "Get the real picture of your cash.",
      bullets: ["Cash position", "Runway", "Where cash is stuck"],
    },
    {
      title: "Fix",
      color: "text-[#C88800]",
      icon: ShieldCheck,
      subtitle: "Build a working plan, not another report.",
      bullets: ["13-week view", "Risk weeks", "Decision rhythm"],
    },
    {
      title: "Control",
      color: "text-green-700",
      icon: RefreshCw,
      subtitle: "Stay on top of cash every week.",
      bullets: ["Weekly review", "Clear actions", "Quarterly reset"],
    },
  ];

  return (
    <section id="system" className="bg-white px-5 py-18 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            The problem
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-5xl">
            Cash feels tight even when the work is there.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Revenue is not the same as control. If you can’t see what’s coming, every decision feels heavier than it should.
          </p>
          <div className="mt-8 divide-y divide-slate-200">
            {problems.map((item) => (
              <div key={item} className="flex gap-3 py-4">
                <AlertTriangle className="mt-1 h-5 w-5 flex-none text-[#F6A51A]" />
                <p className="text-base font-bold leading-snug text-[#0F2A44]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            You don’t need more reports. You need a system.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-[#0F2A44] shadow-sm"
                >
                  <div className="absolute right-5 top-4 text-7xl font-black text-slate-100">
                    {index + 1}
                  </div>
                  <Icon className={`relative z-10 h-9 w-9 ${step.color}`} />
                  <h3 className={`relative z-10 mt-5 text-3xl font-black uppercase tracking-tight ${step.color}`}>
                    {step.title}
                  </h3>
                  <p className="relative z-10 mt-2 text-sm font-black leading-snug">{step.subtitle}</p>
                  <ul className="relative z-10 mt-5 space-y-3">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#F6A51A]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const phases = [
    { title: "See", weeks: "Weeks 1–2", text: "Understand your real cash position and where the pressure is coming from." },
    { title: "Fix", weeks: "Weeks 3–4", text: "Build the forecast, identify tight weeks, and put a usable operating rhythm in place." },
    { title: "Control", weeks: "Weeks 5–8", text: "Meet weekly, compare actuals to forecast, and make clear decisions before problems hit." },
    { title: "Optimize", weeks: "Weeks 9–13", text: "Tighten timing, improve cash movement, and strengthen the business for the next quarter." },
  ];

  return (
    <section id="process" className="bg-[#0F2A44] px-5 py-20 text-white md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            How it works
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            A 13-week install, then weekly control.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            We do not hand you a spreadsheet and disappear. We help you build the rhythm, read the numbers, and make better cash decisions every week.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {phases.map((phase) => (
            <div key={phase.title} className="rounded-xl border border-white/15 bg-white/5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-black">{phase.title}</h3>
                <span className="rounded-full bg-[#F6A51A]/90 px-3 py-1 text-xs font-black text-[#0F2A44]">
                  {phase.weeks}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{phase.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl rounded-2xl border border-white/15 bg-white/5 p-8 text-center">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F6A51A]">
          What we protect
        </p>
        <h3 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
          We help stop cash from breaking in the places most contractors lose control.
        </h3>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
          Timing, collections, job visibility, spending decisions, and runway. The details get handled inside the engagement — not published as a checklist for everyone else to copy.
        </p>
      </div>
    </section>
  );
}

function FitSection() {
  const goodFit = [
    "You run a contractor or service business where timing matters.",
    "You are busy, but cash still feels unclear or tighter than it should.",
    "You want someone to install the rhythm with you — not just hand you a template.",
  ];

  const notFit = [
    "You only want a free spreadsheet or DIY calculator.",
    "You are not willing to look at cash weekly.",
    "You want accounting reports, but not decision support.",
  ];

  return (
    <section id="fit" className="bg-slate-100 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            Who this is for
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-5xl">
            This is for owners who want control, not more homework.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2A44]">Good fit</h3>
            <ul className="mt-6 space-y-5">
              {goodFit.map((item) => (
                <li key={item} className="flex gap-3 text-base font-bold text-slate-700">
                  <CheckCircle2 className="h-6 w-6 flex-none text-green-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2A44]">Not the right fit</h3>
            <ul className="mt-6 space-y-5">
              {notFit.map((item) => (
                <li key={item} className="flex gap-3 text-base font-bold text-slate-700">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-200 text-[#0F2A44]">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const outcomes = [
    { icon: Eye, title: "Clear visibility", text: "See your cash with confidence." },
    { icon: CheckCircle2, title: "Better decisions", text: "Know what you can afford and when." },
    { icon: ShieldCheck, title: "Fewer surprises", text: "Catch issues before they become problems." },
    { icon: DollarSign, title: "Stronger position", text: "More control. More freedom." },
  ];

  const before = [
    "Guessing what you can afford",
    "Payroll stress",
    "Late collections",
    "Surprise shortages",
    "No clear weekly decision rhythm",
  ];

  const after = [
    "Know what you can safely spend",
    "See tight weeks ahead",
    "Catch risks before they hit",
    "Make weekly cash decisions",
    "Build a stronger cash position",
  ];

  return (
    <section id="outcomes" className="bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
              The outcome
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-5xl">
              Stop guessing what you can afford.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              The goal is not more reporting. The goal is knowing what to do next — before cash gets tight.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="h-8 w-8 text-green-700" />
                <h3 className="mt-4 text-base font-black text-[#0F2A44]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            Before and after cash control
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 p-7 text-left">
              <h3 className="text-2xl font-black text-[#0F2A44]">Before</h3>
              <ul className="mt-5 space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex gap-3 text-base font-bold text-slate-700">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white text-[#0F2A44]">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#0F2A44] p-7 text-left text-white">
              <h3 className="text-2xl font-black">After</h3>
              <ul className="mt-5 space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex gap-3 text-base font-bold text-white/90">
                    <CheckCircle2 className="h-6 w-6 flex-none text-[#F6A51A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="bg-slate-100 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            Built with you
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-5xl">
            Built and run with you — not handed off.
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-700">
            I don’t give you a report and leave you to figure it out. I work through your cash with you, install the rhythm, and help you make better decisions every week.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            My background is operations, systems, and execution. The value is not just seeing the numbers — it is knowing what to do with them.
          </p>
          <p className="mt-5 text-lg font-bold leading-relaxed text-[#0F2A44]">
            Heather Nickel, founder and operator of Cash Control System.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <img
            src="/heather.jpg"
            alt="Heather Nickel, founder and operator of Cash Control System"
            className="aspect-[4/5] w-full rounded-xl object-cover object-top shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function FAQAndCTA() {
  const faqs = [
    ["Is this bookkeeping?", "No. This sits above bookkeeping. We use your numbers to help you see cash, make decisions, and control timing."],
    ["Do I need perfect financials?", "No. We start with what you have, identify the gaps, and build from there."],
    ["How long does it take?", "The core install is designed around a 13-week process, with weekly support and decision meetings."],
    ["What happens after 13 weeks?", "You can keep running the system internally or continue with ongoing cash oversight."],
  ];

  return (
    <section id="faq" className="bg-white">
      <div id="book" className="bg-[#0F2A44] px-5 py-12 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              If cash feels unclear, this fixes it.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">
              Book a 15-minute cash review and we’ll walk through where cash is getting stuck, what’s coming next, and whether this system makes sense for your business.
            </p>
          </div>
          <CTAButton />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-16 text-center md:px-8">
        <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-5xl">
          Everything else you need to know.
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-2 md:px-8">
        {faqs.map(([q, a]) => (
          <details key={q} className="group border-b border-slate-200 pb-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-[#0F2A44]">
              {q}
              <span className="text-2xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{a}</p>
          </details>
        ))}
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
          <p className="mt-2 text-white/70">See your cash. Fix the leaks. Stay in control.</p>
        </div>
        <div className="flex flex-col gap-3 text-white/80 md:items-end">
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#F6A51A]"><Phone className="h-4 w-4" /> Book a Cash Review</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-[#F6A51A]"><Mail className="h-4 w-4" /> {CONTACT_EMAIL}</a>
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
      <FitSection />
      <OutcomesSection />
      <FounderSection />
      <FAQAndCTA />
      <Footer />
    </main>
  );
}
