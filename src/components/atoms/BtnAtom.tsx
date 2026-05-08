type Props = {
    text?: string
    icon?: React.ReactNode
    onClick: () => void
}

export default function BtnAtom({ text, icon, onClick }: Props){
    return <button className={icon ? "buttonIcon" : ""} onClick={onClick}>{icon}{text}</button>
}