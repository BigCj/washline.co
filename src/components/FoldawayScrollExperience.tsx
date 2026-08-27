'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

const FRAMES = [
  '/images/washline/frame-01-open.webp',
  '/images/washline/frame-02-start-fold.webp',
  '/images/washline/frame-03-mid-fold.webp',
  '/images/washline/frame-04-lower-fold.webp',
  '/images/washline/frame-05-almost-closed.webp',
  '/images/washline/frame-06-closed.webp',
];

export default function FoldawayScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [manualFrame, setManualFrame] = useState(0); // for reduced motion / interactive slider
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    FRAMES.forEach((src, idx) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAMES.length) {
          imagesRef.current = loadedImages;
          setImagesLoaded(true);
          renderFrameToCanvas(0);
        }
      };
      loadedImages[idx] = img;
    });
  }, []);

  const renderFrameToCanvas = (fraction: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length < FRAMES.length) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const totalFrames = FRAMES.length;
    const rawIndex = fraction * (totalFrames - 1);
    const lowerIndex = Math.floor(rawIndex);
    const upperIndex = Math.min(totalFrames - 1, Math.ceil(rawIndex));
    const blend = rawIndex - lowerIndex;

    const img1 = imagesRef.current[lowerIndex];
    const img2 = imagesRef.current[upperIndex];

    if (!img1 || !img2) return;

    // Set canvas internal resolution to 1200x800 for high DPI sharpness
    if (canvas.width !== 1200 || canvas.height !== 800) {
      canvas.width = 1200;
      canvas.height = 800;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw primary base frame
    ctx.globalAlpha = 1;
    ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);

    // If interpolating between frames, crossfade upper frame
    if (blend > 0.01 && lowerIndex !== upperIndex) {
      ctx.globalAlpha = blend;
      ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
    }
    ctx.globalAlpha = 1;
  };

  // Scroll listener mapped to container pinning
  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) return;

      // When container top reaches top of viewport (rect.top <= 0)
      const scrolledPastTop = -rect.top;
      const rawProgress = Math.max(
        0,
        Math.min(1, scrolledPastTop / totalScrollableDistance)
      );

      setProgress(rawProgress);
      if (imagesLoaded) {
        requestAnimationFrame(() => renderFrameToCanvas(rawProgress));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [imagesLoaded, reducedMotion]);

  // Copy state calculation based on progress
  const getActiveTextIndex = (p: number) => {
    if (p < 0.3) return 0; // "Open when you need it."
    if (p < 0.7) return 1; // "Designed to disappear."
    return 2; // "Fold it away when you don’t."
  };

  const activeTextIdx = getActiveTextIndex(progress);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className={`relative bg-zinc-950 text-white ${
        reducedMotion ? 'py-20 min-h-auto' : 'h-[220vh] sm:h-[260vh]'
      }`}
    >
      {/* Sticky Presentation Stage */}
      <div
        className={`${
          reducedMotion
            ? 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
            : 'sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden'
        }`}
      >
        {/* Top Floating Badge & Header */}
        <div className="pt-6 sm:pt-10 px-4 sm:px-8 max-w-7xl mx-auto w-full z-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-zinc-300 uppercase border border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Scroll-Controlled Mechanical Action
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs text-zinc-400 font-mono">
            <span>
              ROTATION:{' '}
              <strong className="text-white">
                {Math.round(progress * 90)}°
              </strong>
            </span>
            <span>|</span>
            <span>
              STATUS:{' '}
              <strong className="text-white">
                {progress < 0.15
                  ? 'HORIZONTAL (OPEN)'
                  : progress > 0.85
                  ? 'FOLDED (FLAT)'
                  : 'IN MOTION'}
              </strong>
            </span>
          </div>
        </div>

        {/* Central Visual & Canvas Render Canvas */}
        <div className="relative flex-1 flex items-center justify-center p-4 sm:p-6 w-full max-w-6xl mx-auto z-10">
          {!reducedMotion ? (
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[72vh] rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.02) contrast(1.02)' }}
              />

              {/* Minimal Text Overlay synchronized to scroll */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-10 pointer-events-none">
                <div className="max-w-xl transition-all duration-300 transform">
                  {activeTextIdx === 0 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-1">
                        01 / Active Drying
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Open when you need it.
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed">
                        Six full lines held perfectly rigid by lightweight powder-coated aluminium stays.
                      </p>
                    </div>
                  )}

                  {activeTextIdx === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-1">
                        02 / One-Motion Release
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Designed to disappear.
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed">
                        Stainless steel pivot bolts smoothly rotate the front frame downwards toward the wall.
                      </p>
                    </div>
                  )}

                  {activeTextIdx === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-1">
                        03 / Zero Footprint
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Fold it away when you don’t.
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed">
                        More space. Same wall. The entire assembly rests virtually flat.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Reduced motion accessible side-by-side view */
            <div className="w-full py-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">How The Foldaway Works</h2>
                <p className="text-zinc-400 text-sm mt-2">
                  Space when you need it. Gone when you don’t.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/washline/frame-01-open.webp"
                      alt="The Foldaway washing line fully raised and open"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Open when you need it
                  </h4>
                  <p className="text-zinc-400 text-sm mt-2">
                    Horizontal position provides up to 15.6m of drying space for full bedding and wash loads.
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/washline/frame-06-closed.webp"
                      alt="The Foldaway washing line folded flat against the wall"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Fold it away when you don’t
                  </h4>
                  <p className="text-zinc-400 text-sm mt-2">
                    Folds flush against the mounting surface, instantly restoring your patio, courtyard, or laundry area.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Interactive Progress & CTA Bar */}
        <div className="pb-6 sm:pb-8 px-4 sm:px-8 max-w-7xl mx-auto w-full z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Scroll instruction indicator */}
          <div className="flex items-center gap-3 text-zinc-400 text-xs">
            <span className="inline-flex p-1.5 rounded-full bg-white/10 text-white animate-bounce">
              <ArrowDown className="w-3.5 h-3.5" />
            </span>
            <span>
              Scroll down to fold • Scroll up to open
            </span>
          </div>

          {/* Progress track bar */}
          <div className="w-full sm:w-64 bg-zinc-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-75"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>

          {/* CTA Link */}
          <Link
            href="/#order"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <span>Explore The Foldaway</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
