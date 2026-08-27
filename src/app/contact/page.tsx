import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Mr Washline',
  description:
    'Contact Mr Washline in Cape Town (Diep River) or Johannesburg. Call, WhatsApp, email, or request a fast online quotation.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1">
        <section className="bg-zinc-950 text-white py-16 lg:py-24 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs text-zinc-400 font-mono mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contact Us</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Contact Mr Washline
            </h1>
            <p className="text-lg text-zinc-300 font-light mt-4 max-w-3xl leading-relaxed">
              We are based at Prime Park, Diep River in Cape Town with dedicated regional installation teams in Johannesburg.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
