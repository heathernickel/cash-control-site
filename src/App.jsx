import React from "react";
import { ArrowRight, AlertTriangle, CheckCircle2, Mail, Menu, Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function CTAButton({ children = "Book a Cash Review", dark = false }) {
  return (
    <a href="#book" className={`group inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-black tracking-tight transition-all duration-200 md:px-10 ${dark ? "bg-white text-[#0F2A44] hover:bg-slate-100" : "bg-[#F6A51A] text-black hover:bg-[#ffb638]"}`}>
      {children}
      <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Header() { return <header className="sticky top-0 z-50 bg-[#0F2A44] text-white shadow-lg"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8"><a href="#top" className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center border-2 border-white font-black">CC</div><div className="text-xl font-black uppercase tracking-tight md:text-2xl">Cash Control System</div></a><nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex"><a href="#system" className="hover:text-[#F6A51A]">System</a><a href="#trust" className="hover:text-[#F6A51A]">Trust</a><a href="#faq" className="hover:text-[#F6A51A]">FAQ</a></nav><div className="hidden md:block"><CTAButton>Book a Cash Review</CTAButton></div><button className="md:hidden" aria-label="Open menu"><Menu className="h-8 w-8"/></button></div></header> }

function Hero() {
  return <section id="top" className="relative overflow-hidden bg-[#0F2A44] text-white"><div className="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80" alt="Contractor job site" className="h-full w-full object-cover"/></div><div className="absolute inset-0 bg-gradient-to-b from-[#0F2A44]/85 via-[#0F2A44]/75 to-[#0F2A44]/95"/><div className="relative mx-auto max-w-6xl px-5 py-24 text-center md:px-8 md:py-32"><motion.div initial="hidden" animate="visible" variants={stagger}><motion.h1 variants={fadeUp} className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">Busy, but your cash is still tight?</motion.h1><motion.p variants={fadeUp} className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">We install a weekly cash control system so you know exactly how long your cash lasts, where it’s getting stuck, and what you can safely afford next.</motion.p><motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4"><CTAButton>Book a Cash Review</CTAButton><p className="max-w-lg text-sm font-semibold text-white/80">We’ll walk through your cash and show you where it’s getting stuck.</p></motion.div></motion.div></div></section>;
}

function Problem() {
  const items = ["You’re making decisions off today’s bank balance", "You don’t know what cash looks like 2–4 weeks out", "Receivables are drifting and nobody’s chasing them", "You’re unsure if you can hire, spend, or take on the next job", "One bad decision can cost $50K–$200K"];
  return <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center"><motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}><p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1399C9]">The problem</p><h2 className="text-4xl font-black leading-tight tracking-tight text-[#0F2A44] md:text-6xl">Cash feels tight even when you’re busy.</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger} className="rounded-2xl bg-slate-100 p-7 md:p-10">{items.map((item)=><motion.div key={item} variants={fadeUp} className="flex gap-4 border-b border-slate-200 py-5 last:border-b-0"><AlertTriangle className="mt-1 h-6 w-6 flex-none text-[#F6A51A]"/><p className="text-lg font-bold leading-snug text-[#0F2A44] md:text-xl">{item}</p></motion.div>)}</motion.div></div></section>;
}

function System() {
  const columns = [{title:"SEE", color:"text-red-700", bullets:["Burn rate snapshot", "Cash trap analysis"]},{title:"FIX", color:"text-[#C88800]", bullets:["13-week cash forecast", "Simple cash rules"]},{title:"CONTROL", color:"text-green-700", bullets:["Weekly cash meeting", "Quarterly reset"]}];
  return <section id="system" className="bg-[#0F2A44] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-4xl text-center"><h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">The Cash Control System</h2><p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/80">A simple system we install and run with you every week.</p></div><div className="mt-14 rounded-3xl bg-white p-6 shadow-2xl md:p-10"><div className="grid gap-6 md:grid-cols-3">{columns.map((col)=><div key={col.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-[#0F2A44]"><h3 className={`text-4xl font-black tracking-tight ${col.color}`}>{col.title}</h3><ul className="mt-5 space-y-4">{col.bullets.map((bullet)=><li key={bullet} className="flex items-start gap-3 text-lg font-semibold"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#F6A51A]"/>{bullet}</li>)}</ul></div>)}</div></div></div></section>;
}

function Trust() {
  return <section id="trust" className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center"><div><h2 className="text-4xl font-black tracking-tight text-[#0F2A44] md:text-6xl">Built and run with you — not handed off.</h2><p className="mt-6 text-xl leading-relaxed text-slate-700">This isn’t a tool or a course. We work through your cash with you and install the system so it actually runs inside your business.</p></div><div className="flex h-[340px] items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-100 text-center"><p className="px-8 text-lg font-bold text-slate-500">Personal photo placeholder</p></div></div></section>;
}

function FAQ() { return <section id="faq" className="bg-slate-100 px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-4xl text-center"><h2 className="text-4xl font-black tracking-tight text-[#0F2A44] md:text-6xl">Everything else you need to know.</h2></div></section>; }

function FinalCTA(){return <section id="book" className="bg-[#0F2A44] px-5 py-20 text-center text-white md:px-8 md:py-28"><div className="mx-auto max-w-4xl"><h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">If cash feels unclear, this fixes it.</h2><div className="mt-10"><CTAButton>Book a Cash Review</CTAButton></div></div></section>}

function Footer(){return <footer className="bg-[#081827] px-5 py-12 text-white md:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><div className="text-2xl font-black uppercase tracking-tight">Cash Control System</div><p className="mt-2 text-white/70">See your cash. Fix the leaks. Stay in control.</p></div><div className="flex flex-col gap-3 text-white/80 md:items-end"><span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> Book a Cash Review</span><span className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> hello@cashcontrolsystem.com</span></div></div></footer>}

export default function App(){return <main className="min-h-screen bg-white font-sans"><Header/><Hero/><Problem/><System/><Trust/><FAQ/><FinalCTA/><Footer/></main>}
