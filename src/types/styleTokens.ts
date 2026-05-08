export const textColorTokenClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  neutral: 'text-neutral',
  black: 'text-black',
} as const

export const textSizeTokenClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
} as const

export const textWeightTokenClasses = {
  light: 'font-light',
  medium: 'font-medium',
  bold: 'font-bold',
} as const

export type TextColorToken = keyof typeof textColorTokenClasses
export type TextSizeToken = keyof typeof textSizeTokenClasses
export type TextWeightToken = keyof typeof textWeightTokenClasses

export type TextTokenProps = {
  color?: TextColorToken
  size?: TextSizeToken
  weight?: TextWeightToken
}

export function resolveTextTokenClasses({
  color = 'neutral',
  size = 'md',
  weight = 'medium',
}: TextTokenProps = {}): string {
  return [
    textColorTokenClasses[color],
    textSizeTokenClasses[size],
    textWeightTokenClasses[weight],
  ].join(' ')
}
