import { useBreadcrumbPathStore } from "@/store/breadcrumbPathStore";
import TextAtom from "../atoms/TextAtom";

export default function Breadcrumbs() {
    const breadcrumbRoutes = useBreadcrumbPathStore((state) => state.breadcrumbRoutes);
    const breadcrumbLinks = useBreadcrumbPathStore((state) => state.breadcrumbLinks);

    const pathActive = {
        color: "black",
    }

    return (
        <div className="Breadcrumbs">
            {breadcrumbRoutes.map((route, index) => {
                return (
                    <TextAtom 
                        as="a"
                        size="lg"
                        link={breadcrumbLinks[index] || "/"}
                        style={index === breadcrumbRoutes.length - 1 ? pathActive : {}}
                        key={`${route}-${index}`}
                        text={`${index > 0 ? " > " : ""}${route}`} />
            )})}
        </div>
    )
}