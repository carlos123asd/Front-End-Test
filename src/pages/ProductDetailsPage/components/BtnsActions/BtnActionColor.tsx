import TextAtom from "@/components/atoms/TextAtom";
import type { ProductOption } from "@/types/Product";

export default function BtnActionColor({ option, selected, onClick }: { option: ProductOption, selected: boolean, onClick: () => void }) {
    return (
        <button
            className={`${selected ? "BtnSelected" : ""} BtnNormalActionColor`}
            onClick={onClick}>
                <div className="CircleColor" style={{ backgroundColor: option.name }}></div>
                <TextAtom text={option.name} color="primary" />
        </button>
    )
}