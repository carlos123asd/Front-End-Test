import Header from "@/components/organism/Header";
import CardDetails from "./components/CardDetails/CardDetails";
import { useParams } from "react-router-dom";
import { useProductDetailsQuery } from "@/hooks/useGetProductDetailsQuery";
import { showToastify } from "@/utils/ShowToastify";
import { PacmanLoader } from "react-spinners";

export default function ProductDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const { details, isLoading, error } = useProductDetailsQuery(id ?? "");
    
    if (error) {
        console.error("Error fetching product details:", error);
        showToastify("Error loading product details", "error").showToast();
    }

    if (isLoading) {
        return (
            <div>
                <Header />
                <div style={styles.loaderContainer}>
                    <PacmanLoader color="#1E3A8A" size={150} />
                </div>
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

const styles = {
    loaderContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    } as React.CSSProperties,
}