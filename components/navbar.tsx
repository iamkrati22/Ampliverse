"use client";

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Triangle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

// Use this variable for all light mode backgrounds (navbar, footer, testimonials, etc.)
const LIGHT_BG = '#faf9f6';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoColor, setLogoColor] = useState("#f97316") // orange-500
  const [scrollProgress, setScrollProgress] = useState(0)
  const triangleRef = useRef<SVGSVGElement>(null)
  const [showLogo, setShowLogo] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // Listen for service hover events
    const handleServiceHover = (e: CustomEvent) => {
      setLogoColor(e.detail.color);
    };

    window.addEventListener(
      "serviceHover",
      handleServiceHover as EventListener
    );

    const timer = setTimeout(() => setShowLogo(true), 220);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "serviceHover",
        handleServiceHover as EventListener
      );
      clearTimeout(timer);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Choose logo based on theme
  const logoSrc = resolvedTheme === "light" ? "/logo_black.png" : "/logo_white.png"

  return (
    <>
      <motion.header
        className={`w-[100vw] fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${scrolled
            ? "shadow-md shadow-[#1a1a2e]/20"
            : ""
          }
          bg-[${LIGHT_BG}] dark:bg-[#0a0a14]
        `}
        style={{ backgroundColor: resolvedTheme === "light" ? LIGHT_BG : "#0a0a14" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center overflow-hidden"
            style={{ height: "4rem", minHeight: "4rem" }}
          >
            <AnimatePresence>
              {showLogo && (
                <motion.img
                  key="navbar-logo"
                  src={logoSrc}
                  alt="Ampliverse Logo"
                  layoutId="ampliverse-logo"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "anticipate" }}
                  className="w-36 h-36 object-contain drop-shadow-xl"
                  style={{ zIndex: 20 }}
                />
              )}
            </AnimatePresence>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#expertise"
              className="text-sm font-medium transition-colors relative group text-neutral-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
            >
              Discover our expertise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium transition-colors relative group text-neutral-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
            >
              Our Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#people"
              className="text-sm font-medium transition-colors relative group text-neutral-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
            >
              Key People
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-white dark:text-[#0a0a14] dark:hover:bg-orange-100 relative overflow-hidden group transition-colors"
              >
                <Link href="#contact">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  Let's Talk
                </Link>
              </Button>
            </motion.div>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="border-neutral-400 text-neutral-800 dark:border-white/20 dark:text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen
                ? <X className="h-6 w-6 text-neutral-800 dark:text-white" />
                : <Menu className="h-6 w-6 text-neutral-800 dark:text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-30 pt-20 bg-[#fff8f2] dark:bg-[#0a0a14]"
              style={{ backgroundColor: resolvedTheme === "light" ? "#fff8f2" : "#0a0a14" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Close button in mobile menu */}
              <button
                className="absolute top-6 right-6 text-black dark:text-white text-3xl z-50 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <span>&times;</span>
              </button>
              <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
                <Link
                  href="#expertise"
                  className="text-lg font-medium py-3 border-b border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Discover our expertise
                </Link>
                <Link
                  href="#work"
                  className="text-lg font-medium py-3 border-b border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Work
                </Link>
                <Link
                  href="#people"
                  className="text-lg font-medium py-3 border-b border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Key People
                </Link>
                <Button
                  asChild
                  className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-white dark:text-[#0a0a14] dark:hover:bg-orange-100 w-full mt-4 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="#contact">Let's Talk</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Mobile scroll progress bar at bottom of navbar */}
      <div className="md:hidden absolute left-0 bottom-0 w-full pointer-events-none">
        <div
          className="h-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 dark:from-orange-400 dark:via-orange-500 dark:to-yellow-300 rounded-full transition-all duration-300"
          style={{ width: `${Math.round(scrollProgress * 100)}%`, minWidth: scrollProgress > 0 ? '8%' : 0, boxShadow: '0 1px 6px 0 #f9731622' }}
        />
      </div>
    </>
  );
}
