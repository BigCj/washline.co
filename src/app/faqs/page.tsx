import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';
import { HelpCircle, ChevronRight, MessageSquare } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export const metadata = {
  title: 'Frequently Asked Questions (FAQs) | Mr Washline',
  description:
    'Answers to common questions about Mr Washline foldaway washing lines, sizes, materials, rust resistance, DIY kit assembly, and delivery.',
};

export default function FaqsPage() {
  const faqs = [
    {
      q: 'Does the Foldaway washing line rust?',
      a: 'No. The Foldaway frame is made from aluminium. Unlike conventional steel or galvanised-steel washing lines, aluminium does not rust. Furthermore, frames are professionally epoxy powder-coated for weather resistance, and all assembly machine screws are stainless steel.',
    },
    {
      q: 'What is the difference between the Standard Foldaway and the DIY Assemble Kit?',
      a: 'The Standard Foldaway is delivered fully assembled and strung, ready for immediate wall mounting. The DIY Foldaway Assemble Kit is delivered in kit form inside a compact cardboard tube (~10 cm diameter) for convenient road or air transport, and requires basic assembly with a rubber mallet.',
    },
    {
      q: 'Which size is best for Queen-size bedding?',
      a: 'Our most popular size is the 2.3 metres × 80 cm model. It provides approximately 13.5 metres of drying space across 6 lines spaced approx. 10 cm apart, and accommodates normal Queen-size fitted sheets and duvet covers without requiring them to be folded back. If you have King-size sheets, we recommend the 2.6 m model.',
    },
    {
      q: 'How much wall clearance is needed to mount a Foldaway?',
      a: 'You require approximately 10 cm of additional wall space over the product nominal width. For example, a 2.3 m Foldaway requires approximately 2.4 m of clear wall space.',
    },
    {
      q: 'What is the recommended mounting height?',
      a: 'Mr Washline documentation recommends mounting the washing line at approximately 1.85 metres from ground level for optimal ergonomic reach and ground clearance for long sheets and trousers.',
    },
    {
      q: 'Can the Foldaway be mounted onto Vibracrete walls?',
      a: 'Yes, provided the vibracrete wall is structurally sound. Spacer blocks may be needed where the upright pillars obstruct the back bar from sitting flat against the wall.',
    },
    {
      q: 'What tools are required for the DIY Assemble Kit?',
      a: 'A rubber mallet is required to connect the side arms to the front and back bars. A standard drill and masonry drill bit are required to install the supplied couch screws and wall plugs into your wall.',
    },
    {
      q: 'What is your satisfaction guarantee?',
      a: 'Mr Washline offers a 100% satisfaction / money-back guarantee in the event that the customer is not satisfied with the product or service.',
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
                Everything you need to know about sizing, installation, materials, and ordering your Mr Washline Foldaway.
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
              <h3 className="text-2xl font-bold">Have another question?</h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
                Our factory team in Cape Town and Johannesburg is happy to assist you with custom advice.
              </p>
              <a
                href={PRODUCT_DATA.contact.headOffice.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp: 082 378 2381</span>
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  );
}
