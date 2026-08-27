import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';
import { Sparkles, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export const metadata = {
  title: 'The Foldaway Table | Mr Washline',
  description:
    'Wall-mounted space-saving fold-down table by Mr Washline. Ideal for balconies, laundries, workshops, and compact dining areas.',
};

export default function FoldawayTablePage() {
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

            <div className="max-w-3xl">
              <span className="px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-xs font-bold uppercase tracking-wider">
                Space-Saving Furniture Solutions
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight">
                The Foldaway Table
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 font-light mt-4 leading-relaxed">
                A robust, wall-mounted fold-down table surface that folds flat against the wall when not in use. Engineered with the same South African quality principles as our legendary washing lines.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold">
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Heavy-Duty Wall Mounting</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Smooth Locking Stay Brackets</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Ideal for Balconies & Laundries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview & Enquiry */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-zinc-950">
              Custom Sizes & Specifications Available
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
              The Foldaway Table is manufactured to order to suit your specific room or balcony dimensions. Contact our Cape Town or Johannesburg teams for custom sizes, finish options, and direct factory pricing.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href={PRODUCT_DATA.contact.headOffice.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
