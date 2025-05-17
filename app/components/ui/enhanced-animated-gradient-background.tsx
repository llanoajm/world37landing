//@ts-nocheck
import React, { useEffect, useState, useRef } from 'react';

const EnhancedAnimatedGradientBackground = ({
   Breathing = true,
   animationSpeed = 0.01,
   breathingRange = 4,
   containerStyle = {},
   containerClassName = "",
}) => {
   const [opacity, setOpacity] = useState(0);
   const animationRef = useRef(null);
   const containerRef = useRef(null);
   const breathFactorRef = useRef(0);
   const breathDirectionRef = useRef(1);

   useEffect(() => {
      // Fade in the gradient
      setOpacity(1);
      
      const animateGradients = () => {
         if (!containerRef.current) return;
         
         // Create breathing effect
         if (Breathing) {
            if (breathFactorRef.current >= breathingRange) breathDirectionRef.current = -1;
            if (breathFactorRef.current <= 0) breathDirectionRef.current = 1;
            breathFactorRef.current += breathDirectionRef.current * animationSpeed;
         }
         
         // Factor to use in gradient position calculations
         const factor = breathFactorRef.current;
         
         // Multiple gradient layers to create complex effect
         const background = `
            radial-gradient(70% 80% at 20% 10%, rgba(91, 33, 182, 0.7) 0%, transparent 60%),
            radial-gradient(60% 70% at 80% 10%, rgba(45, 187, 23, 0.6) 0%, transparent 60%),
            radial-gradient(60% 60% at 10% 70%, rgba(247, 63, 124, 0.6) 0%, transparent 65%),
            radial-gradient(70% 70% at 90% 80%, rgba(11, 238, 227, 0.59) 0%, transparent 65%),
            radial-gradient(120% 140% at 50% ${45 + factor}%, rgba(224, 163, 57, 0.6) 0%, rgba(250, 180, 88, 0.4) 30%, rgba(227, 161, 134, 0.3) 50%, rgba(101, 163, 13, 0.5) 75%, rgba(112, 135, 209, 0.5) 100%),
            linear-gradient(to bottom right, #0A0A0A, #0A0A0A)
         `;
         
         containerRef.current.style.background = background;
      };
      
      // Start animation
      animateGradients();
      animationRef.current = setInterval(animateGradients, 30);
      
      return () => {
         if (animationRef.current) {
            clearInterval(animationRef.current);
         }
      };
   }, [Breathing, animationSpeed, breathingRange]);

   return (
      <div
         ref={containerRef}
         className={`absolute inset-0 overflow-hidden transition-opacity duration-2000 ${containerClassName}`}
         style={{ 
            ...containerStyle,
            opacity,
            transition: "opacity 2s ease-in-out",
         }}
      />
   );
};

export default EnhancedAnimatedGradientBackground;