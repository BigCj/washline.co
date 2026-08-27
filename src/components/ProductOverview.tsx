'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Feather, 
  Maximize2, 
  Home, 
  Warehouse, 
  Waves, 
  Umbrella, 
  Building2,
  Sun
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function ProductOverview() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Rust-Resistant Aluminium',
      desc: 'The Foldaway frame is made from aluminium. Unlike conventional steel or galvanised-steel washing lines, aluminium does not rust.',
    },
    {
      icon: Sparkles,
      title: 'Epoxy Powder-Coated Finish',
      desc: 'Professionally epoxy powder-coated to provide a weatherproof finish.',
    },
    {
      icon: Feather,
      title: 'Lightweight Operation',
      desc: 'Aluminium is lightweight, helping make the washing line easy to operate. Machine screws used in construction are stainless steel.',
    },
    {
      icon: Maximize2,
      title: 'Space-Saving Fold-Down Design',
      desc: 'Can be lowered against the mounting wall when not in use, allowing the area to be reused.',
    },
  ];

  const useCases = [
    {
      title: 'Courtyards',
      icon: Building2,
      desc: 'Space-saving fold-down installation on exterior courtyard walls.',
    },
    {
      title: 'Under Roof Eaves',
      icon: Umbrella,
      desc: 'Protected drying along exterior walls and under roof eaves.',
    },
    {
      title: 'Pool Areas',
      icon: Waves,
      desc: 'Convenient towel and swimwear drying near pool patios.',
    },
    {
      title: 'Laundry Rooms',
      icon: Home,
      desc: 'Wall-mounted indoor drying for laundry rooms.',
    },
    {
      title: 'Garages',
      icon: Warehouse,
      desc: 'Utility wall mounting that folds flat when not in use.',
    },
  ];

  return (
    <section className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            South African Manufactured Aluminium Foldaway
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Designed around the way you live.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            The Foldaway is a cleverly designed aluminium fold-down washing line available in multiple sizes to suit modern homes where space matters.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950">{h.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Section 14: Official Size Advice & Multi-Line Advantage */}
        <div className="mt-16 p-8 rounded-3xl bg-zinc-50 border border-zinc-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
            <Sun className="w-4 h-4 text-amber-500" />
            <span>{PRODUCT_DATA.sizeAdvice.title}</span>
          </div>

          <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
            {PRODUCT_DATA.sizeAdvice.popularNote}
          </p>

          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2 border-t border-zinc-200/80">
            <strong className="text-zinc-900">Practical advantage:</strong> {PRODUCT_DATA.sizeAdvice.practicalAdvantage}
          </p>
        </div>

        {/* Where It Works Subsection */}
        <div className="mt-20 pt-16 border-t border-zinc-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
              Installation Locations
            </span>
            <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Indoors. Outdoors. Wherever space matters.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2 rounded-lg bg-zinc-200 text-zinc-900 w-fit mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-zinc-900 text-sm">{uc.title}</h4>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
