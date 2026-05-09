import { create } from "zustand";
import { formatPathGetTitle, getChainedPathnames } from "@/utils/FormatPath";
import { queryClient } from "@/api/config/queryClient";
import type { Product, ProductDetails } from "@/types/Product";

type BreadcrumbPathState = {
    pathname: string;
    chainedPathSet: Set<string>;
    breadcrumbRoutes: string[];
    breadcrumbLinks: string[];
    syncPathname: (pathname: string) => void;
}

const ROOT_PATH = '/';
const PRODUCTS_PATH_SEGMENT = 'products';

const getProductNameByIdFromCache = (productId: string): string | undefined => {
    const productDetails = queryClient.getQueryData<ProductDetails>(["productDetails", productId]);
    if (productDetails) {
        return `${productDetails.brand} ${productDetails.model}`.trim();
    }

    const products = queryClient.getQueryData<Product[]>(["products"]);
    const product = products?.find((item) => item.id === productId);
    if (product) {
        return `${product.brand} ${product.model}`.trim();
    }

    return "Name not found";
}

export const useBreadcrumbPathStore = create<BreadcrumbPathState>((set) => ({
    pathname: ROOT_PATH,
    chainedPathSet: new Set([ROOT_PATH]),
    breadcrumbRoutes: [formatPathGetTitle(ROOT_PATH)],
    breadcrumbLinks: [ROOT_PATH],
    syncPathname: (pathname) => {
        set((state) => {
            const safePathname = pathname || ROOT_PATH;

            if (state.pathname === safePathname) {
                return state;
            }

            const chainedPathnames = getChainedPathnames(safePathname);
            const chainedPathSet = new Set(chainedPathnames);
            const pathSegments = safePathname.split('/').filter(Boolean);

            let breadcrumbRoutes = chainedPathnames.map((path) => formatPathGetTitle(path));
            let breadcrumbLinks = [...chainedPathnames];

            // /products/:id, mantiene "Products > {nombre del producto}" como un solo nivel
            if (pathSegments.length === 2 && pathSegments[0].toLowerCase() === PRODUCTS_PATH_SEGMENT) {
                const parentPath = `/${pathSegments[0]}`;
                const productId = pathSegments[1];
                const productName = getProductNameByIdFromCache(productId) ?? productId;

                breadcrumbRoutes = [
                    formatPathGetTitle(ROOT_PATH),
                    `${formatPathGetTitle(parentPath)} > ${productName}`,
                ];
                breadcrumbLinks = [ROOT_PATH, safePathname];
            }

            return {
                pathname: safePathname,
                chainedPathSet,
                breadcrumbRoutes,
                breadcrumbLinks,
            };
        });
    },
}));
