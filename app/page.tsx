"use client"

import { FuzzyText } from "./components/ui/fuzzy-text";
import Image from "next/image";
import AnimatedGradientBackground from "./components/ui/animated-gradient-background";
import { NoiseOverlay } from "./components/ui/noise-overlay";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { Check } from "lucide-react";
import { Feature } from "./components/ui/feature";
import { ScrollPane } from "./components/ui/scroll-pane";
import { WaitlistModal } from "./components/ui/waitlist-modal";
import { useState } from "react";

function Navbar({ onWaitlistClick }: { onWaitlistClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f7f9f8] border-b border-gray-100 h-16 flex items-center px-8">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        {/* Placeholder SVG logo */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <rect width="32" height="32" rx="8" fill="#222" />
          <circle cx="16" cy="16" r="8" fill="#fff" />
        </svg>
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-700 via-pink-600 to-orange-400 bg-clip-text text-transparent">WORLD37</span>
      </div>
      {/* Center links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-10">
        
        </ul>
      </div>
      {/* Right button */}
      <div className="flex items-center">
        <a
          href="#"
          onClick={e => { e.preventDefault(); onWaitlistClick(); }}
          className="ml-4 px-5 py-2 rounded-lg bg-black text-white font-mono text-base font-semibold shadow hover:bg-gray-900 transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-white text-gray-400 text-center py-4 mt-8 pb-10 pt-10 relative z-50 shadow-[0_-2px_8px_#0001] font-mono">
      © {new Date().getFullYear()} World37.
    </footer>
  );
}

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar onWaitlistClick={() => setWaitlistOpen(true)} />
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
      <div className="flex-1 flex items-center justify-center pt-32 z-10">
        <main className="flex flex-col items-center w-full">
          <Image
            src="/image.png"
            alt="World37"
            width={200}
            height={200}
            className="mb-4"
          />
          <FuzzyText 
            baseIntensity={0.2} 
            hoverIntensity={0.4} 
            enableHover={true}
            color="#000000"
            className="font-mono"
          >
            World37
          </FuzzyText>
          <p className="text-2xl mt-6 text-gray-500 text-center">
            A new standard for scalable, technology-driven storytelling.
          </p>
          
          <div className="-mt-20 w-full -mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent mt-30 "
          >
            Pick your story, watch your world react.
          </h2>

          <div className="-mt-60">
            <ContainerScroll titleComponent={null}>
              <Feature />
            </ContainerScroll>
          </div>
            
          </div>
          <ScrollPane />
          {/* Showcase Section */}
          <section className="w-full flex justify-center py-16 px-2">
            <div className="w-full max-w-6xl bg-black rounded-3xl shadow-2xl flex flex-col items-center p-8 md:p-16 gap-8">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-200 mb-6">Endless Possibilities</h2>
              <div className="flex flex-row items-center justify-center gap-10 mb-8">
                <Image src="/i1.png" alt="i1" width={260} height={260} className="rounded-2xl shadow-2xl object-cover" />
                <Image src="/i2.png" alt="i2" width={260} height={260} className="rounded-2xl shadow-2xl object-cover" />
                <Image src="/i3.png" alt="i3" width={260} height={260} className="rounded-2xl shadow-2xl object-cover" />
              </div>
              <p className="text-base md:text-lg text-gray-100 text-center max-w-3xl font-mono">
                Pioneering advancements in real-time content generation, procedural 3D environments, and emergent behaviors.
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}