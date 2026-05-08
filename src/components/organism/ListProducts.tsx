import { useProductsQuery } from "@/hooks/useProductsQuery";
import CardProduct from "../molecules/CardProduct";

export default function ListProducts() {
    const { products } = useProductsQuery();
    return (
        <div className="ListaProductos">
            {products?.map(product => (
                <CardProduct key={product.id} product={product} />
            ))}
        </div>
    )
}