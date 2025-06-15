"use client";

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useTheme } from "next-themes"
import { ChevronDown } from "lucide-react"

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { resolvedTheme } = useTheme()
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="manifesto" ref={ref} className={`py-12 md:py-24 md:w-full relative overflow-hidden transition-colors duration-300 ${resolvedTheme === 'light' ? 'bg-[#fcfcfa] text-neutral-900' : 'bg-[#0a0a14] text-white'}`}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-4 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={`text-sm font-medium tracking-wider uppercase flex items-center justify-center ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Our Philosophy
            <span className="text-orange-500/70 ml-1">{" >"}</span>
          </span>
          <h2 className={`mt-2 text-4xl md:text-5xl font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>Manifesto</h2>
          <motion.div
            className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        <div className="">
          <motion.div
            className="flex flex-col md:flex-row gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-2 md:w-1 bg-orange-500 flex-shrink-0 rounded-full"></div>
            <p
              className={`text-3xl md:text-justify md:text-2xl leading-[1.75] ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}
              // style={{ textAlign: "justify" }}
            >
              At Ampliverse, we shape how tomorrow's innovators{" "}
              <span className={`font-semibold ${resolvedTheme === 'light' ? 'text-orange-500' : 'text-orange-400/80'}`}>
                earn trust, build presence, and scale across purposeful
                ecosystems.
              </span>{" "}
              Our solutions are driven by sharp strategic counsel, blending
              insight, creativity, and agility to navigate complex landscapes.
              Upholding the highest standards of credibility, we help carve out
              distinction with{" "}
              <span className={`font-semibold underline underline-offset-4 ${resolvedTheme === 'light' ? 'text-orange-500/80 decoration-orange-200' : 'text-white decoration-orange-300/60'}`}>
                spaces of authority and authenticity.
              </span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              {
                title: 'To our partners',
                desc: 'We pledge to be proactive collaborators, translating their ambitions into impact with clarity, conviction, and precision.',
                highlight: 'ambitions into impact with clarity, conviction, and precision.'
              },
              {
                title: 'To the media',
                desc: 'We ensure our unwavering commitment to integrity and accuracy - delivering information through thoughtful, responsible storytelling that adds value.',
                highlight: 'responsible storytelling that adds value.'
              },
              {
                title: 'To our community',
                desc: 'We\'re fostering a vibrant, trusted environment where curiosity thrives, ideas take shape, and growth is nurtured.',
                highlight: 'curiosity thrives, ideas take shape, and growth is nurtured.'
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className={`glass-panel p-6 rounded-lg border relative overflow-hidden group ${resolvedTheme === 'light' ? 'bg-white border-neutral-200' : 'border-white/10'} md:min-h-[260px] cursor-pointer transition-all duration-300 ${expandedIdx === idx ? 'shadow-2xl' : ''}`}
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                tabIndex={0}
                aria-expanded={expandedIdx === idx}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className={`flex items-center justify-between text-2xl md:text-2xl font-semibold mb-4 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
                  {card.title}
                  <span className="md:hidden ml-2 transition-transform duration-300" style={{transform: expandedIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                    <ChevronDown className={`w-5 h-5 ${resolvedTheme === 'light' ? 'text-orange-400' : 'text-orange-500'}`} aria-hidden="true" />
                  </span>
                </h3>
                <div className={`text-xl md:text-xl transition-all duration-300 overflow-hidden ${expandedIdx === idx || typeof window !== 'undefined' && window.innerWidth >= 768 ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                  <p className={`${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/70'}`}>{card.desc.replace(card.highlight, '')}<span className={`font-semibold ${resolvedTheme === 'light' ? 'text-orange-500' : 'text-orange-400/80'}`}>{card.highlight}</span></p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span
              className={`block text-base md:text-lg font-normal mb-2 flex items-center justify-center gap-1 ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}
              style={{ letterSpacing: "0.01em" }}
            >
              In an era of{" "}
              <span className={`italic ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/70'}`}>fleeting attention,</span>
            </span>
            <span className={`block text-xl md:text-2xl font-normal ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
              We Stand for
              <span
                className="text-orange-500 italic font-bold ml-2 shiny-text"
                style={{
                  background:
                    "linear-gradient(90deg, #f97316 30%, #fff7e6 50%, #f97316 70%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
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
                >
                  Enduring Influence.
                </motion.span>
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
