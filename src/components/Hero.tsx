'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Shield, Check, Sparkles } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center bg-zinc-950 text-white overflow-hidden">
      {/* Background Architectural Image with subtle depth vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/01-open-charcoal.webp"
          alt="The Foldaway aluminium washing line opened on modern exterior wall"
          fill
          priority
          className="object-cover object-center opacity-85 scale-105 transform animate-in fade-in zoom-in-95 duration-1000"
          sizes="100vw"
        />
        {/* Architectural subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-2xl">
          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest text-zinc-300 uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{PRODUCT_DATA.brand.strapline}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] animate-in fade-in slide-in-from-bottom-3 duration-700">
            {PRODUCT_DATA.brand.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-2xl sm:text-3xl font-light tracking-tight text-zinc-200 leading-snug animate-in fade-in slide-in-from-bottom-4 duration-700">
            {PRODUCT_DATA.brand.heroSubtitle}
          </p>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-700">
            {PRODUCT_DATA.brand.heroSupporting}
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <Link
              href="/#order"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm uppercase tracking-wider hover:bg-zinc-100 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
            >
              <span>Shop The Foldaway</span>
              <ArrowRight className="w-4 h-4 text-zinc-900" />
            </Link>

            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/90 text-white font-semibold text-sm border border-zinc-700/80 backdrop-blur-sm transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current text-zinc-300" />
              <span>See How It Works</span>
            </Link>
          </div>

          {/* Quick Specifications Pill Bar */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-white/10 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">Rust-Resistant Aluminium</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-white/10 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">Epoxy Powder-Coated</span>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <div className="p-1 rounded bg-white/10 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">Stainless Machine Screws</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
