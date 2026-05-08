import { createBrowserRouter } from "react-router-dom";
import ProductsListPage from "../../pages/ProductsListPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductsListPage />
    },
    {
        path: "/products/:id",
        element: <ProductsListPage />
    }
])