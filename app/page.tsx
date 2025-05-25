"use client"

import { Loader } from "@/components/loader"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { Impact } from "@/components/impact"
import { WhoWeAre } from "@/components/who-we-are"
import { WhatMakesUsDifferent } from "@/components/what-makes-us-different"
import { Capabilities } from "@/components/capabilities"
import { OurWork } from "@/components/our-work"
import { KeyPeople } from "@/components/key-people"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { motion } from "framer-motion"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0a14]">
      <CustomCursor />
      <Loader />
      <Hero />
      {/* Animated Intro Text Section */}
      <section className="w-full flex justify-center bg-[#f8f7f4] dark:bg-[#0a0a14] transition-colors duration-300">
        <motion.div
          className="max-w-3xl px-4 py-24 md:py-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className={`${playfair.className} text-foreground`}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.01em' }}>
              Ampliverse is an integrated communications advisory enabling organizations worldwide<br />
              to craft purposeful brand expression that drives business impact.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed mb-4" style={{ letterSpacing: '-0.01em' }}>
              We collaborate with our partners to power sharp perspectives that spark meaningful industry conversations<br />
              and scale stakeholder trust.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
              Grounded in insight, our advisory blends strategic clarity with creative depth,<br />
              distilling complexity into clear and compelling messaging that reaches the last-mile.
            </p>
          </div>
        </motion.div>
      </section>
      <WhoWeAre />
      <WhatMakesUsDifferent />
      <Capabilities />
      <Impact />
      <Manifesto />
      <OurWork />
      <KeyPeople />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
