'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductSize, FrameColor } from '@/data/productData';

export interface CartItem {
  id: string;
  size: ProductSize;
  color: FrameColor;
  isDiyKit: boolean;
  quantity: number;
  priceDisplay: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (size: ProductSize, color: FrameColor, isDiyKit: boolean, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItemsCount: number;
  quoteWhatsappLink: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mrwashline_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('mrwashline_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (size: ProductSize, color: FrameColor, isDiyKit: boolean, quantity = 1) => {
    const itemId = `${size.id}-${color.id}-${isDiyKit ? 'diy' : 'standard'}`;
    const priceDisplay = isDiyKit ? 'From R1,760 incl. VAT' : 'Quotation on request';

    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          size,
          color,
          isDiyKit,
          quantity,
          priceDisplay,
        },
      ];
    });

    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const itemsText = items
    .map(
      (it) =>
        `• ${it.quantity}x The Foldaway ${it.size.nominalLength} (${it.color.name} - ${
          it.isDiyKit ? 'DIY Assemble Kit' : 'Standard Assembled'
        })`
    )
    .join('%0A');

  const whatsappMessage = `Hello Mr Washline,%0A%0AI would like to request an order / quotation for the following:%0A${itemsText}%0A%0APlease confirm availability and delivery/installation details.`;

  const quoteWhatsappLink = `https://wa.me/27823782381?text=${whatsappMessage}`;

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItemsCount,
        quoteWhatsappLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
