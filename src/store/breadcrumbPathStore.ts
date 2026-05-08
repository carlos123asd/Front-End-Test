import { create } from "zustand";
import { formatPathGetTitle, getChainedPathnames } from "@/utils/FormatPath";

type BreadcrumbPathState = {
    pathname: string;
    chainedPathSet: Set<string>;
    breadcrumbRoutes: string[];
    syncPathname: (pathname: string) => void;
}

const ROOT_PATH = '/';

export const useBreadcrumbPathStore = create<BreadcrumbPathState>((set) => ({
    pathname: ROOT_PATH,
    chainedPathSet: new Set([ROOT_PATH]),
    breadcrumbRoutes: [formatPathGetTitle(ROOT_PATH)],
    syncPathname: (pathname) => {
        const safePathname = pathname || ROOT_PATH;
        const chainedPathSet = new Set(getChainedPathnames(safePathname));
        const breadcrumbRoutes = Array.from(chainedPathSet).map((path) => formatPathGetTitle(path));

        set({
            pathname: safePathname,
            chainedPathSet,
            breadcrumbRoutes,
        });
    },
}));
