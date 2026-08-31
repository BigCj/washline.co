import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductConfigurator from '@/components/ProductConfigurator';
import InstallationGuide from '@/components/InstallationGuide';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ShieldCheck, Truck, Sparkles, Layers } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export const metadata = {
  title: 'The Foldaway Washline (Fully Assembled) | The Washline Co.',
  description:
    'The Standard Foldaway delivered completely assembled and strung. Quality aluminium, epoxy powder-coated frame for patios, courtyards and homes.',
};

export default function TheFoldawayProductPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1">
        <section className="bg-zinc-950 text-white py-16 lg:py-24 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs text-zinc-400 font-mono mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Products</span>
              <span className="mx-2">/</span>
              <span className="text-white">The Foldaway (Assembled)</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Delivered Fully Assembled & Strung</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                  The Foldaway Washline
                </h1>
                <p className="text-lg text-zinc-300 font-light mt-4 leading-relaxed max-w-xl">
                  Delivered completely assembled and strung. Lightweight aluminium with epoxy powder coating and stainless steel machine screws.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-xs text-zinc-300">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>No assembly required</span>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Rust-resistant aluminium</span>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    <span>Mounting fasteners supplied</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
                  <Image
                    src="/images/products/01-open-charcoal.webp"
                    alt="The Foldaway fully assembled washing line"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductConfigurator />
        <InstallationGuide />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
