"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  accent: string;
  darkBg: string;
  lightText: string;
  darkText: string;
}

const services: ServiceCardProps[] = [
  {
    imageSrc: "/service/Media Advisory 4.jpg",
    title: "Media advisory",
    description: "Customized and modular PR solutions for purposeful media engagements and crisis resilience.",
    accent: "border-b-4 border-orange-200",
    darkBg: "bg-[#241a16]",
    lightText: "text-[#0a0a14]",
    darkText: "text-white",
  },
  {
    imageSrc: "/service/Branding & Communication.jpg",
    title: "Branding & Communication",
    description: "Amplifying 'who you are' and 'what you stand for' by crafting a brand identity that resonates and reaches the last mile.",
    accent: "border-b-4 border-purple-200",
    darkBg: "bg-[#1a1a2e]",
    lightText: "text-[#0a0a14]",
    darkText: "text-white",
  },
  {
    imageSrc: "/service/Social media managment.jpg",
    title: "Social Media Management",
    description: "Digital storytelling meets business goals - creative initiatives that lead with insight and land with impact.",
    accent: "border-b-4 border-green-200",
    darkBg: "bg-[#16241a]",
    lightText: "text-[#0a0a14]",
    darkText: "text-white",
  },
  {
    imageSrc: "/service/Strategic Partnerships 2.jpg",
    title: "Strategic Partnerships",
    description: "Guiding partners through inflection points with astute collaborations across media, events, speakerships, and sponsorships.",
    accent: "border-b-4 border-yellow-200",
    darkBg: "bg-[#241a16]",
    lightText: "text-[#0a0a14]",
    darkText: "text-white",
  },
  {
    imageSrc: "/service/Event Marketing.jpg",
    title: "Event Marketing",
    description: "Curating immersive event experiences that captivate audiences, amplify celebrations, and etch a lasting recall.",
    accent: "border-b-4 border-red-200",
    darkBg: "bg-[#241616]",
    lightText: "text-[#0a0a14]",
    darkText: "text-white",
  },
  {
    imageSrc: "/service/Influencer Engagement.jpg",
    title: "Influencer Engagement",
    description: "Influencer communities are the new marketplaces - we help your organization build a presence where your audience already belongs.",
    accent: "border-b-4 border-pink-200",
    darkBg: "bg-[#241624]",
    lightText: "text-[#0a0a14]",
    darkText: "text-white",
  },
  {
    imageSrc: "/service/Talent Solutions.jpg",
    title: "Workforce Talent Solutions",
    description: "Helping you onboard, train, and manage the right talent, so that your organization scales and succeeds with ease.",
    accent: "border-b-4 border-cyan-200",
    darkBg: "bg-[#162324]",
    lightText: "text-[#0a0a14]",
    darkText: "text-white",
  },
]

function SectionUnderline() {
  return <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded" />
}

export default function FlipCards() {
  const { resolvedTheme } = useTheme();
  return (
    <section id="expertise" className="relative py-12 md:py-24 w-full bg-gradient-to-b from-[#f8f7f4] via-white to-[#f8f7f4] dark:from-[#0a0a14] dark:via-[#181824] dark:to-[#0a0a14] bg-noise scroll-mt-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-[#0a0a14]/60 dark:text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Our Expertise
            <span className="text-orange-500/70 ml-1">{" >"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#0a0a14] dark:text-white">What We Offer</h2>
          <SectionUnderline />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} {...service} resolvedTheme={resolvedTheme} />
          ))}
        </div>
        <div className="mt-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(4, 7).map((service, index) => (
            <ServiceCard key={index + 4} {...service} resolvedTheme={resolvedTheme} />
          ))}
        </div>
        <HiddenTailwindUtilities />
      </div>
      <div className="h-8 bg-gradient-to-b from-transparent to-[#f8f7f4] dark:to-[#0a0a14] w-full"></div>
    </section>
  )
}

function ServiceCard({ imageSrc, title, description, accent, darkBg, lightText, darkText, resolvedTheme }: ServiceCardProps & { resolvedTheme: string | undefined }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseEnter() {
    setIsFlipped(true);
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsFlipped(false);
    setIsHovered(false);
  }

  const cardBg = resolvedTheme === 'light' ? 'bg-white' : darkBg;

  return (
    <div
      className={`h-[280px] w-full perspective-1000 cursor-pointer transition-shadow rounded-xl ${resolvedTheme === 'light' ? accent : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full border border-border rounded-xl flex flex-col items-center justify-start backface-hidden transition-all duration-300 overflow-hidden ${cardBg}`}
          style={{ zIndex: 2 }}
        >
          <div className="w-full h-[80%] relative">
            <Image src={imageSrc} alt={title} fill className={`object-cover w-full h-full${title === 'Strategic Partnerships' || title === 'Influencer Engagement' ? ' object-[center_30%]' : ''}`} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          </div>
          <div className={`w-full flex-1 flex flex-col items-center justify-center px-2 pt-2`}>
            <h3 className={`text-2xl font-light md:text-xl md:font-semibold text-center ${resolvedTheme === 'dark' ? 'text-white' : 'text-[#0a0a14]'}`}>{title}</h3>
          </div>
        </div>
        {/* Back of card */}
        <div
          className={`absolute w-full h-full border border-border rounded-xl flex flex-col items-center justify-center px-6 py-8 backface-hidden transition-all duration-300 ${cardBg} ${isFlipped ? 'shadow-2xl' : ''}`}
          style={{ zIndex: 3, transform: 'rotateY(180deg)' }}
        >
          <p className={`text-lg md:text-xl lg:text-xl font-bold md:font-semibold text-center leading-relaxed ${resolvedTheme === 'dark' ? 'text-white' : 'text-[#0a0a14]'}`}>{description}</p>
        </div>
      </div>
    </div>
  )
}

// Hidden utility to force Tailwind to generate custom classes
function HiddenTailwindUtilities() {
  return <div className="perspective-1000 transform-style-3d backface-hidden rotate-y-180 hidden" />
}
