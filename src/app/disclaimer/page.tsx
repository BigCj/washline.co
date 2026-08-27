import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export const metadata = {
  title: 'Website Disclaimer | Mr Washline',
  description: 'Website disclaimer and legal notice for Mr Washline.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1 py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-8">
          Website Disclaimer
        </h1>

        <div className="prose prose-zinc max-w-none text-sm text-zinc-600 space-y-6 leading-relaxed">
          <p>
            The information contained on this website is for general information and product ordering purposes only. While Mr Washline endeavours to keep all information up to date and correct, we make representations regarding actual wall structures, mounting surfaces, and customer installations based on standard guidelines.
          </p>
          <p>
            Customers are responsible for ensuring that their wall surface is structurally sound and free from hidden plumbing, electrical conduit, or structural defects prior to mounting.
          </p>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
