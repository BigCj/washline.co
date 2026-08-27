import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { PRODUCT_DATA } from '@/data/productData';
import Link from 'next/link';
import { ShieldCheck, Ruler, Check, Package, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Product Information & Technical Specifications | Mr Washline',
  description:
    'Full engineering specifications, materials, warranty policy, and technical dimensions for Mr Washline foldaway washing lines.',
};

export default function ProductInformationPage() {
  const sizes = PRODUCT_DATA.sizes;
  const colors = PRODUCT_DATA.colors;

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
              Official technical reference guide covering aluminium alloys, epoxy coatings, stainless machine screws, size matrices, and warranty terms.
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
                  Manufactured from structural aluminium profiles. Unlike conventional mild steel or galvanised lines, aluminium does not rust, making it ideal for coastal environments.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-zinc-950 mb-2">Epoxy Powder Coating</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Electrostatically applied and heat-cured powder coating in White, Charcoal, or Bronze. Resistant to UV degradation, chipping, and weathering.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-zinc-950 mb-2">Stainless Steel Screws</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  All machine screws and pivot fasteners used in assembly are marine-grade stainless steel to ensure lifelong operation without seizing.
                </p>
              </div>
            </div>
          </div>

          {/* Size Dimension Table */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-950 mb-6">
              Size & Clearance Matrix
            </h2>
            <div className="border border-zinc-200 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-100 text-zinc-700 text-xs uppercase font-bold">
                  <tr>
                    <th className="p-4">Model Nominal Size</th>
                    <th className="p-4">Frame Depth</th>
                    <th className="p-4">Lines & Spacing</th>
                    <th className="p-4">Total Drying Space</th>
                    <th className="p-4">Minimum Wall Space</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {sizes.map((s) => (
                    <tr key={s.id} className="hover:bg-zinc-50">
                      <td className="p-4 font-bold text-zinc-950">{s.label}</td>
                      <td className="p-4 text-zinc-600">{s.width}</td>
                      <td className="p-4 text-zinc-600">{s.linesCount} lines ({s.lineSpacing})</td>
                      <td className="p-4 font-mono text-zinc-950">{s.totalHangingSpace}</td>
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
              <span>Official Warranty & Guarantee</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Product Warranty Policy
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Mr Washline offers a 100% satisfaction / money-back guarantee in the event that the customer is not satisfied with the product or service. All aluminium frames and powder-coated finishes are backed by our long-term structural integrity guarantee.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
