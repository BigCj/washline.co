'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Truck, 
  MapPin, 
  Check, 
  Clock, 
  ShieldCheck, 
  Info, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function DeliveryPricing() {
  const [activeTab, setActiveTab] = useState<'capetown' | 'jhb' | 'nationwide'>('capetown');
  const delivery = PRODUCT_DATA.delivery;
  const sizes = PRODUCT_DATA.sizes;

  return (
    <section id="prices" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Transparent Pricing & Regional Delivery
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Prices & Delivery Areas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            {delivery.centralPolicy}
          </p>
        </div>

        {/* Master Pricing Matrix Table */}
        <div className="bg-zinc-50 rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm mb-16 overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="flex items-center justify-between pb-6 border-b border-zinc-200 mb-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-950">
                  Foldaway Price Schedule (incl. VAT)
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Manufactured from rust-resistant aluminium with epoxy powder-coated finish
                </p>
              </div>

              <div className="text-xs font-bold text-zinc-600 bg-white px-3 py-1.5 rounded-lg border border-zinc-200">
                Lead Time: 1–3 Working Days
              </div>
            </div>

            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-xs uppercase font-bold text-zinc-500">
                  <th className="pb-3">Size Model</th>
                  <th className="pb-3">Drying Line Space</th>
                  <th className="pb-3">Bedding Capacity</th>
                  <th className="pb-3">DIY Tube Kit</th>
                  <th className="pb-3">Standard Assembled</th>
                  <th className="pb-3 text-right">Order</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70">
                {sizes.map((s) => (
                  <tr key={s.id} className="hover:bg-white/60 transition-colors">
                    <td className="py-4 font-bold text-zinc-950 flex items-center gap-2">
                      <span>{s.label}</span>
                      {s.isPopular && (
                        <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-zinc-600 font-mono text-xs">
                      {s.totalHangingSpace}
                    </td>
                    <td className="py-4 text-zinc-600 text-xs max-w-[200px]">
                      {s.sheetCompatibility}
                    </td>
                    <td className="py-4 font-bold text-zinc-950">
                      R{s.diyPriceInclVat.toLocaleString()}
                    </td>
                    <td className="py-4 font-bold text-zinc-950">
                      R{s.assembledPriceInclVat.toLocaleString()}
                    </td>
                    <td className="py-4 text-right">
                      <Link
                        href="/#order"
                        className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 hover:text-zinc-600 underline"
                      >
                        <span>Select</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional Delivery Tabs */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-zinc-100 rounded-2xl max-w-xl mx-auto border border-zinc-200">
            <button
              type="button"
              onClick={() => setActiveTab('capetown')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'capetown'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Cape Town (Weekly Free Delivery)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('jhb')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'jhb'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Johannesburg Installations
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('nationwide')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'nationwide'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Nationwide Delivery
            </button>
          </div>

          {/* Active Tab Content */}
          {activeTab === 'capetown' && (
            <div id="cape-town" className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 animate-in fade-in duration-200">
              <div className="max-w-3xl mb-6">
                <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <Check className="w-4 h-4" /> Weekly Free Delivery Service
                </div>
                <h4 className="text-xl font-bold text-zinc-950">
                  Cape Town City Centre & Surrounding Areas
                </h4>
                <p className="text-sm text-zinc-600 mt-1">
                  {delivery.capeTownFreeDeliveryDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {delivery.capeTownZones.map((zone, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-zinc-200/80 flex items-start gap-3"
                  >
                    <div className="p-1.5 rounded-md bg-zinc-100 text-zinc-900 shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-zinc-800">
                      {zone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'jhb' && (
            <div id="johannesburg" className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 animate-in fade-in duration-200">
              <div className="max-w-2xl">
                <div className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">
                  Gauteng Supply & Installation
                </div>
                <h4 className="text-xl font-bold text-zinc-950">
                  {PRODUCT_DATA.contact.johannesburg.label}
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                  Dedicated local installation and supply services across Johannesburg and surrounding areas. Contact our JHB team directly for quotation and booking.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                  <a
                    href={`tel:${PRODUCT_DATA.contact.johannesburg.telIntl}`}
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 text-white inline-flex items-center gap-2 hover:bg-zinc-800"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Tel: {PRODUCT_DATA.contact.johannesburg.telIntl}</span>
                  </a>

                  <a
                    href={`tel:${PRODUCT_DATA.contact.johannesburg.cellIntl}`}
                    className="px-4 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-900 inline-flex items-center gap-2 hover:bg-zinc-50"
                  >
                    <span>Cell: {PRODUCT_DATA.contact.johannesburg.cellIntl}</span>
                  </a>

                  <a
                    href={`mailto:${PRODUCT_DATA.contact.johannesburg.email}`}
                    className="px-4 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-900 inline-flex items-center gap-2 hover:bg-zinc-50"
                  >
                    <span>Email: {PRODUCT_DATA.contact.johannesburg.email}</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'nationwide' && (
            <div id="nationwide" className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 animate-in fade-in duration-200">
              <div className="max-w-2xl">
                <div className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">
                  All Other Areas in South Africa
                </div>
                <h4 className="text-xl font-bold text-zinc-950">
                  Nationwide Courier Dispatch in Cardboard Tube
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                  Our DIY Assemble Kit is securely packed inside a compact ~10 cm diameter cardboard tube for fast, safe road or air freight across South Africa (Durban, Port Elizabeth, Bloemfontein, Pretoria, Garden Route, etc.).
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-600 flex items-center gap-3">
                  <Truck className="w-4 h-4 text-zinc-900" />
                  <span>
                    Dispatch lead time: 1–3 working days. Courier fee confirmed at quotation or checkout.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
