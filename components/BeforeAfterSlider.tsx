'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  label?: string;
  /**
   * CSS aspect-ratio for the frame (e.g. '3 / 4', '9 / 16'). Defaults to a
   * portrait 3:4. The photos are tall portraits, so pick a ratio close to the
   * source images to avoid letterbox bars — `object-contain` guarantees the
   * image is never cropped regardless.
   */
  aspectRatio?: string;
  /**
   * When true the handle starts in the middle and gently sweeps back and forth
   * on its own to reveal the before/after difference without any interaction.
   * The animation stops for good the moment the visitor grabs the slider.
   */
  autoPlay?: boolean;
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, label, aspectRatio = '3 / 4', autoPlay = false }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  // Once the visitor interacts we hand control over to them and never resume
  // the automatic sweep.
  const [userTookOver, setUserTookOver] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto sweep: start centered (50%) and ease back and forth with a sine wave
  // so the motion feels smooth and always returns through the middle.
  useEffect(() => {
    if (!autoPlay || userTookOver) return;
    const amplitude = 40; // sweeps between 10% and 90%
    const period = 5000; // ms for one full back-and-forth cycle
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = (now - start) / period;
      setPosition(50 + amplitude * Math.sin(t * 2 * Math.PI));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoPlay, userTookOver]);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Capture the pointer so we keep receiving move/up events even if the
    // finger or cursor leaves the element, and so the browser doesn't hand the
    // gesture off to native scrolling mid-drag (the main cause of mobile jitter).
    e.currentTarget.setPointerCapture(e.pointerId);
    setUserTookOver(true);
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setUserTookOver(true);
    }
    if (e.key === 'ArrowLeft') {
      setPosition((p) => Math.max(0, p - 2));
    } else if (e.key === 'ArrowRight') {
      setPosition((p) => Math.min(100, p + 2));
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      // touch-none disables the browser's native pan/scroll on this element so
      // horizontal drags translate straight into slider movement.
      className="bg-slate-200 rounded-3xl overflow-hidden relative select-none cursor-ew-resize touch-none shadow-md group"
      style={{ aspectRatio }}
    >
      {/* After image (base layer, revealed on the right) */}
      <img
        src={afterSrc}
        alt={label ? `${label} after` : 'After'}
        draggable={false}
        className="block absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      {/* Before image (overlay, clipped to the left of the handle) */}
      <img
        src={beforeSrc}
        alt={label ? `${label} before` : 'Before'}
        draggable={false}
        className="block absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      {/* Labels */}
      <span className="absolute top-4 left-4 z-20 bg-slate-900/70 text-white text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full pointer-events-none">
        Before
      </span>
      <span className="absolute top-4 right-4 z-20 bg-cyan-600/90 text-white text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full pointer-events-none">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <button
          type="button"
          aria-label={`Adjust before and after slider${label ? ` for ${label}` : ''}`}
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-cyan-700 pointer-events-none cursor-ew-resize transition-transform group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <MoveHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
