import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';
import Image from 'next/image';
import { Maximize2, ShieldCheck, Check, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'The Foldaway Table | The Washline Co.',
  description:
    'Wall-mounted space-saving fold-down table by The Washline Co. Ideal for balconies, laundries, workshops, and compact dining areas.',
};

export default function TheFoldawayTablePage() {
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
              <span className="text-white">The Foldaway Table</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Space-Saving Fold-Down Design</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                  The Foldaway Table
                </h1>
                <p className="text-lg text-zinc-300 font-light mt-4 leading-relaxed max-w-xl">
                  A wall-mounted foldaway table designed to provide functional work and dining surfaces without sacrificing floor space.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-xs text-zinc-300">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-emerald-400" />
                    <span>Folds flat when not in use</span>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Sturdy wall mounting</span>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Custom sizes on request</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
                  <Image
                    src="/images/products/white-poolside-folded.webp"
                    alt="The Foldaway Table"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-950 mb-4">
              Enquire About The Foldaway Table
            </h2>
            <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed mb-6">
              Contact The Washline Co. to discuss dimensions, frame colours, and custom requirements for your home or patio.
            </p>
          </div>

          <ContactSection />
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
