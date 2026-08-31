'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Play, 
  Pause, 
  ChevronRight, 
  Sparkles, 
  MousePointer, 
  SlidersHorizontal,
  Maximize2,
  Minimize2
} from 'lucide-react';

const FRAMES = [
  '/images/washline/frame-01-open.webp',
  '/images/washline/frame-02-start-fold.webp',
  '/images/washline/frame-03-mid-fold.webp',
  '/images/washline/frame-04-lower-fold.webp',
  '/images/washline/frame-05-almost-closed.webp',
  '/images/washline/frame-06-closed.webp',
];

export default function FoldawayScrollExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animFrameRef = useRef<number | null>(null);

  // Preload all 6 frames immediately
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

  const renderFrameToCanvas = useCallback((fraction: number) => {
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
  }, []);

  // Update canvas on progress state change
  useEffect(() => {
    if (imagesLoaded) {
      renderFrameToCanvas(progress);
    }
  }, [progress, imagesLoaded, renderFrameToCanvas]);

  // Auto-play loop toggle
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    let direction = 1;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setProgress((prev) => {
        let next = prev + direction * (delta * 0.45);
        if (next >= 1) {
          next = 1;
          direction = -1;
        } else if (next <= 0) {
          next = 0;
          direction = 1;
        }
        return next;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  // Mouse hover scrubbing on desktop (move cursor across container to fold/unfold)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isPlaying) return; // let auto-play run if active
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const fraction = Math.max(0, Math.min(1, x / rect.width));
    setProgress(fraction);
  };

  const stages = [
    { label: 'Fully Open', value: 0, desc: 'Horizontal position for drying clothes' },
    { label: 'Mid-Fold', value: 0.5, desc: 'Stay arms release to lower the frame' },
    { label: 'Folded Flat', value: 1, desc: 'Rests almost flush against mounting wall' },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-20 sm:py-28 bg-zinc-950 text-white border-b border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Space-Saving Fold-Down Action</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Space when you need it. Gone when you don’t.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Hover your mouse or use the slider below to see how smoothly the Foldaway frame raises for laundry and folds flat against the wall.
            </p>
          </div>

          {/* Quick interactive controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                isPlaying
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-md'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-700'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause Loop</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Auto-Play Action</span>
                </>
              )}
            </button>

            <Link
              href="/#order"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
            >
              <span>Order Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Visual Canvas Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Visual Display */}
          <div
            onMouseMove={handleMouseMove}
            className="group relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800 cursor-ew-resize select-none"
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover pointer-events-none"
              style={{ filter: 'brightness(1.02) contrast(1.02)' }}
            />

            {/* Subtle interactive hover cue on desktop */}
            <div className="absolute top-4 right-4 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-[11px] text-zinc-300 pointer-events-none transition-opacity group-hover:opacity-100 opacity-70">
              <MousePointer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hover cursor across frame to fold/unfold</span>
            </div>

            {/* Bottom State Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent p-6 sm:p-8 flex flex-col justify-end pointer-events-none">
              <div className="max-w-xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                  {progress < 0.35 ? 'State 01: Open' : progress < 0.7 ? 'State 02: Mid-Fold' : 'State 03: Folded Flat'}
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                  {progress < 0.35
                    ? 'Open when you need it.'
                    : progress < 0.7
                    ? 'Designed to disappear.'
                    : 'Fold it away when you don’t.'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                  {progress < 0.35
                    ? 'Supported horizontally by sturdy stay arms for active drying.'
                    : progress < 0.7
                    ? 'Support stays release to lower the frame effortlessly.'
                    : 'Rests flat against the wall, restoring your patio, courtyard or garage space.'}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Scrub Bar & State Preset Buttons */}
          <div className="mt-8 bg-zinc-900/90 p-5 sm:p-6 rounded-2xl border border-zinc-800 space-y-5">
            {/* Range Slider for direct control (Touch & Mobile friendly) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive Position Scrubber</span>
                </span>
                <span className="font-mono text-zinc-400">
                  {Math.round((1 - progress) * 100)}% Open • {Math.round(progress * 100)}% Folded
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={progress}
                onChange={(e) => {
                  setIsPlaying(false);
                  setProgress(parseFloat(e.target.value));
                }}
                className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
                aria-label="Foldaway position slider"
              />
            </div>

            {/* 3 Step Preset Buttons */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-1 border-t border-zinc-800/80">
              {stages.map((stage) => {
                const isActive = Math.abs(progress - stage.value) < 0.2;
                return (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => {
                      setIsPlaying(false);
                      setProgress(stage.value);
                    }}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      isActive
                        ? 'bg-zinc-800 border-emerald-400/80 ring-1 ring-emerald-400/50 text-white'
                        : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold flex items-center justify-between">
                      <span>{stage.label}</span>
                      {stage.value === 0 && <Maximize2 className="w-3 h-3 text-zinc-400" />}
                      {stage.value === 1 && <Minimize2 className="w-3 h-3 text-zinc-400" />}
                    </div>
                    <div className="hidden sm:block text-[11px] text-zinc-400 mt-1 truncate">
                      {stage.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
