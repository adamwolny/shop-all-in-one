"use client";

import currency from "currency.js";

import { useCart } from "@/hooks/useCart";

export const useCartTotal = () => {
  const { products } = useCart();

  if (products.length === 0) {
    return currency(0);
  }

  return products
    .map((el) => currency(el.product.price).multiply(el.quantity))
    .reduce((a, b) => currency(a).add(b));
};
