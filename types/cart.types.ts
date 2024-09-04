import { ProductType } from "@/types/api.types";

export interface CartType {
  items: {
    product: ProductType;
    quantity: number;
  }[];
}
