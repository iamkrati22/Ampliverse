"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Zap, BarChart3, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

const features = [
  {
    id: 1,
    title: "Collaborative Partnerships",
    description:
      "We don't just execute deliverables; we co-build sharp brand narratives through modular, performance-led models that bridge the agency-brand divide and make us long-term partners in your growth.",
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
  {
    id: 2,
    title: "Built for B2B Tech",
    description:
      "We specialize in the B2B domain, with a stronghold in emerging technology. From venture capital to growth-stage startups, we connect tomorrow's solutions with today's audiences through insight-led engagement.",
    icon: <Zap className="h-8 w-8 text-white" />,
  },
  {
    id: 3,
    title: "Performance-Led Communications",
    description:
      "Our performance-driven digital PR, global media relations and workforce talent solutions are the keys that amplify credibility and discoverability for our client partners.",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
  },
  {
    id: 4,
    title: "Global & Local Media Network",
    description:
      "With a network across 15+ global geographies, we create media strategies that strike the right balance between global relevance and local resonance — ensuring your story gets heard, remembered, and acted upon.",
    icon: <Globe className="h-8 w-8 text-white" />,
  },
]

export function WhatMakesUsDifferent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState(0)
  const { resolvedTheme } = useTheme()

  return (
    <section ref={ref} className={`relative py-24 mb-12 w-full transition-colors duration-300 ${resolvedTheme === 'light' ? 'bg-[#fcfcfa] text-neutral-900' : 'bg-[#0a0a14] text-white'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Heading centered above both columns */}
        <div className="w-full flex flex-col items-center mb-16">
          <span className={`text-sm font-medium tracking-wider uppercase flex items-center justify-center mb-2 ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>
            <span className="text-orange-500 mr-1">{"<"}</span>
            Our Difference
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
        {/* Stepper and Card aligned horizontally and centered */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          {/* Stepper */}
          <div className="flex flex-col items-center md:items-end flex-1 max-w-[420px] w-full gap-4">
            <span className={`relative w-full mx-auto text-justify italic font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : ''}`}>
              From Trust to Traction
            </span>
            <span className={`relative w-full mx-auto text-justify ${resolvedTheme === 'light' ? 'text-neutral-900' : ''}`}>
              We're a team of go-getters, <span className="text-orange-500 font-semibold">redefining the attention economy</span> through bespoke strategies that align with business goals and <span className={`font-semibold underline underline-offset-4 decoration-orange-300/60 ${resolvedTheme === 'light' ? 'text-orange-500' : 'text-white'}`}>drive real outcomes.</span>
            </span>
            <div className="relative flex flex-col gap-0 pt-4 pb-4 w-full mx-auto">
              {/* Vertical line */}
              <div className={`absolute left-4 top-0 bottom-0 w-px h-[30vh] ${resolvedTheme === 'light' ? 'bg-orange-200' : 'bg-white/10'}`} style={{zIndex:0}} />
              {features.map((feature, idx) => (
                <div key={feature.id} className="flex items-start relative z-10 group min-h-[70px]">
                  {/* Step circle */}
                  <button
                    onClick={() => setActiveFeature(idx)}
                    className="flex flex-col items-center mr-6 focus:outline-none"
                    style={{zIndex:2}}
                    aria-label={`Go to ${feature.title}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mb-1 transition-all duration-300
                        ${activeFeature === idx
                          ? (resolvedTheme === 'light' ? 'border-orange-500 bg-white' : 'border-orange-500 bg-[#0a0a14]')
                          : (resolvedTheme === 'light' ? 'border-neutral-300 bg-white' : 'border-white/25 bg-[#0a0a14]')}
                      `}
                    >
                      {activeFeature === idx && (
                        <span className={`block w-3 h-3 rounded-full ${resolvedTheme === 'light' ? 'bg-orange-500' : 'bg-white'}`} />
                      )}
                    </span>
                  </button>
                  <div className="flex-1 pb-6">
                    <div
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${activeFeature === idx ? (resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white') : (resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60')}`}
                    >
                      {feature.title}
                    </div>
                    {/* {activeFeature === idx && (
                      <div className="mt-2 text-base md:text-lg text-white/80 font-normal max-w-md leading-relaxed">
                        {feature.description}
                      </div>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Card */}
          <div className="flex-1 flex flex-col items-center justify-center w-full min-w-[340px] max-w-xl">
            <div className="relative w-full flex flex-col items-center text-center" style={{minHeight:340}}>
              {/* Layered white rectangles for dark mode, single white card for light mode */}
              {resolvedTheme === 'light' ? (
                <div className="absolute inset-0 pointer-events-none rounded-xl border border-neutral-200 shadow-xl bg-white"></div>
              ) : (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 border border-white/20 rounded-xl" style={{top:8,left:8,right:8,bottom:8}} />
                  <div className="absolute inset-0 border border-white/10 rounded-xl" style={{top:16,left:16,right:16,bottom:16}} />
                  <div className="absolute inset-0 border border-white/5 rounded-xl" />
                </div>
              )}
              <div className="relative z-10 flex flex-col items-center justify-center px-8 py-12">
                {/* Icon in thin white square */}
                <div className={`mb-8 flex items-center justify-center w-16 h-16 rounded-md border ${resolvedTheme === 'light' ? 'border-neutral-200 bg-white' : 'border-white/30'}`}>
                  {features[activeFeature].icon}
                </div>
                <h3 className={`text-xl md:text-2xl font-bold mb-4 leading-tight ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
                  {features[activeFeature].title}
                </h3>
                <p className={`mb-8 leading-relaxed text-base md:text-lg max-w-xl ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}>
                  {features[activeFeature].description}
                </p>
                {/* Step indicator and progress bar */}
                <span className="text-sm text-white/60 mb-2 tracking-wide">
                  {`${activeFeature + 1} / ${features.length}`}
                </span>
                <div className="flex gap-2 w-full justify-center">
                  {features.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1 rounded transition-all duration-300 ${
                        idx === activeFeature
                          ? (resolvedTheme === 'light' ? 'bg-neutral-900 w-8' : 'bg-white w-8')
                          : (resolvedTheme === 'light' ? 'bg-neutral-300 w-4' : 'bg-white/20 w-4')
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Discover our approach link - centered below the two columns */}
        <div className="w-full flex justify-center mt-8">
          <Link
            href="#approach"
            className="inline-flex items-center gap-2 text-white font-medium border-b border-white/60 hover:text-orange-500 hover:border-orange-500 transition-colors text-base pr-1"
          >
            Discover our approach <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
} 