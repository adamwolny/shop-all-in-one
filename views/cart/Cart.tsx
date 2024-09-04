import React from "react";

import CartTable from "@/views/cart/CartTable";
import { title as styledTitle } from "@/components/atoms/Typography";
import CartSummary from "@/views/cart/CartSummary";

const Cart = () => {
  return (
    <div>
      <h1 className={`${styledTitle()} w-full capitalize text-center`}>Cart</h1>
      <div className="grid gap-8 grid-cols-4 mt-8">
        <div className="col-span-3">
          <CartTable />
        </div>
        <div className="col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
