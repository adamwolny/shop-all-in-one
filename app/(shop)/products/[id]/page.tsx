import React from "react";

import { APIService } from "@/services";
import Product from "@/views/product/Product";

export async function generateMetadata({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const product = await APIService.getProduct(id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: `/api/og-product?title=${product.title}&category=${decodeURIComponent(product.category)}&image=${product.image}`,
    },
  };
}

export default async function ProductPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const product = await APIService.getProduct(id);

  return <Product product={product} />;
}
