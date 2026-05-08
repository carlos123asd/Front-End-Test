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
            <div className="image-container">
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
                <TextAtom text={product.price.length > 0 ? `${product.price}€` : "Precio no Disponible"} color="primary" size="xl" />
                <BtnAtom
                    onClick={() => navigateToProductDetails(product.id)} text="See more details"/>
            </div>
        </div>
    )
}