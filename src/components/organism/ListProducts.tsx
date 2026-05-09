import { useProductsQuery } from "@/hooks/useProductsQuery";
import CardProduct from "../molecules/CardProduct";
import { showToastify } from "@/utils/ShowToastify";
import { GridLoader } from "react-spinners";

export default function ListProducts({ search }: { search: string }) {
    const { products, isLoading, error } = useProductsQuery();
    
    if (error) {
        console.error("Error fetching products:", error);
        showToastify("Error loading products", "error").showToast();
    }

    if (isLoading) {
        return (
            <div style={styles.loaderContainer}>
                <GridLoader  color="#1E3A8A" size={100} />
            </div>
        );
    }

    return (
        <div className="ListaProductos">
            {products?.filter(product => product.brand.toLowerCase().includes(search.toLowerCase()) || product.model.toLowerCase().includes(search.toLowerCase())).map(product => (
                <CardProduct key={product.id} product={product} />
            ))}
        </div>
    )
}

const styles = {
    loaderContainer: {
        position: "absolute",
        top: "65%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    } as React.CSSProperties,
}