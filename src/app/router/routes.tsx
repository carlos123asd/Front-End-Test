import { createBrowserRouter } from "react-router-dom";
import ProductsListPage from "@/pages/ProductsListPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductsListPage />
    },
    {
        path: "/products/:id",
        element: <ProductDetailsPage />
    }
])