import BtnAtom from "../atoms/BtnAtom";
import TextAtom from "../atoms/TextAtom";
import { FaCartPlus } from "react-icons/fa6";

export default function CardProduct() {

    const handleBtnAction = () => {

    }

    return (
        <div className="CardProducto">
            <div className="image-container">
                <img
                    className="ImgCardProduct"
                    src=""
                    alt="Iphone 14 Pro Max"
                    width={220}
                    height={300}
                />
            </div>
            <div>
                <TextAtom text="Samsung" />
                <TextAtom as="h3" text="Galaxy S24 Ultra" color="black" size="xl" />
            </div>
            <div className="ContainerAction">
                <TextAtom text={`400€`} color="primary" size="xl" />
                <BtnAtom
                    onClick={handleBtnAction} 
                    icon={<FaCartPlus color="black" size={30} />} />
            </div>
        </div>
    )
}