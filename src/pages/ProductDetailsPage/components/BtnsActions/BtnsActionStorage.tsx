import TextAtom from "@/components/atoms/TextAtom";
import type { ProductOption } from "@/types/Product";

export default function BtnsActionStorage({ option, selected, onClick }: { option: ProductOption, selected: boolean, onClick: () => void }) {
    return (
        <button
            className={`${selected ? "BtnSelected" : ""} BtnNormalActionStorage`}
            onClick={onClick}>
            <TextAtom text={option.name} color="primary" />
        </button>
    )
}