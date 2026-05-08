import Header from "@/components/organism/Header";
import HeaderList from "./components/HeaderList/HeaderList";

export default function ProductsListPage() {
    return (
        <div>
            <Header />
            <div className="ContainerContent">
                <HeaderList />
            </div>
        </div>
    )
}