import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useBreadcrumbPathStore } from "@/store/breadcrumbPathStore";

export default function AppProvider() {
	const location = useLocation();
	const syncPathname = useBreadcrumbPathStore((state) => state.syncPathname);

	useEffect(() => {
		syncPathname(location.pathname);
	}, [location.pathname, syncPathname]);

	return <Outlet />;
}
