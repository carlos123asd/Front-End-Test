
import type { CSSProperties } from 'react'
import { resolveTextTokenClasses, type TextTokenProps } from '@/types/styleTokens'

type TextAtomElement = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TextAtomProps = TextTokenProps & {
    as?: TextAtomElement
    text?: string
    style?: CSSProperties
}

export default function TextAtom({
    as = 'span',
    color = 'neutral',
    size = 'md',
    weight = 'medium',
    text = 'TechNexus',
    style = {},
}: TextAtomProps) {
    const Component = as
    const className = resolveTextTokenClasses({ color, size, weight })

    return <Component className={className} style={style}>{text}</Component>
}