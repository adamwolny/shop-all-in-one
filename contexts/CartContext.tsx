"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

import { CartType } from "@/types/cart.types";
import { checkIfSSR } from "@/utils/ssr.utils";

type CartContextProps = {
  cart: CartType;
  updateCart: (cart: CartType) => void;
};

export const CartContext = createContext<CartContextProps>({
  cart: { items: [] },
  updateCart: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartType>({
    items: [],
  });

  useEffect(() => {
    if (checkIfSSR()) return;
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (cart: CartType) => {
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
