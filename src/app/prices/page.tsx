import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import DeliveryPricing from '@/components/DeliveryPricing';
import Link from 'next/link';

export const metadata = {
  title: 'Prices & Delivery Rates | Mr Washline',
  description:
    'Official pricing for Mr Washline foldaway washing lines, DIY assemble kits, and delivery schedules for Cape Town, Johannesburg, and Nationwide South Africa.',
};

export default function PricesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1">
        <section className="bg-zinc-950 text-white py-16 lg:py-24 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs text-zinc-400 font-mono mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Prices</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Prices & Delivery Schedules
            </h1>
            <p className="text-lg text-zinc-300 font-light mt-4 max-w-3xl leading-relaxed">
              Direct factory pricing including 15% VAT for both DIY assemble kits and standard fully assembled foldaway lines.
            </p>
          </div>
        </section>

        <DeliveryPricing />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
