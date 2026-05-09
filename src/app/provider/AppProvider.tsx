import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useBreadcrumbPathStore } from "@/store/breadcrumbPathStore";

export default function AppProvider() {
	const location = useLocation();
	const syncPathname = useBreadcrumbPathStore((state) => state.syncPathname);
	const lastSyncedPathname = useRef<string | null>(null);

	useEffect(() => {
		if (lastSyncedPathname.current === location.pathname) {
			return;
		}

		lastSyncedPathname.current = location.pathname;
		syncPathname(location.pathname);
	}, [location.pathname, syncPathname]);

	return <Outlet />;
}
