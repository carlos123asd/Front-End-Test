type Props = {
    text?: string
    icon?: React.ReactNode
    onClick: () => void
    style?: React.CSSProperties
}

export default function BtnAtom({ text, icon, onClick, style }: Props){
    return <button className={icon ? "buttonIcon" : ""} onClick={onClick} style={style}>
        <div>
            {icon}{text}
        </div>
    </button>
}