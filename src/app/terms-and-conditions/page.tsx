import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | The Washline Co.',
  description: 'Official terms and conditions of The Washline Co.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1">
        <section className="bg-zinc-950 text-white py-16 lg:py-20 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Terms and Conditions
            </h1>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-zinc-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">1. Agreement to Terms</h2>
            <p>
              Welcome to The Washline Co. By browsing this website, placing an order, or requesting a quotation, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">2. Satisfaction Guarantee & Returns</h2>
            <p>
              The Washline Co. offers a 100% satisfaction / money-back guarantee in the event that the customer is not satisfied with the product or service. Claims must be submitted within reasonable inspection periods from delivery.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">3. Product Specifications & Assembly</h2>
            <p>
              The Foldaway DIY Assemble Kit is delivered in kit form in a strong cardboard transport tube and requires basic assembly with a rubber mallet. The Standard Foldaway model is delivered fully assembled and strung.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">4. Pricing & Quotations</h2>
            <p>
              All prices stated are inclusive of VAT unless explicitly stated otherwise. Delivery charges or free delivery qualifications are confirmed upon quotation or checkout.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
