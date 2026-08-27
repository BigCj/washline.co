'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Quote
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function ReviewsSection() {
  const steps = PRODUCT_DATA.orderSteps;
  const reviews = PRODUCT_DATA.reviews;
  const brand = PRODUCT_DATA.brand;

  return (
    <section className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Order Process Subsection */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
              Straightforward Purchasing
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
              Ordering is simple.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600">
              From size measurement to doorstep delivery in four easy steps.
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

        {/* 100% Satisfaction Guarantee Seal Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-xl mb-24 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Guarantee</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              100% Satisfaction / Money-Back Guarantee
            </h3>

            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              Mr Washline offers a 100% satisfaction / money-back guarantee in the event that you are not satisfied with the product or service.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <Link
                href="/products/information#warranty"
                className="underline hover:text-white transition-colors"
              >
                View Product Warranty Policy
              </Link>
              <span>•</span>
              <Link
                href="/contact"
                className="underline hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Social Proof & Customer Reviews */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
                Authentic Customer Feedback
              </span>
              <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Trusted in South African Homes Since 2003
              </h3>
            </div>

            <div className="flex items-center gap-3 p-3 px-5 rounded-2xl bg-white border border-zinc-200 shadow-sm w-fit">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs">
                <strong className="font-bold text-zinc-950">
                  {brand.rating.score} / 5.0
                </strong>{' '}
                <span className="text-zinc-500">
                  ({brand.rating.reviewCount} Reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {rev.date}
                  </span>
                </div>

                <h4 className="font-bold text-base text-zinc-950">
                  &ldquo;{rev.title}&rdquo;
                </h4>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {rev.content}
                </p>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span>{rev.author}</span>
                  <span>{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
