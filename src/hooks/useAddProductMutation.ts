import { postCart } from "@/api/request/postCart"
import { useMutation } from "@tanstack/react-query";

export const useAddProductMutation = () => {
    return useMutation({
        mutationFn: postCart,
    });
}