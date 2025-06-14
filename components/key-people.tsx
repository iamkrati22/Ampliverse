"use client";

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Triangle } from "lucide-react"
import { useTheme } from "next-themes"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

interface Person {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

export function KeyPeople(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activePersonId, setActivePersonId] = useState<number>(1)
  const { resolvedTheme } = useTheme()

  // Carousel state for syncing dots
  const [emblaApi, setEmblaApi] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Update selected index on slide change
  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  const people = [
    {
      id: 1,
      name: "Ridhima Bhasin",
      role: "Founder & CEO",
      image: "/IMG_2506.JPG",
      bio: "To Ridhima, communication isn't just a business functio, it's the force that drives impact. She has led strategic communication for global teams and high-stakes initiatives, from EU-funded innovation programs and diplomatic forums to fast-growing tech ecosystems. She founded Ampliverse to help businesses earn credibility through clarity, creativity, and meaningful collaboration.",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Emily Boral",
      role: `Head Consultant Brand\n& Strategy`,
      image: "/Ejmily Boral.jpg",
      bio: "With over 18 years in media and marketing, she blends strategic insight with creative execution to build brands that resonate and grow. Her work spans inbound marketing, brand positioning, and impactful campaigns across sectors. An entrepreneur and storyteller at heart, she helps businesses drive meaningful engagement and lasting impact through strategy and communication.",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Priyank Kaushik",
      role: "Head Consultant\nMedia Production",
      image: "/Priyank Kaushik .jpg",
      bio: "With over 12 years of expertise in crafting compelling visual stories, from corporate films to creative content, Priyank collaborates seamlessly with clients to bring ideas to life with innovation and precision. Skilled in end-to-end production, he thrives at the intersection of technical mastery and creative vision. Passionate about pushing the limits of possibilities, he believes the best stories emerge when craft meets purpose.",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Sristhi Verma",
      role: "Business Strategy\nConsultant",
      image: "/Srishti Verma.png",
      bio: "With a diverse entrepreneurial journey across ITES, wellness, and hospitality sectors,  Sristhi  brings deep cross-sector expertise and a relentless drive for impact. She optimizes green tech operations while engaging in community development initiatives. For her, meaningful impact lies in the simplest of ideas that are designed thoughtfully and scaled smartly.",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Tatiana Kazmina",
      role: "Creative Consultant",
      image: "/Tatiana.jpg",
      bio: "With 16+ years of experience across production, marketing, and creative leadership, Tatiana Kazmina has helmed large-scale international projects across sport, media, and other sectors. She helps organizations find their voice through compelling narratives and design. Tatiana firmly believes in the power of storytelling to spark connections, drive impact, and inspire meaningful change.",
      linkedin: "#",
    },
    
  ];

  const activePerson = people[activePersonId - 1];

