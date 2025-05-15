"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import EnhancedAnimatedGradientBackground from "./enhanced-animated-gradient-background";
import { NoiseOverlay } from "./noise-overlay";

interface FeaturePoint {
  icon: string; // Placeholder for icon, e.g., a Unicode char or an SVG component path
  title: string;
  text: string;
}

interface BlackInfoSectionProps {
  mainTitle: string;
  featurePoints: FeaturePoint[];
  sideVisualComponent?: React.ReactNode; // For the vertical sliver
  id?: string;
}

export function BlackInfoSection({ mainTitle, featurePoints, sideVisualComponent, id }: BlackInfoSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 }); // Removed scale for a flatter entry
    }
  }, [inView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-black text-white py-2 md:py-2"
    >
      <div className="container px-2 sm:px-4 lg:p-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Vertical Neon Sliver - occupies a small part of the width on medium+ screens */}
          {sideVisualComponent && (
            <div className="w-full md:w-32 lg:w-40 flex-none order-first md:order-first hidden md:flex flex-col items-center justify-start relative overflow-hidden">
              {/* This div will act as the container for the tall, thin visual. */}
              {/* The visual itself should be styled to fill height and be a continuous animation. */}
              <div className="sticky top-0 h-screen max-h-[80vh] w-full">
                {/* Example: constrain height, ensure it doesn't push content down */}
                {sideVisualComponent}
              </div>
            </div>
          )}

          {/* Main Content Area - takes up the remaining space */}
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 pt-12 md:mb-16 text-center md:text-left">{mainTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-10 md:gap-x-8 md:gap-y-12">
              {featurePoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                  className="flex flex-col items-start p-6 bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4 text-orange-400">{point.icon}</div> {/* Icon placeholder */}
                  <h3 className="text-2xl font-semibold mb-3 text-gray-100">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

interface GradientCallToActionSectionProps {
  headline: string;
  subHeadline: string;
  id?: string;
}

export function GradientCallToActionSection({
  headline,
  subHeadline,
  id
}: GradientCallToActionSectionProps) {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [early, setEarly] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!first || !last || !email) return; // Basic validation
    setSubmitting(true);
    const subject = encodeURIComponent("World37 Waitlist (Homepage Section): " + first + " " + last);
    const body = encodeURIComponent(
      `First Name: ${first}\nLast Name: ${last}\nEmail: ${email}\nEarly Testing: ${early ? "Yes" : "No"}`
    );
    // In a real app, you'd POST to an API endpoint here.
    // For this example, well simulate with mailto and a delay.
    window.location.href = `mailto:llano@stanford.edu?subject=${subject}&body=${body}`;
    
    // Simulate submission time and success
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset form fields after a while if needed, or keep them for user reference
      // setFirst(""); setLast(""); setEmail(""); setEarly(false);
    }, 1500); // Simulate network delay
  };

  return (
    <section id={id} className="relative w-full max-w-none mx-auto sm:my-12  sm:p-10 md:p-16 flex flex-col items-center text-center overflow-hidden rounded-2xl">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <EnhancedAnimatedGradientBackground 
          Breathing={true}
          animationSpeed={0.03}
          breathingRange={6} 
        />
      </div>
      <NoiseOverlay
        opacity={0.05}
        className="absolute inset-0 w-full h-full pointer-events-none"
        zIndex={0}
      />
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white pb-4">
          {headline}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl leading-relaxed pb-8 md:pb-12">
          {subHeadline}
        </p>
        
        {submitted ? (
          <div className="p-6 bg-green-500/80 backdrop-blur-sm rounded-lg text-white text-xl md:text-2xl font-semibold">
            Thank you for joining the waitlist! We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-5 items-center bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-2xl">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 ease-in-out shadow-md"
                placeholder="First Name"
                value={first}
                onChange={e => setFirst(e.target.value)}
                required
              />
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 ease-in-out shadow-md"
                placeholder="Last Name"
                value={last}
                onChange={e => setLast(e.target.value)}
                required
              />
            </div>
            <input
              type="email"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 ease-in-out shadow-md"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label className="flex items-center gap-3 text-gray-200 hover:text-white cursor-pointer select-none">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-orange-500 bg-white/20 border-white/30 rounded focus:ring-orange-400 focus:ring-offset-0 focus:ring-offset-transparent transition duration-150 ease-in-out shadow"
                checked={early}
                onChange={e => setEarly(e.target.checked)}
              />
              I want to be part of the early testing group.
            </label>
            <button
              type="submit"
              className={`w-full mt-2 px-8 py-3 rounded-lg font-mono text-lg font-semibold shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75 ${submitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-400'}`}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Join Waitlist Now"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// GradientCallToActionSection will be added below 