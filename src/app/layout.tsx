import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://mrwashline.co.za'),
  title: {
    default: 'Mr Washline | Foldaway Washing Line Specialists Since 2003',
    template: '%s | Mr Washline',
  },
  description:
    'Original manufacturers and national suppliers of quality aluminium, epoxy powder-coated wall-mounted foldaway washing lines in South Africa. Rust-resistant and space-saving.',
  keywords: [
    'Foldaway washing line',
    'Mr Washline',
    'wall mounted washing line South Africa',
    'aluminium clothesline Cape Town',
    'fold down washing line Johannesburg',
    'rust resistant clothes line',
  ],
  authors: [{ name: 'Mr Washline' }],
  creator: 'Mr Washline',
  publisher: 'Mr Washline',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: '/images/logo/mr-washline-logo.png',
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
