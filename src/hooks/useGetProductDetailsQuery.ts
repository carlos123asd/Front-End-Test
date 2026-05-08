import { getProductDetails } from "@/api/request/getProductDetails"
import { useQuery } from "@tanstack/react-query"

export const useProductDetailsQuery = (productId: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["productDetails", productId],
        queryFn: () => getProductDetails(productId),
    })
    return {
        products: data,
        isLoading,
        error
    }
}