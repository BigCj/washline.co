import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductConfigurator from '@/components/ProductConfigurator';
import KitContentsExploded from '@/components/KitContentsExploded';
import InstallationGuide from '@/components/InstallationGuide';
import BenefitsGrid from '@/components/BenefitsGrid';
import { PRODUCT_DATA } from '@/data/productData';
import Link from 'next/link';
import { Package, Truck, Hammer, Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'The Foldaway DIY Assemble Kit | Mr Washline',
  description:
    'The Foldaway DIY Assemble Kit is delivered in kit form inside a strong cardboard tube (~10 cm diameter), making it convenient for transport by road or air across South Africa.',
};

export default function DiyKitPage() {
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
              <span className="text-white">DIY Assemble Kit</span>
            </div>

            <div className="max-w-3xl">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                Compact Shipping Tube (10 cm Diameter)
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight">
                {kitInfo.title}
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 font-light mt-3">
                {kitInfo.subtitle}
              </p>
              <p className="text-base text-zinc-400 mt-4 leading-relaxed">
                {kitInfo.description} {kitInfo.assemblySpecs}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold">
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Package className="w-4 h-4 text-emerald-400" />
                  <span>Compact 10cm Tube</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-amber-400" />
                  <span>Assembly: Rubber Mallet Required</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  <span>Road & Air Freight Safe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <KitContentsExploded />
        <ProductConfigurator />
        <BenefitsGrid />
        <InstallationGuide />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
