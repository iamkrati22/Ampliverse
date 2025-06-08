"use client";

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useTheme } from "next-themes"

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { resolvedTheme } = useTheme()

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
    <section ref={ref} className={`py-24 relative overflow-hidden transition-colors duration-300 ${resolvedTheme === 'light' ? 'bg-[#fcfcfa] text-neutral-900' : 'bg-[#0a0a14] text-white'}`}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
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

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-2 md:w-1 bg-orange-500 flex-shrink-0 rounded-full"></div>
            <p
              className="text-lg text-white/80 leading-[1.75] text-justify max-w-6xl mx-auto"
              style={{ textAlign: "justify" }}
            >
              At Ampliverse, we shape how tomorrow's innovators{" "}
              <span className="font-semibold text-orange-400/80">
                earn trust, build presence, and scale across purposeful
                ecosystems.
              </span>{" "}
              Our solutions are driven by sharp strategic counsel, blending
              insight, creativity, and agility to navigate complex landscapes.
              Upholding the highest standards of credibility, we help carve out
              distinction with{" "}
              <span className="font-semibold text-white underline underline-offset-4 decoration-orange-300/60">
                spaces of authority and authenticity
              </span>
              . We challenge the status quo by turning insights into ideas that
              move industries forward and set new archetypes.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className={`glass-panel p-6 rounded-lg border relative overflow-hidden group ${resolvedTheme === 'light' ? 'bg-[#fcfcfa] border-neutral-200' : 'border-white/10'}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                To our partners
              </h3>
              <p className="text-white/70">
                We pledge to be proactive collaborators, translating their{" "}
                <span className="font-semibold text-orange-400/80">
                  ambitions into impact with clarity, conviction, and precision.
                </span>
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`glass-panel p-6 rounded-lg border relative overflow-hidden group ${resolvedTheme === 'light' ? 'bg-[#fcfcfa] border-neutral-200' : 'border-white/10'}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                To the media
              </h3>
              <p className="text-white/70">
                We ensure our unwavering commitment to integrity and accuracy -
                delivering information through thoughtful,{" "}
                <span className="font-semibold text-orange-400/80">
                  responsible storytelling that adds value.
                </span>
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`glass-panel p-6 rounded-lg border relative overflow-hidden group ${resolvedTheme === 'light' ? 'bg-[#fcfcfa] border-neutral-200' : 'border-white/10'}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                To our community
              </h3>
              <p className="text-white/70">
                We're fostering a vibrant, trusted environment where{" "}
                <span className="font-semibold text-orange-400/80">
                  curiosity thrives, ideas take shape, and growth is nurtured.
                </span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span
              className="block text-base md:text-lg font-normal text-white/60 mb-2 flex items-center justify-center gap-1"
              style={{ letterSpacing: "0.01em" }}
            >
              In an era of{" "}
              <span className="italic text-white/70">fleeting attention,</span>
            </span>
            <span className="block text-xl md:text-2xl font-normal text-white">
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
