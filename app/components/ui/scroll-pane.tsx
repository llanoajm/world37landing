"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

export function ScrollPane() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.97 }}
      animate={controls}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-none px-0 md:px-0 my-8 -mt-100"
    >
      <div className="w-full flex flex-col xl:flex-row items-stretch bg-white backdrop-blur-lg shadow-2xl  border border-gray-200 overflow-hidden min-h-[480px] md:min-h-[600px]">
        {/* Text Pane */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 gap-6">
          <h3 className="text-4xl md:text-4xl mb-2 text-gray-900 leading-tight text-center xl:text-left">
            Minecraft gave us infinite spatial freedom.
          </h3>
          <h3 className="text-4xl md:text-6xl font-extrabold mb-2 text-gray-900 leading-tight text-center xl:text-left">
            We're giving you infinite narrative freedom.
          </h3>
          <p className="text-gray-700 text-xl md:text-2xl mb-4 max-w-2xl text-center xl:text-left mx-auto xl:mx-0">
          Our stories will feel rich to you, your friends, and every character in your world! Create, share, and explore 3D story worlds with narrative branching, dynamic scene deployment, and generative agents to deliver deeply personalized experiences.
          </p>
          <div className="flex flex-row gap-4 mt-4 justify-center xl:justify-start">
            <a
              href="#waitlist-form"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-black text-white font-mono text-base sm:text-xl font-semibold shadow-lg hover:bg-gray-900 transition-colors border-2 border-black w-fit"
              style={{ letterSpacing: "0.1em" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png?20220821122232"
                alt="Apple logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
              
            </a>
            <a
              href="#waitlist-form"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-white text-black font-mono text-base sm:text-xl font-semibold shadow-lg hover:bg-gray-200 transition-colors border-2 border-black w-fit"
              style={{ letterSpacing: "0.1em" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                alt="Android logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
              
            </a>
            <a
              href="#waitlist-form"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-white text-black font-mono text-base sm:text-xl font-semibold shadow-lg hover:bg-gray-200 transition-colors border-2 border-black w-fit"
              style={{ letterSpacing: "0.1em" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/576px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png?20230731184236"
                alt="Meta logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
              SOON
            </a>
          </div>
        </div>
        {/* Video Pane */}
        <div className="w-full xl:w-[600px] flex items-center justify-center bg-gray-100/60 xl:border-l border-gray-200 py-8 xl:py-0">
          <img
            src="https://i.gifer.com/XoBP.gif"
            alt="Showcase GIF"
            className="w-full h-full object-cover min-h-[320px] md:min-h-[600px] max-h-[600px] rounded-none"
          />
        </div>
      </div>
    </motion.section>
  );
}

export function ScrollPaneAlt() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.97 }}
      animate={controls}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-none px-0 md:px-0 my-8"
    >
      <div className="w-full flex flex-col md:flex-row-reverse items-stretch bg-white backdrop-blur-lg shadow-2xl  border border-gray-200 overflow-hidden min-h-[480px] md:min-h-[600px]">
        {/* Text Pane */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 gap-6">
          <h3 className="text-3xl md:text-4xl mb-2 text-gray-900 leading-tight">
            Tired of playing GTA story mode where everyone forgets everything and nothing ever happens after you're done with the plot?
          </h3>
          <p className="text-gray-700 text-xl md:text-2xl mb-4 max-w-2xl">
            With World37, everything goes on the headlines, the NPCs remember you, and... whatever behaviors you want as a creator. The possibilities are endless. Anything goes! All you have to do is write a system prompt and let your world run wild.
          </p>
        </div>
        {/* Image Pane */}
        <div className="md:w-[600px] w-full flex items-center justify-center bg-gray-100/60 border-r border-gray-200">
          <img
            src="https://images.steamusercontent.com/ugc/98348089947795110/E8D6A7F620BC59003EAA3178C5B597B64753B40D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            alt="Dynamic NPC behavior example"
            className="w-full h-full object-cover min-h-[320px] md:min-h-[600px] max-h-[600px] rounded-none"
          />
        </div>
      </div>
    </motion.section>
  );
}