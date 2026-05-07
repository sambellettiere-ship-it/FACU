'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TiktokCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // Replace these Video IDs with the actual IDs from your TikTok videos
  // You can find the Video ID in the URL of the TikTok video: https://www.tiktok.com/@funk.away.gcs/video/[VIDEO_ID]
  const tiktokVideos = [
    "7636485891912994062", // Placeholder Video ID 1
    "7636456827806403853", // Placeholder Video ID 2
    "7636066688907169037", // Placeholder Video ID 3
    "7634955908199582989", // Placeholder Video ID 4
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Buttons */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full border border-white/20 shadow-xl transition-all hidden md:block"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full border border-white/20 shadow-xl transition-all hidden md:block"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Carousel */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 hide-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tiktokVideos.map((videoId, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="snap-center shrink-0 w-[325px] flex justify-center bg-cyan-900/50 rounded-3xl overflow-hidden border border-cyan-800 shadow-2xl relative"
          >
            <div className="w-full relative pt-[177%]"> {/* approx 16:9 vertical ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en-US`}
                allow="encrypted-media;"
                frameBorder="0"
                title={`TikTok Video ${index + 1}`}
              ></iframe>
            </div>
            
            {/* Fallback Mask if iframe takes time to load */}
            <div className="absolute inset-0 -z-10 bg-cyan-950 flex flex-col items-center justify-center text-cyan-500/50">
              <div className="w-12 h-12 bg-cyan-900/50 rounded-full animate-pulse mb-4"></div>
              <span className="text-sm font-bold uppercase tracking-wider">Loading TikTok...</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a 
          href="https://www.tiktok.com/@funk.away.gcs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-400 hover:to-cyan-400 text-white font-black uppercase tracking-widest py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1"
        >
          Follow us on TikTok
        </a>
      </div>
    </div>
  );
}
