import Header from "@/components/organism/Header";
import HeaderList from "./components/HeaderList/HeaderList";
import ListProducts from "../../components/organism/ListProducts";

export default function ProductsListPage() {
    return (
        <div>
            <Header />
            <div className="ContainerContent">
                <HeaderList />
                <ListProducts />
            </div>
        </div>
    )
}