'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Ruler, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function InstallationGuide() {
  const [wallWidthInput, setWallWidthInput] = useState<number>(2.5);
  const installInfo = PRODUCT_DATA.installation;

  const recommendedSize = [...PRODUCT_DATA.sizes]
    .reverse()
    .find((s) => parseFloat(s.nominalLength) + 0.1 <= wallWidthInput) || PRODUCT_DATA.sizes[0];

  return (
    <section id="installation" className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Mounting & Installation
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            {installInfo.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Guidelines for mounting your Foldaway washing line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Essential Installation Facts */}
          <div className="lg:col-span-7 space-y-6">
            {/* Height & Flat Wall Guidance Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 text-white">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-950">
                    Mounting Height & Wall Preparation
                  </h3>
                </div>
              </div>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {installInfo.mountingHeight} {installInfo.wallGuidance}
              </p>

              {/* Clearance rule callout */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-zinc-950">
                    Wall Clearance:
                  </strong>{' '}
                  {installInfo.clearanceRule}
                </div>
              </div>
            </div>

            {/* Obstacles, Spacer Blocks & Vibracrete Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500 text-zinc-950">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-950">
                    Obstructions, Spacer Blocks & Vibracrete Walls
                  </h3>
                </div>
              </div>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {installInfo.obstacleGuidance}
              </p>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-zinc-800 leading-relaxed">
                <span className="font-bold text-amber-900">
                  Spacer Blocks:
                </span>{' '}
                {installInfo.spacerBlockGuidance}
              </div>
            </div>

            {/* Delivery Format Distinction */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base text-white">
                  Standard vs DIY Kit Distinction
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <div className="font-bold text-emerald-400 uppercase tracking-wide text-[11px] mb-1">
                    Standard Foldaway
                  </div>
                  <p className="text-zinc-300">
                    Delivered fully assembled and strung.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <div className="font-bold text-amber-400 uppercase tracking-wide text-[11px] mb-1">
                    DIY Assemble Kit
                  </div>
                  <p className="text-zinc-300">
                    Delivered in kit form in a strong cardboard tube. Requires basic assembly using a rubber mallet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Wall Space Calculator */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
              <div className="p-2.5 rounded-xl bg-zinc-900 text-white">
                <Ruler className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-zinc-950">
                  Wall Space Checker
                </h3>
                <p className="text-xs text-zinc-500">
                  Check clearance for your available wall width
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                Available Wall Width: <strong className="text-zinc-950 text-sm">{wallWidthInput.toFixed(2)} metres</strong>
              </label>
              <input
                type="range"
                min="1.0"
                max="4.0"
                step="0.1"
                value={wallWidthInput}
                onChange={(e) => setWallWidthInput(parseFloat(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
                <span>1.0m</span>
                <span>2.0m</span>
                <span>3.0m</span>
                <span>4.0m</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 text-white space-y-3">
              <div className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider">
                Recommended Model
              </div>

              <div className="text-2xl font-extrabold text-white">
                The Foldaway {recommendedSize.nominalLength}
              </div>

              <div className="text-xs text-zinc-300 space-y-1 font-mono">
                <div>• Nominal Model Size: {recommendedSize.label}</div>
                <div>• Required Wall Space: {recommendedSize.minWallSpaceRequired}</div>
                {recommendedSize.sheetCompatibility && (
                  <div>• Bedding: {recommendedSize.sheetCompatibility}</div>
                )}
              </div>
            </div>

            <Link
              href="/#order"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              <span>Select {recommendedSize.nominalLength} Model</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
