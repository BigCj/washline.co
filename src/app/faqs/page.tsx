import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';
import { HelpCircle, Phone, Mail } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export const metadata = {
  title: 'Frequently Asked Questions (FAQs) | The Washline Co.',
  description:
    'Factual answers to common questions about The Washline Co. foldaway washing lines, sizes, materials, DIY assemble kits, and delivery.',
};

export default function FaqsPage() {
  const faqs = [
    {
      q: 'Does the Foldaway washing line rust?',
      a: 'The Foldaway frame is made from aluminium. Unlike conventional steel or galvanised-steel washing lines, aluminium does not rust. Frames are professionally epoxy powder-coated to provide a weatherproof finish, and machine screws used in assembly are stainless steel.',
    },
    {
      q: 'What is the difference between the Standard Foldaway and the DIY Assemble Kit?',
      a: 'The Standard Foldaway is delivered completely assembled and strung. The DIY Assemble Kit is delivered in kit form in a strong cardboard tube (approx. 10 cm in diameter) for easier transportation and requires basic assembly using a rubber mallet.',
    },
    {
      q: 'Which size is best for Queen-size bedding?',
      a: 'The 2.3 m × 80 cm model has approximately six lines spaced approximately 10 cm apart and provides approximately 13.5 metres of hanging space. It can accommodate normal queen-size fitted sheets and duvet covers without requiring them to be folded back. The 2.6 m model caters for king-size sheets.',
    },
    {
      q: 'How much wall clearance is needed?',
      a: 'Customers require approximately 10 cm of additional wall space. For example, a 2.3 m Foldaway requires approximately 2.4 m of wall space.',
    },
    {
      q: 'What is the recommended mounting height?',
      a: 'The Washline Co. recommends mounting the washing line at approximately 1.85 metres high.',
    },
    {
      q: 'Can the Foldaway be mounted onto Vibracrete walls?',
      a: 'Yes, spacer blocks can be used when installing onto suitable vibracrete walls where the upright pillars obstruct the back bar. Spacer blocks are supplied on request.',
    },
    {
      q: 'What tools are required for the DIY Assemble Kit?',
      a: 'A rubber mallet is required to connect the arms to the front and back bars.',
    },
    {
      q: 'What is your satisfaction guarantee?',
      a: 'The Washline Co. offers a 100% satisfaction / money-back guarantee in the event that the customer is not satisfied with the product or service.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen flex flex-col bg-white text-zinc-950">
        <Header />
        <main className="flex-1">
          <section className="bg-zinc-950 text-white py-16 lg:py-24 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-xs text-zinc-400 font-mono mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white">FAQ’s</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-zinc-300 font-light mt-4 max-w-3xl leading-relaxed">
                Factual information regarding sizes, installation, materials, and ordering your The Washline Co. Foldaway.
              </p>
            </div>
          </section>

          <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm space-y-3"
              >
                <h3 className="text-lg font-bold text-zinc-950 flex items-start gap-3">
                  <span className="p-1 rounded-md bg-zinc-900 text-white text-xs font-mono shrink-0 mt-0.5">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}

            <div className="mt-16 p-8 rounded-3xl bg-zinc-900 text-white text-center space-y-4">
              <h3 className="text-2xl font-bold">Need assistance?</h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
                Contact The Washline Co. directly for guidance or quotation details.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                  href={`tel:${PRODUCT_DATA.contact.telIntl}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-zinc-100"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {PRODUCT_DATA.contact.tel}</span>
                </a>
                <a
                  href={`mailto:${PRODUCT_DATA.contact.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-zinc-700"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: {PRODUCT_DATA.contact.email}</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  );
}
