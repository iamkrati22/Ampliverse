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


  const linkedinSvg = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#000000"></path> </g></svg>;

  const people = [
    {
      id: 1,
      name: "Ridhima Bhasin",
      role: "Founder & CEO",
      image: "/IMG_2506.JPG",
      bio: "To Ridhima, communication isn't just a business function, it's the force that drives impact. She has led strategic communication for global teams and high-stakes initiatives, from EU-funded innovation programs and diplomatic forums to fast-growing tech ecosystems. She founded Ampliverse to help businesses earn credibility through clarity, creativity, and meaningful collaboration.",
      linkedin: "https://www.linkedin.com/in/ridhima-bhasin/",
    },
    {
      id: 2,
      name: "Emily Boral",
      role: `Head Consultant Brand\n& Strategy`,
      image: "/Ejmily Boral.jpg",
      bio: "With over 18 years in media and marketing, she blends strategic insight with creative execution to build brands that resonate and grow. Her work spans inbound marketing, brand positioning, and impactful campaigns across sectors. An entrepreneur and storyteller at heart, she helps businesses drive meaningful engagement and lasting impact through strategy and communication.",
      linkedin: "https://www.linkedin.com/in/emily-boral/",
    },
    {
      id: 3,
      name: "Priyank Kaushik",
      role: "Head Consultant\nMedia Production",
      image: "/Priyank Kaushik .jpg",
      bio: "With over 12 years of expertise in crafting compelling visual stories, from corporate films to creative content, Priyank collaborates seamlessly with clients to bring ideas to life with innovation and precision. Skilled in end-to-end production, he thrives at the intersection of technical mastery and creative vision. Passionate about pushing the limits of possibilities, he believes the best stories emerge when craft meets purpose.",
      linkedin: "https://www.linkedin.com/in/priyank-kaushik-64232241/",
    },
    {
      id: 4,
      name: "Tatiana Kazmina",
      role: "Creative Consultant",
      image: "/Tatiana.jpg",
      bio: "With 16+ years of experience across production, marketing, and creative leadership, Tatiana Kazmina has helmed large-scale international projects across sport, media, and other sectors. She helps organizations find their voice through compelling narratives and design. Tatiana firmly believes in the power of storytelling to spark connections, drive impact, and inspire meaningful change.",
      linkedin: "https://www.linkedin.com/in/tatyanakazmina/",
    },
    {
      id: 5,
      name: "Sristhi Verma",
      role: "Business Strategy\nConsultant",
      image: "/Srishti Verma.png",
      bio: "With a diverse entrepreneurial journey across ITES, wellness, and hospitality sectors,  Sristhi  brings deep cross-sector expertise and a relentless drive for impact. She optimizes green tech operations while engaging in community development initiatives. For her, meaningful impact lies in the simplest of ideas that are designed thoughtfully and scaled smartly.",
      linkedin: "https://www.linkedin.com/in/sristhi-verma-b196a035/",
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
                      className={`object-cover${person.id === 3 ? ' object-top' : ''}${person.id === 1 ? ' scale-125' : ''} grayscale group-hover:grayscale-0 transition-all duration-500`}
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
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent p-0 text-neutral-800 dark:text-white hover:text-orange-500 transition-colors z-10 border-0 shadow-none w-12 h-12 flex items-center justify-center"
                    onClick={() => emblaApi.scrollPrev()}
                    aria-label="Previous slide"
                    style={{ transform: 'translateY(-50%)' }}
                  >
                    <ChevronLeft className="w-8 h-8 font-bold" />
                  </button>
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent p-0 text-neutral-800 dark:text-white hover:text-orange-500 transition-colors z-10 border-0 shadow-none w-12 h-12 flex items-center justify-center"
                    onClick={() => emblaApi.scrollNext()}
                    aria-label="Next slide"
                    style={{ transform: 'translateY(-50%)' }}
                  >
                    <ChevronRight className="w-8 h-8 font-bold" />
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
                        className={`w-full p-10 sm:p-8 mt-2 relative rounded-lg border transition-colors duration-300 ${
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
                        <div className="flex flex-col items-center gap-3 relative">
                          <div className="aspect-square w-32 rounded-full overflow-hidden relative border-4 border-white/10 shadow-xl mb-2">
                            <Image
                              src={person.image || "/placeholder.svg"}
                              alt={person.name}
                              fill
                              className={`object-cover${person.id === 3 ? ' object-top' : ''}${person.id === 1 ? ' scale-125' : ''}`}
                            />
                          </div>
                          <h3 className={`text-xl sm:text-xl font-bold flex items-center justify-center gap-1 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
                            {person.name}
                          </h3>
                          <p className={`font-mono text-xl sm:text-xl mt-1 ${resolvedTheme === 'light' ? 'text-orange-500/80' : 'text-orange-500/80'}`}>{person.role}</p>
                          <p className={`text-xl sm:text-base mt-2 md:text-justify ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}>{person.bio}</p>
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-8 h-8 flex items-center justify-center rounded-md ml-1 transition-colors`}
                            aria-label={`LinkedIn profile of ${person.name}`}
                          >
                            {linkedinSvg}
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
                <div className="flex items-center gap-2 mb-1 relative">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold flex items-center ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}> 
                    <span className="text-orange-500/60 mr-1 font-mono">{"<"}</span>
                    {activePerson.name}
                    <span className="text-orange-500/60 ml-1 font-mono">{">"}</span>
                  </h3>
                  <a
                    href={activePerson.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 flex items-center justify-center rounded-md ml-1 transition-colors`}
                    aria-label={`LinkedIn profile of ${activePerson.name}`}
                  >
                    {linkedinSvg}
                  </a>
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
      {/* Subtle gradient band for dark mode */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 pointer-events-none" 
        style={{
          background: resolvedTheme === 'dark' 
            ? 'linear-gradient(to bottom, rgba(10,10,20,0) 0%, rgba(24,24,36,0.3) 100%)'
            : 'none'
        }}
      />
    </section>
  );
}
