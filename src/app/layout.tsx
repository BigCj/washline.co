import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://washlinecompany.co.za'),
  title: {
    default: 'The Washline Co. | Quality Foldaway Washing Lines',
    template: '%s | The Washline Co.',
  },
  description:
    'The Washline Co. supplies quality aluminium, epoxy powder-coated wall-mounted foldaway washing lines in South Africa. Rust-resistant and space-saving.',
  keywords: [
    'The Washline Co.',
    'Foldaway washing line',
    'wall mounted washing line South Africa',
    'aluminium washing line',
    'fold down washing line',
    'rust resistant washing line',
  ],
  authors: [{ name: 'The Washline Co.' }],
  creator: 'The Washline Co.',
  publisher: 'The Washline Co.',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: '/images/logo/the-washline-co-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-zinc-950 bg-white selection:bg-zinc-900 selection:text-white">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
