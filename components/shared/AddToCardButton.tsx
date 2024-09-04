"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { ShoppingCartBoldIcon } from "@nextui-org/shared-icons";

import { ProductType } from "@/types/api.types";
import { useCart } from "@/hooks/useCart";

const AddToCardButton = ({ product }: { product: ProductType }) => {
  const { addProduct } = useCart();

  const onSubmit = () => {
    console.log(product)
    addProduct(product);
  };

  return (
    <Button
      className="text-sm font-normal"
      color="primary"
      startContent={<ShoppingCartBoldIcon />}
      variant="flat"
      onClick={onSubmit}
    >
      Add to cart
    </Button>
  );
};

export default AddToCardButton;
