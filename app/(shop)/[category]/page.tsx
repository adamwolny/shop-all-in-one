import React from "react";

import { APIService } from "@/services";
import ProductCard from "@/components/shared/ProductCard";
import { subtitle } from "@/components/atoms/Typography";

export default async function CategoryPage({
  params: { category },
}: {
  params: {
    category: string;
  };
}) {
  const products = await APIService.getProducts(category);

  if (products.length === 0) {
    return (
      <div className="mt-8">
        <h1 className={subtitle()}>No products were found</h1>
      </div>
    );
  }

  return (
    <div>
      <h3 className={`${subtitle()} text-center`}>
        Product count: {products.length}
      </h3>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
