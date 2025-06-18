"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

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
    topStories?: {text: string, url:string}[]
  } | null
}

export function WorkModal({ isOpen, onClose, project }: WorkModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme } = useTheme();

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
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-lg border transition-colors duration-300
              ${resolvedTheme === 'light'
                ? 'bg-white border-neutral-200 shadow-2xl'
                : 'bg-[#0a0a14]/90 border-white/10 backdrop-blur-md'}
            `}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors
                ${resolvedTheme === 'light' ? 'bg-neutral-100 text-neutral-700 hover:text-orange-500' : 'bg-black/50 text-white hover:text-orange-500 backdrop-blur-sm'}`}
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
                priority
              />
              <div
                className="absolute inset-0 rounded-t-lg pointer-events-none"
                style={{
                  background: resolvedTheme === 'light'
                    ? 'linear-gradient(to bottom, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 100%)'
                    : 'linear-gradient(to bottom, rgba(10,10,20,0.92) 0%, rgba(10,10,20,0.85) 100%)',
                  boxShadow: resolvedTheme === 'light' ? '0 8px 32px 0 rgba(0,0,0,0.25)' : undefined
                }}
                aria-label={project.title}
              ></div>
              <div className="absolute bottom-0 left-0 w-full h-24 rounded-b-lg pointer-events-none" style={{background: resolvedTheme === 'light' ? 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.0) 100%)' : 'linear-gradient(to top, rgba(10,10,20,0.92) 0%, rgba(10,10,20,0.0) 100%)'}} />
              <div className="absolute bottom-0 left-0 p-6">
                <p className={`text-orange-400 text-sm mb-1 font-mono`}>
                  {"// "}
                  {project.subtitle}
                </p>
                <h2 className={`text-4xl md:text-3xl font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>{project.title}</h2>
              </div>
            </div>

            <div className="p-6">
              {project.topStories && project.topStories.length > 0 && (
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 flex items-center ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
                    <span className="text-orange-500/70 mr-2 font-mono">{"<Top Stories>"}</span>
                  </h3>
                  <ul className="space-y-2">
                    {project.topStories.map((story, index) => (
                      <li key={index} className={`text-xl ${resolvedTheme === 'light' ? 'text-neutral-700' : 'text-white/80'} flex items-start`}>
                        <span className="mr-2 font-mono" aria-hidden="true">
                          {/* Triangle SVG */}
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="text-orange-500/70 mt-1"><polygon points="6,0 12,12 0,12" /></svg>
                        </span>
                        <a href={story.url} target="_blank">
                          {story.text} <svg className="w-[5vw] md:w-[1.5vw]" fill="#000088" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000088" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id=""> <title>popout</title> <path d="M15.694 13.541l2.666 2.665 5.016-5.017 2.59 2.59 0.004-7.734-7.785-0.046 2.526 2.525-5.017 5.017zM25.926 16.945l-1.92-1.947 0.035 9.007-16.015 0.009 0.016-15.973 8.958-0.040-2-2h-7c-1.104 0-2 0.896-2 2v16c0 1.104 0.896 2 2 2h16c1.104 0 2-0.896 2-2l-0.074-7.056z"></path> </g></svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <span className="block mt-4 text-orange-500/70 font-mono">{"</Top Stories>"}</span>
                </div>
              )}

              {/* <div>
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
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
