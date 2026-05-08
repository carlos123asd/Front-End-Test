export default function Search({ value, onChange }: { value: string, onChange: (value: string) => void }) {
    return (
        <div className="Search">
            <input type="text" placeholder="Search for products..." value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}