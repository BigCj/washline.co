'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Package, 
  ArrowRight, 
  Hammer
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function KitContentsExploded() {
  const [activePart, setActivePart] = useState<number>(1);

  const kitInfo = PRODUCT_DATA.diyKitInfo;
  const components = PRODUCT_DATA.kitComponents;

  return (
    <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
            Transport & Assembly
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {kitInfo.title}
          </h2>
          <p className="mt-2 text-xl text-zinc-300 font-light">
            {kitInfo.subtitle}
          </p>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-2xl">
            {kitInfo.description} The tube is{' '}
            <strong className="text-white font-semibold">
              {kitInfo.tubeSpecs}
            </strong>
            . {kitInfo.assemblySpecs}
          </p>

          <div className="mt-6 flex items-baseline gap-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">
              {PRODUCT_DATA.pricing.diyKitRangeDisplay}
            </span>
            <span className="text-xs text-zinc-400">
              (FROM R{PRODUCT_DATA.pricing.diyKitStartingPrice.toLocaleString()})
            </span>
          </div>

          <div className="mt-6">
            <Link
              href="/#order"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
            >
              <span>Choose Your Foldaway</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Technical Exploded Interactive Explorer */}
        <div className="mt-16 pt-12 border-t border-zinc-800/80">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Kit Contents
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Seven Supplied Components
              </h3>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <Hammer className="w-4 h-4 text-amber-400" />
              <span>
                <strong>Tool required:</strong> Rubber mallet to connect the arms to the front and back bars
              </span>
            </div>
          </div>

          {/* Interactive Technical Canvas / Diagram and Part List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Diagram / Visual Representation */}
            <div className="lg:col-span-7 bg-zinc-900/90 rounded-3xl p-6 sm:p-10 border border-zinc-800 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, #71717A 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative aspect-[16/10] w-full flex flex-col justify-between z-10">
                {/* Shipping Tube Callout Banner */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-700 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-white">
                        Strong Cardboard Tube
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {kitInfo.tubeSpecs} • Convenient for road or air transport
                      </div>
                    </div>
                  </div>
                </div>

                {/* SVG Blueprint */}
                <div className="my-auto py-6">
                  <svg
                    viewBox="0 0 700 320"
                    className="w-full h-auto drop-shadow-md"
                    fill="none"
                    stroke="currentColor"
                  >
                    {/* Wall Line */}
                    <line
                      x1="40"
                      y1="40"
                      x2="40"
                      y2="280"
                      stroke="#52525B"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                    />
                    <text x="15" y="160" fill="#71717A" fontSize="10" transform="rotate(-90 15 160)" fontFamily="monospace">
                      MOUNTING WALL
                    </text>

                    {/* 1. Back Bar & Front Bar */}
                    <rect
                      x="70"
                      y="70"
                      width="540"
                      height="20"
                      rx="3"
                      fill={activePart === 1 ? '#10B981' : '#27272A'}
                      stroke={activePart === 1 ? '#34D399' : '#52525B'}
                      strokeWidth="2"
                    />
                    <rect
                      x="110"
                      y="210"
                      width="540"
                      height="20"
                      rx="3"
                      fill={activePart === 1 ? '#10B981' : '#27272A'}
                      stroke={activePart === 1 ? '#34D399' : '#52525B'}
                      strokeWidth="2"
                    />

                    {/* 2. Left & Right Side Arms */}
                    <line
                      x1="70"
                      y1="80"
                      x2="110"
                      y2="220"
                      stroke={activePart === 2 ? '#34D399' : '#A1A1AA'}
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <line
                      x1="610"
                      y1="80"
                      x2="650"
                      y2="220"
                      stroke={activePart === 2 ? '#34D399' : '#A1A1AA'}
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Stays */}
                    <line
                      x1="60"
                      y1="160"
                      x2="90"
                      y2="150"
                      stroke={activePart === 2 ? '#34D399' : '#71717A'}
                      strokeWidth="3"
                    />
                    <line
                      x1="600"
                      y1="160"
                      x2="630"
                      y2="150"
                      stroke={activePart === 2 ? '#34D399' : '#71717A'}
                      strokeWidth="3"
                    />

                    {/* 7. Washing line cord */}
                    {[100, 120, 140, 160, 180, 200].map((yVal, i) => (
                      <line
                        key={i}
                        x1={75 + i * 5}
                        y1={yVal}
                        x2={615 + i * 5}
                        y2={yVal}
                        stroke={activePart === 7 ? '#34D399' : '#52525B'}
                        strokeWidth="1.5"
                        strokeDasharray="6 3"
                      />
                    ))}

                    {/* 6. Wing nut line tensioner */}
                    <circle
                      cx="615"
                      cy="210"
                      r="9"
                      fill={activePart === 6 ? '#10B981' : '#E4E4E7'}
                      stroke="#18181B"
                      strokeWidth="2"
                    />

                    {/* 3, 4, 5. Wall fasteners */}
                    {[80, 260].map((yPos, i) => (
                      <g key={i}>
                        <circle
                          cx="60"
                          cy={yPos}
                          r="6"
                          fill={activePart === 3 ? '#34D399' : '#D4D4D8'}
                        />
                        <circle
                          cx="60"
                          cy={yPos}
                          r="10"
                          stroke={activePart === 4 ? '#34D399' : '#71717A'}
                          strokeWidth="2"
                          fill="none"
                        />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Active Part Inspector Banner */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center justify-center">
                      {activePart}
                    </span>
                    <div>
                      <div className="font-bold text-sm text-white">
                        {components[activePart - 1].name}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {components[activePart - 1].description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right List of 7 Exact Components */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Kit Inventory
              </div>

              {components.map((comp) => {
                const isSelected = activePart === comp.number;
                return (
                  <button
                    key={comp.number}
                    type="button"
                    onClick={() => setActivePart(comp.number)}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-zinc-900 border-emerald-500/80 ring-1 ring-emerald-500/50 text-white'
                        : 'bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-emerald-400 text-zinc-950'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {comp.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm text-white truncate">
                        {comp.name}
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {comp.description}
                      </p>
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
