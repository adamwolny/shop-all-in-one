import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import ErrorPage from "@/views/error/ErrorPage";

export async function generateMetadata() {
  return {
    title: "Product was not found",
    description: "We could not find the product in our store",
  };
}

export default function NotFoundProduct() {
  return (
    <ErrorPage
      button={
        <Button
          as={Link}
          className="text-sm font-normal w text-default-600 bg-default-100"
          href="/"
          variant="flat"
        >
          Go home
        </Button>
      }
      title="Product was not found"
    />
  );
}
