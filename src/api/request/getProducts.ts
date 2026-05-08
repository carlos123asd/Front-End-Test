import type { Product } from "@/types/Product";
import { apiClient } from "../config/apiClient";


export const getProducts = async () => {
  return apiClient<Product[]>("/product");
};