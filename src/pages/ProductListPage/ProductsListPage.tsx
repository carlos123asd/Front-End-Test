import Header from "@/components/organism/Header";
import HeaderList from "./components/HeaderList/HeaderList";
import ListProducts from "../../components/organism/ListProducts";
import { useState } from "react";

export default function ProductsListPage() {
    const [search, setSearch] = useState<string>("");

    const handleSetSearch = (value: string) => {
        setSearch(value);
    }

    return (
        <div>
            <Header />
            <div className="ContainerContent">
                <HeaderList search={search} onSearchChange={handleSetSearch} />
                <ListProducts search={search} />
            </div>
        </div>
    )
}