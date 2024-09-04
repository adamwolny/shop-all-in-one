import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import ErrorPage from "@/views/error/ErrorPage";

export async function generateMetadata() {
  return {
    title: "Category was not found",
    description: "We could not find the category in our store",
  };
}

export default function NotFoundCategory() {
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
      title="Category was not found"
    />
  );
}
