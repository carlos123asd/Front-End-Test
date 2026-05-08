import Header from "@/components/organism/Header";
import CardDetails from "./components/CardDetails/CardDetails";
import { useParams } from "react-router-dom";
import { useProductDetailsQuery } from "@/hooks/useGetProductDetailsQuery";

export default function ProductDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const { details, isLoading, error } = useProductDetailsQuery(id ?? "");

    if (error) {
        return (
            <div>
                <Header />
                <p>Error loading product details: {error.message}</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <Header />
                <p>Loading product details...</p>
            </div>
        );
    }

    return (
        <div>
            <Header />
            {details && <CardDetails data={details} />}
        </div>
    )
}