'use client';

import React from 'react';
import Image from 'next/image';
import { Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const images = [
    {
      src: '/images/products/01-open-charcoal.webp',
      title: 'Courtyard Installation',
      caption: 'The Foldaway 2.3m in Charcoal mounted on modern textured exterior plaster.',
      tag: 'Fully Open',
    },
    {
      src: '/images/products/04-folded-charcoal.webp',
      title: 'Space Saving Profile',
      caption: 'Folds flat against the wall, restoring courtyard floor space.',
      tag: 'Folded Flat',
    },
    {
      src: '/images/products/05-mechanism-closeup.webp',
      title: 'Precision Pivot Hinge',
      caption: 'Marine-grade stainless steel pivot bolts and stay-arm mechanism.',
      tag: 'Mechanical Detail',
    },
    {
      src: '/images/products/06-aluminium-detail.webp',
      title: 'Aluminium Powder Coating',
      caption: 'Durable weather-resistant epoxy finish and tensioned washing cords.',
      tag: 'Surface Finish',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Visual Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Architectural Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Clean architectural installations in contemporary South African homes, courtyards, and laundries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-xs text-zinc-300 mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
