"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote:
        "It was an absolute delight collaborating with Ampliverse India. Their team's professionalism, creativity, and dedication to delivering top-notch results exceeded our expectations. What impressed us the most was their ability to provide exceptional value within our budget. Their strategic approach, meticulous planning, and flawless execution ensured that every rupee was well-spent, yielding impressive returns on our investment. If you're looking for a reliable, innovative, and results-driven PR partner, look no further than Ampliverse India.",
      author: "Hitesh Joshi",
      role: "Lead - Strategy & Partnerships",
      company: "India Khelo Football",
      logo: "/placeholder.svg?height=60&width=120",
      linkedin: "hitesh-joshi"
    },
    {
      id: 2,
      quote:
        "Ampliverse has transformed our brand communication strategy. Their deep understanding of the B2B tech landscape helped us position our solutions effectively to enterprise clients. The media coverage they secured for us has significantly boosted our credibility in the market.",
      author: "Priya Sharma",
      role: "CMO",
      company: "TechSolutions Inc.",
      logo: "/placeholder.svg?height=60&width=120",
      linkedin: "priya-sharma"
    },
    {
      id: 3,
      quote:
        "Working with Ampliverse has been a game-changer for our startup. Their strategic approach to PR and communications helped us gain visibility in key publications that matter to our industry. Their team's responsiveness and attention to detail is unmatched.",
      author: "Rahul Mehta",
      role: "Founder & CEO",
      company: "InnovateX",
      logo: "/placeholder.svg?height=60&width=120",
      linkedin: "rahul-mehta"
    },
  ]

  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isInView, testimonials.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Helper to truncate testimonial text
  function truncateWords(text: string, wordLimit: number) {
    const words = text.split(' ')
    if (words.length <= wordLimit) return text
    return words.slice(0, wordLimit).join(' ') + '...'
  }

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center items-center bg-[#0f0f1a] w-full relative overflow-hidden">
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Testimonials
            <span className="text-orange-500/70 ml-1">{" >"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">Our Partners' voices</h2>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="max-w-5xl w-full mx-auto relative flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1a1a2e] rounded-full p-2 shadow-md text-white hover:text-orange-500 transition-colors z-10"
              aria-label="Previous testimonial"
              style={{ transform: 'translateY(-50%)' }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-8 md:p-12 rounded-lg border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative flex flex-col justify-between h-[520px] md:h-[440px] lg:h-[400px] w-full"
                style={{ maxWidth: '900px' }}
              >
                {/* Single large quote mark in top right */}
                <div className="absolute top-8 right-8 text-white/10 text-[160px] font-serif leading-none pointer-events-none select-none">
                  &rdquo;
                </div>

                <div className="flex justify-center mb-8 relative z-10">
                  <div className="h-16 w-32 relative">
                    <Image
                      src={testimonials[current].logo || "/placeholder.svg"}
                      alt={testimonials[current].company}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <blockquote className="text-base text-white/80 mb-8 relative z-10 overflow-hidden line-clamp-6">
                  {truncateWords(testimonials[current].quote, 55)}
                </blockquote>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-bold text-xl">{testimonials[current].author[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-semibold">{testimonials[current].author}</h4>
                      <a 
                        href={`https://www.linkedin.com/in/${testimonials[current].linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white/60 transition-colors"
                        aria-label={`${testimonials[current].author}'s LinkedIn profile`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                    <p className="text-white/60 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1a1a2e] rounded-full p-2 shadow-md text-white hover:text-orange-500 transition-colors z-10"
              aria-label="Next testimonial"
              style={{ transform: 'translateY(-50%)' }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots below card, centered */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  current === index ? "bg-orange-500" : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
