import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
    const count = localStorage.getItem('cartCount') || '0';
    
    return (
        <div className="Cart">
            <FiShoppingCart size={35} />
            <div className="Numero">{count}</div>
        </div>
    )
}