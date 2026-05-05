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

function CTAButton({ children = "Book a Cash Review", dark = false }) {
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
            For contractors who are tired of cash surprises
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
          >
            Stop guessing what you can afford.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl"
          >
            Most contractors don’t know what their cash looks like a few weeks from now. We show you where it gets tight so you can make the right call before it costs you.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CTAButton>Book a Cash Review</CTAButton>
            <p className="max-w-sm text-sm font-semibold text-white/80">
              15 minutes. We’ll show you what is happening and where decisions get risky.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-6 text-base font-bold text-white/90"
          >
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> See where cash gets tight</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Catch problems early</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Make decisions without guessing</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemAndSystem() {
  const problems = [
    "Guessing on decisions.",
    "Cash shows up late or leaves early.",
    "Jobs look fine until they aren’t.",
    "One decision can put you in a squeeze.",
  ];

  const steps = [
    {
      title: "See",
      color: "text-red-700",
      icon: Eye,
      subtitle: "See where your cash actually goes and where it’s breaking.",
      bullets: ["Burn rate and runway", "Cash trap analysis", "Where decisions get risky"],
    },
    {
      title: "Fix",
      color: "text-[#C88800]",
      icon: ShieldCheck,
      subtitle: "Build a 13-week view so nothing surprises you.",
      bullets: ["Week-by-week cash view", "Tight weeks identified early", "Simple cash rhythm"],
    },
    {
      title: "Control",
      color: "text-green-700",
      icon: RefreshCw,
      subtitle: "Make the call before it turns into a problem.",
      bullets: ["Weekly cash review", "Actuals vs plan", "Decide and act early"],
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
            You’re running the business off your bank balance.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            You don’t know if you can hire, spend, pay yourself, or if something is about to hit. Some months feel flush. Then work slows and cash disappears fast.
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
          <div className="mb-7 rounded-2xl bg-[#0F2A44] px-6 py-5 text-white shadow-sm">
            <p className="text-2xl font-black leading-tight md:text-3xl">
              You don’t need another report. You need to know what to do this week.
            </p>
          </div>
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
    { title: "See", weeks: "Weeks 1 to 2", text: "Understand your burn rate, runway, and where cash is getting stuck." },
    { title: "Fix", weeks: "Weeks 3 to 4", text: "Build the 13-week cash view, identify tight weeks, and set the weekly rhythm." },
    { title: "Control", weeks: "Weeks 5 to 8", text: "Meet weekly, compare actuals vs plan, and make clear decisions before problems hit." },
    { title: "Optimize", weeks: "Weeks 9 to 13", text: "Tighten timing, improve cash movement, and build a stronger buffer." },
  ];

  return (
    <section id="process" className="bg-[#0F2A44] px-5 py-20 text-white md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">
            How it works
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Diagnosis first. The full forecast comes with the paid system.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            The first call is not a forecast build. In 15 minutes, we’ll look at your burn rate, where cash gets tight, and where decisions are getting risky. The full 13-week system is built after that.
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
          Where contractors lose control of cash
        </h3>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
          Timing, collections, job visibility, spending decisions, seasonality, and runway. We fix these inside the system so problems show up early instead of hitting all at once.
        </p>
      </div>
    </section>
  );
}

function FitSection() {
  const goodFit = [
    "You run a contractor or service business where timing matters.",
    "You’re making decisions but don’t have a clear view ahead.",
    "You want someone to install the rhythm with you, not just hand you a template.",
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
            This is for owners who want to make the right call, not guess.
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
    { icon: Eye, title: "Clear visibility", text: "See where cash gets tight before it hits." },
    { icon: CheckCircle2, title: "Better decisions", text: "Make calls earlier instead of reacting late." },
    { icon: ShieldCheck, title: "Fewer surprises", text: "Catch problems weeks before they show up in your bank." },
    { icon: DollarSign, title: "Stronger position", text: "More control. Less pressure." },
  ];

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
    "Catch risks early",
    "Make weekly decisions",
    "Stay in control of cash",
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
              Stop getting blindsided by cash.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              The goal is simple: see problems earlier, make better decisions, and stop carrying cash stress alone.
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
            <CTAButton>Book a Cash Review</CTAButton>
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
            Built and run with you, not handed off.
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-700">
            This isn’t a report you get and forget. We work through your cash with you, install the weekly rhythm, and help you stay ahead of problems before they hit.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            The value isn’t just seeing the numbers. It’s knowing what’s coming and staying in control of it.
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
    ["Is this bookkeeping?", "No. This sits above bookkeeping. We use your numbers to help you see where cash gets tight, make decisions earlier, and control timing."],
    ["Do I need perfect financials?", "No. We start with what you have, identify the gaps, and build from there."],
    ["How long does it take?", "The core install is designed around a 13-week process, with weekly support and decision meetings."],
    ["What happens after 13 weeks?", "You can keep running the system internally or continue with ongoing cash oversight so you do not have to manage it alone."],
  ];

  return (
    <section id="faq" className="bg-white">
      <div id="book" className="bg-[#0F2A44] px-5 py-12 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              If cash feels unclear, start here.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">
              In 15 minutes, we’ll look at your burn rate, where cash gets tight, and where decisions are getting risky. This is not a forecast build. It is a clear look at what is actually happening and where things can break.
            </p>
          </div>
          <CTAButton>Book a Cash Review</CTAButton>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-16 text-center md:px-8">
        <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-5xl">
          Straight answers before you book.
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
          <p className="mt-2 text-white/70">See your cash. Make better decisions. Stay in control.</p>
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
