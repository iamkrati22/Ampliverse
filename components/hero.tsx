"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Triangle, ChevronDown } from "lucide-react";
import { Bebas_Neue, Inter, Lora, Montserrat, Roboto } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Map, { Marker } from "react-map-gl/maplibre";
import { DM_Serif_Display } from "next/font/google";
import "../fonts/font-style.css";
import { useTheme } from "next-themes";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [titleMoved, setTitleMoved] = useState(false);
  const [slashes, setSlashes] = useState<
    Array<{ width: number; rotate: number; top: number; left: number }>
  >([]);
  const indicatorOpacity = useTransform(scrollY, [0, 120, 200], [1, 0.3, 0]);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3500);

    const titleTimer = setTimeout(() => {
      setTitleMoved(true);
    }, 4500);

    // Generate slashes only on client side
    setSlashes(
      Array.from({ length: 20 }).map(() => ({
        width: Math.random() * 300 + 100,
        rotate: Math.random() * 60 - 30,
        top: Math.random() * 100,
        left: Math.random() * 100,
      }))
    );

    return () => {
      clearTimeout(timer);
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden overflow-x-hidden bg-[#0a0a14] flex items-center justify-center"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/Ampliverse Video Banner-finalcut-c.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-[#0a0a14]/55 to-[#0a0a14]/80"></div>
          {/* Fading out effect at the bottom of the video */}
          {resolvedTheme === 'dark' && (
            <div
              className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to bottom, rgba(10,10,20,0) 0%, #0a0a14 100%)'
              }}
            />
          )}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center overflow-x-hidden"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`transition-all duration-700 ${
              titleMoved ? "-translate-y-16" : ""
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              {/* Removed circulating triangle for a cleaner look */}
            </div>
            <motion.h2
              style={{ fontFamily: "LoewNextArabic" }}
              className={`text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-white/90 font-normal mt-4 leading-tight`}
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Making What&apos;s{" "}
              <span
                className={`font-bold italic tracking-wide`}
                style={{
                  color: "#f97316",
                  fontWeight: 700,
                  fontStyle: "italic",
                  letterSpacing: "0.04em",
                  fontFamily: "LoewNextArabicMedium",
                }}
              >
                Next
              </span>
              , Heard{" "}
              <span
                className={`font-bold italic tracking-wide`}
                style={{
                  color: "#f97316",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontFamily: "LoewNextArabicMedium",
                  letterSpacing: "0.04em",
                }}
              >
                Today
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="mx-auto text-lg md:text-2xl mb-12 mt-8 transition-all duration-700 text-center font-sans italic text-white/90"
            initial={{ opacity: 0 }}
            animate={loaded && titleMoved ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Born from PR, we turn credibility into presence, and presence into momentum for innovators building  
            <span className="relative inline-block underline-animate-parent">
              <span className={`relative z-10 ${resolvedTheme === 'light' ? 'text-orange-500' : 'text-white'}`}>
                 &nbsp;tomorrow&apos;s solutions
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={loaded && titleMoved ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                className={`absolute left-0 bottom-0 w-full h-[2px] rounded-full origin-left underline-animate ${resolvedTheme === 'light' ? 'bg-orange-200' : 'bg-gradient-to-r from-white/70 to-white/30'}`}
              ></motion.span>
            </span>
            .
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded && titleMoved ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="#expertise"
              className="px-14 py-4 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 dark:bg-white dark:text-[#0a0a14] dark:hover:bg-orange-100 transition-colors relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              Explore
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
          style={{ opacity: indicatorOpacity }}
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-8 w-8 text-white/70" />
          </motion.div>
          <span className="mt-2 text-base text-white/70 tracking-wide font-medium">
            Scroll down to explore
          </span>
        </motion.div> */}
      </section>
    </>
  );
}
