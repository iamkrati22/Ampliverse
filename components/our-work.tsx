"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { WorkModal } from "@/components/work-modal"

export function OurWork() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Tech Startup Media Campaign",
      subtitle: "Brand Awareness",
      image: "/placeholder.svg?height=400&width=600",
      overview:
        "Comprehensive media campaign for a B2B tech startup, resulting in coverage across 50+ publications. We developed a strategic narrative that positioned the company as an industry innovator, securing features in top-tier tech publications and driving significant website traffic and lead generation.",
      links: [
        { title: "TechCrunch Feature", url: "#" },
        { title: "Forbes Coverage", url: "#" },
      ],
    },
    {
      id: 2,
      title: "SaaS Brand Positioning",
      subtitle: "Market Entry",
      image: "/placeholder.svg?height=400&width=600",
      overview:
        "Strategic brand positioning for a SaaS company entering the enterprise market, establishing thought leadership. Our comprehensive approach included messaging framework development, executive visibility programs, and targeted media outreach that resulted in the company being recognized as a category leader.",
      links: [
        { title: "Case Study", url: "#" },
        { title: "Media Coverage", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Tech Conference PR",
      subtitle: "Event Marketing",
      image: "/placeholder.svg?height=400&width=600",
      overview:
        "End-to-end PR management for a major tech conference, securing speaker opportunities and media coverage. We coordinated press activities, managed media relations, and created compelling content that drove attendance and established the event as a must-attend industry gathering.",
      links: [
        { title: "Event Coverage", url: "#" },
        { title: "Press Release", url: "#" },
      ],
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20"></div>

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
