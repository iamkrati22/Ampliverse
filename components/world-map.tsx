"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function WorldMap() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Locations where Ampliverse has media relations
  const locations = [
    { name: "New York", x: 25, y: 40 },
    { name: "London", x: 45, y: 35 },
    { name: "Dubai", x: 58, y: 48 },
    { name: "Singapore", x: 75, y: 55 },
    { name: "New Delhi", x: 68, y: 45 },
    { name: "Sydney", x: 85, y: 70 },
    { name: "Tokyo", x: 82, y: 40 },
    { name: "Berlin", x: 50, y: 35 },
    { name: "Paris", x: 47, y: 37 },
    { name: "San Francisco", x: 18, y: 42 },
    { name: "Toronto", x: 25, y: 35 },
    { name: "São Paulo", x: 32, y: 65 },
    { name: "Cape Town", x: 52, y: 70 },
    { name: "Mumbai", x: 65, y: 50 },
    { name: "Hong Kong", x: 78, y: 48 },
  ]

  // Add international presence text
  return (
    <div ref={ref} className="h-full">
      <div className="relative w-full h-[400px] bg-[#0a0a14] rounded-lg overflow-hidden border border-[#1a1a2e]">
        {/* Small indicator of international presence */}
        <div className="absolute top-4 left-4 z-10 bg-[#0a0a14]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500/20 text-xs text-white/70">
          International presence in 15+ countries
        </div>

        {/* World Map SVG Background */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <path
            d="M10,40 Q30,35 50,40 T90,40 M10,50 Q30,55 50,50 T90,50 M10,60 Q30,65 50,60 T90,60"
            stroke="#1a1a2e"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M20,30 Q40,25 60,30 T100,30 M0,70 Q20,75 40,70 T80,70"
            stroke="#1a1a2e"
            strokeWidth="0.5"
            fill="none"
          />

          {/* Continents - simplified shapes */}
          <path
            d="M15,35 Q25,30 30,40 T40,45 Q45,50 35,55 T25,60 Q20,65 15,60 T10,50 Q5,45 15,35"
            fill="#0f0f1a"
            stroke="#1a1a2e"
            strokeWidth="0.2"
          />
          <path
            d="M45,30 Q55,25 65,30 T75,40 Q80,45 75,55 T65,60 Q55,65 45,60 T40,45 Q35,40 45,30"
            fill="#0f0f1a"
            stroke="#1a1a2e"
            strokeWidth="0.2"
          />
          <path d="M70,45 Q80,40 85,45 T90,55 Q85,60 80,55 T70,45" fill="#0f0f1a" stroke="#1a1a2e" strokeWidth="0.2" />
          <path d="M50,65 Q60,60 65,65 T70,75 Q65,80 60,75 T50,65" fill="#0f0f1a" stroke="#1a1a2e" strokeWidth="0.2" />

          {/* Location Markers */}
          {locations.map((location, index) => (
            <motion.g
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <circle cx={location.x} cy={location.y} r="0.8" fill="#f97316" /> {/* Changed to orange */}
              <circle
                cx={location.x}
                cy={location.y}
                r="1.5"
                fill="transparent"
                stroke="#f97316" // Changed to orange
                strokeWidth="0.2"
                opacity="0.5"
              >
                <animate attributeName="r" values="1.5;3;1.5" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
              </circle>
            </motion.g>
          ))}
        </svg>

        {/* Location Labels */}
        {locations.map((location, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-medium pointer-events-none text-white/70"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              transform: "translate(-50%, calc(-100% - 8px))",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + 0.05 * index }}
          >
            {location.name}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
