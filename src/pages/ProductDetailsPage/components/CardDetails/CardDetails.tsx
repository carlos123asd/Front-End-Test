import BtnAtom from "@/components/atoms/BtnAtom";
import TextAtom from "@/components/atoms/TextAtom";
import { BsCartCheck } from "react-icons/bs";
import type { ProductDetails } from "@/types/Product";
import BtnsActionStorage from "../BtnsActions/BtnsActionStorage";
import BtnActionColor from "../BtnsActions/BtnActionColor";
import { useEffect, useState } from "react";
import { useAddProductMutation } from "@/hooks/useAddProductMutation";
import { useCartStore } from "@/store/cartStore";
import type { AddToCartResponse } from "@/types/Cart";
import { generateId } from "@/utils/NumerUtils";
import { showToastify } from "@/utils/ShowToastify";

export default function CardDetails({ data }: { data: ProductDetails }) {
    const [selectedStorage, setSelectedStorage] = useState<number | null>(null);
    const [selectedColor, setSelectedColor] = useState<number | null>(null);
    const [visibleToast, setVisibleToast] = useState(false);
    const updateCount = useCartStore((state) => state.updateCount);
    const { mutate, isPending } = useAddProductMutation();

    const handleAddToCart = () => {
        if (selectedStorage && selectedColor) {
            mutate({
                id: generateId(),
                colorCode: selectedColor,
                storageCode: selectedStorage,
            }, {
                onSuccess: (response) => {
                    const cartResponse = response as AddToCartResponse;
                    updateCount(cartResponse.count);
                    showToastify("Product added to cart successfully").showToast();
                },
                onError: (error) => {
                    console.error("Error adding product to cart:", error);
                    showToastify("Error adding product to cart", "error").showToast();
                }
            });
        }else{
            setVisibleToast(true);
            showToastify("Please select storage and color options", "warning").showToast();
        }
    }

    const handleStorageSelect = (storageCode: number) => {
        setSelectedStorage(storageCode);
    }

    const handleColorSelect = (colorCode: number) => {
        setSelectedColor(colorCode);
    }

    useEffect(() => {
        if (selectedStorage && selectedColor) {
            setVisibleToast(false);
        }
    }, [selectedStorage, selectedColor]);


    return (
        <div className="CardDetails">
            <div className="Image">
                <img src={data.imgUrl} alt={`${data.brand} ${data.model}`} />
            </div>
            <div className="Details">
                <div>
                    <TextAtom as="h2" text={data.brand} color="primary" size="md" />
                    <TextAtom as="h3" text={data.model} color="black" weight="bold" size="3xl" />
                    <TextAtom as="p" text={`${data.price ? `$${data.price}` : "Price not available"}`} color="primary" size="3xl" />
                </div>

                <TextAtom as="span" text="DESCRIPTION" color="black" size="md" />
                <TextAtom
                    as="p"
                    text={`Mobile featuring a ${data.displaySize} inch display, ${data.cpu} quad-core processor, ${data.ram} of RAM, and Android ${data.os}. It includes a ${data.battery} battery, measures ${data.dimentions}, and offers a ${data.primaryCamera} rear camera along with a ${data.secondaryCmera} front camera.`}
                    color="primary"
                    size="md"
                />

                <div>
                    <div style={style.containerItemDetails}>
                        <TextAtom as="h4" text="Battery:" color="black" size="md" />
                        <TextAtom as="p" text={data.battery} color="primary" size="md" />
                    </div>
                    <div style={style.containerItemDetails}>
                        <TextAtom as="h4" text="CPU:" color="black" size="md" />
                        <TextAtom as="p" text={data.cpu} color="primary" size="md" />
                    </div>
                    <div style={style.containerItemDetails}>
                        <TextAtom as="h4" text="Dimensions:" color="black" size="md" />
                        <TextAtom as="p" text={data.dimentions} color="primary" size="md" />
                    </div>
                    <div style={style.containerItemDetails}>
                        <TextAtom as="h4" text="Primary Camera:" color="black" size="md" />
                        <TextAtom as="p" text={data.primaryCamera} color="primary" size="md" />
                    </div>
                    <div style={style.containerItemDetails}>
                        <TextAtom as="h4" text="Secondary Camera:" color="black" size="md" />
                        <TextAtom as="p" text={data.secondaryCmera} color="primary" size="md" />
                    </div>
                    <div style={style.containerItemDetails}>
                        <TextAtom as="h4" text="Operating System:" color="black" size="md" />
                        <TextAtom as="p" text={data.os} color="primary" size="md" />
                    </div>
                    <div style={style.containerItemDetails}>
                        <TextAtom as="h4" text="Display Resolution:" color="black" size="md" />
                        <TextAtom as="p" text={data.displayResolution} color="primary" size="md" />
                    </div>
                    <div style={style.containerItemDetails}>
                        <TextAtom as="h4" text="RAM:" color="black" size="md" />
                        <TextAtom as="p" text={data.ram} color="primary" size="md" />
                    </div>
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
                {visibleToast && <TextAtom as="span" text="Select storage and color options" color="tertiary" size="md" />}
                <BtnAtom
                    style={isPending ? style.btnDisabled : style.btn}
                    text={isPending ? "Adding..." : "Add to Cart"}
                    icon={<BsCartCheck color="white" />}
                    onClick={handleAddToCart} />
            </div>
        </div>
    )
}

const style = {
    btn: {
        backgroundColor: "#10B981",
        color: "white",
    },
    btnDisabled: {
        backgroundColor: "#6B7280",
        color: "white",
        cursor: "not-allowed",
    },
    containerItemDetails: {
        display: "flex",
        gap: ".5em",
    },

}  as { [key: string]: React.CSSProperties };