"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Sparkles, Zap, BarChart3, Globe, Quote } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Strategic Partnership",
    description:
      "We craft meaningful brand expressions and deliver performance-led collaborative models that bridge the agency-brand divide, making us your true partners in progress.",
    icon: <Sparkles className="h-8 w-8 text-orange-500" />,
  },
  {
    id: 2,
    title: "B2B Technology Specialists",
    description:
      "We are the go-to trusted partner for companies in the B2B domain, especially technology, connecting tomorrow's solutions with today's audience.",
    icon: <Zap className="h-8 w-8 text-orange-500" />,
  },
  {
    id: 3,
    title: "Performance-Driven Solutions",
    description:
      "Our performance-driven digital PR, global media relations and workforce talent solutions amplify credibility and discoverability for our client partners.",
    icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
  },
  {
    id: 4,
    title: "Global Reach, Local Impact",
    description:
      "With a worldwide network of specialists, we deliver campaigns that resonate locally while maintaining global brand consistency.",
    icon: <Globe className="h-8 w-8 text-orange-500" />,
  },
]

export function WhoWeAre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section ref={ref} className="relative py-24 w-full bg-[#f8f7f4] dark:bg-[#0a0a14] text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Heading and paragraphs */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 uppercase">Who We Are</h2>
            <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
              Ampliverse is an integrated communications advisory enabling organizations worldwide to craft purposeful brand expression that drives business impact.
            </p>
            <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
              We collaborate with our partners to power sharp perspectives that spark meaningful industry conversations and scale stakeholder trust.
            </p>
          </div>
          {/* Right: Quote block */}
          <div className="flex flex-col items-start md:items-center">
            <div className="relative flex flex-col items-start w-full max-w-2xl bg-white dark:bg-[#18181c] rounded-2xl p-6 shadow-lg border border-orange-200 dark:border-orange-900">
              {/* Orange dot in top-right */}
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-orange-500"></span>
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-orange-500 mr-2" />
                <span className="uppercase text-sm font-bold text-orange-500 tracking-wider">Our Philosophy</span>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium leading-snug mb-6 text-foreground dark:text-white">
                &quot;Grounded in insight, our advisory blends strategic clarity with creative depth, distilling complexity into clear and compelling messaging that reaches the last-mile.&quot;
              </blockquote>
              <hr className="w-full border-t border-gray-200 dark:border-white/10 mb-3" />
              <span className="text-sm text-muted-foreground italic">&mdash; Ampliverse Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
