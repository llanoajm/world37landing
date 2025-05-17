"use client"

import { FuzzyText } from "./components/ui/fuzzy-text";
import Image from "next/image";
import AnimatedGradientBackground from "./components/ui/animated-gradient-background";
import { NoiseOverlay } from "./components/ui/noise-overlay";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { Check } from "lucide-react";
import { Feature } from "./components/ui/feature";
import { ScrollPane, ScrollPaneAlt } from "./components/ui/scroll-pane";
import { WaitlistModal } from "./components/ui/waitlist-modal";
import { useState } from "react";
import { NeonMazeDemo } from "./components/ui/neon-maze-demo";
import { NeonMaze } from "./components/ui/neon-maze";
import EnhancedAnimatedGradientBackground from "./components/ui/enhanced-animated-gradient-background";
import { BlackInfoSection, GradientCallToActionSection } from "./components/ui/info-sections";
import useMediaQuery from "./hooks/use-media-query";

function Navbar({ onWaitlistClick }: { onWaitlistClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f7f9f8] border-b border-gray-100 h-16 flex items-center px-8">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-[10px]">
        <FuzzyText
          fontSize={50}
          baseIntensity={0.1}
          hoverIntensity={0.3}
          enableHover={true}
          color="#000000"
          className="font-mono z-50 text-[10px]"
        >
          WORLD37
        </FuzzyText>
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
          className="ml-4 px-2 text-[11px] sm:px-2 sm:text-sm md:px-5 md:text-base py-2 rounded-lg bg-black text-white font-mono font-semibold shadow hover:bg-gray-900 transition-colors"
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
  const showFlatFeatures = useMediaQuery('(max-width: 1023px)');

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-white">
      <Navbar onWaitlistClick={() => setWaitlistOpen(true)} />
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">

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
      <div className="flex-1 flex items-center justify-center pt-12 z-10">
        <main className="flex flex-col items-center w-full sm:px-4">
          {/* Hero Section START */}
          <div className="relative w-full mx-auto sm:my-12 px-0 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 mb-12 rounded-none sm:rounded-2xl shadow-xl flex flex-col items-center text-center">
            {/* Gradient Background - height adjusts based on showFlatFeatures */}
            <div className={`absolute inset-0 w-full ${showFlatFeatures ? 'h-full' : 'h-[100vh]'} rounded-none sm:rounded-2xl pointer-events-none overflow-hidden`}>
              <EnhancedAnimatedGradientBackground 
                Breathing={true}
                animationSpeed={0.03}
                breathingRange={6}
              />
            </div>
            <NoiseOverlay
               opacity={0.05}
               className="absolute inset-0 w-full h-full pointer-events-none rounded-none sm:rounded-2xl"
               zIndex={0}
            />
            {/* Hero Content: Text and Image */}
            <div className="relative z-10 flex flex-col items-center text-center w-full">
               <Image
                 src="/image.png"
                 alt="World37 Central Image"
                 width={180}
                 height={180}
                 className="mb-6 md:mb-8"
               />
               <h1 className="text-6xl md:text-8xl font-bold text-center text-white pb-2">
                 The Game Engine for Storytelling
               </h1>
               <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl leading-normal sm:leading-relaxed pb-4 pt-4">
                 W37 understands your codebase and automatically generates agentic characters, dynamic storylines, and relationship graphs at scale. Tell us your vision, and we'll make your story come to life.
               </p>
            </div>

            {/* Conditional ContainerScroll (Desktop) - Renders INSIDE the main hero div */}
            {!showFlatFeatures && (
              <div className="-mt-20 w-full">
                <div className="-mt-32 sm:-mt-48 md:-mt-60 z-50">
                  <ContainerScroll titleComponent={null}>
                    <Feature isFlatView={false} />
                  </ContainerScroll>
                </div>
              </div>
            )}
          </div> {/* Hero Section END */}

          {/* Conditional Flat Features Section (Mobile) - Renders OUTSIDE and AFTER hero div */}
          {showFlatFeatures && (
            <div className="w-full mt-4 mb-8 p-0 sm:p-0 bg-transparent sm:rounded-lg">
              <Feature isFlatView={true} />
            </div>
          )}
          
          <ScrollPane />

          <GradientCallToActionSection 
            headline="Supercharge Your Narrative-Making Abilities"
            subHeadline="Today, you can vibe-code a video game, but crafting a compelling story with characters that feel real has always been the challenge. World37 is here to amplify your creative power. We'll be with you every step of the way."
          />

        </main>
      </div>
      <Footer />
      {/* Waitlist Form Section */}

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );     
}

function WaitlistForm() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [early, setEarly] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const subject = encodeURIComponent("World37 Demo Waitlist: " + first + " " + last);
    const body = encodeURIComponent(
      `First Name: ${first}\nLast Name: ${last}\nEmail: ${email}\nEarly Testing: ${early ? "Yes" : "No"}`
    );
    window.location.href = `mailto:llano@stanford.edu?subject=${subject}&body=${body}`;
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="text-center text-green-600 font-semibold py-8 z-75">Thank you for joining the waitlist!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="font-semibold text-black dark:text-white">
        First Name:
        <input
          type="text"
          className="mt-1 w-full border rounded px-3 py-2 text-black dark:text-white dark:bg-zinc-800"
          placeholder="Your First Name"
          value={first}
          onChange={e => setFirst(e.target.value)}
          required
        />
      </label>
      <label className="font-semibold text-black dark:text-white">
        Last Name:
        <input
          type="text"
          className="mt-1 w-full border rounded px-3 py-2 text-black dark:text-white dark:bg-zinc-800"
          placeholder="Your Last Name"
          value={last}
          onChange={e => setLast(e.target.value)}
          required
        />
      </label>
      <label className="font-semibold text-black dark:text-white">
        Email:
        <input
          type="email"
          className="mt-1 w-full border rounded px-3 py-2 text-black dark:text-white dark:bg-zinc-800"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="flex items-center gap-2 text-black dark:text-white">
        <input
          type="checkbox"
          checked={early}
          onChange={e => setEarly(e.target.checked)}
        />
        I want to be part of the early testing group.
      </label>
      <button
        type="submit"
        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition"
        disabled={submitting}
      >
        Submit
      </button>
    </form>
  );
}