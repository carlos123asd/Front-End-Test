import type { ProductDetail } from "@/types/Product";
import { apiClient } from "../config/apiClient";


export const getProductDetails = async (productId: string) => {
  return apiClient<ProductDetail>(`/product/${productId}`);
};