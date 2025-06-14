"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Zap, BarChart3, Globe, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes"

const features = [
  {
    id: 1,
    title: "Collaborative Partnerships",
    description:
      "We don't just execute deliverables; we co-build sharp brand narratives through modular, performance-led models that bridge the agency-brand divide and make us long-term partners in your growth.",
    icon: <Sparkles className="h-8 w-8 text-neutral-900 dark:text-white" />,
  },
  {
    id: 2,
    title: "Built for B2B Tech",
    description:
      "We specialize in the B2B domain, with a stronghold in emerging technology. From venture capital to growth-stage startups, we connect tomorrow's solutions with today's audiences through insight-led engagement.",
    icon: <Zap className="h-8 w-8 text-neutral-900 dark:text-white" />,
  },
  {
    id: 3,
    title: "Performance-Led Communications",
    description:
      "Our performance-driven digital PR, global media relations and workforce talent solutions are the keys that amplify credibility and discoverability for our client partners.",
    icon: <BarChart3 className="h-8 w-8 text-neutral-900 dark:text-white" />,
  },
  {
    id: 4,
    title: "Global & Local Media Network",
    description:
      "With a network across 15+ global geographies, we create media strategies that strike the right balance between global relevance and local resonanceensuring your story gets heard, remembered, and acted upon.",
    icon: <Globe className="h-8 w-8 text-neutral-900 dark:text-white" />,
  },
];

export function WhatMakesUsDifferent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState(0)
  const { resolvedTheme } = useTheme()
  const [expandedBox, setExpandedBox] = useState<number | null>(null);

  // Reset expandedBox when switching between mobile and desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = () => {
      setExpandedBox(null);
    };
    mediaQuery.addEventListener('change', handleResize);
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`py-12 md:py-24 w-full transition-colors duration-300 overflow-x-hidden ${resolvedTheme === 'light' ? 'bg-[#fcfcfa]' : 'bg-[#0a0a14]'}`}
    >
      <div className="container mx-auto px-4">
        {/* Heading centered above both columns */}
        <div className="w-full flex flex-col items-center mb-16">
          <span className={`text-sm font-medium tracking-wider uppercase flex items-center justify-center mb-2 ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>
            <span className="text-orange-500 mr-1">{"<"}</span>
            Our Uniqueness
            <span className="text-orange-500 ml-1">{" >"}</span>
          </span>
          <h2 className={`mt-0 text-4xl md:text-5xl font-bold text-center ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
            What Makes Us Different
          </h2>
          <motion.div
            className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
        {/* Manifesto-style expandable cards for mobile, stepper+card for desktop */}
        <div className="w-full flex flex-col items-center justify-center gap-12">
          {/* Centered, large, premium intro line */}
          <p className={`text-center leading-[7vh] text-3xl md:text-3xl font-light leading-snug mb-8 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/90'}`}>
            We're a team of go-getters, <span className="text-orange-500 font-semibold">redefining the attention economy</span> through bespoke strategies that align with business goals and <span className="font-semibold underline underline-offset-4 decoration-orange-300/60 text-neutral-900 dark:text-white">drive real outcomes.</span>
          </p>
          {/* Desktop: 4 large expandable cards in a single row */}
          <div className="hidden md:flex flex-col gap-4 w-full max-w-5xl mx-auto relative">
            {features.map((feature, idx) => {
              const expanded = expandedBox === idx;
              return (
                <div
                  key={feature.id}
                  className={`rounded-2xl border transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 flex flex-col items-center ${resolvedTheme === 'light' ? 'bg-white border-neutral-200' : 'bg-[#181824] border-white/10'} ${expanded ? 'min-h-[180px]' : 'min-h-[80px]'} my-1`}
                  style={{ height: 'auto', overflow: 'hidden', zIndex: expanded ? 10 : 1, position: 'relative' }}
                >
                  <button
                    className="w-full flex items-center justify-between focus:outline-none"
                    onClick={() => setExpandedBox(expanded ? null : idx)}
                    aria-expanded={expanded}
                    aria-controls={`feature-desc-${idx}`}
                  >
                    <span className="flex items-center gap-3 text-left">
                      <span className="w-10 h-10 flex items-center justify-center rounded-md">
                        {feature.icon}
                      </span>
                      <span className={`font-bold text-xl ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>{feature.title}</span>
                    </span>
                    <span className={`transition-transform duration-300 ${expanded ? 'text-orange-500' : 'text-neutral-400'}`}> 
                      {expanded ? <ChevronUp className="w-7 h-7" /> : <ChevronDown className="w-7 h-7" />}
                    </span>
                  </button>
                  {expanded && (
                    <div
                      id={`feature-desc-${idx}`}
                      className={`mt-4 md:text-xl leading-relaxed w-full transition-all duration-300 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}
                      style={{ minHeight: 100 }}
                    >
                      {feature.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Mobile: Manifesto cards (unchanged) */}
          <div className="flex flex-col gap-4 w-full md:hidden items-center">
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                className={`rounded-2xl border transition-colors duration-300 shadow-lg px-5 py-4 mx-auto ${resolvedTheme === 'light' ? 'bg-white border-neutral-200' : 'bg-[#181824] border-white/10'}`}
                style={{ position: 'relative', zIndex: 1, maxWidth: '24rem', width: '100%' }}
              >
                <button
                  className="w-full flex items-center justify-between focus:outline-none"
                  onClick={() => setActiveFeature(idx === activeFeature ? -1 : idx)}
                  aria-expanded={activeFeature === idx}
                  aria-controls={`feature-desc-${idx}`}
                >
                  <span className="flex items-center gap-3 text-left">
                    <span className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-500/10">
                      {feature.icon}
                    </span>
                    <span className={`font-bold text-2xl ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>{feature.title}</span>
                  </span>
                  <span className={`transition-transform duration-300 ${activeFeature === idx ? 'text-orange-500' : 'text-neutral-400'}`}> 
                    {activeFeature === idx ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                  </span>
                </button>
                {activeFeature === idx && (
                  <div
                    id={`feature-desc-${idx}`}
                    className={`mt-4 text-xl text-base leading-relaxed ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}
                  >
                    {feature.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Discover our approach link - centered below the two columns */}
        <div className="w-full flex flex-col gap-4 justify-center align-center mt-16">
          <span className={`relative mx-auto text-center text-2xl md:text-2xl italic font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : ''}`}>
              From&nbsp;
              <motion.span
                  initial={{ backgroundPositionX: 0 }}
                  animate={{ backgroundPositionX: [0, 100, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  style={{
                    background:
                      "linear-gradient(90deg, #f97316 30%, #fff7e6 50%, #f97316 70%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >Trust</motion.span>
                &nbsp;to&nbsp;
                <motion.span
                  initial={{ backgroundPositionX: 0 }}
                  animate={{ backgroundPositionX: [0, 100, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  style={{
                    background:
                      "linear-gradient(90deg, #f97316 30%, #fff7e6 50%, #f97316 70%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >Traction</motion.span>
            </span>
        </div>
      </div>
    </section>
  );
}