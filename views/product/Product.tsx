import React from "react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductHeader from "@/views/product/ProductHeader";
import ProductDescription from "@/views/product/ProductDescription";
import { ProductType } from "@/types/api.types";
import AddToCardButton from "@/components/shared/AddToCardButton";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <>
      <Breadcrumbs
        list={[
          {
            label: "All categories",
            link: "/",
          },
          {
            label: product.category,
            link: `/${product.category}`,
          },
          {
            label: `${product.id}`,
            link: `/products/${product.id}`,
          },
        ]}
      />
      <ProductHeader price={product.price} title={product.title} />
      <AddToCardButton product={product} />
      <ProductDescription
        description={product.description}
        image={product.image}
        title={product.title}
      />
    </>
  );
};

export default Product;
