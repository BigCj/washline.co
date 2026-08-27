import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Notice (POPIA) | Mr Washline',
  description: 'Privacy policy and data protection notice for Mr Washline.',
};

export default function PrivacyNoticePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1 py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-8">
          Privacy Notice
        </h1>

        <div className="prose prose-zinc max-w-none text-sm text-zinc-600 space-y-6 leading-relaxed">
          <p>
            Mr Washline is committed to protecting your privacy in compliance with the Protection of Personal Information Act (POPIA) of South Africa.
          </p>
          <p>
            Personal information gathered during enquiry or checkout (name, delivery address, phone number, email address) is used solely to facilitate the supply, delivery, quotation, or installation of your foldaway washing line and is never sold to third parties.
          </p>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
