import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import KitContentsExploded from '@/components/KitContentsExploded';
import ProductConfigurator from '@/components/ProductConfigurator';
import Link from 'next/link';
import Image from 'next/image';
import { Package, Hammer, Truck, Check } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export const metadata = {
  title: 'The Foldaway DIY Assemble Kit | The Washline Co.',
  description:
    'The Foldaway DIY Assemble Kit shipped in a strong cardboard tube (approx. 10 cm in diameter) for easy transport across South Africa. Starting from R2,550 incl. VAT.',
};

export default function TheFoldawayDiyKitPage() {
  const kitInfo = PRODUCT_DATA.diyKitInfo;

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
              <span className="text-white">The Foldaway DIY Kit</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
                  <Package className="w-3.5 h-3.5" />
                  <span>Shipped in Cardboard Tube</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                  {kitInfo.title}
                </h1>
                <p className="text-2xl font-light text-zinc-200 mt-2">
                  {kitInfo.subtitle}
                </p>

                <p className="text-base text-zinc-400 leading-relaxed mt-4 max-w-xl">
                  {kitInfo.description} Shipped in a tube {kitInfo.tubeSpecs}. {kitInfo.assemblySpecs}
                </p>

                <div className="mt-8 flex items-baseline gap-4">
                  <span className="text-3xl font-extrabold text-white">
                    {PRODUCT_DATA.pricing.rangeDisplay}
                  </span>
                  <span className="text-xs text-zinc-400">
                    (FROM R{PRODUCT_DATA.pricing.startingPrice.toLocaleString('en-ZA')})
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-xs text-zinc-300">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    <span>Nationwide transport</span>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <Hammer className="w-4 h-4 text-amber-400" />
                    <span>Requires rubber mallet</span>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>7 supplied parts included</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
                  <Image
                    src="/images/products/white-open-pair.webp"
                    alt="The Foldaway DIY assemble kit washing line"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <KitContentsExploded />
        <ProductConfigurator />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
