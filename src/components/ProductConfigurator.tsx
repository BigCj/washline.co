'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { 
  PRODUCT_DATA, 
  ProductSize, 
  FrameColor 
} from '@/data/productData';
import { 
  Check, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  CreditCard,
  Layers,
  CheckCircle2,
  Clock,
  Info
} from 'lucide-react';

export default function ProductConfigurator() {
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState<FrameColor>(
    PRODUCT_DATA.colors[0]
  );

  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    PRODUCT_DATA.sizes.find((s) => s.isPopular) || PRODUCT_DATA.sizes[3]
  );

  const [isDiyKit, setIsDiyKit] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    addItem(selectedSize, selectedColor, isDiyKit, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <section id="order" className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Order Or Request A Quotation
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Choose Your Foldaway
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Select your size, frame colour, and delivery format.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual & Verified Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/10] bg-white rounded-3xl overflow-hidden shadow-md border border-zinc-200/80">
              <Image
                src={selectedColor.image}
                alt={`The Foldaway washing line in ${selectedColor.name}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 text-white text-xs font-bold backdrop-blur-md">
                  {selectedSize.nominalLength} × {selectedSize.width}
                </span>

                {selectedSize.isPopular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-zinc-950 text-xs font-bold uppercase tracking-wide">
                    ★ Most Popular Size
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 text-zinc-900 text-xs font-semibold backdrop-blur-md shadow-sm border border-zinc-200">
                  <span
                    className="w-3 h-3 rounded-full border border-zinc-300"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <span>{selectedColor.name} Frame</span>
                </span>
              </div>
            </div>

            {/* Product Format Distinction Card */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-2">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-100 text-zinc-900 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950">
                    {isDiyKit
                      ? 'The Foldaway DIY Assemble Kit'
                      : 'The Standard Foldaway'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                    {isDiyKit
                      ? 'Delivered in kit form in a strong cardboard tube (approx. 10 cm in diameter) for easier transportation. Requires basic assembly using a rubber mallet.'
                      : 'Delivered completely assembled and strung ready for wall mounting.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Sheet & Wall Compatibility Note */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-200">
                <div className="font-bold text-zinc-900">Wall Space Required:</div>
                <div className="text-zinc-600 mt-1">
                  {selectedSize.minWallSpaceRequired}
                </div>
              </div>

              {selectedSize.sheetCompatibility && (
                <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-200">
                  <div className="font-bold text-zinc-900">Bedding Accommodation:</div>
                  <div className="text-zinc-600 mt-1">
                    {selectedSize.sheetCompatibility}
                  </div>
                </div>
              )}
            </div>

            {/* Sizing Recommendation Note */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>Tip on larger spaces:</strong> The longest model manufactured is 2.6 m. The Washline Co. recommends using a second or third washing line rather than going larger where additional hanging space is required.
            </div>
          </div>

          {/* Right Column: Controls */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm space-y-8">
            {/* Price Heading */}
            <div className="pb-6 border-b border-zinc-100">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Price Information
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
                    {isDiyKit ? PRODUCT_DATA.pricing.diyKitPriceDisplay : 'Quotation on Request'}
                  </div>
                  {isDiyKit && (
                    <div className="text-xs text-zinc-500 mt-0.5">
                      Display: {PRODUCT_DATA.pricing.diyKitRangeDisplay}
                    </div>
                  )}
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Direct Supplier
                </span>
              </div>

              <div className="text-xs text-zinc-500 mt-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Lead time: approx. 1–3 working days</span>
              </div>
            </div>

            {/* 1. Format Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-3">
                1. Delivery & Assembly Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsDiyKit(true)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    isDiyKit
                      ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm'
                      : 'border-zinc-200 bg-zinc-50 text-zinc-800 hover:border-zinc-300'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>DIY Assemble Kit</span>
                    {isDiyKit && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`text-[11px] mt-1 ${isDiyKit ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    10 cm Cardboard Tube
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIsDiyKit(false)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    !isDiyKit
                      ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm'
                      : 'border-zinc-200 bg-zinc-50 text-zinc-800 hover:border-zinc-300'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>Standard Assembled</span>
                    {!isDiyKit && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`text-[11px] mt-1 ${!isDiyKit ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    Pre-assembled & strung
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  2. Select Size
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRODUCT_DATA.sizes.map((s) => {
                  const isSelected = selectedSize.id === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-zinc-900 bg-zinc-50 text-zinc-950 font-bold ring-1 ring-zinc-900'
                          : 'border-zinc-200 hover:border-zinc-300 text-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">{s.label}</span>
                      </div>

                      {s.isPopular && (
                        <span className="mt-1 inline-block text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                          Most Popular
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Colour Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-3">
                3. Frame Colour: <span className="font-semibold text-zinc-950">{selectedColor.name}</span>
              </label>

              <div className="grid grid-cols-3 gap-3">
                {PRODUCT_DATA.colors.map((c) => {
                  const isSelected = selectedColor.id === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        isSelected
                          ? 'border-zinc-900 bg-zinc-50 ring-1 ring-zinc-900 font-bold'
                          : 'border-zinc-200 hover:border-zinc-300'
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center"
                        style={{ backgroundColor: c.hex }}
                      >
                        {isSelected && (
                          <Check
                            className={`w-3.5 h-3.5 ${
                              c.id === 'white' ? 'text-zinc-900' : 'text-white'
                            }`}
                          />
                        )}
                      </span>
                      <span className="text-xs text-zinc-900">{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Quantity & Action Buttons */}
            <div className="space-y-4 pt-4 border-t border-zinc-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-zinc-200 rounded-xl bg-zinc-50 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:bg-white hover:text-zinc-950 font-bold text-xs"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-zinc-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:bg-white hover:text-zinc-950 font-bold text-xs"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Basket / Quote</span>
                </button>
              </div>

              {addedToast && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded-xl text-center">
                  Configuration added to basket.
                </div>
              )}
            </div>

            {/* Trust & Guarantee Notes */}
            <div className="pt-6 border-t border-zinc-100 space-y-3 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Satisfaction / Money-Back Guarantee</span>
              </div>

              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-zinc-400" />
                <span>Payment: Mastercard, Visa, EFT, Cash</span>
              </div>

              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-zinc-400" />
                <span>Delivery available across South Africa (confirmed on order / quotation)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
