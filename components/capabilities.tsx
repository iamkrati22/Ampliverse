"use client";

import type React from "react";

import { useState } from "react";
import {
  Newspaper,
  Palette,
  MessageSquare,
  Handshake,
  Calendar,
  Users,
  Code,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    icon: <Newspaper size={48} />,
    color: "text-blue-500",
    bgColor: "from-blue-500/20 to-blue-600/10",
    title: "Media advisory",
    description:
      "Customized and modular PR solutions for purposeful media engagements and crisis resilience.",
  },
  {
    icon: <Palette size={48} />,
    color: "text-purple-500",
    bgColor: "from-purple-500/20 to-purple-600/10",
    title: "Branding & Communication",
    description:
      "Amplifying 'who you are' and 'what you stand for' by crafting a brand identity that resonates and reaches the last mile.",
  },
  {
    icon: <MessageSquare size={48} />,
    color: "text-green-500",
    bgColor: "from-green-500/20 to-green-600/10",
    title: "Social Media Management",
    description:
      "Digital storytelling meets business goals - creative initiatives that lead with insight and land with impact.",
  },
  {
    icon: <Handshake size={48} />,
    color: "text-yellow-500",
    bgColor: "from-yellow-500/20 to-yellow-600/10",
    title: "Strategic Partnerships",
    description:
      "Guiding partners through inflection points with astute collaborations across media, events, speakerships, and sponsorships.",
  },
  {
    icon: <Calendar size={48} />,
    color: "text-red-500",
    bgColor: "from-red-500/20 to-red-600/10",
    title: "Event Marketing",
    description:
      "Curating immersive event experiences that captivate audiences, amplify celebrations, and etch a lasting recall.",
  },
  {
    icon: <Users size={48} />,
    color: "text-pink-500",
    bgColor: "from-pink-500/20 to-pink-600/10",
    title: "Influencer Engagement",
    description:
      "Influencer communities are the new marketplaces - we help your organization build a presence where your audience already belongs.",
  },
  {
    icon: <Code size={48} />,
    color: "text-cyan-500",
    bgColor: "from-cyan-500/20 to-cyan-600/10",
    title: "Workforce Talent Solutions",
    description:
      "Helping you onboard, train, and manage the right talent, so that your organization scales and succeeds with ease.",
  },
];

export default function Capabilities() {
  return (
    <div className="space-y-8">
      {/* First row - 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Second row - 3 cards (wider) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.slice(4, 7).map((service, index) => (
          <ServiceCard key={index + 4} {...service} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  color,
  bgColor,
  title,
  description,
}: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-[280px] w-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => {
        setIsFlipped(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsFlipped(false);
        setIsHovered(false);
      }}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full border border-border rounded-xl bg-card p-6 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
            isHovered ? `bg-gradient-to-br ${bgColor}` : ""
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className={`${color} transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-center text-card-foreground">
            {title}
          </h3>
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full border border-border rounded-xl bg-card p-6 flex flex-col items-center justify-center transition-all duration-300 ${
            isHovered ? `bg-gradient-to-br ${bgColor}` : ""
          }`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-card-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
