"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Triangle } from "lucide-react"

export function Loader() {
  const [showFirstText, setShowFirstText] = useState(true)
  const [showSecondText, setShowSecondText] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress bar animation
    let progressInterval: NodeJS.Timeout | null = null
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (progressInterval) clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // First text appears and fades out
    const firstTimer = setTimeout(() => {
      setShowFirstText(false)
    }, 2000)

    // Second text appears after first text fades out
    const secondTimer = setTimeout(() => {
      setShowSecondText(true)
    }, 2500)

    // Second text fades out and loader completes
    const finalTimer = setTimeout(() => {
      setShowSecondText(false)
      setIsLoading(false)
    }, 4000)

    return () => {
      if (progressInterval) clearInterval(progressInterval)
      clearTimeout(firstTimer)
      clearTimeout(secondTimer)
      clearTimeout(finalTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-[#0a0a14] z-50 flex items-center justify-center">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 z-0 animate-loader-grid pointer-events-none" aria-hidden>
        <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.12 }}>
          <defs>
            <pattern id="loaderGrid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#loaderGrid)" />
        </svg>
      </div>
      <div className="relative flex flex-col items-center justify-center z-10">
        {/* Fun animated triangle */}
        <motion.div
          className="mb-4"
        >
          <Triangle className="h-10 w-10 drop-shadow-lg" style={{ fill: '#f97316', color: '#f97316' }} />
        </motion.div>
        <AnimatePresence mode="wait">
          {showFirstText && (
            <motion.div
              key="first"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-normal mb-4 text-white font-sans"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Shaping the shift
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showSecondText && (
            <motion.div
              key="second"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-normal mb-4 text-white font-sans flex items-center justify-center"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span className="text-orange-500 mr-2">//</span>
              <Triangle className="h-8 w-8 mr-1" style={{ fill: '#f97316', color: '#f97316' }} />
              MPLIVERSE
              <span className="text-white/60 ml-1">//</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar with pulse */}
        <motion.div
          className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-orange-500"
            style={{ width: `${progress}%` }}
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  )
}

/* Add this to your globals.css:
.animate-loader-grid {
  animation: loader-grid-move 2.5s linear infinite;
}
@keyframes loader-grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}
*/
