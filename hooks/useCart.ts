"use client";

import { useContext } from "react";

import { ProductType } from "@/types/api.types";
import { CartContext } from "@/contexts/CartContext";

export const useCart = () => {
  const { cart, updateCart } = useContext(CartContext);
  const { items } = cart;

  const updateProduct = (product: ProductType, quantity: number) => {
    return items.map((el) => {
      if (el.product.id === product.id) {
        return { ...el, quantity };
      } else {
        return el;
      }
    });
  };

  const addProduct = (product: ProductType) => {
    const products = items.find((item) => item.product.id === product.id);

    if (products) {
      const newItems = updateProduct(product, products.quantity + 1);

      updateCart({
        items: newItems,
      });
    } else {
      const newItems = [
        ...items,
        {
          product,
          quantity: 1,
        },
      ];

      updateCart({
        items: newItems,
      });
    }
  };

  const removeProduct = (productId: number) => {
    const product = items.find((item) => item.product.id === productId);

    if (product) {
      const newValue = {
        items: [...items.filter((item) => item.product.id !== productId)],
      };

      updateCart(newValue);
    }
  };

  const removeQuantity = (productId: number) => {
    const item = items.find((item) => item.product.id === productId);

    if (item?.quantity === 1) return removeProduct(productId);
    if (item) {
      const newItems = updateProduct(item.product, item.quantity - 1);

      updateCart({
        items: newItems,
      });
    }
  };

  return {
    products: items,
    count:
      items.length > 0
        ? items.map((product) => product.quantity)?.reduce((a, b) => a + b)
        : 0,
    addProduct,
    removeProduct,
    removeQuantity,
  };
};
