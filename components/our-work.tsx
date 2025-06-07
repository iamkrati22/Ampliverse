"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { WorkModal } from "@/components/work-modal"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function OurWork() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Introducing Masses to the Web3 Revolution  ",
      subtitle: "Tech Conference & Event PR",
      image: "/India Blockchain Week.png",
      overview:
        "For India Blockchain Week 2024 by Hashed Emergent—India's largest Web3 gathering—we led a focused media outreach that secured 300+ stories and 25+ speaker features across 85+ top-tier publications. IBW became the first crypto event to trend across India's leading financial and mainline media during Bitcoin's record-breaking surge.",
      links: [
        { title: "Event Coverage", url: "#" },
        { title: "Media Kit", url: "#" },
      ],
      topStories: [
        "Gadgets 360 by NDTV - India Blockchain Week to Return for Second Edition: All Details",
        "The Economic Times - Can India become the next global hub for Web3 development?",
        "The Hindu Business Line - India's Web3 start-ups surge, get $462 million in first 9 months of 2024: Report",
        "Cointelegraph - India's Web3 dominance fueled by 1K startups, global investments, dev talent",
        "Moneycontrol - Web3, crypto regulatory proposals take centre stage at India Blockchain Week",
        "Businessworld - Top Leaders Hail India As Web3 Powerhouse, But Urge Regulatory Clarity"
      ]
    },
    {
      id: 2,
      title: "Amplifying the Voice of Indian Grassroots Football Talent",
      subtitle: "Sports & Community Engagement",
      image: "/IKF -  India Khelo Football.png",
      overview:
        "For India Khelo Football—India's first phygital grassroots-to-global football platform—we've driven 200+ media stories nationwide over 3 years, consistently amplifying their trials and talent showcases. With an average reach of 300M+ per activation, IKF now commands recurring features in top Indian media.",
      links: [
        { title: "Media Coverage", url: "#" },
        { title: "Case Study", url: "#" },
      ],
      topStories: [
        "Spotlighting grassroots football talent across India",
        "Regular features in top Indian sports media",
        "300M+ reach per activation",
        "200+ media stories over 3 years"
      ]
    },
   
    {
      id: 3,
      title: "Spotlighting Eupropen Technologies in India",
      subtitle: "International Innovation Hub",
      image: "/EU-India Innocenter.png",
      overview:
        "For the EU-India Innocenter, funded by the European Union's Horizon 2020 programme, we drove 450+ stories over 3 years—spotlighting European tech in India. Our strategic media outreach made its flagship Blue Carpet Night a PR success, securing front-page coverage in top national business and technology outlets.",
      links: [
        { title: "Project Overview", url: "#" },
        { title: "Media Coverage", url: "#" },
      ],
      topStories: [
        "450+ media stories over 3 years",
        "Front-page coverage in national business outlets",
        "Successful Blue Carpet Night PR campaign",
        "Spotlighting European technologies in India"
      ]
    },
  ]

  const openModal = (id: number) => {
    setSelectedProject(id)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const selectedProjectData =
    selectedProject !== null ? projects.find((project) => project.id === selectedProject) || null : null

  return (
    <section id="work" ref={ref} className="py-24 bg-[#0f0f1a] relative overflow-hidden w-full">
      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Portfolio
            <span className="text-orange-500/70 ml-1">{">"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">Our Work</h2>
        </motion.div>

        <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-[2000px] mx-auto">
          {/* Mobile carousel */}
          <div className="block md:hidden">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={project.id}>
                    <motion.div
                      className="group relative h-80 overflow-hidden rounded-lg cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-lg"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      onClick={() => openModal(project.id)}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-black/60 z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 z-20 pointer-events-none"></div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 z-30">
                        <div className="transform transition-transform duration-300 group-hover:translate-y-0">
                          <p className="text-orange-400 text-sm mb-1 font-mono">
                            {"// "}
                            {project.subtitle}
                          </p>
                          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-30" />
              <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-30" />
            </Carousel>
          </div>
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative h-80 overflow-hidden rounded-lg cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => openModal(project.id)}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 z-20 pointer-events-none"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-30">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-orange-400 text-sm mb-1 font-mono">
                      {"// "}
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.overview.substring(0, 100)}...</p>
                      <motion.button
                        className="text-white text-sm font-medium inline-flex items-center bg-orange-500/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-orange-500/40 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More <span className="ml-1">→</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <WorkModal isOpen={selectedProject !== null} onClose={closeModal} project={selectedProjectData} />
    </section>
  )
}
