import { create } from "zustand";
import { formatPathGetTitle, getChainedPathnames } from "@/utils/FormatPath";

type BreadcrumbPathState = {
    pathname: string;
    chainedPathSet: Set<string>;
    breadcrumbRoutes: string[];
    breadcrumbLinks: string[];
    syncPathname: (pathname: string) => void;
}

const ROOT_PATH = '/';

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

            // For dynamic details routes like /products/:id, keep "Products > {id}" as one breadcrumb value.
            if (pathSegments.length === 2) {
                const parentPath = `/${pathSegments[0]}`;

                breadcrumbRoutes = [
                    formatPathGetTitle(ROOT_PATH),
                    `${formatPathGetTitle(parentPath)} > ${formatPathGetTitle(safePathname)}`,
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
