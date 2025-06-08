"use client"

import { Loader } from "@/components/loader"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { Impact } from "@/components/impact"
import { WhoWeAre } from "@/components/who-we-are"
import { WhatMakesUsDifferent } from "@/components/what-makes-us-different"
import Capabilities from "@/components/capabilities"
import { OurWork } from "@/components/our-work"
import { KeyPeople } from "@/components/key-people"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { motion } from "framer-motion"
import { Playfair_Display } from "next/font/google"
import FlipCards from "@/components/flip-cards"
import { useTheme } from "next-themes"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] })

export default function Home() {
  const { resolvedTheme } = useTheme();
  return (
    <main className={`flex min-h-screen flex-col items-center transition-colors duration-300 ${resolvedTheme === 'light' ? 'bg-[#fcfcfa]' : 'bg-[#0a0a14]'}`}>
      <CustomCursor />
      <Loader />
      <Hero />
      <WhoWeAre />
      <WhatMakesUsDifferent />
      {/* <Capabilities /> */}
      <FlipCards />
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
