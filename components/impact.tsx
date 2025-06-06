"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"

export function Impact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    {
      value: 30,
      suffix: "K+",
      description: "News stories delivered across leading platforms for client partners.",
      color: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/20",
    },
    {
      value: 800,
      suffix: "K+",
      description: "Estimated monthly reach across news portals.",
      color: "from-purple-500/10 to-purple-600/5",
      borderColor: "border-purple-500/20",
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
    <section ref={ref} className="py-24 w-full bg-gradient-to-br from-[#0f0f1a] via-[#181824] to-[#0a0a14] relative overflow-hidden">
      {/* Subtle grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none select-none z-0" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="20" height="20" fill="none" />
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Our Results
            <span className="text-orange-500/70 ml-1">{">"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">Impact At a Glance</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`glass-panel p-8 rounded-lg text-center border border-white/10 relative overflow-hidden group`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.04 }}
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold mb-4 relative z-10 transition-colors duration-300"
                whileHover={{ color: '#f97316' }}
                transition={{ duration: 0.3 }}
                style={{ color: 'inherit' }}
              >
                {isInView ? <>
                  <CountUp end={stat.value} separator="," duration={2.5} />
                  <span className="text-orange-500 text-inherit ml-1">{stat.suffix}</span>
                </> : "0"}
              </motion.h3>
              <p className="text-white/70 relative z-10">{stat.description}</p>
              {/* Decorative quarter-circle */}
              <span className="impact-quarter-circle" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
