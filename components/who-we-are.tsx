"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes"

export function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { resolvedTheme } = useTheme()

  return (
    <section
      ref={ref}
      className={`relative py-24 w-full transition-colors duration-300 ${resolvedTheme === 'light' ? 'bg-[#fcfcfa] text-neutral-900' : 'bg-[#0a0a14] text-white'}`}
    >
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="container mx-auto px-4"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={`text-sm font-medium tracking-wider uppercase flex items-center justify-center ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            About Us
            <span className="text-orange-500/70 ml-1">{">"}</span>
          </span>
          <h2 className={`mt-2 text-4xl md:text-5xl font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
            Who We Are.
          </h2>
          <motion.div
            className="h-1 w-32 bg-orange-500 mx-auto mt-4 mb-10"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>
        {/* Premium Minimal Intro */}
        <div className="w-full">
          <motion.p
            className={`text-center text-3xl md:text-4xl font-light leading-snug max-w-4xl mx-auto mb-3 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/90'}`}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            Ampliverse is an integrated communications advisory enabling organizations worldwide to craft <span className={`text-orange-500 font-medium`}>purposeful brand expression that drives business impact.</span>
          </motion.p>
          <motion.p
            className={`text-center text-2xl md:text-3xl font-light leading-snug max-w-4xl mx-auto mb-8 ${resolvedTheme === 'light' ? 'text-neutral-700' : 'text-white/70'}`}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          >
            We collaborate with our partners to power sharp perspectives that <span className={`font-medium underline underline-offset-4 decoration-orange-300/60 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>spark meaningful industry conversations and scale stakeholder trust.</span>
          </motion.p>
        </div>
        {/* Subtle Divider */}
        <motion.div
          className="flex items-center justify-center my-6"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        >
          <span className={`block h-px w-16 ${resolvedTheme === 'light' ? 'bg-neutral-300' : 'bg-white/10'}`}></span>
          <span className="mx-3 text-orange-500 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-orange-500 block"></span>
          </span>
          <span className={`block h-px w-16 ${resolvedTheme === 'light' ? 'bg-neutral-300' : 'bg-white/10'}`}></span>
        </motion.div>
        {/* Glassy Card */}
        <motion.div
          className={`relative flex flex-col items-center w-full mx-auto rounded-2xl shadow-xl border transition-colors duration-300
            ${resolvedTheme === 'light' ? 'bg-white/90 border-neutral-200' : 'border-white/10 backdrop-blur-md bg-white/5 dark:bg-[#181824]/40'} mt-8`}
          style={{ maxWidth: '700px' }}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 1, ease: 'easeOut' }}
        >
          {/* Subtle orange dot in top-right */}
          <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-orange-500/80"></span>
          <div className="flex items-center mb-2 mt-8">
            <Sparkles className="h-4 w-4 text-orange-500 mr-2" />
            <span className="uppercase text-xs font-semibold tracking-widest text-orange-500/90">Our Approach</span>
          </div>
          <blockquote className={`text-center text-2xl md:text-3xl font-light leading-snug mb-8 max-w-2xl mx-auto px-4 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/90'}`}> 
            Grounded in insight, our advisory blends strategic clarity with creative depth, distilling complexity into clear and compelling messaging that reaches the last-mile.
          </blockquote>
          <hr className={`w-full border-t mb-3 ${resolvedTheme === 'light' ? 'border-neutral-200' : 'border-white/10'}`} />
          <span className={`text-base italic flex items-center gap-2 mb-6 ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/50'}`}><span className="w-8 h-1 bg-orange-500 inline-block rounded mr-2" /> Ampliverse Team</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
