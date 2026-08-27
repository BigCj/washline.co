'use client';

import React from 'react';
import Image from 'next/image';
import { PRODUCT_DATA } from '@/data/productData';
import { ShieldCheck, Check, MoveDown, Compass, Maximize } from 'lucide-react';

export default function BenefitsGrid() {
  const benefits = PRODUCT_DATA.benefits;

  return (
    <section className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Engineering & Performance
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Engineered for Coastal & South African Conditions
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Four core architectural advantages that make Mr Washline the leading foldaway choice since 2003.
          </p>
        </div>

        {/* 4 Editorial Benefit Sections */}
        <div className="space-y-20">
          {benefits.map((benefit, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={benefit.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Visual / Image */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:col-start-7' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 bg-zinc-100 group">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <span className="px-3.5 py-1.5 rounded-full bg-zinc-900/90 text-white text-xs font-bold backdrop-blur-md">
                        {benefit.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:col-start-1' : ''
                  }`}
                >
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Advantage 0{idx + 1}
                  </div>
                  <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    {benefit.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {benefit.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-zinc-700">
                        <div className="p-1 rounded-full bg-zinc-900 text-white shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
