import type { ProductDetails } from "@/types/Product";
import { apiClient } from "../config/apiClient";


export const getProductDetails = async (productId: string) => {
  return apiClient<ProductDetails>(`/product/${productId}`);
};