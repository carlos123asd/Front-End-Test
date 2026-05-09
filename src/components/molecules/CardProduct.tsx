import type { Product } from "@/types/Product";
import BtnAtom from "../atoms/BtnAtom";
import TextAtom from "../atoms/TextAtom";
import { useNavigate } from "react-router-dom";

export default function CardProduct({ product }: { product: Product }) {
    const navigate = useNavigate();

    const navigateToProductDetails = (productId: string) => {
        navigate(`/products/${productId}`);
    }

    return (
        <div className="CardProducto">
            <div onClick={() => navigateToProductDetails(product.id)} style={styles.imgContainer} className="image-container">
                <img
                    className="ImgCardProduct"
                    src={product.imgUrl}
                    alt={product.model}
                    width={220}
                    height={300}
                />
            </div>
            <div>
                <TextAtom text={product.brand} />
                <TextAtom as="h3" text={product.model} color="black" size="xl" />
            </div>
            <div className="ContainerAction">
                <TextAtom text={product.price.length > 0 ? `$${product.price}` : "Price not available"} color="primary" size="xl" />
                <BtnAtom
                    style={styles.btn}
                    onClick={() => navigateToProductDetails(product.id)} text="See more details"/>
            </div>
        </div>
    )
}

const styles = {
    imgContainer: {
        cursor: "pointer",
    },
    btn: {
        border: "1px solid #1e3a8a",
        color: "#1e3a8a",
    } 
} as { imgContainer: React.CSSProperties; btn: React.CSSProperties };