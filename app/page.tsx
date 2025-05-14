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
import { NeonMazeDemo } from "./components/ui/neon-maze-demo"

function Navbar({ onWaitlistClick }: { onWaitlistClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f7f9f8] border-b border-gray-100 h-16 flex items-center px-8">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        {/* Official PNG logo */}
        <img
          src="https://caojess.github.io/OfficialW37/W37logo.png"
          alt="World37 Logo"
          width={32}
          height={32}
          className="mr-2 object-contain"
        />
        <span className=" text-xl tracking-tight bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent z-50">world37</span>
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
            className="font-mono z-50"
          >
            WORLD37
          </FuzzyText>
          <p className="text-2xl mt-6 text-gray-500 text-center">
            A new standard for scalable, technology-driven storytelling.
          </p>
          
          <div className="-mt-20 w-full -mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent mt-30 "
          >
            Pick your story, watch your world propagate.
          </h2>

          <div className="-mt-60">
            <ContainerScroll titleComponent={null}>
              <Feature />
            </ContainerScroll>
          </div>
            
          </div>
          <ScrollPane />
          {/* Showcase Section */}
          <section className="w-full flex flex-col lg:flex-row items-stretch justify-center py-12 px-0">
            {/* Left: Endless Possibilities with images */}
            <div className="flex-[0.8] min-w-0 flex flex-col justify-center bg-white/70 dark:bg-black backdrop-blur-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-8 md:p-12 gap-6 md:gap-10">
            <h1 className="text-base sm:text-lg md:text-2xl text-gray-800 dark:text-gray-100 text-center max-w-4xl font-bold mb-1">More than a videogame studio</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-100 text-center max-w-3xl font-mono mb-4">
                Pioneering advancements in real-time content generation, procedural 3D environments, and emergent behaviors at scale. <br /> World37 strives to create lightweight, model-side experiences. We look to provide a story-engine to creators around the world to leverage the infinite possibilities of generative AI <span className="underline">without losing the thread.</span>
              </p>
          
              <div className="flex flex-row flex-wrap items-center justify-center gap-4 w-full">
                <Image src="/i1.png" alt="i1" width={300} height={300} className="rounded-2xl shadow-2xl shadow-[0_4px_32px_rgba(255,255,255,0.35)] object-cover w-full max-w-[200px] sm:max-w-[200px] md:max-w-[220px] h-auto" />
                <Image src="/i2.png" alt="i2" width={300} height={300} className="rounded-2xl shadow-2xl shadow-[0_4px_32px_rgba(255,255,255,0.35)] object-cover w-full max-w-[200px] sm:max-w-[200px] md:max-w-[220px] h-auto" />
                <Image src="/i3.png" alt="i3" width={300} height={300} className="rounded-2xl shadow-2xl shadow-[0_4px_32px_rgba(255,255,255,0.35)] object-cover w-full max-w-[200px] sm:max-w-[200px] md:max-w-[220px] h-auto" />
              </div>
            </div>
            {/* Right: Neon Maze */}
            <div className="flex-[0.7] min-w-0 min-h-[400px] max-h-[900px] overflow-hidden flex flex-col items-center justify-center bg-black">
              <NeonMazeDemo />
            </div>
          </section>
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