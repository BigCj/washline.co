'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock,
  Sparkles
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/productData';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    areaPostalCode: '',
    product: 'The Foldaway DIY Assemble Kit',
    size: '2.3 metres × 80 cm (Most Popular)',
    message: '',
  });

  const contact = PRODUCT_DATA.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Need help choosing the right Foldaway?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Contact our factory directly for sizing guidance, custom quotation, or delivery queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Cape Town Head Office Card */}
            <div className="p-8 rounded-3xl bg-zinc-950 text-white shadow-xl space-y-6">
              <div>
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Head Office & Manufacturing
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {contact.headOffice.companyName}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{contact.headOffice.addressFormatted}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                  <a
                    href={`mailto:${contact.headOffice.email}`}
                    className="hover:text-white underline transition-colors"
                  >
                    {contact.headOffice.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <a
                    href={`tel:${contact.headOffice.telIntl}`}
                    className="hover:text-white transition-colors"
                  >
                    {contact.headOffice.telIntl} ({contact.headOffice.tel})
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                  <a
                    href={contact.headOffice.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 font-bold underline transition-colors"
                  >
                    WhatsApp: {contact.headOffice.cellWhatsappIntl}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span>Mon – Fri: 08:00 – 16:30</span>
              </div>
            </div>

            {/* Johannesburg Installations Card */}
            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Gauteng Branch
              </div>
              <h4 className="text-lg font-bold text-zinc-950">
                {contact.johannesburg.label}
              </h4>

              <div className="space-y-2 text-xs sm:text-sm text-zinc-700">
                <div>
                  Tel:{' '}
                  <a
                    href={`tel:${contact.johannesburg.telIntl}`}
                    className="font-semibold text-zinc-950 hover:underline"
                  >
                    {contact.johannesburg.telIntl}
                  </a>
                </div>
                <div>
                  Cell:{' '}
                  <a
                    href={`tel:${contact.johannesburg.cellIntl}`}
                    className="font-semibold text-zinc-950 hover:underline"
                  >
                    {contact.johannesburg.cellIntl}
                  </a>
                </div>
                <div>
                  Email:{' '}
                  <a
                    href={`mailto:${contact.johannesburg.email}`}
                    className="font-semibold text-zinc-950 hover:underline"
                  >
                    {contact.johannesburg.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-zinc-50 rounded-3xl p-8 sm:p-10 border border-zinc-200 shadow-sm">
            <h3 className="text-xl font-bold text-zinc-950 mb-2">
              Send an Online Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mb-8">
              Fill in your details below and we will confirm stock, delivery schedule, and pricing.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950">
                  Enquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you, {formData.name || 'valued customer'}. Our team will review your requirements for {formData.size} and respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-semibold hover:bg-emerald-800"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johan van der Merwe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.co.za"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Area / Suburb & Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sea Point, 8005"
                      value={formData.areaPostalCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          areaPostalCode: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Product
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({ ...formData, product: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                    >
                      <option>The Foldaway DIY Assemble Kit</option>
                      <option>The Foldaway Washline (Fully Assembled)</option>
                      <option>The Foldaway Table</option>
                      <option>Installation Service / Custom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Size
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) =>
                        setFormData({ ...formData, size: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                    >
                      <option>1.0 metres × 80 cm</option>
                      <option>1.5 metres × 80 cm</option>
                      <option>2.0 metres × 80 cm</option>
                      <option>2.3 metres × 80 cm (Most Popular)</option>
                      <option>2.6 metres × 80 cm</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                    Your Message / Installation Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your wall type (brick, plaster, vibracrete), special requirements, or questions..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
