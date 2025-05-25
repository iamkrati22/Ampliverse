"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Triangle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoColor, setLogoColor] = useState("#f97316") // orange-500
  const triangleRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Listen for service hover events
    const handleServiceHover = (e: CustomEvent) => {
      setLogoColor(e.detail.color)
    }

    window.addEventListener("serviceHover", handleServiceHover as EventListener)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("serviceHover", handleServiceHover as EventListener)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a14]/90 dark:bg-[#0a0a14]/90 backdrop-blur-md py-3 shadow-md shadow-[#1a1a2e]/20"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Triangle
              ref={triangleRef}
              className="h-6 w-6 transition-colors duration-300"
              style={{ color: logoColor }}
            />
          </motion.div>
          <span className="text-xl font-bold text-white">
            <span className="text-white/40 font-mono mr-1">{"<"}</span>
            Ampliverse
            <span className="text-white/40 font-mono ml-1">{"/>"}</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#expertise"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
          >
            Discover our expertise
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#work"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
          >
            Our Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#people"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
          >
            Key People
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-white dark:text-[#0a0a14] dark:hover:bg-orange-100 relative overflow-hidden group transition-colors">
              <Link href="#contact">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                Book a call
              </Link>
            </Button>
          </motion.div>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="border-white/20 text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#0a0a14] pt-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
              <Link
                href="#expertise"
                className="text-lg font-medium py-3 border-b border-white/10 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Discover our expertise
              </Link>
              <Link
                href="#work"
                className="text-lg font-medium py-3 border-b border-white/10 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link
                href="#people"
                className="text-lg font-medium py-3 border-b border-white/10 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Key People
              </Link>
              <Button
                asChild
                className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-white dark:text-[#0a0a14] dark:hover:bg-orange-100 w-full mt-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="#contact">Book a call</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
