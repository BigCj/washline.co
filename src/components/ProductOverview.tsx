'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Sparkles, 
  Feather, 
  Maximize2, 
  Home, 
  Warehouse, 
  Waves, 
  Umbrella, 
  Building2 
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function ProductOverview() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Rust-Resistant Aluminium',
      desc: 'Constructed from lightweight structural aluminium. Unlike steel, it does not rust.',
    },
    {
      icon: Sparkles,
      title: 'Epoxy Powder-Coated Finish',
      desc: 'Professionally baked epoxy coating protects against harsh coastal sun and rain.',
    },
    {
      icon: Feather,
      title: 'Lightweight Operation',
      desc: 'Effortless to raise, lock, and lower. Machine screws used in construction are stainless steel.',
    },
    {
      icon: Maximize2,
      title: 'Space-Saving Fold-Down Design',
      desc: 'Collapses virtually flat against the wall, liberating your floor and courtyard space.',
    },
  ];

  const useCases = [
    {
      title: 'Courtyards & Patios',
      icon: Building2,
      desc: 'Perfect for townhouse perimeter walls and garden patios where floor space is premium.',
    },
    {
      title: 'Under Roof Eaves',
      icon: Umbrella,
      desc: 'Protected drying out of direct rain while catching warm breezes along exterior walls.',
    },
    {
      title: 'Pool & Entertainment Areas',
      icon: Waves,
      desc: 'Discreet drying for beach and pool towels that folds away before guests arrive.',
    },
    {
      title: 'Laundry Rooms',
      icon: Home,
      desc: 'Clean wall-mounted indoor drying for rainy winter seasons and delicate items.',
    },
    {
      title: 'Garages & Utility Areas',
      icon: Warehouse,
      desc: 'Zero floor footprint when folded, keeping your car and storage pathways unobstructed.',
    },
  ];

  return (
    <section className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Original South African Design
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Designed around the way you live.
          </h2>
          <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
            The Foldaway is a cleverly designed aluminium fold-down clothesline available in multiple sizes to suit modern homes where space matters.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950">{h.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Where It Works Subsection */}
        <div className="mt-24 pt-16 border-t border-zinc-200">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
              Architectural Versatility
            </span>
            <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Indoors. Outdoors. Wherever space matters.
            </h3>
            <p className="mt-3 text-zinc-600 text-sm sm:text-base">
              Mounted securely on exterior masonry, perimeter walls, or indoor laundry spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-50/70 border border-zinc-200 hover:bg-zinc-100/80 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 rounded-lg bg-zinc-200 text-zinc-900 w-fit mb-3">
                      <Icon className="w-5 h-5" />
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
