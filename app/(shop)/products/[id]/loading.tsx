import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default async function CategoryLoading() {
  return (
    <>
      <Skeleton className="w-1/2 rounded-lg mb-2">
        <div className="h-4 rounded-lg bg-default-300" />
      </Skeleton>
      <Skeleton className="w-full rounded-lg mb-2">
        <div className="h-8 rounded-lg bg-default-300" />
      </Skeleton>
    </>
  );
}
