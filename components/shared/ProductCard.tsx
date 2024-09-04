import React from "react";
import { CardHeader, CardFooter, Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";
import currency from "currency.js";

import { ProductType } from "@/types/api.types";
import AddToCardButton from "@/components/shared/AddToCardButton";

export const ProductLoadingCard = () => {
  return (
    <Card className="w-full p-4">
      <Skeleton className="w-full rounded-lg mb-2">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <Skeleton className="w-3/5 rounded-lg">
        <div className="h-8 w-3/5 rounded-lg bg-default-200" />
      </Skeleton>
      <Divider className="my-4" />
      <Skeleton className="rounded-lg">
        <div className="h-10 rounded-lg bg-default-300" />
      </Skeleton>
    </Card>
  );
};

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-8">
        <div>
          <Image
            isZoomed
            alt={product.title}
            className="object-contain bg-white rounded-xl p-2"
            height={150}
            src={product.image}
            width={150}
          />
        </div>
        <div className="flex flex-col h-full w-full justify-between">
          <div>
            <p className="text-md capitalize">{product.title}</p>
          </div>
          <div>
            <p className="text-small font-bold text-primary text-right mt-2">
              {currency(product.price).format()}
            </p>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter className="justify-end gap-2">
        <Button
          as={Link}
          className="text-sm font-normal text-default-600 bg-default-100"
          href={`/products/${product.id}`}
          variant="flat"
        >
          See product
        </Button>
        <AddToCardButton product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
