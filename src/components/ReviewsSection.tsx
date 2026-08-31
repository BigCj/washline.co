'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Star
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function ReviewsSection() {
  const steps = PRODUCT_DATA.orderSteps;
  const brand = PRODUCT_DATA.brand;

  return (
    <section className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Order Process Subsection */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
              Ordering Process
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
              Ordering is simple.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600">
              Four straightforward steps to order your Foldaway washing line.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm relative overflow-hidden"
              >
                <div className="text-3xl font-extrabold font-mono text-zinc-300 mb-4">
                  {s.stepNumber}
                </div>
                <h3 className="text-lg font-bold text-zinc-950">{s.title}</h3>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 100% Satisfaction Guarantee Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-xl mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Guarantee</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              100% Satisfaction / Money-Back Guarantee
            </h3>

            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              The Washline Co. offers a 100% satisfaction / money-back guarantee in the event that the customer is not satisfied with the product or service.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <Link
                href="/products/information#warranty"
                className="underline hover:text-white transition-colors"
              >
                Product Warranty
              </Link>
              <span>•</span>
              <Link
                href="/terms-and-conditions"
                className="underline hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Social Proof & Rating Overview */}
        <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
              Customer Feedback
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
              {brand.rating.summary}
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Common customer feedback highlights fast delivery, long-term durability, good installation service, and responsive support.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-zinc-900">
              {brand.rating.score} Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
