"use client";

import React from "react";
import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

import { subtitle } from "@/components/atoms/Typography";
import { useCartTotal } from "@/hooks/useCartTotal";

const CartSummary = () => {
  const total = useCartTotal();

  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        <h2 className={subtitle()}>Checkout</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-large text-primary text-right">{total.format()}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          className="text-sm font-normal w-full text-default-600 bg-default-100"
          isDisabled={true}
          variant="flat"
        >
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
