import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata = {
  title: 'Privacy Notice (POPIA) | The Washline Co.',
  description: 'Privacy policy and data protection notice for The Washline Co.',
};

export default function PrivacyNoticePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1">
        <section className="bg-zinc-950 text-white py-16 lg:py-20 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Privacy Notice
            </h1>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-zinc-700 leading-relaxed">
          <p>
            The Washline Co. is committed to protecting your privacy in compliance with the Protection of Personal Information Act (POPIA) of South Africa.
          </p>
          <p>
            Any personal information collected during quote requests, orders, or communications (such as your name, delivery address, phone number, and email address) is used solely to process your orders, arrange delivery, and provide customer support.
          </p>
          <p>
            We do not sell, rent, or distribute your personal details to third parties without your explicit consent, except as necessary to fulfill delivery with courier partners.
          </p>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
