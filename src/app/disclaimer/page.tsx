import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata = {
  title: 'Website Disclaimer | The Washline Co.',
  description: 'Website disclaimer and legal notice for The Washline Co.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950">
      <Header />
      <main className="flex-1">
        <section className="bg-zinc-950 text-white py-16 lg:py-20 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Website Disclaimer
            </h1>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-zinc-700 leading-relaxed">
          <p>
            The information contained on this website is for general information and product ordering purposes only. While The Washline Co. endeavours to keep all information up to date and correct, we make representations regarding actual wall structures, mounting surfaces, and customer installations based on standard guidelines.
          </p>
          <p>
            Customers are advised to ensure that wall surfaces (masonry, concrete, or suitable vibracrete uprights with spacer blocks) are capable of supporting wall-mounted installations.
          </p>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
