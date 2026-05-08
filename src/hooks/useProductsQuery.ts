import { getProducts } from "@/api/request/getProducts"
import { useQuery } from "@tanstack/react-query"

export const useProductsQuery = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    })
    return {
        products: data,
        isLoading,
        error
    }
}