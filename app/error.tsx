"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/button";

import { title } from "@/components/atoms/Typography";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // SHOULD SEND ERROR FOR EXAMPLE TO SENTRY.IO
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-8">
        <h1 className={title()}>Something went wrong!</h1>
      </div>
      <Button
        className="text-sm font-normal w text-default-600 bg-default-100"
        variant="flat"
        onClick={reset}
      >
        Try again
      </Button>
    </div>
  );
}
