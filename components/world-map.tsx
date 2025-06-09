"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MapChart from "./MapChart";
import { useTheme } from "next-themes";

export function WorldMap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { resolvedTheme } = useTheme();

  // Add international presence text
  return (
    <div ref={ref} className="h-full flex align-center justify-center">
      <div className="relative w-[90vw] md:w-full md:h-[700px] bg-[#f8f7f4] dark:bg-[#0a0a14] overflow-hidden border border-gray-200 dark:border-[#1a1a2e] border-b-0 rounded-t-lg rounded-b-none">
        {/* Small indicator of international presence */}
        <div className="absolute top-4 left-4 z-10 bg-[#f8f7f4]/80 dark:bg-[#0a0a14]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500/20 text-xs text-muted-foreground dark:text-white/70">
          International presence in 15+ countries
        </div>
        <div className="map-chart">
        <MapChart />
        </div>
        {/* Gradient overlay at bottom for blending/fade out */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-20"
          style={{
            background: resolvedTheme === 'light'
              ? 'linear-gradient(to bottom, rgba(248,247,244,0) 0%, #f8f7f4 40%, #f8f7f4 100%)'
              : 'linear-gradient(to bottom, rgba(10,10,20,0) 0%, #0a0a14 40%, #0a0a14 100%)'
          }}
        />
      </div>
    </div>
  );
}
