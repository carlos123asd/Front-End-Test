import { postCart } from "@/api/request/postCart"
import { useMutation } from "@tanstack/react-query";
import type { ProductCart } from "@/types/Product";
import type { AddToCartResponse } from "@/types/Cart";


export const useAddProductMutation = () => {
    return useMutation<AddToCartResponse, Error, ProductCart>({
        mutationFn: postCart,
    });
}