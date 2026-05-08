import BtnAtom from "@/components/atoms/BtnAtom";
import TextAtom from "@/components/atoms/TextAtom";
import { BsCartCheck } from "react-icons/bs";
import type { ProductDetails } from "@/types/Product";
import BtnsActionStorage from "../BtnsActions/BtnsActionStorage";
import BtnActionColor from "../BtnsActions/BtnActionColor";
import { useState } from "react";
import { useAddProductMutation } from "@/hooks/useAddProductMutation";

export default function CardDetails({ data }: { data: ProductDetails }) {
    const [selectedStorage, setSelectedStorage] = useState<number | null>(null);
    const [selectedColor, setSelectedColor] = useState<number | null>(null);
    const { mutate, isPending, isSuccess } = useAddProductMutation();

    const handleAddToCart = () => {
        if (selectedStorage && selectedColor) {
            mutate({
                colorCode: selectedColor,
                storageCode: selectedStorage,
            });
        }
    }

    const handleStorageSelect = (storageCode: number) => {
        setSelectedStorage(storageCode);
    }

    const handleColorSelect = (colorCode: number) => {
        setSelectedColor(colorCode);
    }

    return (
        <div className="CardDetails">
            <div className="Image">
                <img src={data.imgUrl} alt={`${data.brand} ${data.model}`} />
            </div>
            <div className="Details">
                <div>
                    <TextAtom as="h2" text={data.brand} color="primary" size="md" />
                    <TextAtom as="h3" text={data.model} color="black" weight="bold" size="3xl" />
                    <TextAtom as="p" text={`$${data.price}`} color="primary" size="3xl" />
                </div>

                <div className="ContainerActions">
                    <TextAtom as="span" text="STORAGE CAPACITY" color="black" size="md" />
                    <div className="ContainerBtnActions">
                        {
                            data.options.storages.map((storage, code) => (
                                <BtnsActionStorage key={code} option={storage} selected={selectedStorage === storage.code} onClick={() => handleStorageSelect(storage.code)} />
                            ))
                        }
                    </div>
                </div>

                <div className="ContainerActions">
                    <TextAtom as="span" text="COLOR" color="black" size="md" />
                    <div className="ContainerBtnActions">
                        {
                            data.options.colors.map((color, code) => (
                                <BtnActionColor key={code} option={color} selected={selectedColor === color.code} onClick={() => handleColorSelect(color.code)} />
                            ))
                        }
                    </div>
                </div>
                <BtnAtom style={{ backgroundColor: "#10B981", color: "white" }} text="Add to Cart" icon={<BsCartCheck color="white" />} onClick={handleAddToCart} />
            </div>
        </div>
    )
}