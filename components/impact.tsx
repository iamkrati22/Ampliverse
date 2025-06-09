"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { useTheme } from "next-themes"

// Use this variable for all light mode backgrounds (navbar, footer, testimonials, etc.)
const LIGHT_BG = '#faf9f6';

export function Impact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { resolvedTheme } = useTheme();

  const stats = [
    {
      value: 800000,
      suffix: "+",
      description: "News stories delivered across leading platforms for client partners.",
      color: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/20",
    },
    {
      value: 30000,
      suffix: "+",
      description: "News stories delivered across leading platforms for client partners.",
      color: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/20",
    },
 
    {
      value: 100,
      suffix: "+",
      description: "Top-tier publications where we've earned coverage.",
      color: "from-pink-500/10 to-pink-600/5",
      borderColor: "border-pink-500/20",
    },
    {
      value: 15,
      suffix: "+",
      description: "Geographies where we've established media relations.",
      color: "from-red-500/10 to-red-600/5",
      borderColor: "border-red-500/20",
    },
    {
      value: 2000,
      suffix: "+",
      description: "Influencers engaged across sectors to spark authentic conversations.",
      color: "from-yellow-500/10 to-yellow-600/5",
      borderColor: "border-yellow-500/20",
    },
    {
      value: 85,
      suffix: "+",
      description: "Awards and speakership opportunities secured for partners.",
      color: "from-green-500/10 to-green-600/5",
      borderColor: "border-green-500/20",
    },
  ]

  return (
    <section ref={ref} className={`py-24 w-full relative overflow-hidden transition-colors duration-500 ${resolvedTheme === 'light' ? `bg-[${LIGHT_BG}]` : 'dark:bg-gradient-to-br dark:from-[#0f0f1a] dark:via-[#181824] dark:to-[#0a0a14]'}`}
      style={resolvedTheme === 'light' ? { backgroundColor: LIGHT_BG } : {}}>
      {/* Subtle grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none select-none z-0" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="20" height="20" fill="none" />
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={resolvedTheme === 'light' ? '#e0e0e0' : '#fff'} strokeWidth="0.5" opacity={resolvedTheme === 'light' ? '0.16' : '0.12'} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-4 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={`text-xs md:text-sm font-medium tracking-wider uppercase flex items-center justify-center ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Our Results
            <span className="text-orange-500/70 ml-1">{" >"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">Impact At a Glance</h2>
          <motion.div
            className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        {/* Mobile: flex col, 1/6 height per card; Desktop: grid as before */}
        <div className="flex flex-col space-y-2 md:grid md:grid-cols-2 md:lg:grid-cols-3 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-panel flex-1 min-h-0 p-2 flex flex-col justify-center items-center md:p-8 rounded-lg text-center border border-white/10 relative overflow-hidden group md:h-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.04 }}
            >
              {/* Two orange sticks parallel to the triangle's slant */}
              {/* <div className="absolute top-2 left-2 w-[40%] z-0 opacity-10 select-none pointer-events-none flex flex-col items-start origin-top-left" style={{transform: 'rotate(-45deg)'}}>
                <span className="block w-full h-0.5 md:h-1 bg-orange-500 rounded" />
                <span className="block w-full h-0.5 md:h-1 bg-orange-500 rounded mt-0.5" />
              </div> */}
              <motion.h3
                className="text-xl md:text-5xl font-bold mb-1 md:mb-4 relative z-10 transition-colors duration-300 text-neutral-900 dark:text-white"
                whileHover={{ color: '#f97316' }}
                transition={{ duration: 0.3 }}
                style={{ color: 'inherit' }}
              >
                {isInView ? <>
                  <CountUp end={stat.value} separator="," duration={2.5} />
                  <span className="text-orange-500 ml-1 align-baseline" style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>{stat.suffix}</span>
                </> : "0"}
              </motion.h3>
              <p className="relative z-10 text-base md:text-base leading-tight md:leading-normal text-neutral-700 dark:text-white/80">{stat.description}</p>
              {/* Blended half triangle in bottom right */}
              <svg className="absolute bottom-0 right-0 w-16 h-16 md:w-28 md:h-28 opacity-10 pointer-events-none select-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="triangle-fade" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d1d5db" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#d1d5db" stopOpacity="0.12" />
                  </linearGradient>
                </defs>
                <polygon points="100,100 0,100 100,0" fill="url(#triangle-fade)" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
