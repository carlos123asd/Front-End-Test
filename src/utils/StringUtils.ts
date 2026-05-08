export const capitalizar = (str: string): string => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getHexadecimalFormatFromDecimal = (code: number | string): string => {
    const hexCode = Number(code).toString(16).padStart(6, '0');
    return `#${hexCode}`;
}