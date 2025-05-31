"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface WorkModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: number
    title: string
    image: string
    overview: string
    links: { title: string; url: string }[]
    subtitle: string
    topStories?: string[]
  } | null
}

export function WorkModal({ isOpen, onClose, project }: WorkModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isMounted) return null
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-[#0a0a14]/90 backdrop-blur-md rounded-lg border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:text-orange-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative h-64 md:h-80 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-[#181824]"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-label={project.title}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-orange-400 text-sm mb-1 font-mono">
                  {"// "}
                  {project.subtitle}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                  <span className="text-orange-500/70 mr-2 font-mono">{"<"}</span>
                  Overview
                  <span className="text-orange-500/70 ml-2 font-mono">{"/>"}</span>
                </h3>
                <p className="text-white/80">{project.overview}</p>
              </div>

              {project.topStories && project.topStories.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <span className="text-orange-500/70 mr-2 font-mono">{"<"}</span>
                    Top Stories
                    <span className="text-orange-500/70 ml-2 font-mono">{"/>"}</span>
                  </h3>
                  <ul className="space-y-2">
                    {project.topStories.map((story, index) => (
                      <li key={index} className="text-white/80 flex items-start">
                        <span className="text-orange-500/70 mr-2 font-mono">→</span>
                        {story}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  <span className="text-orange-500/70 mr-2 font-mono">{"<"}</span>
                  Featured In
                  <span className="text-orange-500/70 ml-2 font-mono">{"/>"}</span>
                </h3>
                <ul className="space-y-2">
                  {project.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        className="text-white hover:text-orange-400 hover:underline inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2 font-mono text-orange-500/70">→</span> {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
