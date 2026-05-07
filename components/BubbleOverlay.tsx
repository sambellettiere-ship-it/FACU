'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets } from 'lucide-react';
import Image from 'next/image';

export function BubbleOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Hide the overlay after a short delay to simulate suds clearing away
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return (
    <div className="fixed inset-0 z-[100] bg-cyan-50 flex items-center justify-center w-screen h-screen">
      {/* SSR placeholder */}
    </div>
  );

  // Generate random bubbles with stable values strictly on the client
  const bubbleCount = 60;
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
    const size = Math.random() * 100 + 20; // 20px to 120px
    const left = Math.random() * 100; // 0% to 100%
    const delay = Math.random() * 1.5; // 0s to 1.5s delay
    const duration = Math.random() * 2 + 1.5; // 1.5s to 3.5s duration
    return { id: i, size, left, delay, duration };
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-cyan-50 overflow-hidden flex items-center justify-center"
          initial={{ opacity: 1, backgroundColor: 'rgba(236, 254, 255, 1)' }}
          exit={{ 
            opacity: 0, 
            backgroundColor: 'rgba(236, 254, 255, 0)',
            pointerEvents: 'none', 
            transition: { duration: 1.2, ease: "easeInOut" } 
          }}
        >
          {/* Bubbles */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full border border-white/80 bg-white/30 backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(255,255,255,0.9)] flex items-center justify-center overflow-hidden"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: `${bubble.left}%`,
                bottom: '-20%', // start below screen
              }}
              animate={{
                y: ['0vh', '-120vh'], // Float up past the screen
                x: [0, Math.random() * 80 - 40, Math.random() * 80 - 40], // Drift left/right
                scale: [1, 1.1, 0.9, 1], // Wobbly effect
              }}
              exit={{
                scale: 1.5,
                opacity: 0,
                transition: { duration: 0.4, delay: Math.random() * 0.4 } // Pop effect on exit
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Inner highlight to make it look like a soap bubble */}
              <div className="absolute top-[15%] left-[20%] w-[30%] h-[30%] rounded-full bg-white/80 blur-[2px]" />
            </motion.div>
          ))}

          {/* Center Graphic */}
          <motion.div 
            className="relative z-10 flex flex-col items-center pointer-events-none"
            exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)', transition: { duration: 0.8 } }}
          >
            <motion.div 
              animate={{ 
                rotate: [-5, 5, -5],
                y: [0, -10, 0]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="mb-8 relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] flex items-center justify-center drop-shadow-2xl"
            >
              <Image src="/funkawaymascots.png" alt="Company Logo" fill className="object-contain" priority />
            </motion.div>
            <div className="text-3xl md:text-5xl font-black font-display text-cyan-700 uppercase tracking-widest drop-shadow-sm flex flex-col items-center gap-2">
              <span className="opacity-90">Washing The</span>
              <span className="text-cyan-500">Funk Away</span>
            </div>
            <motion.div 
              className="mt-8 flex gap-3"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full" />
              <div className="w-3 h-3 bg-cyan-400 rounded-full" />
              <div className="w-3 h-3 bg-cyan-400 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
