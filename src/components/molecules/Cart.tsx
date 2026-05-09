import { useCartStore } from "@/store/cartStore";
import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
    const count = useCartStore((state) => state.count);
    
    return (
        <div className="Cart">
            <FiShoppingCart size={35} />
            <div className="Numero">{count}</div>
        </div>
    )
}