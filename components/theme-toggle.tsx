"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`relative w-20 h-10 flex items-center rounded-full border transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary
        ${isDark ? "bg-[#232323] border-[#232323] justify-end" : "bg-white border-gray-200 justify-start"}`}
      style={{ padding: 2 }}
    >
      <span className="flex-1 flex items-center justify-center">
        <Sun className={`h-6 w-6 ${isDark ? "text-white" : "text-black"}`} />
      </span>
      <span className="flex-1 flex items-center justify-center">
        <Moon className={`h-6 w-6 ${isDark ? "text-white" : "text-black"}`} />
      </span>
      <span
        className={`absolute transition-all duration-300 rounded-full shadow-md flex items-center justify-center
          ${isDark ? "translate-x-10 bg-white" : "translate-x-0 bg-black"}`}
        style={{ width: 36, height: 36, left: 2, top: 2 }}
      >
        {isDark ? (
          <Moon className="h-5 w-5 text-black" />
        ) : (
          <Sun className="h-5 w-5 text-white" />
        )}
      </span>
    </button>
  )
}
