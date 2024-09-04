import { notFound } from "next/navigation";

import { ProductType } from "@/types/api.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const HOURS_6 = 21600;

async function getCategories() {
  const res = await fetch(`${API_URL}/products/categories`, {
    next: { revalidate: HOURS_6 },
  });

  if (!res.ok) notFound();

  return res.json() as Promise<string[]>;
}

async function getProducts(category: string) {
  const res = await fetch(`${API_URL}/products/category/${category}`, {
    next: { revalidate: HOURS_6 },
  });

  // If the API does not find the category, it should respond with a 404 status code.
  if (!res.ok) notFound();

  return res.json() as Promise<ProductType[]>;
}

async function getProduct(id: string) {
  const res = await fetch(`${API_URL}/products/${id}`, {
    next: { revalidate: HOURS_6 },
  });

  const responseLength = res.headers.get("content-length");

  // If the API does not find the product, it should respond with a 404 status code
  if (!res.ok || responseLength === "0") notFound();

  return res.json() as Promise<ProductType>;
}

export const APIService = {
  getCategories,
  getProducts,
  getProduct,
};
