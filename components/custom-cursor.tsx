"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Triangle } from "lucide-react"

interface CustomCursorProps {
  color?: string
}

export function CustomCursor({ color = "white" }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleMouseEnter = () => setHidden(false)
    const handleMouseLeave = () => setHidden(true)

    const handleHoverStart = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseover", handleHoverStart)

    document.documentElement.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseover", handleHoverStart)

      document.documentElement.style.cursor = "auto"
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : hovering ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          mass: 0.5,
          stiffness: 400,
        }}
      >
        <Triangle className="h-8 w-8 text-white" style={{ color }} />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full pointer-events-none"
        style={{
          backgroundColor: hovering ? `rgba(255, 255, 255, 0.2)` : "transparent",
          mixBlendMode: "difference",
        }}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: hovering ? 2.5 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          mass: 0.5,
          stiffness: 400,
        }}
      />
    </>
  )
}
