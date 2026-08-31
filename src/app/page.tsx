import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FoldawayScrollExperience from '@/components/FoldawayScrollExperience';
import ProductOverview from '@/components/ProductOverview';
import KitContentsExploded from '@/components/KitContentsExploded';
import ProductConfigurator from '@/components/ProductConfigurator';
import BenefitsGrid from '@/components/BenefitsGrid';
import InstallationGuide from '@/components/InstallationGuide';
import DeliveryPricing from '@/components/DeliveryPricing';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { PRODUCT_DATA } from '@/data/productData';

export const metadata = {
  title: 'The Washline Co. | Quality Foldaway Washing Lines',
  description:
    'The Washline Co. supplies quality aluminium, epoxy powder-coated, wall-mounted foldaway washing lines in South Africa. Rust-resistant, space-saving, and built to last.',
  openGraph: {
    title: 'The Washline Co. | Quality Foldaway Washing Lines South Africa',
    description:
      'Space when you need it. Gone when you don’t. Premium aluminium foldaway washing lines with nationwide delivery.',
    images: ['/images/products/01-open-charcoal.webp'],
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'The Foldaway Washing Line',
    image: 'https://washlinecompany.co.za/images/products/01-open-charcoal.webp',
    description:
      'Aluminium epoxy powder-coated wall-mounted foldaway washing line for South African homes.',
    brand: {
      '@type': 'Brand',
      name: 'The Washline Co.',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'ZAR',
      lowPrice: '1760',
      highPrice: '1960',
      offerCount: '5',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col bg-white text-zinc-950 selection:bg-zinc-900 selection:text-white">
        <Header />
        <main className="flex-1">
          <Hero />
          <FoldawayScrollExperience />
          <ProductOverview />
          <KitContentsExploded />
          <ProductConfigurator />
          <BenefitsGrid />
          <InstallationGuide />
          <DeliveryPricing />
          <ReviewsSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  );
}
