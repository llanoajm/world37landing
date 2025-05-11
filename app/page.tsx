"use client"

import { FuzzyText } from "./components/ui/fuzzy-text";
import Image from "next/image";
import AnimatedGradientBackground from "./components/ui/animated-gradient-background";
import { NoiseOverlay } from "./components/ui/noise-overlay";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { Check } from "lucide-react";
import { Feature } from "./components/ui/feature";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f7f9f8] border-b border-gray-100 h-16 flex items-center px-8">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        {/* Placeholder SVG logo */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <rect width="32" height="32" rx="8" fill="#222" />
          <circle cx="16" cy="16" r="8" fill="#fff" />
        </svg>
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">WORLD37</span>
      </div>
      {/* Center links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-10">
          <li><a href="#demo" className="text-gray-700 font-mono text-lg hover:text-black transition-colors">Demo</a></li>
          <li><a href="#about" className="text-gray-700 font-mono text-lg hover:text-black transition-colors">About</a></li>
          <li><a href="#team" className="text-gray-700 font-mono text-lg hover:text-black transition-colors">Team</a></li>
        </ul>
      </div>
      {/* Right button */}
      <div className="flex items-center">
        <a href="#waitlist" className="ml-4 px-5 py-2 rounded-lg bg-black text-white font-mono text-base font-semibold shadow hover:bg-gray-900 transition-colors">Join Waitlist</a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <AnimatedGradientBackground 
          gradientColors={[
            "#ffffff",
            "rgb(222, 173, 242)",
            "rgb(247, 158, 158)",
            "#FF6D00",
            " #FFD600",
            "#00E676",
            "#3D5AFE"
          ]}
          Breathing={true}
          startingGap={125}
        />
        <NoiseOverlay 
          opacity={0.08}
          zIndex={5}
          startingGap={125}
          firstStopThreshold={90}
          transitionWidth={25}
          delayAppearance={0.7}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-40">
        <main className="flex flex-col items-center">
          <Image
            src="/image.png"
            alt="World37"
            width={200}
            height={200}
            className="mb-2"
          />
          <FuzzyText 
            baseIntensity={0.2} 
            hoverIntensity={0.4} 
            enableHover={true}
            color="#000000"
            className="font-mono "
          >
            World37
          </FuzzyText>
          <p className="text-2xl mt-10 text-gray-500" >A new standard for scalable, technology-driven storytelling.</p>
          <ContainerScroll>
            <Feature />
          </ContainerScroll>
        </main>
      </div>
    </div>
  );
}

export { Feature };