"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/button";

import ErrorPage from "@/views/error/ErrorPage";

// Metadata should be unique for that subdirectory
export async function generateMetadata() {
  return {
    title: "Error!",
    description: "Something went wrong on website!",
  };
}

export default function ErrorProduct({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // SHOULD SEND ERROR FOR EXAMPLE TO SENTRY.IO WITH TGAS ABOUT PRODUCT
  }, [error]);

  return (
    <ErrorPage
      button={
        <Button
          className="text-sm font-normal w text-default-600 bg-default-100"
          variant="flat"
          onClick={reset}
        >
          Go home
        </Button>
      }
      title="Something went wrong!"
    />
  );
}
