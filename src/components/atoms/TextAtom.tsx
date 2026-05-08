
import { resolveTextTokenClasses, type TextTokenProps } from '@/types/styleTokens'

type TextAtomProps = TextTokenProps & {
    text?: string
}

export default function TextAtom({
    color = 'neutral',
    size = 'md',
    weight = 'medium',
    text = 'TechNexus',
}: TextAtomProps) {
    const className = resolveTextTokenClasses({ color, size, weight })

    return <span className={className}>{text}</span>
}