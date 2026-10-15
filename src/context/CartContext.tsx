"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PerfumeProduct, PRODUCTS } from "@/data/products";

export interface CartItem {
  product: PerfumeProduct;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: PerfumeProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  activeQuickViewProduct: PerfumeProduct | null;
  openQuickView: (product: PerfumeProduct) => void;
  closeQuickView: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  lastAddedProduct: PerfumeProduct | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("dume_perfumes_cart");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            return parsed
              .map((item: { id: string; quantity: number }) => {
                const matched = PRODUCTS.find((p) => p.id === item.id);
                return matched ? { product: matched, quantity: item.quantity } : null;
              })
              .filter(Boolean) as CartItem[];
          }
        }
      } catch {
        // ignore storage error
      }
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<PerfumeProduct | null>(null);
  const [lastAddedProduct, setLastAddedProduct] = useState<PerfumeProduct | null>(null);

  // Save to localStorage when items change
  useEffect(() => {
    try {
      const serialized = items.map((i) => ({ id: i.product.id, quantity: i.quantity }));
      localStorage.setItem("dume_perfumes_cart", JSON.stringify(serialized));
    } catch {
      // ignore storage error
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addToCart = (product: PerfumeProduct, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity }];
      }
    });

    setLastAddedProduct(product);
    setIsOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openQuickView = (product: PerfumeProduct) => {
    setActiveQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setActiveQuickViewProduct(null);
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openCheckout = () => {
    setIsOpen(false);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.demoPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        activeQuickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        openSearch,
        closeSearch,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        lastAddedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
