import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { PRODUCT_DATA } from '@/data/productData';
import Link from 'next/link';
import { ShieldCheck, Ruler, Check, Package, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Product Information & Specifications | The Washline Co.',
  description:
    'Factual information, specifications, materials, warranty policy, and dimensions for The Washline Co. foldaway washing lines.',
};

export default function ProductInformationPage() {
  const sizes = PRODUCT_DATA.sizes;

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
              <span className="text-white">Product Information</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Product Information & Specifications
            </h1>
            <p className="text-lg text-zinc-300 font-light mt-4 max-w-3xl leading-relaxed">
              Information covering materials, epoxy powder-coated finishes, stainless steel machine screws, and dimensions.
            </p>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Material & Construction Specifications */}
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-950 mb-6">
              Materials & Construction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-700">
              <div className="p-6 bg-white rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-zinc-950 mb-2">Aluminium Frame</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  The Foldaway frame is made from aluminium. Unlike conventional steel or galvanised-steel washing lines, aluminium does not rust.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-zinc-950 mb-2">Epoxy Powder Coating</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Frames are professionally epoxy powder-coated to provide a weatherproof finish in White, Charcoal, or Bronze.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-zinc-950 mb-2">Stainless Steel Screws</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Machine screws used in the assembly of the Foldaway are stainless steel.
                </p>
              </div>
            </div>
          </div>

          {/* Size Dimension Table */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-950 mb-6">
              Size Specifications
            </h2>
            <div className="border border-zinc-200 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-100 text-zinc-700 text-xs uppercase font-bold">
                  <tr>
                    <th className="p-4">Model Size</th>
                    <th className="p-4">Depth</th>
                    <th className="p-4">Bedding Compatibility</th>
                    <th className="p-4">Minimum Wall Space Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {sizes.map((s) => (
                    <tr key={s.id} className="hover:bg-zinc-50">
                      <td className="p-4 font-bold text-zinc-950">{s.label}</td>
                      <td className="p-4 text-zinc-600">{s.width}</td>
                      <td className="p-4 text-zinc-600">{s.sheetCompatibility || 'Standard laundry'}</td>
                      <td className="p-4 text-zinc-600">{s.minWallSpaceRequired}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Warranty Section */}
          <div id="warranty" className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Guarantee</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Satisfaction Guarantee
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              The Washline Co. offers a 100% satisfaction / money-back guarantee in the event that the customer is not satisfied with the product or service.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
