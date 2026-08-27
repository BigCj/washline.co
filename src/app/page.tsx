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
  title: 'Mr Washline | Your Foldaway Washing Line Specialists Since 2003',
  description:
    'Original manufacturers and national suppliers of quality aluminium, epoxy powder-coated, wall-mounted foldaway washing lines in South Africa. Rust-resistant, space-saving, and built to last.',
  openGraph: {
    title: 'Mr Washline | Quality Foldaway Washing Lines South Africa',
    description:
      'Space when you need it. Gone when you don’t. Premium aluminium foldaway washing lines with nationwide delivery.',
    images: ['/images/products/01-open-charcoal.webp'],
  },
};

export default function HomePage() {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'The Foldaway Washing Line',
    image: 'https://mrwashline.co.za/images/products/01-open-charcoal.webp',
    description:
      'Aluminium epoxy powder-coated wall-mounted foldaway clothesline for South African homes.',
    brand: {
      '@type': 'Brand',
      name: 'Mr Washline',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'ZAR',
      lowPrice: '1760',
      highPrice: '2280',
      offerCount: '5',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '46',
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
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Cinematic Scroll-Controlled Folding Animation */}
          <FoldawayScrollExperience />

          {/* 3. Product Overview & Where it Works */}
          <ProductOverview />

          {/* 4. The Foldaway DIY Assemble Kit & 7 Numbered Technical Components */}
          <KitContentsExploded />

          {/* 5. Interactive Configurator & Size/Colour Picker */}
          <ProductConfigurator />

          {/* 6. Four Editorial Benefit Pillars (Weatherproof, Operation, Space, Versatile) */}
          <BenefitsGrid />

          {/* 7. Installation Guide & Interactive Wall Space Calculator */}
          <InstallationGuide />

          {/* 8. Delivery Information & Regional Tabs (Cape Town / JHB / Nationwide) */}
          <DeliveryPricing />

          {/* 9. Ordering Process, Satisfaction Guarantee & Social Proof */}
          <ReviewsSection />

          {/* 10. Architectural Gallery */}
          <GallerySection />

          {/* 11. Contact & Enquiry Form */}
          <ContactSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  );
}
