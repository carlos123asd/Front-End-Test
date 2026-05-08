import { capitalizar } from "./StringUtils";

export const formatPathGetTitle = (path: string): string => {
    const segments = path.split('/').filter(Boolean);
    const title = segments.length === 0
        ? 'Home'
        : segments[segments.length - 1].replace(/[-_]/g, ' ');

    return capitalizar(title);
}

export const getChainedPathnames = (pathname: string): string[] => {
    const segments = pathname.split('/').filter(Boolean);
    const chainedPathnames = ['/'];

    for (let index = 0; index < segments.length; index += 1) {
        chainedPathnames.push(`/${segments.slice(0, index + 1).join('/')}`);
    }

    return chainedPathnames;
}