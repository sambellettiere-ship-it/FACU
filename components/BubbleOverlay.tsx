'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets } from 'lucide-react';
import Image from 'next/image';

export function BubbleOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [bubbles, setBubbles] = useState<Array<{ id: number; size: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    setMounted(true);
    
    // Reduce bubble count on mobile to improve animation performance
    const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 50;
    const initialBubbles = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 80 + 20; // 20px to 100px
      const left = Math.random() * 100; // 0% to 100%
      const delay = Math.random() * 1.5; // 0s to 1.5s delay
      const duration = Math.random() * 2 + 1.5; // 1.5s to 3.5s duration
      return { id: i, size, left, delay, duration };
    });
    setBubbles(initialBubbles);

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
              className="absolute rounded-full border border-cyan-300/60 bg-white/40 shadow-[inset_0_0_15px_rgba(66,130,168,0.3),_0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden"
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
              {/* Inner highlights to make it look like a soap bubble */}
              <div className="absolute top-[15%] left-[20%] w-[35%] h-[35%] rounded-full bg-white/90 blur-[1px] rotate-45" />
              <div className="absolute bottom-[10%] right-[15%] w-[40%] h-[20%] rounded-full bg-cyan-300/40 blur-[3px] -rotate-12" />
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
