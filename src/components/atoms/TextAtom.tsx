
import { use, type CSSProperties } from 'react'
import { resolveTextTokenClasses, type TextTokenProps } from '@/types/styleTokens'
import { useNavigate } from 'react-router-dom'

type TextAtomElement = 'p' | 'span' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TextAtomProps = TextTokenProps & {
    as?: TextAtomElement
    text?: string
    style?: CSSProperties
    link?: string
}

export default function TextAtom({
    as = 'span',
    color = 'neutral',
    size = 'md',
    weight = 'medium',
    text = 'TechNexus',
    style = {},
    link = '/'
}: TextAtomProps) {
    const Component = as
    const navigate = useNavigate()
    const className = resolveTextTokenClasses({ color, size, weight })

    return (
        as === 'a'
            ? <Component className={className} style={style} onClick={() => navigate(link || '/')}>{text}</Component>
            : <Component className={className} style={style}>{text}</Component>
    );
}