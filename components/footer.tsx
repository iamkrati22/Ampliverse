"use client"

import { Triangle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    // Add code symbols to footer
    <footer className="bg-[#050510] text-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Triangle className="h-6 w-6" />
              <span className="text-xl font-bold">
                <span className="text-white/40 font-mono mr-1">{"<"}</span>
                Ampliverse
                <span className="text-white/40 font-mono ml-1">{"/>"}</span>
              </span>
            </div>

            {/* Add subtle code symbols */}
            <div className="absolute -top-10 right-10 text-white/5 text-6xl font-mono rotate-12 hidden md:block">
              {"{"}
            </div>
            <div className="absolute bottom-20 left-10 text-white/5 text-6xl font-mono -rotate-12 hidden md:block">
              {"}"}
            </div>
            <p className="text-white/60 mb-6 max-w-md">
              Your partners in purpose. We breathe life into your vision through strategic brand communications, driving
              recognition and building credibility for your sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:bg-[#2a2a40] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:bg-[#2a2a40] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:bg-[#2a2a40] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:bg-[#2a2a40] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#expertise" className="text-white/60 hover:text-white transition-colors">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-white/60 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#people" className="text-white/60 hover:text-white transition-colors">
                  Key People
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/60">
                <span className="block">New Delhi, India</span>
              </li>
              <li>
                <a href="mailto:hello@ampliverse.com" className="text-white/60 hover:text-white transition-colors">
                  hello@ampliverse.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-white/60 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a2e] text-center md:flex md:justify-between md:text-left">
          <p className="text-white/40 mb-4 md:mb-0">&copy; {currentYear} Ampliverse. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
