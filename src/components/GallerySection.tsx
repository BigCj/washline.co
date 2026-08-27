'use client';

import React from 'react';
import Image from 'next/image';

export default function GallerySection() {
  const images = [
    {
      src: '/images/products/01-open-charcoal.webp',
      title: 'Charcoal Foldaway (Open)',
      caption: 'The Foldaway mounted on exterior wall in open position.',
      tag: 'Charcoal Model',
    },
    {
      src: '/images/products/white-open-pair.webp',
      title: 'White Foldaway Pair (Open)',
      caption: 'Two white Foldaway washing lines mounted on boundary perimeter wall.',
      tag: 'White Model',
    },
    {
      src: '/images/products/white-poolside-folded.webp',
      title: 'Poolside Wall Installation (Folded)',
      caption: 'Two white Foldaway washing lines folded flat against the wall.',
      tag: 'Space Saving',
    },
    {
      src: '/images/products/installation-action.webp',
      title: 'Installation & Support Arm Mechanism',
      caption: 'Straightforward wall mounting and stay-arm action.',
      tag: 'Installation',
    },
    {
      src: '/images/products/white-folded-pair.webp',
      title: 'Folded Flat Against Wall',
      caption: 'Folds flat to allow the courtyard or patio area to be reused.',
      tag: 'Exterior Wall',
    },
    {
      src: '/images/products/05-mechanism-closeup.webp',
      title: 'Pivot & Stainless Screw Detail',
      caption: 'Stainless steel machine screws and support arm pivot.',
      tag: 'Component Detail',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Installation Gallery
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Real Foldaway Installations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Examples of Charcoal and White Foldaway washing lines mounted on exterior and interior walls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              </div>

              <div className="p-5 bg-white flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-bold text-zinc-950 mt-0.5">{item.title}</h3>
                  <p className="text-xs text-zinc-600 mt-1">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
