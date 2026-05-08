import { useProductsQuery } from "@/hooks/useProductsQuery";
import CardProduct from "../molecules/CardProduct";

export default function ListProducts({ search }: { search: string }) {
    const { products, isLoading, error } = useProductsQuery();

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="ListaProductos">
            {products?.filter(product => product.brand.toLowerCase().includes(search.toLowerCase()) || product.model.toLowerCase().includes(search.toLowerCase())).map(product => (
                <CardProduct key={product.id} product={product} />
            ))}
        </div>
    )
}