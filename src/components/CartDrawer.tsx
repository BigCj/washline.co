'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Truck,
  CheckCircle2
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function CartDrawer() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    totalPrice, 
    quoteWhatsappLink,
    clearCart
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-zinc-900 text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-zinc-950">Your Basket</h3>
                <p className="text-xs text-zinc-500">
                  {items.length} {items.length === 1 ? 'configuration' : 'configurations'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-2 rounded-xl text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-zinc-900 text-base">Your basket is empty</h4>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs mx-auto">
                  Configure your Foldaway size and frame colour to begin your order.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800"
                >
                  <span>Browse Foldaway</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex gap-4 items-start"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white border border-zinc-200 shrink-0">
                    <Image
                      src={item.color.image}
                      alt={item.size.label}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-sm text-zinc-950 truncate">
                        The Foldaway {item.size.nominalLength}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-400 hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs text-zinc-500 mt-0.5">
                      {item.color.name} Frame •{' '}
                      {item.isDiyKit ? 'DIY Tube Kit' : 'Fully Assembled'}
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-zinc-300 rounded-lg bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-zinc-600 hover:text-zinc-950 font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-zinc-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-zinc-600 hover:text-zinc-950 font-bold text-xs"
                        >
                          +
                        </button>
                      </div>

                      <div className="font-extrabold text-sm text-zinc-950">
                        R{(item.unitPrice * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout CTAs */}
          {items.length > 0 && (
            <div className="p-6 bg-zinc-50 border-t border-zinc-200 space-y-4">
              <div className="space-y-1.5 text-xs text-zinc-600">
                <div className="flex justify-between">
                  <span>Subtotal (incl. 15% VAT)</span>
                  <span className="font-bold text-zinc-950">
                    R{totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Delivery fee</span>
                  <span>Calculated on dispatch zone</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200 flex justify-between items-baseline">
                <span className="font-bold text-sm text-zinc-950">Total Est.</span>
                <span className="text-2xl font-extrabold text-zinc-950">
                  R{totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Direct WhatsApp Order Link */}
              <a
                href={quoteWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order via Direct WhatsApp</span>
              </a>

              {/* Or standard inquiry checkout */}
              <Link
                href="/contact"
                onClick={closeCart}
                className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Request Formal Invoice / Quotation</span>
              </Link>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
