import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import React from "react";

import NavbarCartButton from "@/components/layout/NavbarCartButton";

export const Navbar = ({
  showCartButton = true,
}: {
  showCartButton?: boolean;
}) => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">Shop All in One</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-full" justify="end">
        {showCartButton && <NavbarCartButton />}
      </NavbarContent>
    </NextUINavbar>
  );
};
