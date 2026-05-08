import CardProduct from "../molecules/CardProduct";

export default function ListProducts() {
    const products = [1,2,3,4,5].map(() => <CardProduct />)
    return (
        <div className="ListaProductos">
            {products}
        </div>
    )
}