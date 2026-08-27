'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ChevronRight } from 'lucide-react';

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
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

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

    if (canvas.width !== 1200 || canvas.height !== 800) {
      canvas.width = 1200;
      canvas.height = 800;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);

    if (blend > 0.01 && lowerIndex !== upperIndex) {
      ctx.globalAlpha = blend;
      ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
    }
    ctx.globalAlpha = 1;
  };

  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) return;

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

  const getActiveTextIndex = (p: number) => {
    if (p < 0.35) return 0;
    if (p < 0.7) return 1;
    return 2;
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
      <div
        className={`${
          reducedMotion
            ? 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
            : 'sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden'
        }`}
      >
        {/* Top Product Specs Indicator */}
        <div className="pt-6 sm:pt-10 px-4 sm:px-8 max-w-7xl mx-auto w-full z-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium tracking-wider text-zinc-300 border border-white/10">
              The Foldaway Washing Line
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-400">
            <span>Aluminium</span>
            <span>•</span>
            <span>Epoxy Powder-Coated</span>
            <span>•</span>
            <span>Stainless Steel Screws</span>
          </div>
        </div>

        {/* Central Visual & Canvas Render */}
        <div className="relative flex-1 flex items-center justify-center p-4 sm:p-6 w-full max-w-6xl mx-auto z-10">
          {!reducedMotion ? (
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[72vh] rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.02) contrast(1.02)' }}
              />

              {/* Minimal Text Overlay fixed height container to avoid layout shift */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-10 pointer-events-none">
                <div className="max-w-xl min-h-[110px] flex flex-col justify-end">
                  {activeTextIdx === 0 && (
                    <div className="transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Open when you need it.
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 mt-2">
                        Supported horizontally for active drying.
                      </p>
                    </div>
                  )}

                  {activeTextIdx === 1 && (
                    <div className="transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Designed to disappear.
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 mt-2">
                        Stay arms release to lower the frame smoothly toward the wall.
                      </p>
                    </div>
                  )}

                  {activeTextIdx === 2 && (
                    <div className="transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Fold it away when you don’t.
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 mt-2">
                        More space. Same wall. Rests almost flat against the mounting wall.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full py-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">The Foldaway Design</h2>
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
                    Horizontal position for hanging laundry.
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
                    Folds flat against the wall to allow the area to be reused.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Control & CTA Bar */}
        <div className="pb-6 sm:pb-8 px-4 sm:px-8 max-w-7xl mx-auto w-full z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-zinc-400 text-xs">
            <span className="inline-flex p-1.5 rounded-full bg-white/10 text-white animate-bounce">
              <ArrowDown className="w-3.5 h-3.5" />
            </span>
            <span>Scroll down to fold • Scroll up to open</span>
          </div>

          <div className="w-full sm:w-64 bg-zinc-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-75"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>

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
