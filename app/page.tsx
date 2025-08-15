"use client";

import { Loader } from "@/components/loader";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Impact } from "@/components/impact";
import { WhoWeAre } from "@/components/who-we-are";
import { WhatMakesUsDifferent } from "@/components/what-makes-us-different";
import Capabilities from "@/components/capabilities";
import { OurWork } from "@/components/our-work";
import { KeyPeople } from "@/components/key-people";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import FlipCards from "@/components/flip-cards";
import { useTheme } from "next-themes";
import Head from "next/head";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function Home() {
  const { resolvedTheme } = useTheme();
  return (
    <main className={`flex min-h-screen flex-col items-center transition-colors duration-300 ${resolvedTheme === 'light' ? 'bg-[#fcfcfa]' : 'bg-[#0a0a14]'}`}>
      <Head>
        <meta property="og:url" content="https://ampliverse.in/" />
        <meta property="og:title" content="Ampliverse" />
        <meta property="og:description" content="Making what's next, heard today" />
        <meta property="description" content="Making what's next, heard today" />
        <meta property="og:image" content="https://ampliverse.in/24-Photoroom.png" />
      </Head>
      <Loader />
      <Hero />
      <WhoWeAre />
      
      {/* <Capabilities /> */}
     
      <FlipCards />
      <Impact />
      <WhatMakesUsDifferent />
      <Manifesto />
      <OurWork />
      <KeyPeople />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
