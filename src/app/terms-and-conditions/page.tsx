import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Mr Washline',
  description: 'Official terms and conditions of Mr Washline.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1 py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-8">
          Terms and Conditions
        </h1>

        <div className="prose prose-zinc max-w-none text-sm text-zinc-600 space-y-6 leading-relaxed">
          <p>
            Welcome to Mr Washline. By browsing this website, placing an order, or requesting a quotation, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-lg font-bold text-zinc-950">1. Product Quality & Satisfaction Guarantee</h2>
          <p>
            Mr Washline offers a 100% satisfaction / money-back guarantee in the event that the customer is not satisfied with the product or service. Claims must be submitted within reasonable inspection periods from delivery.
          </p>

          <h2 className="text-lg font-bold text-zinc-950">2. Pricing & Orders</h2>
          <p>
            All displayed product prices are quoted in South African Rand (ZAR) and include 15% South African Value Added Tax (VAT). Delivery or installation charges, where applicable, are quoted separately based on regional location.
          </p>

          <h2 className="text-lg font-bold text-zinc-950">3. Delivery & Transit</h2>
          <p>
            Delivery available across South Africa. Weekly free delivery schedules apply to designated Cape Town City Centre and surround suburbs. Nationwide orders are delivered via courier in heavy-duty cardboard tubes.
          </p>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
