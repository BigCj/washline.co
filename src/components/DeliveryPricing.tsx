'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Truck, 
  MapPin, 
  Check, 
  Clock, 
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Sparkles
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function DeliveryPricing() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'services' | 'delivery'>('schedule');
  const delivery = PRODUCT_DATA.delivery;
  const sizes = PRODUCT_DATA.sizes;
  const services = PRODUCT_DATA.services;
  const contact = PRODUCT_DATA.contact;

  return (
    <section id="prices" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Official Pricing Schedule
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Installed Options & Rates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Supply and standard installation — VAT included.
          </p>
        </div>

        {/* Master Pricing Schedule Table */}
        <div className="bg-zinc-50 rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm mb-12 overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 mb-6 gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                  Pricing Schedule
                </span>
                <h3 className="text-2xl font-bold text-zinc-950 mt-0.5">
                  The Foldaway Washline
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Installed options with supply and standard installation included.
                </p>
              </div>

              <div className="text-xs font-bold text-zinc-700 bg-white px-3.5 py-2 rounded-xl border border-zinc-200 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Lead Time: approx. 1–3 working days</span>
              </div>
            </div>

            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-xs uppercase font-bold text-zinc-500">
                  <th className="pb-3">Unit Size</th>
                  <th className="pb-3">Line Space</th>
                  <th className="pb-3">Wall Space Required</th>
                  <th className="pb-3 font-bold text-zinc-900">Proposal Rate (VAT Included)</th>
                  <th className="pb-3 text-right">Order</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70">
                {sizes.map((s) => (
                  <tr key={s.id} className="hover:bg-white/60 transition-colors">
                    <td className="py-4 font-bold text-zinc-950 flex items-center gap-2">
                      <span>{s.label}</span>
                      {s.isPopular && (
                        <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-zinc-700 text-xs font-medium">
                      {s.lineSpace}
                    </td>
                    <td className="py-4 text-zinc-500 text-xs">
                      {s.minWallSpaceRequired}
                    </td>
                    <td className="py-4 font-extrabold text-zinc-950 text-base font-mono">
                      R{s.price.toLocaleString('en-ZA')}
                    </td>
                    <td className="py-4 text-right">
                      <Link
                        href="/#order"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                      >
                        <span>Select</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Finish Options Grid */}
            <div className="mt-8 pt-6 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider text-zinc-500">
                    Finish Option
                  </div>
                  <div className="font-bold text-sm text-zinc-950 mt-0.5">
                    Standard epoxy-coated White
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-lg border border-emerald-200">
                  Included
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider text-zinc-500">
                    Finish Option
                  </div>
                  <div className="font-bold text-sm text-zinc-950 mt-0.5">
                    Bronze or Charcoal finish
                  </div>
                </div>
                <span className="px-3 py-1 bg-zinc-100 text-zinc-900 font-bold text-xs rounded-lg border border-zinc-200">
                  +R240 per unit
                </span>
              </div>
            </div>

            {/* Pricing Note */}
            <div className="mt-6 p-4 rounded-2xl bg-zinc-900 text-white text-xs leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-white uppercase tracking-wide text-[11px] block mb-0.5">
                  Pricing Note
                </strong>
                {PRODUCT_DATA.pricing.note}
              </div>
            </div>
          </div>
        </div>

        {/* On-Site Service Options & Regional Delivery */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-zinc-100 rounded-2xl max-w-xl mx-auto border border-zinc-200">
            <button
              type="button"
              onClick={() => setActiveTab('services')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'services'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              On-Site Services
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('schedule')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'schedule'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Orders & Enquiries
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('delivery')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'delivery'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Delivery Coverage
            </button>
          </div>

          {/* Tab 1: On-Site Services */}
          {activeTab === 'services' && (
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Maintenance & Relining
                </span>
                <h4 className="text-xl font-bold text-zinc-950 mt-1">
                  On-Site Service Options
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Professional maintenance and relining services performed directly on-site.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2 rounded-xl bg-zinc-100 text-zinc-900 w-fit mb-3">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-sm text-zinc-950">{srv.name}</h5>
                      <p className="text-xs text-zinc-500 mt-1">{srv.description}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-zinc-500">Rate:</span>
                      <span className="text-base font-extrabold text-zinc-950 font-mono">
                        {srv.priceDisplay} incl. VAT
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Orders & Enquiries */}
          {activeTab === 'schedule' && (
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
              <div className="max-w-2xl">
                <h4 className="text-xl font-bold text-zinc-950">
                  {contact.companyName}
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                  For individual orders, multi-unit residential installations, or estate rollout programmes, contact our team directly.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                  <a
                    href={`tel:${contact.telIntl}`}
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 text-white inline-flex items-center gap-2 hover:bg-zinc-800"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Tel: {contact.tel}</span>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="px-4 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-900 inline-flex items-center gap-2 hover:bg-zinc-50"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email: {contact.email}</span>
                  </a>

                  <Link
                    href="/#order"
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white inline-flex items-center gap-2 hover:bg-emerald-700"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Configure & Order Online</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Delivery Coverage */}
          {activeTab === 'delivery' && (
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
              <div className="max-w-2xl">
                <h4 className="text-xl font-bold text-zinc-950">
                  Regional & Nationwide Delivery
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                  {delivery.centralPolicy}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                  {delivery.capeTownZones.map((zone, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-zinc-200/80 flex items-start gap-3"
                    >
                      <div className="p-1 rounded-md bg-zinc-100 text-zinc-900 shrink-0 mt-0.5">
                        <MapPin className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-medium text-zinc-800">
                        {zone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
