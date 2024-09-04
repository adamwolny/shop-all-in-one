import React from "react";

import { title as styledTitle, subtitle } from "@/components/atoms/Typography";

import currency from "currency.js";


const ProductHeader = ({ title, price }: { title: string; price: number }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className={`${styledTitle()} w-full capitalize text-center`}>
        {title}
      </h1>
      <span
        className={`${subtitle()} text-primary font-bold w-full text-center`}
      >
        {currency(price).format()}
      </span>
    </div>
  );
};

export default ProductHeader;
