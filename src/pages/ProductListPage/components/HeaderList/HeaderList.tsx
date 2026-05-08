import TextAtom from "@/components/atoms/TextAtom";
import Search from "@/components/molecules/Search";

export default function HeaderList() {
    return (
        <div className="HeaderList">
            <div>
                <TextAtom 
                    as="h1"
                    text="Premium Electronics" 
                    weight="medium" 
                    size="4xl" 
                    color="black" />
                <TextAtom 
                    as="p" 
                    text="Discover our curated collection of high-performance devices engineered for the modern professional." 
                    weight="light" 
                    size="lg" 
                    color="neutral" />
            </div>
            <Search />
        </div>
    )
}