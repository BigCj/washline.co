'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { useCart } from '@/context/CartContext';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MapPin, 
  ArrowRight,
  Sparkles,
  Truck,
  Mail
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function Header() {
  const { totalItemsCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800/80 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {PRODUCT_DATA.brand.strapline}
            </span>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-zinc-400">
              Aluminium • Rust-Resistant • Epoxy Powder-Coated
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-300">
            <a
              href={`tel:${PRODUCT_DATA.contact.telIntl}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-zinc-400" />
              <span>Tel: {PRODUCT_DATA.contact.tel}</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href={`mailto:${PRODUCT_DATA.contact.email}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-zinc-400" />
              <span>{PRODUCT_DATA.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200/80 py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-zinc-200/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo variant="dark" height={52} className="transition-transform duration-200 group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-zinc-700">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <button
                type="button"
                className={`px-3.5 py-2 rounded-lg inline-flex items-center gap-1.5 transition-colors ${
                  productsDropdown
                    ? 'text-zinc-950 bg-zinc-100'
                    : 'hover:text-zinc-950 hover:bg-zinc-50'
                }`}
                onClick={() => setProductsDropdown(!productsDropdown)}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsDropdown ? 'rotate-180 text-zinc-900' : 'text-zinc-400'
                  }`}
                />
              </button>

              {productsDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-zinc-200/80 p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/products/the-foldaway"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-50 transition-colors group"
                    onClick={() => setProductsDropdown(false)}
                  >
                    <div className="p-2 rounded-md bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-zinc-900 font-semibold text-sm">
                        The Foldaway Washline
                      </div>
                      <div className="text-zinc-500 text-xs mt-0.5">
                        Delivered fully assembled and strung.
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/products/the-foldaway-diy-kit"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-50 transition-colors group"
                    onClick={() => setProductsDropdown(false)}
                  >
                    <div className="p-2 rounded-md bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-zinc-900 font-semibold text-sm flex items-center gap-1.5">
                        <span>The Foldaway DIY Kit</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 bg-zinc-900 text-white rounded">
                          TUBE
                        </span>
                      </div>
                      <div className="text-zinc-500 text-xs mt-0.5">
                        Shipped in ~10cm cardboard tube.
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/products/the-foldaway-table"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-50 transition-colors group"
                    onClick={() => setProductsDropdown(false)}
                  >
                    <div className="p-2 rounded-md bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-zinc-900 font-semibold text-sm">
                        The Foldaway Table
                      </div>
                      <div className="text-zinc-500 text-xs mt-0.5">
                        Wall-mounted fold-down table solutions.
                      </div>
                    </div>
                  </Link>

                  <div className="my-1 border-t border-zinc-100" />

                  <Link
                    href="/products/information"
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-zinc-50 text-xs font-semibold text-zinc-900 transition-colors"
                    onClick={() => setProductsDropdown(false)}
                  >
                    <span>Product Specifications & Info</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <Link
              href="/installation"
              className="px-3.5 py-2 rounded-lg hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
            >
              Services & Installation
            </Link>

            {/* Prices */}
            <Link
              href="/prices"
              className="px-3.5 py-2 rounded-lg hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
            >
              Prices
            </Link>

            {/* FAQ's */}
            <Link
              href="/faqs"
              className="px-3.5 py-2 rounded-lg hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
            >
              FAQ’s
            </Link>

            {/* Gallery */}
            <Link
              href="/#gallery"
              className="px-3.5 py-2 rounded-lg hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
            >
              Gallery
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-lg hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Cart Button */}
            <button
              type="button"
              onClick={openCart}
              className="relative p-2.5 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 transition-all flex items-center gap-2"
              aria-label="View basket"
            >
              <ShoppingBag className="w-4 h-4 text-zinc-900" />
              <span className="hidden sm:inline text-xs font-semibold">Basket</span>
              {totalItemsCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-bold text-white bg-zinc-900 rounded-full animate-in zoom-in-75 duration-200">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* BUY NOW CTA */}
            <Link
              href="/#order"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-[0.98]"
            >
              BUY NOW
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                <Logo variant="dark" height={44} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Products
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/products/the-foldaway"
                      className="block px-3 py-2 text-base font-semibold text-zinc-900 rounded-lg hover:bg-zinc-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Foldaway Washline (Assembled)
                    </Link>
                    <Link
                      href="/products/the-foldaway-diy-kit"
                      className="block px-3 py-2 text-base font-semibold text-zinc-900 rounded-lg hover:bg-zinc-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Foldaway DIY Assemble Kit
                    </Link>
                    <Link
                      href="/products/the-foldaway-table"
                      className="block px-3 py-2 text-base font-semibold text-zinc-900 rounded-lg hover:bg-zinc-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Foldaway Table
                    </Link>
                    <Link
                      href="/products/information"
                      className="block px-3 py-2 text-sm text-zinc-600 rounded-lg hover:bg-zinc-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Product Specifications & Features
                    </Link>
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-4 space-y-1">
                  <Link
                    href="/installation"
                    className="block px-3 py-2 text-base font-semibold text-zinc-900 rounded-lg hover:bg-zinc-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services & Installation
                  </Link>
                  <Link
                    href="/prices"
                    className="block px-3 py-2 text-base font-semibold text-zinc-900 rounded-lg hover:bg-zinc-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Prices & Delivery
                  </Link>
                  <Link
                    href="/faqs"
                    className="block px-3 py-2 text-base font-semibold text-zinc-900 rounded-lg hover:bg-zinc-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ’s
                  </Link>
                  <Link
                    href="/#gallery"
                    className="block px-3 py-2 text-base font-semibold text-zinc-900 rounded-lg hover:bg-zinc-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-base font-semibold text-zinc-900 rounded-lg hover:bg-zinc-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-50 border-t border-zinc-200">
              <Link
                href="/#order"
                className="w-full inline-flex items-center justify-center py-3 px-4 bg-zinc-900 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                BUY NOW — FROM R1,760
              </Link>
              <div className="mt-4 text-center text-xs text-zinc-500 space-y-1">
                <div>
                  Tel:{' '}
                  <a
                    href={`tel:${PRODUCT_DATA.contact.telIntl}`}
                    className="font-semibold text-zinc-900 underline"
                  >
                    {PRODUCT_DATA.contact.tel}
                  </a>
                </div>
                <div>
                  Email:{' '}
                  <a
                    href={`mailto:${PRODUCT_DATA.contact.email}`}
                    className="font-semibold text-zinc-900 underline"
                  >
                    {PRODUCT_DATA.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
