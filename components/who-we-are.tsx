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
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              Ampliverse is an integrated communications advisory enabling organizations worldwide to craft purposeful brand expression that drives business impact. We collaborate with our partners to power sharp perspectives that spark meaningful industry conversations and scale stakeholder trust. Grounded in insight, our advisory blends strategic clarity with creative depth, distilling complexity into clear and compelling messaging that reaches the last-mile.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              We pride ourselves in employing the brightest talent from across the globe, covering a range of career types and communications fields.
            </p>
          </div>
          {/* Right: Quote block */}
          <div className="flex flex-col items-start md:items-center">
            <div className="flex flex-col items-start w-full max-w-md">
              <Quote className="h-8 w-8 text-green-500 mb-2" />
              <div className="h-1 w-16 bg-green-500 rounded mb-4" />
              <blockquote className="text-xl md:text-2xl font-semibold leading-snug mb-4">
                "We believe that it takes great people to deliver a great product."
              </blockquote>
              <div className="flex flex-col">
                <span className="font-signature text-lg text-muted-foreground mt-2 italic">Ampliverse Team</span>
                <a 
                  href="https://www.linkedin.com/in/your-linkedin-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground/60 hover:text-muted-foreground/80 transition-colors mt-1"
                >
                  @linkedin-id
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