  return (
    <section
      id="people"
      ref={ref}
      className={`py-12 md:py-24 relative overflow-x-hidden transition-colors duration-300 ${resolvedTheme === 'light' ? 'bg-[#fcfcfa]' : 'bg-[#0a0a14]'}`}
    >
      <div className="container px-0 mx-auto md:px-4 overflow-x-hidden">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={`text-sm font-medium tracking-wider uppercase flex items-center justify-center ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Our Team
            <span className="text-orange-500/70 ml-1">{" >"}</span>
          </span>
          <h2 className={`mt-2 text-4xl md:text-5xl font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>Key People</h2>
          <motion.div
            className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        <div className="w-full mx-auto">
          {/* Zigzag Row Layout */}
          <div className="hidden lg:flex justify-center gap-12 mb-12">
            {people.map((person, idx) => {
              // W pattern: [up, down, up, down, up]
              // e.g. [-translate-y-10, translate-y-10, -translate-y-16, translate-y-10, -translate-y-10]
              const wPattern = [
                "lg:-translate-y-20", // 1st (left) - up (more)
                "lg:translate-y-20",  // 2nd - down (more)
                "lg:-translate-y-32", // 3rd (center) - up most
                "lg:translate-y-20",  // 4th - down (more)
                "lg:-translate-y-20"  // 5th (right) - up (more)
              ];
              return (
                <motion.div
                  key={person.id}
                  className={`${person.id%2 != 0 ? 'mb-[10vh]' : 'mt-[10vh]'} relative cursor-pointer group flex flex-col items-center ${wPattern[idx]}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setActivePersonId(person.id)}
                >
                  <div className="aspect-square w-32 md:w-36 lg:w-40 rounded-full overflow-hidden relative border-4 border-white/10 shadow-xl">
                    <Image
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      fill
                      className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${person.id === 3 ? "object-top" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-4 text-center flex flex-col items-center">
                    <h3 className={`text-xl font-semibold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>{person.name}</h3>
                    <p className={`font-mono text-sm mt-1 ${resolvedTheme === 'light' ? 'text-orange-500/80' : 'text-orange-500/80'}`} style={{whiteSpace: 'pre-line'}}>{person.role}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Mobile: Carousel for Key People */}
          <div className="lg:hidden w-full flex flex-col items-center mb-8">
            <div className="relative max-w-xs w-full mx-auto">
              {/* Custom mobile arrows inside card container */}
              {emblaApi && (
                <>
                  <button
                    className="block md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg border border-white/10 hover:bg-orange-500/80 transition-colors pl-2"
                    onClick={() => emblaApi.scrollPrev()}
                    aria-label="Previous slide"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="block md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg border border-white/10 hover:bg-orange-500/80 transition-colors pr-2"
                    onClick={() => emblaApi.scrollNext()}
                    aria-label="Next slide"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <Carousel opts={{ loop: true }} setApi={setEmblaApi}>
                <CarouselContent>
                  {people.map((person, idx) => (
                    <CarouselItem key={person.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`w-full p-6 sm:p-8 mt-2 relative rounded-lg border transition-colors duration-300 ${
                          resolvedTheme === 'light'
                            ? 'bg-white border-neutral-200 shadow-xl'
                            : 'bg-gradient-to-br from-[#23222b]/80 to-[#181824]/90 border border-white/10 shadow-2xl backdrop-blur-lg'
                        }`}
                      >
                        {/* Layered border overlays for dark mode */}
                        {resolvedTheme === 'dark' && (
                          <>
                            <div className="pointer-events-none absolute inset-0 border border-white/10 rounded-lg" style={{top:8,left:8,right:8,bottom:8}} />
                            <div className="pointer-events-none absolute inset-0 border border-white/5 rounded-lg" style={{top:16,left:16,right:16,bottom:16}} />
                          </>
                        )}
                        <div className="flex flex-col items-center gap-3">
                          <div className="aspect-square w-32 rounded-full overflow-hidden relative border-4 border-white/10 shadow-xl mb-2">
                            <Image
                              src={person.image || "/placeholder.svg"}
                              alt={person.name}
                              fill
                              className={`object-cover ${person.id === 3 ? "object-top" : ""}`}
                            />
                          </div>
                          <h3 className={`text-xl sm:text-xl font-bold flex items-center justify-center gap-1 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
                            {person.name}
                          </h3>
                          <p className={`font-mono text-xl sm:text-xl mt-1 ${resolvedTheme === 'light' ? 'text-orange-500/80' : 'text-orange-500/80'}`}>{person.role}</p>
                          <p className={`text-justify text-xl sm:text-base mt-2 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}>{person.bio}</p>
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-8 h-8 rounded-lg flex items-center justify-center group"
                            aria-label={`LinkedIn profile of ${person.name}`}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.667 13.333h3.333v10h-3.333v-10zm1.667-1.667a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333zm4.167 1.667h3.2v1.367h.047c.445-.843 1.533-1.733 3.153-1.733 3.373 0 4 2.22 4 5.107v5.259h-3.333v-4.667c0-1.113-.02-2.547-1.553-2.547-1.553 0-1.793 1.213-1.793 2.467v4.747h-3.333v-10z"
                                fill="white"
                                className="transition-colors duration-200 group-hover:fill-[#f97316]"
                              />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            {/* Synced dots below carousel */}
            <div className="flex justify-center mt-6 space-x-2">
              {people.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${selectedIndex === idx ? 'bg-orange-500 w-5' : 'bg-neutral-400/40 dark:bg-white/20'}`}
                  onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bio Section for desktop only (if needed, wrap in lg:block hidden) */}
          <div className="lg:block hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePersonId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`w-full mx-auto p-10 md:p-8 mt-8 relative rounded-lg border transition-colors duration-300
                  ${resolvedTheme === 'light'
                    ? 'bg-white border-neutral-200 shadow-xl'
                    : 'bg-gradient-to-br from-[#23222b]/80 to-[#181824]/90 border border-white/10 shadow-2xl backdrop-blur-lg'}`}
                style={{ maxWidth: '900px' }}
              >
                {/* Layered border overlays for dark mode */}
                {resolvedTheme === 'dark' && (
                  <>
                    <div className="pointer-events-none absolute inset-0 border border-white/10 rounded-lg" style={{top:8,left:8,right:8,bottom:8}} />
                    <div className="pointer-events-none absolute inset-0 border border-white/5 rounded-lg" style={{top:16,left:16,right:16,bottom:16}} />
                  </>
                )}
                {/* LinkedIn icon in top-right */}
                <a
                  href={activePerson.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-lg items-center justify-center group hidden lg:flex"
                  aria-label={`LinkedIn profile of ${activePerson.name}`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 13.333h3.333v10h-3.333v-10zm1.667-1.667a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333zm4.167 1.667h3.2v1.367h.047c.445-.843 1.533-1.733 3.153-1.733 3.373 0 4 2.22 4 5.107v5.259h-3.333v-4.667c0-1.113-.02-2.547-1.553-2.547-1.553 0-1.793 1.213-1.793 2.467v4.747h-3.333v-10z"
                      fill="white"
                      className="transition-colors duration-200 group-hover:fill-[#f97316]"
                    />
                  </svg>
                </a>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
                    <span className="text-orange-500/60 mr-1 font-mono">{"<"}</span>
                    {activePerson.name}
                    <span className="text-orange-500/60 ml-1 font-mono">
                      {">"}
                    </span>
                  </h3>
                </div>
                <p className={`mb-3 font-mono text-xs sm:text-sm ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>
                  {"// "}
                  {activePerson.role}
                </p>
                <p className={`text-justify md:text-xl text-base sm:text-base ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}>{activePerson.bio}</p>
                <div className="font-mono text-orange-500/40 mt-3 text-xs sm:text-sm">
                  {"</"}
                  {activePerson.name}
                  {">"}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Indicators (desktop only) */}
          <div className="hidden lg:flex justify-center items-center gap-2 mt-8">
            {people.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePersonId(idx + 1)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activePersonId === idx + 1
                    ? "bg-orange-500 w-4"
                    : "bg-white/20"
                }`}
                aria-label={`View ${people[idx].name}'s bio`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
