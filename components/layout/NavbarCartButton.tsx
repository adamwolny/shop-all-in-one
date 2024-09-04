"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Badge } from "@nextui-org/badge";
import { ShoppingCartBoldIcon } from "@nextui-org/shared-icons";
import { NavbarItem } from "@nextui-org/navbar";

import { useCart } from "@/hooks/useCart";

const NavbarCartButton = () => {
  const { count } = useCart();

  return (
    <NavbarItem className="flex">
      <Button
        as={Link}
        className="text-sm font-normal text-default-600 bg-default-100"
        href="/cart"
        startContent={
          <Badge
            color="danger"
            content={count}
            isInvisible={count === 0}
            shape="circle"
          >
            <ShoppingCartBoldIcon fontSize={22} />
          </Badge>
        }
        variant="flat"
      >
        Shopping Cart
      </Button>
    </NavbarItem>
  );
};

export default NavbarCartButton;
