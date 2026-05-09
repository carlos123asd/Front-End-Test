import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export default function Search({ value, onChange }: { value: string, onChange: (value: string) => void }) {
    return (
        <div className="Search" style={styles.search}>
            <FaMagnifyingGlass style={styles.icon} />
            <input 
                type="text" 
                placeholder="Search for products..." 
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                style={styles.input}
             />
             {value && <IoCloseSharp style={styles.closeIcon} onClick={() => onChange('')} />}
        </div>
    )
}

const styles = {
    search: {
        position: "relative",
    },
    input: {
        paddingLeft: "35px",
    },
    icon: {
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
    },
    closeIcon: {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
    },
} as { [key: string]: React.CSSProperties };