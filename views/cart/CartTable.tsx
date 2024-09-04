"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import React, { Key } from "react";
import { Button } from "@nextui-org/button";
import { DeleteIcon } from "@nextui-org/shared-icons";
import { Image } from "@nextui-org/image";
import currency from "currency.js";

import { ProductType } from "@/types/api.types";
import { useCart } from "@/hooks/useCart";

const columns = [
  { name: "Image", uid: "image" },
  { name: "Title", uid: "title" },
  { name: "Price", uid: "price" },
  { name: "Quantity", uid: "quantity" },
  { name: "Actions", uid: "actions" },
];

const CartTable = () => {
  const { products, addProduct, removeQuantity, removeProduct } = useCart();

  const renderCell = (
    product: ProductType,
    quantity: number,
    columnKey: Key,
  ) => {
    switch (columnKey) {
      case "image":
        return (
          <div>
            <Image
              alt={product.title}
              className="object-contain bg-white rounded-xl"
              height={50}
              src={product.image}
              width={50}
            />
          </div>
        );
      case "title":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{product.title}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {decodeURIComponent(product.category)}
            </p>
          </div>
        );
      case "price":
        return (
          <div className="flex flex-col">
            <p className="text-primary text-bold text-sm capitalize">
              {currency(product.price).format()}
            </p>
          </div>
        );
      case "quantity":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              <span className="md:hidden">Quantity: </span>
              {quantity}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="w-full relative flex items-center justify-end gap-2">
            <Button
              className="text-sm font-normal text-default-600 bg-default-100"
              variant="flat"
              onClick={() => addProduct(product)}
            >
              +
            </Button>
            <Button
              className="text-sm font-normal text-default-600 bg-default-100"
              variant="flat"
              onClick={() => removeQuantity(product.id)}
            >
              -
            </Button>
            <Button
              className="text-sm font-normal text-danger bg-default-100"
              startContent={<DeleteIcon />}
              variant="flat"
              onClick={() => removeProduct(product.id)}
            >
              Delete
            </Button>
          </div>
        );
    }
  };

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            className="hidden md:table-cell"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {products.map((item) => (
          <TableRow
            key={item.product.id}
            className="flex flex-col flex-no md:table-row"
          >
            {(columnKey) => (
              <TableCell>
                {renderCell(item.product, item.quantity, columnKey)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CartTable;
