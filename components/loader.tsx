"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Loader() {
  const [showShaping, setShowShaping] = useState(false)
  const [showThe, setShowThe] = useState(false)
  const [showShift, setShowShift] = useState(false)
  const [showUnderline, setShowUnderline] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setShowShaping(true)
    const theTimer = setTimeout(() => setShowThe(true), 900)
    const shiftTimer = setTimeout(() => setShowShift(true), 1800)
    const underlineTimer = setTimeout(() => setShowUnderline(true), 2700)
    const fadeOutTimer = setTimeout(() => {
      setShowShaping(false)
      setShowThe(false)
      setShowShift(false)
      setShowUnderline(false)
    }, 4200)
    const logoTimer = setTimeout(() => setShowLogo(true), 5000)
    const finishTimer = setTimeout(() => setIsLoading(false), 6700)
    return () => {
      clearTimeout(theTimer)
      clearTimeout(shiftTimer)
      clearTimeout(underlineTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(logoTimer)
      clearTimeout(finishTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="w-[100vw] h-[100vh] fixed inset-0 bg-[#0a0a14] z-50 flex items-center justify-center">
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
        <AnimatePresence mode="wait">
          {(!showLogo && (showShaping || showThe || showShift)) && (
            <motion.div
              key="text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-3xl md:text-5xl font-semibold mb-2 text-white font-sans flex items-center gap-3 tracking-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: showShaping ? 1 : 0, x: showShaping ? 0 : -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="drop-shadow-lg"
              >Shaping</motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showThe ? 1 : 0, y: showThe ? 0 : 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="drop-shadow-lg"
              >The</motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: showShift ? 1 : 0, x: showShift ? 0 : 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="drop-shadow-lg font-semibold"
              >Shift</motion.span>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {showUnderline && !showLogo && (
            <motion.div
              key="underline"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="h-0.5 w-48 rounded-full mx-auto mb-1 origin-left bg-orange-500 shadow-[0_2px_12px_0_rgba(249,115,22,0.10)]"
              style={{ boxShadow: '0 2px 12px 0 #f9731611' }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {showLogo && (
            <motion.img
              key="logo"
              src="/logo_white.png"
              alt="Ampliverse Logo"
              layoutId="ampliverse-logo"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ opacity: { duration: 1.1, ease: "easeInOut" }, scale: { duration: 1.2, ease: "anticipate" } }}
              className="w-80 h-80 object-contain drop-shadow-2xl mx-auto"
              style={{ zIndex: 10 }}
            />
          )}
        </AnimatePresence>
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
