import { createBrowserRouter } from "react-router-dom";
import AppProvider from "@/app/provider/AppProvider";
import ProductsListPage from "@/pages/ProductListPage/ProductsListPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage/ProductDetailsPage";

export const router = createBrowserRouter([
    {
        element: <AppProvider />,
        children: [
            {
                path: "/",
                element: <ProductsListPage />
            },
            {
                path: "/products/:id",
                element: <ProductDetailsPage />
            }
        ]
    }
])