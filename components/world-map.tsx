"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function WorldMap() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Locations where Ampliverse has media relations
  const locations = [
    // India - North
    { name: "Ladakh", x: 66, y: 32 },
    { name: "Punjab", x: 64, y: 36 },
    { name: "Haryana", x: 65, y: 37 },
    { name: "Delhi", x: 66, y: 38 },
    { name: "Lucknow", x: 68, y: 39 },
  
    // India - South
    { name: "Hyderabad", x: 68, y: 49 },
    { name: "Bengaluru", x: 67, y: 53 },
    { name: "Chennai", x: 70, y: 55 },
    { name: "Kerala", x: 66, y: 56 },
    { name: "Tamil Nadu", x: 68, y: 56 },
  
    // India - East
    { name: "Mizoram", x: 75, y: 43 },
    { name: "Manipur", x: 74, y: 42 },
    { name: "Nagaland", x: 73, y: 41 },
  
    // India - West
    { name: "Gujarat", x: 62, y: 45 },
  
    // United States
    { name: "New York City", x: 25, y: 40 },
    { name: "San Francisco", x: 18, y: 42 },
    { name: "Los Angeles", x: 17, y: 45 },
    { name: "Austin", x: 20, y: 50 },
    { name: "Washington D.C.", x: 26, y: 41 },
    { name: "Seattle", x: 16, y: 38 },
    { name: "Boston", x: 25, y: 39 },
  
    // Canada
    { name: "Toronto", x: 25, y: 35 },
    { name: "Vancouver", x: 20, y: 33 },
  
    // MENA Region
    { name: "Dubai", x: 58, y: 48 },
    { name: "Saudi Arabia", x: 55, y: 50 },
    { name: "Qatar", x: 57, y: 49 },
    { name: "Egypt", x: 50, y: 46 },
    { name: "Israel", x: 53, y: 45 },
    { name: "Morocco", x: 45, y: 50 },
    { name: "Lebanon", x: 54, y: 44 },
    { name: "Kuwait", x: 56, y: 47 },
    { name: "Bahrain", x: 57, y: 48 },
  
    // EU
    { name: "Germany", x: 50, y: 35 },
    { name: "France", x: 47, y: 37 },
    { name: "United Kingdom", x: 45, y: 35 },
    { name: "Netherlands", x: 49, y: 34 },
    { name: "Sweden", x: 52, y: 30 },
    { name: "Spain", x: 46, y: 40 },
    { name: "Italy", x: 51, y: 38 },
    { name: "Belgium", x: 48, y: 35 },
    { name: "Ireland", x: 44, y: 33 },
    { name: "Poland", x: 53, y: 34 },
  
    // SEA
    { name: "Singapore", x: 75, y: 55 },
    { name: "Malaysia", x: 74, y: 54 },
    { name: "Thailand", x: 73, y: 50 },
    { name: "Indonesia", x: 76, y: 58 },
    { name: "Vietnam", x: 77, y: 50 },
    { name: "Japan", x: 82, y: 40 },
    { name: "South Korea", x: 81, y: 38 },
    { name: "Hong Kong", x: 78, y: 48 },
  ];
  

  // Add international presence text
  return (
    <div ref={ref} className="h-full">
      <div className="relative w-full h-[400px] bg-[#f8f7f4] dark:bg-[#0a0a14] rounded-lg overflow-hidden border border-gray-200 dark:border-[#1a1a2e]">
        {/* Small indicator of international presence */}
        <div className="absolute top-4 left-4 z-10 bg-[#f8f7f4]/80 dark:bg-[#0a0a14]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500/20 text-xs text-muted-foreground dark:text-white/70">
          International presence in 15+ countries
        </div>

        {/* World Map SVG Background */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <path
            d="M10,40 Q30,35 50,40 T90,40 M10,50 Q30,55 50,50 T90,50 M10,60 Q30,65 50,60 T90,60"
            stroke="#d1d5db"
            className="dark:stroke-[#1a1a2e]"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M20,30 Q40,25 60,30 T100,30 M0,70 Q20,75 40,70 T80,70"
            stroke="#d1d5db"
            className="dark:stroke-[#1a1a2e]"
            strokeWidth="0.5"
            fill="none"
          />

          {/* Continents - simplified shapes */}
          <path
            d="M15,35 Q25,30 30,40 T40,45 Q45,50 35,55 T25,60 Q20,65 15,60 T10,50 Q5,45 15,35"
            className="fill-[#edece8] dark:fill-[#0f0f1a] stroke-[#d1d5db] dark:stroke-[#1a1a2e]"
            strokeWidth="0.2"
          />
          <path
            d="M45,30 Q55,25 65,30 T75,40 Q80,45 75,55 T65,60 Q55,65 45,60 T40,45 Q35,40 45,30"
            className="fill-[#edece8] dark:fill-[#0f0f1a] stroke-[#d1d5db] dark:stroke-[#1a1a2e]"
            strokeWidth="0.2"
          />
          <path d="M70,45 Q80,40 85,45 T90,55 Q85,60 80,55 T70,45" className="fill-[#edece8] dark:fill-[#0f0f1a] stroke-[#d1d5db] dark:stroke-[#1a1a2e]" strokeWidth="0.2" />
          <path d="M50,65 Q60,60 65,65 T70,75 Q65,80 60,75 T50,65" className="fill-[#edece8] dark:fill-[#0f0f1a] stroke-[#d1d5db] dark:stroke-[#1a1a2e]" strokeWidth="0.2" />

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
            className="absolute text-xs font-medium pointer-events-none text-muted-foreground dark:text-white/70"
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
