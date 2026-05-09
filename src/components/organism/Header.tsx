import TextAtom from "../atoms/TextAtom";
import Breadcrumbs from "../molecules/Breadcrumbs";
import Cart from "../molecules/Cart";


export default function Header() {
    return (
        <header className="header">
            <div className="ContenedorSuperior">
                <TextAtom as="a" size="3xl" color="primary" weight="bold" />
                <Cart />
            </div>
            <Breadcrumbs />
        </header>
    )
}