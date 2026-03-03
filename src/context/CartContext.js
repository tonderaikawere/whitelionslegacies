import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "wll_cart_v1";

const readStoredCart = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => (typeof window === "undefined" ? [] : readStoredCart()));

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      
    }
  }, [items]);

  const addItem = useCallback((product, qty = 1) => {
    if (!product || product.id == null) return;
    const quantity = Math.max(1, Number(qty) || 1);

    setItems((prev) => {
      const existingIndex = prev.findIndex((p) => p.id === product.id);
      if (existingIndex >= 0) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: (Number(next[existingIndex].quantity) || 1) + quantity,
        };
        return next;
      }
      return [
        ...prev,
        {
          id: product.id,
          carName: product.carName,
          brand: product.brand,
          model: product.model,
          price: product.price,
          imgUrl: product.imgUrl,
          quantity,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const setQuantity = useCallback((id, quantity) => {
    const q = Math.max(1, Number(quantity) || 1);
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: q } : p))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totals = useMemo(() => {
    const totalItems = items.reduce((sum, p) => sum + (Number(p.quantity) || 0), 0);
    const totalPrice = items.reduce(
      (sum, p) => sum + (Number(p.quantity) || 0) * (Number(p.price) || 0),
      0
    );
    return { totalItems, totalPrice };
  }, [items]);

  const value = useMemo(
    () => ({ items, ...totals, addItem, removeItem, setQuantity, clearCart }),
    [items, totals, addItem, removeItem, setQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
