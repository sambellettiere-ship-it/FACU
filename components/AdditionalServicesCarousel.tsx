'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export type CarouselSlide = {
  title: string;
  description: string;
  href: string;
  pair?: { before: string; after: string; label: string };
};

// How long each service stays on screen before the carousel advances.
const ROTATE_MS = 10000;

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -80 : 80 }),
};

export function AdditionalServicesCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setState([(next + count) % count, dir]);
    },
    [count]
  );

  const paginate = useCallback((dir: number) => goTo(index + dir, dir), [goTo, index]);

  // Auto-advance. Re-arming on every index change gives each slide the full
  // 10 seconds; pausing on hover/focus lets people read without it moving on.
  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = setTimeout(() => goTo(index + 1, 1), ROTATE_MS);
    return () => clearTimeout(timer);
  }, [index, paused, count, goTo]);

  const slide = slides[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative overflow-hidden bg-white rounded-[32px] border border-cyan-100 shadow-[0_10px_25px_-5px_rgba(8,145,178,0.1)]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10"
          >
            {slide.pair ? (
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <BeforeAfterSlider
                  beforeSrc={slide.pair.before}
                  afterSrc={slide.pair.after}
                  label={slide.pair.label}
                  aspectRatio="3 / 4"
                  autoPlay
                />
              </div>
            ) : (
              <div className="w-full max-w-md mx-auto lg:mx-0 flex items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-100 aspect-[3/4]">
                <Sparkles className="w-20 h-20 text-cyan-300" />
              </div>
            )}

            <div className="flex flex-col items-start">
              <CheckCircle className="w-8 h-8 text-cyan-500 mb-6" />
              <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                {slide.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-6">{slide.description}</p>
              <Link
                href={slide.href}
                className="inline-flex items-center text-cyan-600 font-bold text-sm tracking-wider uppercase group"
              >
                Learn More{' '}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next controls */}
      <button
        type="button"
        onClick={() => paginate(-1)}
        aria-label="Previous service"
        className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-cyan-50 text-cyan-700 p-3 rounded-full border border-cyan-100 shadow-lg transition-all hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={() => paginate(1)}
        aria-label="Next service"
        className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-cyan-50 text-cyan-700 p-3 rounded-full border border-cyan-100 shadow-lg transition-all hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2.5 mt-8">
        {slides.map((s, i) => (
          <button
            key={s.href}
            type="button"
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={`Show ${s.title}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-cyan-600' : 'w-2.5 bg-cyan-200 hover:bg-cyan-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
