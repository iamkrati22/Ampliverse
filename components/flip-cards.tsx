"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Newspaper, Palette, MessageSquare, Handshake, Calendar, Users, Code } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface ServiceCardProps {
  icon: React.ReactNode
  color: string
  bgColor: string
  title: string
  description: string
}

const services: ServiceCardProps[] = [
  {
    icon: <Newspaper size={56} />,
    color: "text-blue-500",
    bgColor: "from-blue-500/20 to-blue-600/10",
    title: "Media advisory",
    description: "Customized and modular PR solutions for purposeful media engagements and crisis resilience.",
  },
  {
    icon: <Palette size={56} />,
    color: "text-purple-500",
    bgColor: "from-purple-500/20 to-purple-600/10",
    title: "Branding & Communication",
    description:
      "Amplifying 'who you are' and 'what you stand for' by crafting a brand identity that resonates and reaches the last mile.",
  },
  {
    icon: <MessageSquare size={56} />,
    color: "text-green-500",
    bgColor: "from-green-500/20 to-green-600/10",
    title: "Social Media Management",
    description:
      "Digital storytelling meets business goals - creative initiatives that lead with insight and land with impact.",
  },
  {
    icon: <Handshake size={56} />,
    color: "text-yellow-500",
    bgColor: "from-yellow-500/20 to-yellow-600/10",
    title: "Strategic Partnerships",
    description:
      "Guiding partners through inflection points with astute collaborations across media, events, speakerships, and sponsorships.",
  },
  {
    icon: <Calendar size={56} />,
    color: "text-red-500",
    bgColor: "from-red-500/20 to-red-600/10",
    title: "Event Marketing",
    description:
      "Curating immersive event experiences that captivate audiences, amplify celebrations, and etch a lasting recall.",
  },
  {
    icon: <Users size={56} />,
    color: "text-pink-500",
    bgColor: "from-pink-500/20 to-pink-600/10",
    title: "Influencer Engagement",
    description:
      "Influencer communities are the new marketplaces - we help your organization build a presence where your audience already belongs.",
  },
  {
    icon: <Code size={56} />,
    color: "text-cyan-500",
    bgColor: "from-cyan-500/20 to-cyan-600/10",
    title: "Workforce Talent Solutions",
    description:
      "Helping you onboard, train, and manage the right talent, so that your organization scales and succeeds with ease.",
  },
]

function SectionUnderline() {
  return <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded" />
}

export default function FlipCards() {
  const { resolvedTheme } = useTheme();
  return (
    <section className="relative py-24 w-full bg-gradient-to-b from-[#f8f7f4] via-white to-[#f8f7f4] dark:from-[#0a0a14] dark:via-[#181824] dark:to-[#0a0a14] bg-noise">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-[#0a0a14]/60 dark:text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Our Solutions
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

function ServiceCard({ icon, color, bgColor, title, description, resolvedTheme }: ServiceCardProps & { resolvedTheme: string | undefined }) {
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

  return (
    <div
      className="h-[280px] w-full perspective-1000 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full border border-border rounded-xl bg-card flex flex-col items-center justify-center gap-6 backface-hidden transition-all duration-300 ${isHovered ? `bg-gradient-to-br ${bgColor}` : ''}`}
          style={{ zIndex: 2 }}
        >
          <div className={`${color} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>{icon}</div>
          <h3 className="text-xl font-semibold text-center text-card-foreground">{title}</h3>
        </div>
        {/* Back of card */}
        <div
          className={`absolute w-full h-full border border-border rounded-xl flex flex-col items-center justify-center px-6 py-8 backface-hidden transition-all duration-300 ${isHovered ? `bg-gradient-to-br ${bgColor}` : ''} ${resolvedTheme === 'light' ? 'bg-orange-50' : 'bg-[#181824]'} ${isFlipped ? 'shadow-2xl' : ''}`}
          style={{ zIndex: 3, transform: 'rotateY(180deg)' }}
        >
          <p className={`text-xl md:text-2xl text-center font-semibold leading-relaxed ${resolvedTheme === 'light' ? 'text-neutral-800' : 'text-white'}`}>{description}</p>
        </div>
      </div>
    </div>
  )
}

// Hidden utility to force Tailwind to generate custom classes
function HiddenTailwindUtilities() {
  return <div className="perspective-1000 transform-style-3d backface-hidden rotate-y-180 hidden" />
}
