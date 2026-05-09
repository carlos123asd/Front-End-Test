import type { ProductCart } from "@/types/Product";
import { apiClient } from "../config/apiClient";
import type { AddToCartResponse } from "@/types/Cart";


export const postCart = async (product: ProductCart) => {
    return apiClient<AddToCartResponse>("/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: product.id,
            colorCode: product.colorCode,
            storageCode: product.storageCode,
        }),
    });
};