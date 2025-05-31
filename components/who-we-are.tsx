"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles } from "lucide-react"

export function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-24 w-full bg-[#0a0a14] dark:bg-[#0a0a14] text-white transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            About Us
            <span className="text-orange-500/70 ml-1">{">"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">Who We Are.</h2>
          <motion.div
            className="h-1 w-32 bg-orange-500 mx-auto mt-4 mb-10"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Heading and paragraphs */}
          <div>
            <motion.p
              className="text-lg md:text-2xl font-normal text-white mb-6 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="font-bold text-white">Ampliverse</span> is an integrated communications advisory enabling organizations worldwide to craft <span className="text-orange-500 font-semibold">purposeful brand expression</span> that drives business impact.
            </motion.p>
            <motion.p
              className="text-lg md:text-2xl font-normal text-white/70 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              We collaborate with our partners to power sharp perspectives that spark meaningful industry conversations and scale stakeholder trust.
            </motion.p>
          </div>
          {/* Right: Philosophy Card */}
          <motion.div
            className="relative flex flex-col items-start w-full max-w-2xl bg-[#181824] dark:bg-[#181824] rounded-2xl p-10 shadow-lg border border-orange-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Orange dot in top-right */}
            <span className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-500"></span>
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-orange-500 mr-2" />
              <span className="uppercase text-sm font-bold text-orange-500 tracking-wider">Our Philosophy</span>
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-snug mb-6 text-white dark:text-white">
              Grounded in insight, our advisory blends strategic clarity with creative depth, distilling complexity into clear and compelling messaging that reaches the last-mile.
            </blockquote>
            <hr className="w-full border-t border-white/10 mb-3" />
            <span className="text-base text-white/60 italic flex items-center gap-2">
              <span className="w-8 h-1 bg-orange-500 inline-block rounded mr-2" /> Ampliverse Team
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
