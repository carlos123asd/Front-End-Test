import type { Product } from "@/types/Product";
import BtnAtom from "../atoms/BtnAtom";
import TextAtom from "../atoms/TextAtom";
import { FaCartPlus } from "react-icons/fa6";

export default function CardProduct({ product }: { product: Product }) {

    const handleBtnAction = async () => {

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
                <TextAtom text={`${product.price}€`} color="primary" size="xl" />
                <BtnAtom
                    onClick={handleBtnAction} 
                    icon={<FaCartPlus color="black" size={30} />} />
            </div>
        </div>
    )
}