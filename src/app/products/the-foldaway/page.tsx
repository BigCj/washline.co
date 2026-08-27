import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductConfigurator from '@/components/ProductConfigurator';
import BenefitsGrid from '@/components/BenefitsGrid';
import InstallationGuide from '@/components/InstallationGuide';
import { PRODUCT_DATA } from '@/data/productData';
import Link from 'next/link';
import { Check, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'The Foldaway Washline (Fully Assembled) | Mr Washline',
  description:
    'The standard Foldaway washing line is delivered fully assembled and pre-strung, ready for immediate wall mounting. Rust-resistant aluminium with epoxy powder-coated finish.',
};

export default function AssembledProductPage() {
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
              <span className="text-white">The Foldaway Washline</span>
            </div>

            <div className="max-w-3xl">
              <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Standard Factory Assembled Model
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight">
                The Foldaway Washline
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 font-light mt-4 leading-relaxed">
                Delivered completely pre-assembled and strung. Mount directly to your wall using the supplied coach screws and wall plugs.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold">
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Pre-Strung & Ready to Mount</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Rust-Resistant Aluminium</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Stainless Steel Machine Screws</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductConfigurator />
        <BenefitsGrid />
        <InstallationGuide />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
