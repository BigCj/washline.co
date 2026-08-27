'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const contact = PRODUCT_DATA.contact;
  const brand = PRODUCT_DATA.brand;

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-sm border-t border-zinc-800">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="white" height={44} />

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {brand.description}
            </p>

            <div className="space-y-2 text-xs text-zinc-400 font-mono">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{contact.headOffice.addressFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${contact.headOffice.email}`} className="hover:text-white transition-colors">
                  {contact.headOffice.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${contact.headOffice.telIntl}`} className="hover:text-white transition-colors">
                  {contact.headOffice.telIntl} ({contact.headOffice.tel})
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">WA:</span>
                <a
                  href={contact.headOffice.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {contact.headOffice.cellWhatsappIntl} ({contact.headOffice.cellWhatsapp})
                </a>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/products/the-foldaway"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>The Foldaway Washline</span>
                  <span className="text-[10px] text-zinc-600">Assembled</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/the-foldaway-diy-kit"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>The Foldaway DIY Assemble Kit</span>
                  <span className="text-[10px] text-emerald-400">Tube Pack</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/the-foldaway-table"
                  className="hover:text-white transition-colors"
                >
                  The Foldaway Table
                </Link>
              </li>
              <li>
                <Link
                  href="/products/information"
                  className="hover:text-white transition-colors"
                >
                  Product Information & Specs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Services Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/installation" className="hover:text-white transition-colors">
                  Services & Installation
                </Link>
              </li>
              <li>
                <Link href="/prices" className="hover:text-white transition-colors">
                  Prices
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  FAQ’s
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Legal & Warranty
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Website Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-notice" className="hover:text-white transition-colors">
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link href="/products/information#warranty" className="hover:text-white transition-colors">
                  Product Warranty Policy
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white transition-colors border border-zinc-800 text-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-zinc-900 bg-black py-6 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {currentYear} {brand.name}. {brand.strapline}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>South African Manufactured Aluminium</span>
            <span>•</span>
            <span>Epoxy Powder-Coated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
