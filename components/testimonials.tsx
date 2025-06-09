"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"

// Use this variable for all light mode backgrounds (navbar, footer, testimonials, etc.)
const LIGHT_BG = '#faf9f6';

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [current, setCurrent] = useState(0)
  const { resolvedTheme } = useTheme()

  const testimonials = [
    {
      id: 1,
      quote:
        "It was an absolute delight collaborating with Ampliverse India. Their team's professionalism, creativity, and dedication to delivering top-notch results exceeded our expectations. What impressed us the most was their ability to provide exceptional value within our budget. Their strategic approach, meticulous planning, and flawless execution ensured that every rupee was well-spent, yielding impressive returns on our investment. If you're looking for a reliable, innovative, and results-driven PR partner, look no further than Ampliverse India.",
      author: "Hitesh Joshi",
      role: "Lead - Strategy & Partnerships",
      company: "India Khelo Football",
      logo: "/IKF Logo.png",
      image: "/Hitesh Joshi Photo.jpg",
      linkedin: "hitesh-joshi"
    },
    {
      id: 2,
      quote:
        "Ampliverse has transformed our brand communication strategy. Their deep understanding of the B2B tech landscape helped us position our solutions effectively to enterprise clients. The media coverage they secured for us has significantly boosted our credibility in the market.",
      author: "Priya Sharma",
      role: "CMO",
      company: "TechSolutions Inc.",
      logo: "/AGL Logo.png",
      linkedin: "priya-sharma"
    },
    {
      id: 3,
      quote:
        "Working with Ampliverse has been a game-changer for our startup. Their strategic approach to PR and communications helped us gain visibility in key publications that matter to our industry. Their team's responsiveness and attention to detail is unmatched.",
      author: "Team India Blockchain Week",
      role: "",
      company: "InnovateX",
      logo: "/India Blockchain Week.jpg",
      image: "/India Blockchain Week.jpg",
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
    <section
      ref={ref}
      className={`min-h-screen flex flex-col justify-center items-center w-full relative overflow-hidden transition-colors duration-500
        bg-[${LIGHT_BG}] dark:bg-[#0a0a14]`}
      style={{ backgroundColor: resolvedTheme === "light" ? LIGHT_BG : "#0a0a14" }}
    >
      {/* Subtle background element: large blurred quarter circle, bottom left */}
      <div className="hidden md:block absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-[#E5E7EB] dark:bg-white opacity-5 blur-[80px] pointer-events-none z-0" />
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-neutral-500 dark:text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Testimonials
            <span className="text-orange-500/70 ml-1">{" >"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">Our Partners' Voices</h2>
          <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded" />
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="max-w-screen-2xl w-full mx-auto relative flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-200 dark:bg-[#1a1a2e] rounded-full p-2 shadow-md text-neutral-800 dark:text-white hover:text-orange-500 transition-colors z-10"
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
                className={`p-10 md:p-12 rounded-2xl border relative flex flex-col justify-between h-[580px] md:h-[500px] lg:h-[460px] w-full transition-colors duration-300
                  ${resolvedTheme === 'light'
                    ? 'bg-[#fcfcfa] border-neutral-200 shadow-lg'
                    : 'glass-panel border-white/10 dark:bg-[#181824]/80 shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-md'}
                `}
                style={{ maxWidth: '900px' }}
              >
                {/* Single large quote mark in top right */}
                <div className={`absolute top-8 right-8 text-[160px] font-serif leading-none pointer-events-none select-none
                  ${resolvedTheme === 'light' ? 'text-neutral-200' : 'text-white/10'}`}
                >
                  &rdquo;
                </div>

                <div className="flex justify-center mb-8 relative z-10">
                  <div className={`relative flex items-center justify-center w-28 h-28 mx-auto rounded-full bg-white border-4 shadow-lg shadow-orange-900/20 overflow-hidden
                    ${resolvedTheme === 'light' ? 'border-white' : 'dark:border-[#232323]'}`}
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500 pointer-events-none"></div>
                    <Image
                      src={testimonials[current].logo || "/placeholder.svg"}
                      alt={testimonials[current].company}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <blockquote className={`text-base mb-6 relative z-10 overflow-hidden line-clamp-7
                  ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}
                >
                  {truncateWords(testimonials[current].quote, 55)}
                </blockquote>

                <div className="flex items-center mb-4">
                  {testimonials[current].image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                      <Image
                        src={testimonials[current].image}
                        alt={testimonials[current].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-4">
                      <span className="text-orange-500 font-bold text-xl">{testimonials[current].author[0]}</span>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`font-semibold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>{testimonials[current].author}</h4>
                      <a 
                        href={`https://www.linkedin.com/in/${testimonials[current].linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${resolvedTheme === 'light' ? 'text-neutral-400 hover:text-neutral-700' : 'dark:text-white/40 dark:hover:text-white/60'}`}
                        aria-label={`${testimonials[current].author}'s LinkedIn profile`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                    <p className={`text-sm ${resolvedTheme === 'light' ? 'text-neutral-500' : 'dark:text-white/60'}`}>{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-neutral-200 dark:bg-[#1a1a2e] rounded-full p-2 shadow-md text-neutral-800 dark:text-white hover:text-orange-500 transition-colors z-10"
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
                  current === index ? "bg-orange-500" : "bg-neutral-400/40 dark:bg-white/20"
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
